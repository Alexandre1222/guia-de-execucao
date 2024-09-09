import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import {VitePWA} from "vite-plugin-pwa";
import vue from '@vitejs/plugin-vue'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig(({mode}) => {
    return {
        plugins: [
            vue(),
            mkcert({
                savePath: './certs', // save the generated certificate into certs directory
                force: true, // force generation of certs even without setting https property in the vite config
            }),
            VitePWA({
                devOptions: {
                    enabled: true
                },
                manifest: {
                    name: 'Guia de Execução Remake',
                    short_name: 'Guia Remake',
                    description: 'App remake do guia de execução',
                    theme_color: '#7e49d2',
                    background_color: '#7e49d2',
                    icons: [
                        {
                            src: '/splashscreen/manifest-icon-192.maskable.png',
                            sizes: '192x192',
                            type: 'image/png'
                        },
                        {
                            src: '/splashscreen/manifest-icon-512.maskable.png',
                            sizes: '512x512',
                            type: 'image/png'
                        }
                    ]
                }
            })
        ],
        devServer: {
            https: {
                cert: './certs/cert.pem',
                key: './certs/dev.pem'
            }
        },
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        }
    }
})
