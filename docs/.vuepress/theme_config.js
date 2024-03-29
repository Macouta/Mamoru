module.exports = {
    navbar: true,
    sidebar: {
        '/portfolio/': [
            ['/portfolio/', 'about'],
            {
                title: 'computer graphic',   // required
                collapsable: false, // optional, defaults to true
                sidebarDepth: 1,    // optional, defaults to 1
                children: [
                    ['/portfolio/cg/three-graces', 'three-graces'],
                    ['/portfolio/cg/mercenary', 'mercenary'],
                    ['/portfolio/cg/ceson', 'ce son'],
                    ['/portfolio/cg/launchpad', 'launchpad'],
                    ['/portfolio/cg/poster-design', 'poster design'],
                ]
            },
            {
                title: 'game jams',   // required
                collapsable: false, // optional, defaults to true
                sidebarDepth: 1,    // optional, defaults to 1
                children: [
                    ['https://macouta.itch.io/burning-desire', 'burning-desire'],
                    ['https://macouta.itch.io/bloom', 'bloom'],
                    ['https://macouta.itch.io/does-size-matter', 'does-size-matter'],
                    ['https://macouta.itch.io/the-prince-and-the-flower', 'prince-and-the-flower']
                ]
            },
            {
                title: 'developement',   // required
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
            ['/lists/', 'References'],
            ['/portfolio/', 'Portfolio'],
        ],
    },
    search: false,
    lastUpdated: 'updated',
    

    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'edit page',
    // if your docs are in a different repo from your main project:
    // root of the doc:
    docsDir: 'docs',
    // branch of the doc:
    docsBranch: 'master',
    // default value is true. Allows to hide next page links on all pages
    nextLinks: false,
    // default value is true. Allows to hide prev page links on all pages
    prevLinks: false,

}