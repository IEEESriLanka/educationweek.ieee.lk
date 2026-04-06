import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * GitHub Pages deployment configuration.
 *
 * Set `base` to match your GitHub repository name.
 * e.g. if your repo is: https://github.com/your-org/ieee-eduweek
 *      then base should be: '/ieee-eduweek/'
 *
 * For a custom domain (e.g. educationweek.ieee.lk), set base to: '/'
 */
const GITHUB_REPO_NAME = 'ieee-eduweek'; // ← Change this to your actual repo name

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? `/${GITHUB_REPO_NAME}/` : '/',
  resolve: {
    alias: { '@': '/src' },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure source maps are generated for debugging
    sourcemap: false,
  },
});
