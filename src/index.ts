#!/usr/bin/env node

import { GitHubEvent } from "./types";

// Helper to log colored messages to the console
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

function capitalize(action?: string): string {
  return action ? action.charAt(0).toUpperCase() + action.slice(1) : "";
}

async function fetchGitHubEvents(
  username: string
): Promise<GitHubEvent[] | undefined> {
  const url = `https://api.github.com/users/${username}/events?per_page=100`;

  consoleLog("Fetching events...", "info");

  try {
    const response = await fetch(url);

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

function groupEventsByRepo(
  events: GitHubEvent[]
): Record<string, GitHubEvent[]> {
  return events.reduce((acc, event) => {
    const repoName = event.repo.name;

    if (!acc[repoName]) {
      acc[repoName] = [];
    }
    acc[repoName].push(event);

    return acc;
  }, {} as Record<string, GitHubEvent[]>);
}

// Function to handle and output events per repository
function handleRepoEvents(repoName: string, events: GitHubEvent[]) {
  let createdRepo = false;
  let createdBranch = false;
  let totalCommits = 0;

  events.forEach((event) => {
    switch (event.type) {
      case "CreateEvent":
        if (event.payload.ref_type === "repository") {
          createdRepo = true;
        } else if (event.payload.ref_type === "branch") {
          createdBranch = true;
        }
        break;

      case "PushEvent":
        totalCommits += event.payload.commits?.length || 0;
        break;

      case "IssuesEvent":
        console.log(
          `${capitalize(event.payload.action)} issue #${
            event.payload.issue?.number
          } in ${repoName}: ${event.payload.issue?.title}`
        );
        break;

      case "PullRequestEvent":
        console.log(
          `${capitalize(event.payload.action)} pull request #${
            event.payload.pull_request?.number
          } in ${repoName}: ${event.payload.pull_request?.title}`
        );
        break;

      case "DeleteEvent":
        console.log(`Deleted a ${event.payload.ref_type} in ${repoName}`);
        break;

      case "ForkEvent":
        console.log(`Forked ${repoName} to ${event.payload.forkee?.full_name}`);
        break;
    }
  });

  // Consolidate repository and branch creation events
  if (createdRepo && createdBranch) {
    console.log(`Created a repository: ${repoName}`);
  } else if (createdBranch) {
    console.log(`Created a branch in ${repoName}`);
  }

  if (totalCommits > 0) {
    console.log(`Pushed ${totalCommits} commit(s) to ${repoName}`);
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
      const groupedEvents = groupEventsByRepo(events);
      Object.keys(groupedEvents).forEach((repoName) => {
        const repoEvents = groupedEvents[repoName];
        handleRepoEvents(repoName, repoEvents);
      });
    } else {
      events?.length === 0 &&
        consoleLog(`No events found for ${username}.`, "success");
    }
  }
}

// Run the main function
main();
