import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        "./resources/**/*.blade.php", // Vistas Blade
        "./resources/**/*.js",        // Archivos JS
        "./resources/**/*.jsx",       // Archivos JSX
        "./resources/views/auth/login.blade.php"
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    darkMode: 'class', // Asegúrate de que el modo oscuro esté habilitado

    plugins: [forms],
};
