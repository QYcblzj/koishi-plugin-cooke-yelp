import { Context, Schema, segment } from 'koishi';
import axios from 'axios';

export const name = 'food-search';
export interface Config {
  apiKey: string;
}

export const usage = `
<p><code>点击下面图片以获取帮助</code></p>
<a href = "https://www.npmjs.com/package/koishi-plugin-cooke-yelp">
  <img src = "https://c-ssl.dtstatic.com/uploads/blog/202212/25/20221225054101_843b4.thumb.1000_0.gif">
</a>
<a href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=kW4Mvn1XZsfR_ghZfzdMK0-RlqvSlAFG&authKey=i%2ByfvnYw2qw9Y98RegxyacrannA8z9MEXQ9fICWZb%2FxCxN8atmjox399OWN%2BwR5%2F&noverify=0&group_code=778554862">
    <img src="https://ts1.cn.mm.bing.net/th/id/R-C.cf20ae97566d710fcd4e0fc4f422a716?rik=61QIDwh82%2bODNQ&riu=http%3a%2f%2fwww.guangyuanol.cn%2fuploads%2fallimg%2f221212%2f21212413Z-19.gif&ehk=uxWnG0fvmLmO1oby%2fOMlxrgJaOSunOnh2FStCJr5uCg%3d&risl=&pid=ImgRaw&r=0" alt="加入QQ群">
</a>
`
export const Config: Schema<Config> = Schema.object({
  apiKey: Schema.string().required().description('Yelp Fusion API Key'),
});

export function apply(ctx: Context, config: Config) {
  const { apiKey } = config;

  ctx.command('cooke-y <query>', 'Search for food businesses')
    .option('location', '-l <location:string>', { fallback: 'San Francisco' })
    .option('categories', '-c <categories:string>', { fallback: '' })
    .action(async ({ options }, query) => {
      if (!query) return 'Please provide a search query.';
      try {
        const response = await axios.get('https://api.yelp.com/v3/businesses/search', {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
          params: {
            term: query,
            location: options.location,
            categories: options.categories,
          },
        });
        
        const businesses = response.data.businesses;
        if (!businesses.length) return 'No businesses found.';

        return businesses.map(business => {
          return segment('quote', {
            id: `${business.name}\nRating: ${business.rating}\nAddress: ${business.location.address1}`,
          });
        }).join('\n');
      } catch (error) {
        console.error(error);
        return 'Failed to retrieve business information.';
      }
    });
}