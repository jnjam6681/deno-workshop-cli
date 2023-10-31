import { program } from 'commander';
import initialize from './lib/common.ts';
import { config } from './config/config.ts';

function errorColor(str: string) {
  // Add ANSI escape codes to display text in red.
  return `\x1b[31m${str}\x1b[0m`;
}

program
  .configureHelp({
    sortOptions: false,
    showGlobalOptions: true,
  })
  .configureOutput({
    outputError: (str, write) => write(errorColor(str)),
  })
  .name('workshop-cli')
  .version(config.app.version)
  .description('Example command from deno');

(await import('./lib/command/message.ts')).default(program);
(await import('./lib/command/joke.ts')).default(program);

initialize(program);
