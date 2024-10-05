import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tsConfigPaths from 'vite-tsconfig-paths'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte(), tsConfigPaths()],
})
