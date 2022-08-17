import { defineConfig } from 'vite'
import { resolve } from 'path'

// const rootDir = resolve(__dirname, 'src/pages');
// const buildDir = resolve(__dirname, 'dist')

export default defineConfig(() => {
    return {
        root: process.cwd(),
        build: {
            rollupOptions: {
                input: {
                    main: resolve(__dirname, 'index.html'),
                    nested1: resolve(__dirname, 'src/pages/index.html'),
                    nested2: resolve(__dirname, 'nested/index.html'),
                },
            },
        },
    }
})