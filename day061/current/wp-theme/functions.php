<?php
/**
 * LP Manufacturing Recruitment テーマの機能
 *
 * @package LP_Manufacturing_Recruitment
 */

// テーマのセットアップ
function lp_manufacturing_recruitment_setup() {
    // タイトルタグの対応
    add_theme_support( 'title-tag' );

    // HTML5対応
    add_theme_support( 'html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ) );

    // アイキャッチ画像を有効化
    add_theme_support( 'post-thumbnails' );
}
add_action( 'after_setup_theme', 'lp_manufacturing_recruitment_setup' );

// LP用のタイトルを設定
function lp_manufacturing_recruitment_document_title( $title ) {
    if ( is_home() || is_front_page() ) {
        $title['title'] = '製造業の採用で、何から見直せばいいか分からないとき | ミチル採用企画';
    }
    return $title;
}
add_filter( 'document_title_parts', 'lp_manufacturing_recruitment_document_title' );

// スクリプトとスタイルの読み込み
function lp_manufacturing_recruitment_scripts() {
    wp_enqueue_style(
        'lp-manufacturing-recruitment-style',
        get_stylesheet_uri(),
        array(),
        '1.0.0'
    );

    // スムーズスクロール用スクリプト
    wp_enqueue_script(
        'lp-manufacturing-recruitment-script',
        get_template_directory_uri() . '/js/script.js',
        array(),
        '1.0.0',
        true
    );
}
add_action( 'wp_enqueue_scripts', 'lp_manufacturing_recruitment_scripts' );

// OGPタグ出力
function lp_manufacturing_recruitment_ogp() {
    if ( is_home() || is_front_page() ) {
        $title = '製造業の採用で、何から見直せばいいか分からないとき | ミチル採用企画';
        $description = '製造業の採用で、何から見直せばいいか分からないときは、まず現状を整理できる採用相談。ミチル採用企画では、中小製造業向けの採用課題の整理・支援を行っています。';
        $image = 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=1200&q=80';
        $url = home_url( '/' );
        $site_name = 'ミチル採用企画';

        echo '<meta property="og:title" content="' . esc_attr( $title ) . '">' . "\n";
        echo '<meta property="og:description" content="' . esc_attr( $description ) . '">' . "\n";
        echo '<meta property="og:type" content="website">' . "\n";
        echo '<meta property="og:url" content="' . esc_url( $url ) . '">' . "\n";
        echo '<meta property="og:image" content="' . esc_url( $image ) . '">' . "\n";
        echo '<meta property="og:site_name" content="' . esc_attr( $site_name ) . '">' . "\n";
        echo '<meta property="og:locale" content="ja_JP">' . "\n";

        // Twitter Card
        echo '<meta name="twitter:card" content="summary_large_image">' . "\n";
        echo '<meta name="twitter:title" content="' . esc_attr( $title ) . '">' . "\n";
        echo '<meta name="twitter:description" content="' . esc_attr( $description ) . '">' . "\n";
        echo '<meta name="twitter:image" content="' . esc_url( $image ) . '">' . "\n";
    }
}
add_action( 'wp_head', 'lp_manufacturing_recruitment_ogp' );

// Contact Form 7 のフォーム出力ショートコード用ラッパー
function lp_manufacturing_recruitment_contact_form() {
    // Contact Form 7 が有効な場合のみ
    if ( function_exists( 'wpcf7_contact_form' ) ) {
        // Contact Form 7 のフォームID
        $form_id = 125; // ミチル採用企画様フォームID
        $contact_form = wpcf7_contact_form( $form_id );

        if ( $contact_form ) {
            return $contact_form->form_html();
        }
    }

    // Contact Form 7 がない場合のプレースホルダー
    return '<div class="contact-form-placeholder">
        <p>お問い合わせフォームは現在準備中です。</p>
        <p>お急ぎの場合はメールにてご連絡ください。</p>
    </div>';
}
add_shortcode( 'contact_form', 'lp_manufacturing_recruitment_contact_form' );
