/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			serif: ['"IBM Plex Serif"', 'sans-serif'],
			sans: ['"IBM Plex Sans"', 'sans-serif'],
		},
		boxShadow: {
			'box': '1px 1px 0',
			'none': 'none',
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
};
