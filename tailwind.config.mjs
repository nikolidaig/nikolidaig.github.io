/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['"IBM Plex Sans"', "sans-serif"],
			cond: ['"IBM Plex Sans Condensed"', "sans-serif"],
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
};