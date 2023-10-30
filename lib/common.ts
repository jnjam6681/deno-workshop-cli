import { Command } from 'commander';

export default function initialize(program: Command) {
  Deno.addSignalListener('SIGINT', () => {
    Deno.exit(255);
  });
  program.parse();
}
