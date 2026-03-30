<?php
/**
 * Plugin Name:       LP Blocks
 * Description:       LP向けのカスタムブロック集。CTA、お客様の声、特徴・強み、料金プランのセクションブロックを提供。
 * Version:           0.2.0
 * Requires at least: 6.1
 * Requires PHP:      7.4
 * Author:            LP Portfolio
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       lp-cta-block
 *
 * @package LpCtaBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers all blocks using the metadata loaded from the `block.json` files.
 */
function lp_blocks_init() {
	// CTA Section Block
	register_block_type( __DIR__ . '/build/lp-cta-block' );

	// Testimonials Block
	register_block_type( __DIR__ . '/build/lp-testimonials-block' );

	// Features Block
	register_block_type( __DIR__ . '/build/lp-features-block' );

	// Pricing Block
	register_block_type( __DIR__ . '/build/lp-pricing-block' );
}
add_action( 'init', 'lp_blocks_init' );
