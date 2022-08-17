import { defineConfig } from 'vite'
import { resolve } from 'path'

const rootDir = resolve(__dirname, 'src/pages');
const buildDir = resolve(__dirname, 'dist')

export default defineConfig(() => {
    return {

        root: rootDir,
        build: {
            rollupOptions: {
                input: {
                    index: resolve(rootDir, 'index.html'),
                },
            },
            outDir: buildDir
        },
    }
})