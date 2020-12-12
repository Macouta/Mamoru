var theme_config = require("./theme"); 

module.exports = {
  base: "",
  title: "Mamoru",
  description: "wiki",
  head: [
    ['link', { rel: 'icon', href: "/favicon.ico" }],
    ['link', { rel: 'stylesheet', href: "https://use.typekit.net/rpa2arv.css" }]
  ],
  themeConfig: theme_config,
  markdown: {
    anchor: { permalink: false, permalinkBefore: false, permalinkSymbol: '\u1557' }
  },
  plugins: [
    ['vuepress-plugin-clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404',
      }],
  ],
}