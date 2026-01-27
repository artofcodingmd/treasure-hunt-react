import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: 
    mode === 'production'
    ? 'treasure-hunt-react/legacy-shell/legacy/' 
    : '/'
})); // Set base path for production and development modes
