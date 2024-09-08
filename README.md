# GitHub User Activity

A command-line interface (CLI) tool for fetching and displaying recent activity from a GitHub user. This tool allows you to retrieve various events related to a user's repositories and see detailed information about each event.

## Features

- Fetch recent GitHub events for a specified user.
- Group events by repository.
- Display detailed information for each event type, including repository creation, branch creation, commits, issues, pull requests, deletions, and forks.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/gideonadeti/github-user-activity.git
   ```

2. Navigate to the project directory:

   ```bash
   cd github-user-activity
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Build the project (for TypeScript compilation):

   ```bash
   npm run build
   ```

5. Make the script globally executable (optional):

   ```bash
   npm install -g
   ```

## Usage

To use the GitHub User Activity CLI, follow this syntax:

```bash
npx gua <username>
```

If you made the script globally executable:

```bash
gua <username>
```

### Available argument

| Argument | Description                                     |
| -------------------- | ----------------------------------------------- |
| `<username>`         | Fetch and display recent GitHub events for the specified user. |

### Examples

**The following example assumes the script is installed globally.**  
**If the script is not installed globally, prefix the command with `npx`.**

- Fetch and display recent activity for a user:

  ```bash
  gua gideonadeti
  ```

## Event Types

The CLI handles the following GitHub event types:

- **CreateEvent:** Repository or branch creation.
- **DeleteEvent:** Repository or branch deletion.
- **ForkEvent:** Forking a repository.
- **IssuesEvent:** Activity related to issues.
- **PullRequestEvent:** Activity related to pull requests.
- **PushEvent:** Commits pushed to a repository.

## Contributing

Feel free to fork this repository, make improvements, and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Note

This project is a sample solution for the [GitHub User Activity
](https://roadmap.sh/projects/github-user-activity) challenge from [roadmap.sh](https://roadmap.sh/).
