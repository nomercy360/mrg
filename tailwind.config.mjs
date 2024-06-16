/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontSize: {
			'base': '20px',
		},
		extend: {
			colors: {
				'primary': '#7CA000',
				'secondary': '#FAFAFA',
			},
		},
	},
	plugins: [],
}
