/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			height: {
				'custom-calc': 'calc(100vh - 65px)',
				'custom--calc': 'calc(100vh - 51px)',

			},
		},
	},
	plugins: [],
}
