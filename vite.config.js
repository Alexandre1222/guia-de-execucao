import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import mkcert from'vite-plugin-mkcert'
import {VitePWA} from "vite-plugin-pwa";

export default defineConfig({
    plugins: [
        vue(),
        mkcert(),
        VitePWA({
            registerType: 'autoUpdate',
            devOptions: {
                enabled: true
            },
            manifest: {
                name: 'Guia de Execução Remake',
                short_name: 'GUia',
                description: 'App remake do guia de execução',
                theme_color: '#f00808',
                icons: [
                    {
                        src: 'src/assets/splashscreen/manifest-icon-192.maskable.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: 'src/assets/splashscreen/manifest-icon-512.maskable.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            }
        })
    ],
    server: {
        https: true
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
