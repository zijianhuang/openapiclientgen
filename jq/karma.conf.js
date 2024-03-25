module.exports = function (config) {
    config.set({
        frameworks: ["qunit", "karma-typescript"],
		//plugins: ['karma-qunit'],
        files: [
            { pattern: "node_modules/reflect-metadata/Reflect.js", include: true },
			"node_modules/jquery/dist/jquery.min.js",
            "src/**/*.ts" // *.tsx for React Jsx
        ],
        preprocessors: {
            "**/*.ts": "karma-typescript" // *.tsx for React Jsx
        },
        karmaTypescriptConfig: {
            tsconfig: './tsconfig.json'
        },
        reporters: ['progress', 'htmlDetailed'],

        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        browsers: ["Chrome"]
    });

    process.on('infrastructure_error', (error) => {
        console.error('infrastructure_error', error);
    });
};