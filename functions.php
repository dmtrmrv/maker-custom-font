<?php
/**
 * Maker functions and definitions.
 *
 * @package Maker Child
 */

/**
 * The current version of the theme.
 */
define( 'MAKER_CHILD', '0.1.0' );

/**
 * Enqueue scripts and styles.
 */
function MAKER_CUSTOM_FONT_scripts() {
	/*
	 * Add Custom Fonts CSS.
	 */
	 wp_enqueue_style(
		'maker-childs',
		'https://fonts.googleapis.com/css?family=Raleway:400,400i,700,700i',
		array(),
		MAKER_CHILD
	);

	/*
	 * Parent Theme Styles.
	 *
	 * Comment out or remove completely if you don't need parent theme styles
	 * and want to create your own custom CSS from scratch.
	 */
	wp_enqueue_style(
		'maker-style',
		get_template_directory_uri() . '/style.css',
		array(),
		MAKER_CHILD
	);

	/**
	 * Child Theme Styles.
	 */
	wp_enqueue_style(
		'maker-child-style',
		get_stylesheet_uri(),
		array(),
		MAKER_CHILD
	);

	/**
	 * Child Theme JavaScript.
	 *
	 * If your theme doesn't add any JavaScript, safely remove or comment out
	 * this block to save one server request.
	 */
	// wp_enqueue_script(
	// 	'maker-child-scripts',
	// 	get_stylesheet_directory_uri() . '/assets/js/project.js',
	// 	array(),
	// 	MAKER_CHILD
	// );
}
add_action( 'wp_enqueue_scripts', 'MAKER_CUSTOM_FONT_scripts' );
