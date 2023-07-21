import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
// https://vitejs.dev/config/
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

  plugins: [react()],

})
