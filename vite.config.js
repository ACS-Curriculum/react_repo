import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/react_repo/", // Replace with your new repo name
  plugins: [react()],
})
