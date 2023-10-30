import { program } from 'commander';
import initialize from './lib/common.ts';
import { config } from './config/config.ts';

program
  .configureHelp({
    sortOptions: false,
    showGlobalOptions: true,
  })
  .name('workshop-cli')
  .version(config.app.version)
  .description('Example command from deno');

(await import('./lib/command/message.ts')).default(program);

initialize(program);
