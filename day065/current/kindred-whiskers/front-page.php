<?php get_header(); ?>

<!-- Hero Section -->
<section class="hero">
    <div class="container hero-content">
        <div class="hero-text">
            <span class="chip chip-secondary-container mb-4">
                すべての小さな肉球に安全な場所を
            </span>
            <h1>
                勇気ある小さな命に、<br>
                <span class="text-primary italic">優しい</span>家族との出会いを。
            </h1>
            <p>
                キンドレド・ウィスカーズは、傷ついた猫たちを保護し、健康を取り戻すまで寄り添い、
                生涯愛してくれる家族との橋渡しをする地域密着型の保護団体です。
            </p>
            <div class="flex gap-4 flex-wrap">
                <a href="#cats" class="btn btn-primary btn-large">家族に迎える</a>
                <a href="#donate" class="btn btn-secondary btn-large">活動を支援する</a>
            </div>
        </div>
        <div class="hero-image">
            <div class="img-placeholder img-cat-1" style="height: 500px; border-radius: var(--radius-xl);">
                <span>🐱 保護猫の写真</span>
            </div>
        </div>
    </div>
</section>

<!-- Mission Section -->
<section class="section" style="background-color: var(--color-surface-container-low);">
    <div class="container">
        <div class="hero-content">
            <div class="hero-image">
                <div class="img-placeholder img-cat-2" style="height: 400px; border-radius: var(--radius-md);"></div>
            </div>
            <div class="hero-text">
                <h2>私たちの想い</h2>
                <p>
                    私たちは単に猫を救うだけでなく、回復と絆の物語を紡いでいます。
                    地域社会に根ざし、迷子や捨てられた猫たちに医療ケアと心のケアを提供し、
                    安全な新しい生活への移行をサポートすることが私たちの使命です。
                </p>
                <div class="stats-grid" style="margin-top: var(--spacing-lg);">
                    <div class="stat-card card-white">
                        <span class="stat-number">1,240+</span>
                        <span class="stat-label">保護した猫</span>
                    </div>
                    <div class="stat-card card-white">
                        <span class="stat-number">856</span>
                        <span class="stat-label">里親紹介</span>
                    </div>
                    <div class="stat-card card-white">
                        <span class="stat-number">9年</span>
                        <span class="stat-label">活動歴</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Cats Section -->
<section id="cats" class="section">
    <div class="container">
        <div class="flex justify-between items-end mb-8">
            <div>
                <h2>家族を待っている猫たち</h2>
                <p class="text-on-surface-variant">勇気ある猫たちが、永遠の家族を待っています。</p>
            </div>
            <a href="#" class="text-primary font-bold">24匹の猫たちを見る →</a>
        </div>

        <div class="cat-grid">
            <!-- Featured Card -->
            <div class="cat-card featured">
                <div class="img-placeholder img-cat-1 cat-card-image">
                    <span>ウィロウ</span>
                </div>
                <div class="cat-card-content">
                    <div class="flex gap-2 mb-4">
                        <span class="chip chip-secondary">募集中</span>
                        <span class="chip chip-primary">新着</span>
                    </div>
                    <h3 class="cat-card-name">ウィロウ</h3>
                    <div class="flex gap-2 mb-4">
                        <span class="chip chip-secondary-container">穏やかな性格</span>
                        <span class="chip chip-secondary-container">推定3歳</span>
                    </div>
                    <p class="cat-card-desc">
                        ウィロウは、静かな午後となでなでが大好きな心優しい三毛猫です。
                    </p>
                    <button class="btn btn-primary w-full">里親に応募する</button>
                </div>
            </div>

            <!-- Small Card 1 -->
            <div class="cat-card">
                <div class="img-placeholder img-cat-2 cat-card-image"><span>ピップ</span></div>
                <div class="cat-card-content">
                    <h4 class="cat-card-name">ピップ</h4>
                    <p class="cat-card-detail">生後6ヶ月 • キジトラMIX</p>
                    <a href="#" class="text-primary font-bold text-sm">詳細を見る</a>
                </div>
            </div>

            <!-- Small Card 2 -->
            <div class="cat-card">
                <div class="img-placeholder img-cat-3 cat-card-image"><span>ルナ</span></div>
                <div class="cat-card-content">
                    <h4 class="cat-card-name">ルナ</h4>
                    <p class="cat-card-detail">1歳 • 白猫</p>
                    <a href="#" class="text-primary font-bold text-sm">詳細を見る</a>
                </div>
            </div>

            <!-- Small Card 3 -->
            <div class="cat-card">
                <div class="img-placeholder img-cat-4 cat-card-image"><span>バーナビー</span></div>
                <div class="cat-card-content">
                    <h4 class="cat-card-name">バーナビー</h4>
                    <p class="cat-card-detail">2歳 • スコティッシュ</p>
                    <a href="#" class="text-primary font-bold text-sm">詳細を見る</a>
                </div>
            </div>

            <!-- Small Card 4 -->
            <div class="cat-card">
                <div class="img-placeholder img-cat-1 cat-card-image"><span>ミミ</span></div>
                <div class="cat-card-content">
                    <h4 class="cat-card-name">ミミ</h4>
                    <p class="cat-card-detail">4ヶ月 • 混合</p>
                    <a href="#" class="text-primary font-bold text-sm">詳細を見る</a>
                </div>
            </div>

            <!-- Small Card 5 -->
            <div class="cat-card">
                <div class="img-placeholder img-cat-2 cat-card-image"><span>タマ</span></div>
                <div class="cat-card-content">
                    <h4 class="cat-card-name">タマ</h4>
                    <p class="cat-card-detail">5歳 • 茶トラ</p>
                    <a href="#" class="text-primary font-bold text-sm">詳細を見る</a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Activity Section -->
