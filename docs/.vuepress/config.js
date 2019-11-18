module.exports = {
  base: "/mamoru/",
  title: "Mamoru",
  description: "wiki",
  themeConfig: {
    //sidebar
    // sidebar: [
    //   '/',
    //   '/journal',
    //   '/references/'
    // ],

    //navbar
    nav: [
      { text: 'Journal', link: '/journal/' },
      { text: 'Yume', link: '/yume/' }
    ],

    // search
    search: false,

    // if your docs are in a different repo from your main project:
    docsRepo: 'Macouta/Mamoru',
    // root of the doc:
    docsDir: 'docs',
    // branch of the doc:
    docsBranch: 'master',
    // default value is true. Allows to hide next page links on all pages
    nextLinks: false,
    // default value is true. Allows to hide prev page links on all pages
    prevLinks: false,

  },
  configureWebpack: {
    resolve: {
      alias: {
      }
    }
  },
  plugins: [
    ['vuepress-plugin-clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404',
      }],
    'img-lazy'
  ],
}