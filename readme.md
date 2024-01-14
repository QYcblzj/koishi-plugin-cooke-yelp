# koishi-plugin-cooke-yelp

[![npm](https://img.shields.io/npm/v/koishi-plugin-cooke-yelp?style=flat-square)](https://www.npmjs.com/package/koishi-plugin-cooke-yelp)

这是一个使用yelp api的食谱插件

## 你需要拥有的
1. koishi
2. [Yelp APIKey](#获取yelp-apikey的方法)
 
## 安装
koishi插件市场搜索*cooke-yelp*，安装即可

# 获取Yelp APIKey的方法
## 1. 注册 Yelp 账户 
1. 如果你已经有了 Yelp 的账户，请直接查看[2. 获取 APIKey](#2-获取-apikey)
2. 如果你还没有 Yelp 的账户，那么请先前往[Yelp 官网](https://www.yelp.com/signup)注册一个Yelp的账户
- First Name: 名字 （可以瞎填）
- Last Name: 姓氏 （可以瞎填）
- Email: 邮箱 （你的邮箱，可以是QQ邮箱，也可以是outlook、Gmail之类的）
- Password: 密码 （在这里设置你的密码）
- ZIP Code: 邮政编码 （可以瞎填？可以）
- Birthday: 生日 （可选项，不予说明）
3. 完善以上资料之后会有一个真人识别，通过后会发一份邮件到你的邮箱，点击 **Confirm Email** ，至此，你应该就已经拥有一个 Yelp 的账户了
## 2. 获取 APIKey
1. 前往[Yelp fusion官网](https://fusion.yelp.com/)，点击 **Manage API access** 如果你已经登陆了 Yelp，这时应该会显示以下内容:
- App Name: App的名称，随意取一个就可以
- App Website: 可选项，不填
- Industry: 工业，你用来干什么，这里随便选一个就可以
- Company: 可选项，不填
- Contact Email: 联系邮箱，填你注册的邮箱就可以了
- Description: 描述，你的App的描述，随便写点什么
- 我是人类: 人机验证，一定要记得通过人机验证
2. 之后点击 Create App(不知道，我点太快忘记了😢) ，如果弹出“Great, your app has been created! Check your App ID and API Key.”提醒，则代表你已经创建完成。
3. 复制API Key下的文本内容，粘贴到插件配置项，开始使用！
## 3. Yelp 官方文档
[Yelp 官方文档](https://docs.developer.yelp.com/docs/fusion-intro)
## 4. 注意事项
一天500次调用限制

# 反馈 & 联系方式
<p><code>遇到任何问题的话，点击下面图片反馈吧！</code></p>
<a href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=kW4Mvn1XZsfR_ghZfzdMK0-RlqvSlAFG&authKey=i%2ByfvnYw2qw9Y98RegxyacrannA8z9MEXQ9fICWZb%2FxCxN8atmjox399OWN%2BwR5%2F&noverify=0&group_code=778554862">
    <img src = "https://image.newasp.com/attachment/article/2022/1204/093740_22679128.gif" alt = "GROUP">
</a>