<section class="section" style="background-color: var(--color-surface);">
    <div class="container">
        <div class="text-center mb-8">
            <h2>活動報告</h2>
            <p class="text-on-surface-variant">コミュニティと保護チームからの最新の進捗状況</p>
        </div>

        <div class="activity-list">
            <div class="card card-white activity-card primary">
                <div class="flex items-center gap-4 mb-4">
                    <span class="text-primary" style="font-size: 1.5rem;">📅</span>
                    <span class="text-on-surface-variant text-sm">2日前</span>
                </div>
                <h4 class="font-headline font-bold text-xl mb-3">3匹の譲渡が決定</h4>
                <p class="text-on-surface-variant text-sm">
                    今週末のガーデン交流会で、ベラ、マックス、クロエに新しい家族が決まりました。
                </p>
            </div>

            <div class="card card-white activity-card secondary">
                <div class="flex items-center gap-4 mb-4">
                    <span class="text-secondary" style="font-size: 1.5rem;">💝</span>
                    <span class="text-on-surface-variant text-sm">昨日</span>
                </div>
                <h4 class="font-headline font-bold text-xl mb-3">24万円の寄付達成</h4>
                <p class="text-on-surface-variant text-sm">
                    小さなバーナビーの緊急手術のために、多くの方々からご支援をいただきました。
                </p>
            </div>

            <div class="card card-white activity-card tertiary">
                <div class="flex items-center gap-4 mb-4">
                    <span style="font-size: 1.5rem;">💊</span>
                    <span class="text-on-surface-variant text-sm">5時間前</span>
                </div>
                <h4 class="font-headline font-bold text-xl mb-3">健康診断の実施</h4>
                <p class="text-on-surface-variant text-sm">
                    新しく保護されたすべての猫たちが、ワクチン接種と健康診断を終えました。
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Donation Section -->
<section id="donate" class="section">
    <div class="container">
        <div class="text-center mb-8">
            <h2>寄付で応援する</h2>
            <p class="text-on-surface-variant">猫たちの未来のために、支援方法をお選びいただけます。</p>
        </div>

        <div class="pricing-grid">
            <div class="card card-white pricing-card">
                <div class="mb-6">
                    <span style="font-size: 2.5rem;">🍽️</span>
                </div>
                <h3 class="pricing-price">¥1,500 / 月</h3>
                <p class="text-on-surface-variant mb-6">子猫用の特別なミルク1週間分になります。</p>
                <button class="btn btn-outline w-full">選択する</button>
            </div>

            <div class="card card-primary pricing-card featured">
                <span class="pricing-badge">もっとも必要</span>
                <div class="mb-6">
                    <span style="font-size: 2.5rem;">🏥</span>
                </div>
                <h3 class="pricing-price">¥5,000 / 月</h3>
                <p class="mb-6 text-lg">定期的な予防接種と健康診断の費用をまかないます。</p>
                <button class="btn w-full" style="background-color: #ffffff; color: var(--color-primary);">支援を始める</button>
            </div>

            <div class="card card-white pricing-card">
                <div class="mb-6">
                    <span style="font-size: 2.5rem;">🏠</span>
                </div>
                <h3 class="pricing-price">¥10,000 / 月</h3>
                <p class="text-on-surface-variant mb-6">シニア猫の救出から譲渡までのリハビリを支えます。</p>
                <button class="btn btn-outline w-full">選択する</button>
            </div>
        </div>
    </div>
</section>

<!-- Volunteer Section -->
<section id="volunteer" class="section">
    <div class="container">
        <div class="card-secondary-container" style="border-radius: var(--radius-xl); overflow: hidden;">
            <div class="hero-content" style="padding: var(--spacing-xl);">
                <div>
                    <h2 class="mb-6" style="color: var(--color-on-secondary-container);">
                        あなたの時間は、猫たちへの最高の贈り物です。
                    </h2>
                    <p class="mb-8" style="color: var(--color-on-secondary-container); opacity: 0.8; font-size: 1.125rem;">
                        怖がりの子猫との触れ合いから事務作業まで、ボランティアの皆様は私たちの活動の柱です。
                        経験は問いません。猫を愛する心があれば十分です。
                    </p>
                    <div class="grid-2 mb-8" style="grid-template-columns: repeat(2, 1fr); gap: var(--spacing-md);">
                        <div class="flex items-center gap-2">
                            <span>✓</span>
                            <span>子猫のお世話</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span>✓</span>
                            <span>イベント運営補助</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span>✓</span>
                            <span>フォスター（預かり）</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span>✓</span>
                            <span>シェルターの清掃</span>
                        </div>
                    </div>
                    <button class="btn btn-secondary btn-large">ボランティアに応募する</button>
                </div>
                <div class="hero-image">
                    <div class="img-placeholder img-cat-3" style="height: 400px; border-radius: var(--radius-md);"></div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="section">
    <div class="container">
        <div class="cta-section">
            <h2>あなたの支援が、一匹の猫の運命を変えます。</h2>
            <p>
                里親になること、預かりボランティア、または毎月の寄付。
                どのような形でも、あなたの支援が猫たちの聖域を守ります。
            </p>
            <div class="flex gap-4 justify-center flex-wrap">
                <a href="#donate" class="btn btn-large" style="background-color: #ffffff; color: var(--color-primary);">寄付を始める</a>
                <a href="#volunteer" class="btn btn-outline btn-large">預かりボランティアに応募する</a>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
