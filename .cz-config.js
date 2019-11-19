module.exports = {
    typePrefix: '@',
    typeSuffix: '',
    types: [
        { value: 'doc',     name: '@doc       A content change in a markdown file' },
        { value: 'log',     name: '@log       Input a log in one of the journals', },
        { value: 'style',   name: '@style     Changes that do not affect the meaning of the code', },
        { value: 'feat',    name: '@feat      A new feature with component' },
        { value: 'fix',     name: '@fix       A bug fix' },
        { value: 'refactor',name: '@refactor  A code change that neither fixes a bug nor adds a feature' },
        { value: 'config',  name: '@config    A change in one of the config files', },
        { value: 'revert',  name: '@revert    Revert to a commit' },
        { value: 'wip',     name: '@wip       Work in progress' },
    ],

    allowTicketNumber: false,
    isTicketNumberRequired: false,
    ticketNumberPrefix: 'TICKET-',
    ticketNumberRegExp: '\\d{1,5}',

    // it needs to match the value for field type. Eg.: 'fix'

    scopePrefix: '',
    scopeSuffix: ')',
    scopeOverrides: {
        log: [
            { name: 'yume' },
            { name: 'journal' },
        ],
        feat: [
            { name: 'component' },
        ],
        //   doc: [
        //       {}
        //   ]
    },

    // override the messages, defaults are as follows
    messages: {
        type: "Select the type of change that you're committing:",
        scope: '\nDenote the SCOPE of this change (optional):',
        // used if allowCustomScopes is true
        customScope: 'Denote the scope of this change:',
        subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
        // body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
        // breaking: 'List any BREAKING CHANGES (optional):\n',
    },

    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix'],
    // skip any questions you want
    skipQuestions: ['body', 'footer'],

    // limit subject length
    subjectLimit: 100,
    // breaklineChar: '|', // It is supported for fields body and footer.
    // footerPrefix : 'ISSUES CLOSED:'
    // askForBreakingChangeFirst : true, // default is false
};