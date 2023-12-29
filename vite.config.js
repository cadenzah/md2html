import path from 'path';
import { defineConfig } from 'vite';
import reactPlugin from '@vitejs/plugin-react';
import eslintPlugin from "@nabla/vite-plugin-eslint";
import htmlPlugin from 'vite-plugin-html-config';

import { configureEnv } from './src/utils/configureEnv';

const ENV_DIR = process.cwd();

// https://vitejs.dev/config/
export default defineConfig(({ mode, ssrBuild }) => {
  const env = configureEnv(ENV_DIR, '_', { mode, ssrBuild });

  return {
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.js'),
            name: 'TutorialLib'
        },
        // rollupOptions: {
        //     output: {

        //     }
        // }
    },
    resolve: {
      alias: {
          '~': path.resolve(__dirname),
          '@': path.resolve(__dirname, 'src')
      }
    },
    plugins: [
      eslintPlugin(),
    //   reactPlugin(),
    //   htmlPlugin({
    //     title: env._PAGE_TITLE,
    //     metas: [
    //       {
    //         name: 'title',
    //         content: env._PAGE_TITLE,
    //       },
    //       {
    //         name: 'description',
    //         content: env._PAGE_DESCRIPTION,
    //       }
    //     //   {
    //     //     property: 'og:url',
    //     //     content: `${env._PAGE_URL}/`,
    //     //   },
    //     //   {
    //     //     property: 'og:title',
    //     //     content: env._PAGE_TITLE,
    //     //   },
    //     //   {
    //     //     property: 'og:description',
    //     //     content: env._PAGE_DESCRIPTION,
    //     //   },
    //     //   {
    //     //     property: 'og:image',
    //     //     content: `${env._PAGE_URL}/preview.jpg`
    //     //   }
    //     ]
    //   })
    ],
    define: {
      'APP_ENV': env
    },
    base: env.BASE_URL,
    publicDir: 'src/public',
    envPrefix: '_'
  };
});
