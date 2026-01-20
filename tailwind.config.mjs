/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#cbfd2e', // Neon green from image
				dark: '#0f0f11',    // Background dark
				card: '#18181b',    // Card dark
                secondary: '#a78bfa', // Purple accent
			},
            fontFamily: {
                sans: ['Prompt', 'sans-serif'],
            }
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
