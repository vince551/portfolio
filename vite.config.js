import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        vinceOs: 'vince-os.html'
      }
    }
  }
})
