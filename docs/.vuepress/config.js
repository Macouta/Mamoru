module.exports = {
  base: "/Mamoru/",
  title: "Mamoru",
  description: "wiki",
  themeConfig: {
    //sidebar
    sidebar: [
    ],

    //navbar
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Journal', link: '/journal/' }
    ],
    
    // search
    search: false,

    // if your docs are in a different repo from your main project:
    docsRepo: 'Macouta/Mamoru',
    // root of the doc:
    docsDir: 'docs',
    // branch of the doc:
    docsBranch: 'master',

    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!',

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
  plugins: {
    'vuepress-plugin-clean-urls':
    {
      normalSuffix: '/',
      indexSuffix: '/',
      notFoundPath: '/404.html',
    },
    'sitemap':
    {
      hostname: 'http://macouta.fr'
    },
    'git-log': {
      additionalProps: {
        subject: '%s',
        authorEmail: '%ae',
      },
    },
  },
  // themeConfig: {
  //     search: false,
  //     nav: [
  //         { text: 'Home', link: '/' },
  //     ]
  // }
}