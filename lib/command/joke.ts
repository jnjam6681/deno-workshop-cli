import { Command, Option } from 'commander';
import { axios } from '../../deps.ts';

interface IJokeConfigOpts {
  category: string;
}

export default function (program: Command) {
  program
    .command('joke')
    .addOption(
      new Option('-c, --category <category>', 'specify the category').choices([
        'animal',
        'career',
        'celebrity',
        'dev',
        'explicit',
        'fashion',
        'food',
        'history',
        'money',
        'movie',
        'music',
        'political',
        'religion',
        'science',
        'sport',
        'travel',
      ])
    )
    .description('Example program with api to gete joke')
    .action(async (opts: IJokeConfigOpts) => {
      let url: string;
      if (opts.category) {
        url = `https://api.chucknorris.io/jokes/random?category=${opts.category}`;
      } else {
        url = 'https://api.chucknorris.io/jokes/random';
      }

      try {
        const { data } = await axios.get(url);
        console.log(data.value);
      } catch (e) {
        console.error(e);
      }
    });
}
