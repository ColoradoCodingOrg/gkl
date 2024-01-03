module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		fontFamily: {
			'espiritu': ['Espiritu'],
			'nexarustscript': ['NexaRustScript'],
			'rodfat': ['RodFat'],
		},
		extend: {
			colors: {
				'kava-dark': '#161618',
				'kava-gold': '#ac8448',
				'kava-gold-dark': '#7d6034',
				'kava-green': '#243a28',
				'kava-brown': '#6b3920',
				'kava-light': '#ffffeb'
			  },
			backgroundImage: {
				'gkl-pattern': 'url("/gkl-pattern.svg")'
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
