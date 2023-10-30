import { program } from 'commander';
import initialize from './lib/common.ts';

(await import('./lib/command/message.ts')).default(program);

initialize(program);
