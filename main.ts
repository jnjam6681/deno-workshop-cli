import { program } from 'commander';
import initialize from './lib/common.ts';

program.name('workshop-cli').description('Example command from deno');

(await import('./lib/command/message.ts')).default(program);

initialize(program);
