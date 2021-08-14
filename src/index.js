const { createScript } = require("@agmajs/script");

const { name, version, description, author } = require('../package.json')

const script = createScript(
  {
    name,
    version,
    description,
    author
  },
  {
    chatElementSelector: "#chtbox",
    /**
     * Remember to put this to `false` when releasing to production.
     */
    exposeToWindowObject: true,
  }
);

const commands = require("./commands");
commands.forEach((command) => script.command(command.name, command));