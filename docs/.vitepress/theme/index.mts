import { inBrowser } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

import 'lite-youtube-embed/src/lite-yt-embed.css';

if (inBrowser) {
    // @ts-ignore
    import('lite-youtube-embed');
}

export default DefaultTheme;