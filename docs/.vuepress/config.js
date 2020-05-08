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
        ['/portfolio/', 'about'],
        {
          title: 'computer graphic',   // required
          path: '/portfolio/cg/',
          collapsable: false, // optional, defaults to true
          sidebarDepth: 1,    // optional, defaults to 1
          children: [
            ['/portfolio/cg/three-graces', 'three-graces'],
            ['/portfolio/cg/mercenary', 'mercenary'],
            ['/portfolio/cg/misc', 'misc'],
          ]
        },
        {
          title: 'game jams',   // required
          path: '/portfolio/gj/',
          collapsable: false, // optional, defaults to true
          sidebarDepth: 1,    // optional, defaults to 1
          children: [
            ['/portfolio/gj/burning-desire', 'burning-desire'],
            ['/portfolio/gj/bloom', 'bloom'],
            ['/portfolio/gj/does-size-matter', 'does-size-matter'],
            ['/portfolio/gj/prince-and-the-flower', 'prince-and-the-flower'],
            ['https://macouta.itch.io/', 'itch.io'],
          ]
        },
        {
          title: 'developement',   // required
          path: '/portfolio/dev/',
          collapsable: false, // optional, defaults to true
          sidebarDepth: 1,    // optional, defaults to 1
          children: [
            ['http://hakunamabh.cluster023.hosting.ovh.net/', 'old 3D UI prototype'],
            ['https://github.com/Macouta?tab=repositories', 'github'],
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