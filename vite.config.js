import { defineConfig } from 'vite'
export default defineConfig({
    plugins: [],
    server: {
        host: '0.0.0.0',
        port: 3000,
        strictPort: true,
        open: true
    },
    build: {
        outDir: 'dist',
        emptyOutDir: true
    }
})