module.exports = {
    base: "/",
    title: "Mamoru - ",
    description: "wiki",
    configureWebpack: {
        resolve: {
          alias: {
            '@alias': ''
          }
        }
      }
    // plugins: {
    //     'vuepress-plugin-clean-urls': 
    //     {
    //         normalSuffix: '/',
    //         indexSuffix: '/',
    //         notFoundPath: '/404.html',
    //     },
    //     'sitemap': 
    //     {
    //         hostname: 'http://macouta.fr'
    //     },
    //     'git-log': {
    //         additionalProps: {
    //           subject: '%s',
    //           authorEmail: '%ae',
    //         },
    //     },
    // },
    // themeConfig: {
    //     search: false,
    //     nav: [
    //         { text: 'Home', link: '/' },
    //     ]
    // }
}