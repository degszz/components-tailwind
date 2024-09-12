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
			width:{
				'custom-calc': 'calc(100vw - 200px)',
			},
			fontFamily: {
				serif: ['Karla Variable', ...defaultTheme.fontFamily.serif],
				sans:['IBM Plex Sans', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				'kai': {
					'bg': '#e7f0f8',
					'200': '#d3e2f2',
					'300': '#b9cfe8',
					'text': '#9cb6dd',
					'button': '#839dd1',
					'600': '#6a7fc1',
					'ring': '#6374ae',
					'hover': '#4a5989',
					'900': '#414e6e',
					'950': '#262c40',
				},
			}
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
