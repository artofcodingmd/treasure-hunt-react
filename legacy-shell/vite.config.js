import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  /**
   * base: Set public base path for built assets
   * Required for GitHub Pages deployment
   */
  base:
    /**
      * mode: Serves to differentiate paths between production and development modes
      * production: Sets base path to repository subdirectory for GitHub Pages
      * development: Sets base path to root for local development server
      */
    mode === 'production'
    ? 'treasure-hunt-react/legacy-shell/legacy/' 
    : '/',
  /**
   * server: Configure development server
   */
  server: {
    /**
     * port: Explicitly set port for multi-app development so apps can run simultaneously without random port assignment
     */
    port: 5173,
    /**
     * strictPort: Ensures server fails to start if specified port is already in use for demoing purposes
     */
    strictPort: true
  }
}));
