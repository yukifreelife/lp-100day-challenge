<?php
/**
 * Plugin Name:       LP CTA Block
 * Description:       LP向けのCTAセクションブロック。見出し、説明文、ボタンを編集可能。
 * Version:           0.1.0
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
 * Registers the block using the metadata loaded from the `block.json` file.
 */
function lp_cta_block_init() {
	register_block_type( __DIR__ . '/build/lp-cta-block' );
}
add_action( 'init', 'lp_cta_block_init' );
