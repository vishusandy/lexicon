// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const get_base_path = () => {
    const dev = process.argv.includes('dev');
    return dev ? '' : '/lexicon';
    // return '';
};


/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: null,
            precompress: false,
            strict: true,
        }),
        paths: {
            base: get_base_path(),
        }
    }
};

// repo: 'https://github.com/vishusandy/lexicon.git',

export default config;
