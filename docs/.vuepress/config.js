module.exports = {
  base: "",
  title: "Mamoru",
  description: "wiki",
  head: [
    ['link', { rel: 'icon', href: "/favicon.ico" }],
    ['link', { rel: 'stylesheet', href: "https://use.typekit.net/rpa2arv.css" }]
  ],
  themeConfig: {
    navbar: true,
    sidebar: {
      '/portfolio/': [
        {
          title: 'computer graphic',   // required
          collapsable: false, // optional, defaults to true
          sidebarDepth: 1,    // optional, defaults to 1
          children: [
            ['/portfolio/cg/three-graces', 'three-graces'],
          ]
        },
        {
          title: 'game jams',   // required
          path: 'https://macouta.itch.io/',
          collapsable: false, // optional, defaults to true
          sidebarDepth: 1,    // optional, defaults to 1
          children: [
            ['/portfolio/gj/burning-desire', 'burning-desire'],
          ]
        },
        {
          title: 'developement',   // required
          collapsable: false, // optional, defaults to true
          sidebarDepth: 1,    // optional, defaults to 1
          children: [
            '/'
          ]
        },
      ],
      '/': [
        ['/', 'Home'],
        ['/portfolio/', 'Portfolio'],
      ],
    },
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
  plugins: [
    ['vuepress-plugin-clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404',
      }],
  ],
}