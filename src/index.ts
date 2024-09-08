#!/usr/bin/env node

import { GitHubEvent } from "./types";

// Helper to log messages to the console
function consoleLog(
  message: string,
  type: "success" | "failure" | "info",
  example?: string
) {
  const reset = "\x1b[0m";

  // Color codes for different log types
  const colors = {
    success: "\x1b[32m", // Green
    failure: "\x1b[31m", // Red
    info: "\x1b[34m", // Blue
  };

  const color = colors[type];

  const fullMessage = example
    ? `${message}\nValid example: ${example}`
    : message;

  console.log(`${color}${fullMessage}${reset}\n`);
}

// Fetch GitHub events for the user
async function fetchGitHubEvents(
  username: string
): Promise<GitHubEvent[] | undefined> {
  const url = `https://api.github.com/users/${username}/events?per_page=50`;

  consoleLog("Fetching events...", "info");

  try {
    const response = await fetch(url); // Ensure fetch is available

    if (!response.ok) {
      throw new Error();
    }

    const data = await response.json();
    console.clear();
    return data;
  } catch (error) {
    console.log("\x1b[31mFailed to fetch events.\x1b[0m");
  }
}

// Main function to handle user input and fetch events
async function main() {
  const [, , ...args] = process.argv;

  if (args.length !== 1) {
    const noArg = args.length === 0;
    consoleLog(
      noArg
        ? "Please provide a username."
        : "Please provide only one username.",
      "failure",
      "gua gideonadeti"
    );
  } else {
    const username = args[0];
    const events = await fetchGitHubEvents(username);

    if (events && events.length > 0) {
      consoleLog(
        `Showing ${events.length} recent events from ${username}...`,
        "success"
      );
    } else {
      events?.length === 0 &&
        consoleLog(`No events found for ${username}.`, "success");
    }
  }
}

// Run the main function
main();
