module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				'kava-dark': '#161618',
				'kava-gold': '#ac8448',
			  },
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
