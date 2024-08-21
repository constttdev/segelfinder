/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif']
			},
			colors: {
				text: '#090e11',
				background: '#f8fafc',
				primary: '#5790c1',
				secondary: '#9bc1e2',
				accent: '#60a2dc'
			}
		}
	},

	plugins: []
};
