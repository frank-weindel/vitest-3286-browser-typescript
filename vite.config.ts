import { defineConfig } from 'vite';

/**
 * Vite Config
 *
 * @remarks
 * Currenly only for tests
 */
export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
    resolve: {
      /**
       * Needed to allow vite to resolve the .ts files when their imports specify
       * the .js extension. The .js extension is required when using the
       *
       */
      // alias: [{ find: /((\/|^)(src)\/.*)\.js$/, replacement: '$1.ts' }],
    },
    optimizeDeps: {
      exclude: ['vitest/utils'],
      include: ['@vitest/utils', 'vitest/browser'],
    },
  };
});
