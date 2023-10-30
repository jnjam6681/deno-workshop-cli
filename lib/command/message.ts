import { Command } from 'commander';

interface IMessageConfigOpts {
  upper: boolean;
  lower: boolean;
}

export default function (program: Command) {
  program
    .command('message')
    .argument('<message>', 'message to display')
    .option('-u, --upper', 'output to upper case')
    .option('-l, --lower', 'output to lower case')
    .description('Example program with argument descriptions')
    .action((message: string, opts: IMessageConfigOpts) => {
      if (opts.upper) console.log(message.toUpperCase());
      else if (opts.lower) console.log(message.toLowerCase());
      else console.log(message);
    });
}
