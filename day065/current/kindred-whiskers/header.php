<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/style.css">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
    <div class="container header-inner">
        <a href="<?php echo home_url(); ?>" class="site-logo">Kindred Whiskers</a>

        <nav class="main-navigation">
            <?php wp_nav_menu([
                'theme_location' => 'primary',
                'container' => false,
                'items_wrap' => '<ul>%3$s</ul>'
            ]); ?>
        </nav>

        <div class="header-actions">
            <a href="#volunteer" class="text-secondary font-semibold">ボランティア</a>
            <a href="#donate" class="btn btn-primary btn-small">寄付する</a>
        </div>
    </div>
</header>

<main id="main-content">
