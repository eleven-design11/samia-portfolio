const colors=require('tailwindcss/colors');

module.exports={
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
		'./app.vue',
		'./error.vue'
	],

	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				// Girly light theme
				'primary-light': '#FFE4F3', // soft pastel pink
				'secondary-light': '#FFF7FB', // very light pink background
				'ternary-light': '#F5E9FF', // soft lavender

				// Girly dark theme
				'primary-dark': '#2A1138', // deep purple
				'secondary-dark': '#4B154F', // rich magenta-purple
				'ternary-dark': '#5B2A86', // vibrant violet
			},
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '2rem',
					xl: '4rem',
					'2xl': '6rem',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
