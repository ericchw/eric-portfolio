import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If your repo is named ericchw.github.io, base should be '/'
// If your repo has a different name e.g. 'portfolio', change to '/portfolio/'
export default defineConfig({
  plugins: [react()],
  base: '/eric-portfolio',
})
