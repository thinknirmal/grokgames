interface PostCSSPluginOptions {
	[key: string]: any;
}

interface PostCSSConfig {
	plugins: PostCSSPluginOptions;
}

const config: PostCSSConfig = {
	plugins: {
		"postcss-import": {},
		"tailwindcss/nesting": "postcss-nesting",
		"postcss-preset-env": {
			features: {
				"nesting-rules": false,
				"is-pseudo-class": false, // Disable `:is()` transformation
			},
		},
		tailwindcss: {},
		autoprefixer: {},
	},
};

export default config;