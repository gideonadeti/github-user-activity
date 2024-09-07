#!/usr/bin/env node

// Helper to log messages to the console
function consoleLog(
  message: string,
  type: "success" | "failure",
  example?: string
) {
  const reset = "\x1b[0m";

  // Color codes for different log types
  const colors = {
    success: "\x1b[32m", // Green
    failure: "\x1b[31m", // Red
  };

  // Retrieve color based on the provided type
  const color = colors[type];

  // Construct the message with or without example
  const fullMessage = example
    ? `${message}\nValid example: ${example}`
    : message;

  // Log the message with color and reset
  console.log(`${color}${fullMessage}${reset}\n`);
}

const [, , ...args] = process.argv;

if (args.length !== 1) {
  const noArg = args.length === 0;
  consoleLog(
    noArg ? "Please provide a username." : "Please provide only one username.",
    "failure", "gua gideonadeti"
  );
} else {
  const username = args[0];
  consoleLog(`Fetching data for ${username}...`, "success");
}
