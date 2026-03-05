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
				'primary-light': '#F7F8FC',
				'secondary-light': '#FFFFFF',
				'ternary-light': '#f6f7f8',

				'primary-dark': '#7f53b3', // deep purple
				'secondary-dark': '#7567f6', // rich magenta-purple
				'ternary-dark': '#447ef6',
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
