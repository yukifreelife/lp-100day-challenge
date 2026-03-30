const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
	...defaultConfig,
	entry: {
		'lp-cta-block': './src/lp-cta-block/index.js',
		'lp-testimonials-block': './src/lp-testimonials-block/index.js',
		'lp-features-block': './src/lp-features-block/index.js',
		'lp-pricing-block': './src/lp-pricing-block/index.js',
	},
};
