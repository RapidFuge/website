// tailwind.config.ts

import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            // ADD THIS BLOCK
            backgroundImage: {
                'dot-pattern': "radial-gradient(theme('colors.zinc.400 / 0.5') 1px, transparent 1px)",
            },
            backgroundSize: {
                'dot-size': '2rem 2rem',
            },
        },
    }
}

export default config