import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: '.',

    title: 'Lorelei',
    description: 'Cross-Architecture Compatibility Layer For Emulators.',
    head: [['link', { rel: 'icon', href: '/logo.jpg' }]],

    base: '/', // change this to the desired base URL in the future

    rewrites: {
        'en_US/:rest*': ':rest*' // make the English content as the root page
    },

    themeConfig: {
        logo: '/logo.jpg',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/rover2024/lorelei' }
        ],
        search: {
            provider: 'local'
        },

        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Introduction', link: '/intro/lorelei-project' }
        ],

        sidebar: [
            {
                text: 'Introduction',
                items: [
                    { text: 'Lorelei Project', link: '/intro/lorelei-project' },
                    { text: 'Getting Started', link: '/intro/getting-started' },
                    { text: 'Thunking System', link: '/intro/thunking-system' },
                ]
            },
            {
                text: 'Tools',
                items: [
                    { text: 'Thunk Library Compiler', link: '/tools/thunk-library-compiler' },
                    { text: 'Host Library Rewriter', link: '/tools/host-library-rewriter' },
                ]
            }
        ],
    },

    locales: {
        root: {
            label: 'English',
            'lang': 'en_US'
        },
        'zh_CN': {
            label: '简体中文',
            'lang': 'zh_CN'
        }
    },

    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => tag === 'lite-youtube',
            },
        },
    },
})
