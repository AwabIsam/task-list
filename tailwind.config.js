/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	theme: {
		fontFamily: {
			Karla: ["Karla", "sans-serif"],
			Verdana: ["Verdana", "sans-serif"],
		},
		extend: {
			colors: {
				Maroon: "#402020",
				lightMaroon: "#833a3a",
				offWhite: "#d9d9d9",
				dark: "#0f0f0f",
			},
			spacing: {
				98: "26rem",
				100: "30rem",
			},
			boxShadow: {
				"lightingLeft-S": "40px 30px 8px rgba(0,0,0,0.9)",
			},
		},
	},
	plugins: [],
};
