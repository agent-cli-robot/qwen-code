# Agent CLI

Within Agent CLI, `packages/cli` is the frontend for users to send and receive prompts with various AI models and their associated tools. For a general overview of Agent CLI, see the [main documentation page](../index.md).

## Navigating this section

- **[Authentication](./authentication.md):** A guide to setting up authentication with Qwen OAuth and OpenAI-compatible providers.
- **[Commands](./commands.md):** A reference for Agent CLI commands (e.g., `/help`, `/tools`, `/theme`).
- **[Configuration](./configuration.md):** A guide to tailoring Agent CLI behavior using configuration files.
- **[Token Caching](./token-caching.md):** Optimize API costs through token caching.
- **[Themes](./themes.md)**: A guide to customizing the CLI's appearance with different themes.
- **[Tutorials](tutorials.md)**: A tutorial showing how to use Agent CLI to automate a development task.
- **[Welcome Back](./welcome-back.md)**: Learn about the Welcome Back feature that helps you resume work seamlessly across sessions.

## Non-interactive mode

Agent CLI can be run in a non-interactive mode, which is useful for scripting and automation. In this mode, you pipe input to the CLI, it executes the command, and then it exits.

The following example pipes a command to Agent CLI from your terminal:

```bash
echo "What is fine tuning?" | agent
```

Agent CLI executes the command and prints the output to your terminal. Note that you can achieve the same behavior by using the `--prompt` or `-p` flag. For example:

```bash
agent -p "What is fine tuning?"
```
