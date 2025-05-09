/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			height: {
				'custom-calc': 'calc(100vh - 63px)',
				'custom--calc': 'calc(100vh - 51px)',
			},
			width: {
				'custom-calc': 'calc(100vw - 200px)',
			},
			fontFamily: {
				serif: ['Karla Variable', ...defaultTheme.fontFamily.serif],
				sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				'kai': {
					'200': '#d8d9df',
					'300': '#b6b8c3',
					'text': '#8f92a1',
					'button': '#717486',
					'600': '#5b5d6e',
					'ring': '#4a4b5a',
					'hover': '#434450',
					'900': '#383842',
					'bg': '#25252c',
				},
			}
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
