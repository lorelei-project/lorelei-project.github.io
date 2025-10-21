import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: ".",
    title: "Lorelei",

    base: '/', // change this to the correct base URL in the future

    rewrites: {
        'en_US/:rest*': ':rest*' // make the English content as the root page
    },

    themeConfig: {
        logo: '/common/logo.jpg',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/rover2024/lorelei' }
        ],
        search: {
            provider: 'local'
        },

        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Get Started', link: '/intro/get-started' }
        ],

        sidebar: [
            {
                text: 'Introduction',
                items: [
                    { text: 'Get Started', link: '/intro/get-started' },
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
})
