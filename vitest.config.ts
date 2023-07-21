import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@Car/Feature': path.resolve(__dirname, './src/lib/Car/feature'),
      '@Car/Ui': path.resolve(__dirname, './src/lib/Car/ui'),
      '@Car/Domain': path.resolve(__dirname, './src/lib/Car/domain'),
      '@Car/Infrastructure': path.resolve(__dirname, './src/lib/Car/infrastructure'),
      '@Shared/Infrastructure': path.resolve(__dirname, './src/lib/Shared/infrastructure'),
      '@Shared/Ui': path.resolve(__dirname, './src/lib/Shared/ui'),
    },
  },
  test: {
    environment: 'jsdom',
    coverage: {
      all: true,
      include: ['src/**/*.tsx', 'src/**/*.ts'],
      exclude: ['src/**/index.ts', 'src/**/app/main.tsx', 'src/**/*.d.ts'],
    },
    include: ['**/*.spec.ts', '**/*.spec.tsx'],
  },
});
