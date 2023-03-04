/// <reference types="vitest" />

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import monacoEditorPlugin from 'vite-plugin-monaco-editor';

import { dependencies } from './package.json';

function renderChunks(deps: Record<string, string>) {
  const chunks = {};
  Object.keys(deps).forEach((key) => {
    if (['react', 'react-router-dom', 'react-dom'].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-router-dom', 'react-dom'],
          ...renderChunks(dependencies),
        },
      },
    },
    reportCompressedSize: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
    vanillaExtractPlugin(),
    checker({
      typescript: true,
    }),
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
      // customWorkers: [
      //   {
      //     label: 'graphql',
      //     entry: 'monaco-graphql/esm/graphql.worker',
      //   },
      // ],
      // publicPath: '/',
      // globalAPI: false,
    }),
  ],
  test: {
    // globals: true,
    // environment: 'jsdom',
    // setupFiles: './src/test/setup.ts',
    // css: true,
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
});
