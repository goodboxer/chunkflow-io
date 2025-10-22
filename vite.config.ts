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
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('@google/genai')) return 'vendor_genai';
              if (id.includes('firebase/auth')) return 'vendor_firebase_auth';
              if (id.includes('firebase/firestore')) return 'vendor_firebase_firestore';
              if (id.includes('firebase/app')) return 'vendor_firebase_app';
              if (id.includes('firebase')) return 'vendor_firebase_misc';
              if (id.includes('@sentry')) return 'vendor_sentry';
              if (id.includes('vue')) return 'vendor_vue';
              if (id.includes('archiver') || id.includes('stream')) return 'vendor_streams';
              return 'vendor_misc';
            }
            if (id.includes('/src/sdks/') || id.includes('src/sdks')) {
              return 'sdk';
            }
            if (id.includes('/src/components/') || id.includes('src/components')) {
              return 'components';
            }
          }
        }
      },
    },
    plugins: [
      vue(),
      vueJsx(),
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY),
      'import.meta.env.GEMINI_API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
        'vue': 'vue/dist/vue.esm-bundler.js'
      }
    }
  };
});
