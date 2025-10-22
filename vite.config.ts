import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';


export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    css: {
      postcss: './postcss.config.js'
    },
    build: {
      sourcemap: env.VITE_SOURCEMAPS === 'true' || mode === 'production',
    },
    plugins: [
      vue(),
      vueJsx(),
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
        'vue': 'vue/dist/vue.esm-bundler.js'
      }
    }
  };
});
