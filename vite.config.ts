import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import monacoEditorPlugin from 'vite-plugin-monaco-editor';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
    vanillaExtractPlugin(),
    monacoEditorPlugin.default({
      languageWorkers: [
        'css',
        'html',
        'json',
        'typescript',
        'editorWorkerService',
      ],
      /**
       * https://stackblitz.com/edit/monaco-graphql-react-vite?file=src%2FApp.tsx&terminal=dev
       */
      customWorkers: [
        {
          label: 'graphql',
          entry: 'monaco-graphql/esm/graphql.worker',
        },
      ],
      // publicPath: '/',
      // globalAPI: false,
    }),
  ],
});
