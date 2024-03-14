/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["index.html"],
	theme: {
		extend: {
			colors: {
				tomato: "#FF6155",
				grey: "#9294a0",
				coal: "#36384D",
				navy: "#242742",
				error: "rgba(255, 97, 85, 0.15)",
			},
			fontFamily: {
				sans: ["Roboto", "sans-serif"],
			},
			boxShadow: {
				main: "0px 15px 60px 0px rgba(0, 0, 0, 0.25)",
			},
			screens: {
				'lmd': {'max': '768px'}
			}
		},
	},
	plugins: [],
};

