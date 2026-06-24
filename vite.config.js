import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User/organization GitHub Pages site (tarsur909.github.io) is served from the
// domain root, so base stays '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
