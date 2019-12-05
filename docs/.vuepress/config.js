module.exports = {
  base: "",
  title: "Mamoru",
  description: "wiki",
  head: [
    ['link', { rel: 'icon', href: "/favicon.ico"}]
  ],
  themeConfig: {
    // search
    sidebar: [
      '/',
      'cv',
      'yume',
      'yume-doc'
    ],
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