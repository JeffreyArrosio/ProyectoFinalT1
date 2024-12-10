import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: [
                'resources/js/app.jsx',
                'resources/css/app.css',
                'resources/css/tailwind.css',
                'resources/js/app.js',
                'storage/app/public/images/antes',
                'storage/app/public/images/despues',
                'storage/app/public/images/durante',
            ],
            refresh: true,
        }),
    ],
});
