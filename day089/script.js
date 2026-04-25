/**
 * KIGUMI WORKS - Interactive Scripts
 * SPAルーター、スムーススクロール、ナビ固定、モバイルメニュー、ページ遷移アニメーション、施工事例データ
 */

// ===== Works Data =====
const worksData = [
    {
        id: 'light-and-wind',
        title: '光と風が抜ける家',
        tag: '建築家と建てる家',
        category: 'renovation',
        images: [
            'images/works-card1.jpg',
            'images/works-card1.jpg',
            'images/works-card2.jpg',
            'images/works-card3.jpg'
        ],
        area: '28坪',
        structure: '木造2階建',
        price: '1,500万円〜',
        period: '4ヶ月',
        year: '2023年',
        location: '神奈川県横浜市',
        completionDate: '2024年3月',
        description: '建築家とのコラボレーションにより、光と風を最大限に取り込むリノベーションを実現。天井高を確保し、大型窓を配置することで、開放感あふれる空間を創り出しました。無垢材の床や壁材が、時を経て深まる味わいを醸し出します。南向きの窓から入る自然光を最大限に活かし、風の通り道を意識したプランニングにより、1階には吹き抜けのあるリビング、2階には家族がくつろげる広々とした空間を配置しました。',
        floorPlan: '1階：LDK16坪＋和室5坪／2階：主寝室6坪＋子供部屋2室'
    },
    {
        id: 'old-folk-house',
        title: '時を刻む古民家再生',
        tag: '古民家再生',
        category: 'renovation',
        images: [
            'images/works-card2.jpg',
            'images/works-card2.jpg',
            'images/works-card3.jpg',
            'images/works-card1.jpg',
            'images/works-card3.jpg'
        ],
        area: '35坪',
        structure: '木造2階建（築85年）',
        price: '2,000万円〜',
        period: '6ヶ月',
        year: '2023年',
        location: '埼玉県川越市',
        completionDate: '2024年1月',
        description: '築85年の古民家を、構造を生かしながら現代の快適さで再生。太い梁や柱はそのままに、断熱・気密性能を向上させました。土間はContemporaryな空間に生まれ変わり、家族のGathering場として機能しています。土間を生かした玄関ホールや、囲炉裏を復活した茶の間など、古き良き日本の住まいの心地よさを取り戻しました。耐震補強も併せて実施し、次の100年へとバトンをつなぐ住まいです。',
        floorPlan: '1階：土間8坪＋LDK12坪／2階：和室8坪＋寝室7坪'
    },
    {
        id: 'urban-retreat',
        title: '静寂に包まれる都会の庵',
        tag: 'マンション改修',
        category: 'mansion',
        images: [
            'images/works-card3.jpg',
            'images/works-card3.jpg',
            'images/works-card1.jpg',
            'images/works-card2.jpg'
        ],
        area: '65㎡',
        structure: 'RC造フルリノベーション',
        price: '800万円〜',
        period: '2ヶ月',
        year: '2024年',
        location: '東京都港区',
        completionDate: '2023年11月',
        description: '都心のマンションを、ホテルライクな空間にフルリノベーション。間仕切り壁を極力減らし、ワンルームとしての開放感を確保しつつ、可動式家具で機能的なゾーニングを実現しました。無駄を省いたミニマルなデザインに、自然素材の温かみをプラス。防音壁の採用や収納の充実など、都市生活に求められる機能性も兼ね備えています。',
        floorPlan: 'ワンルームプラン（オープンキッチン＋広々リビング）'
    },
    {
        id: 'stove-living',
        title: '薪ストーブのある暮らし',
        tag: '新築注文住宅',
        category: 'new',
        images: [
            'images/works-card1.jpg',
            'images/works-card2.jpg',
            'images/works-card3.jpg',
            'images/works-card1.jpg',
            'images/works-card2.jpg'
        ],
        area: '32坪',
        structure: '木造2階建',
        price: '2,500万円〜',
        period: '8ヶ月',
        year: '2024年',
        location: '千葉県佐倉市',
        completionDate: '2024年2月',
        description: 'リビングの中心に薪ストーブを配置し、冬場の暖かさと炎の揺らぎを楽しむ住まい。高気密・高断熱仕様により、少ない燃料で効率的に暖房できます。ロフト付きの勾配天井が、開放感とデザイン性を高めています。薪ストーブの熱を循環させるため、1階と2階をつなぐ吹き抜けを設計。冬場でも快適な室温を保ちます。',
        floorPlan: '1階：LDK15坪＋和室6坪／2階：和室8坪＋ロフト3坪'
    },
    {
        id: 'courtyard-life',
        title: '中庭を楽しむ平屋',
        tag: '平屋・リノベーション',
        category: 'flat',
        images: [
            'images/works-card2.jpg',
            'images/works-card3.jpg',
            'images/works-card1.jpg',
            'images/works-card2.jpg'
        ],
        area: '40坪',
        structure: '木造平屋',
        price: '1,800万円〜',
        period: '5ヶ月',
        year: '2024年',
        location: '東京都世田谷区',
        completionDate: '2023年12月',
        description: 'コの字形のプランで中央に中庭を配置し、すべての部屋から自然光と風を取り込む平屋。バリアフリー対応で、将来にわたって快適に暮らせる設計です。中庭には手入れが容易な植栽を配置し、四季の移ろいを感じられる空間を創り出しました。全室から中庭の緑を望め、風と光が各部屋に届く設計です。テラスを広く取り、アウトドアリビングとしても楽しめます。',
        floorPlan: 'LDK18坪＋和室8坪＋寝室7坪／中庭7坪'
    },
    {
        id: 'urban-hideout',
        title: '都市の隠れ家',
        tag: 'マンション改修',
        category: 'mansion',
        images: [
            'images/works-card3.jpg',
            'images/works-card1.jpg',
            'images/works-card2.jpg',
            'images/works-card3.jpg',
            'images/works-card1.jpg'
        ],
        area: '55㎡',
        structure: 'RC造フルリノベーション',
        price: '700万円〜',
        period: '2.5ヶ月',
        year: '2024年',
        location: '東京都渋谷区',
        completionDate: '2024年4月',
        description: '都会の喧騒から離れた、隠れ家のような落ち着きのある空間。Naturalな素材を多用し、カラーは白・グレー・ブラウンを基調とした統一感のある内装に。キッチンは対面式に変更し、家族とのコミュニケーションを大切にしたプランニングです。コンパクトながら機能的にまとめられた、一人暮らし向けのフルリノベーション。キッチン、バス、トイレを一新し、可動式の棚パネルで自分だけの収納レイアウトが可能。ワークスペースも確保し、テレワークにも対応。',
        floorPlan: '1LDK（オープンワークスペース付き）'
    }
];

// ===== Render Works =====
function renderWorks() {
    // 全てのworks-grid要素を取得
    const worksGrids = document.querySelectorAll('.works-grid');
    const previewGrid = document.querySelector('.works-grid-preview');
    if (worksGrids.length === 0 && !previewGrid) return;

    // カード生成用の関数
    const createWorkCard = (work) => `
        <article class="work-card" data-category="${work.category}" data-id="${work.id}">
            <div class="work-image">
                <img src="${work.images[0]}" alt="${work.title} - ${work.structure}">
            </div>
            <div class="work-content">
                <span class="work-tag">${work.tag}</span>
                <h3 class="work-title">${work.title}</h3>
                <p class="work-meta">延床面積：${work.area} / ${work.structure}</p>
            </div>
        </article>
    `;

    // 全てのgridにカードを描画（Worksページ用）
    worksGrids.forEach(grid => {
        grid.innerHTML = worksData.map(createWorkCard).join('');
    });

    // プレビューグリッドには最初の3件のみを描画（Homeページ用）
    if (previewGrid) {
        previewGrid.innerHTML = worksData.slice(0, 3).map(createWorkCard).join('');
    }

    // カードクリックイベントを追加
    document.querySelectorAll('.work-card').forEach(card => {
        card.addEventListener('click', () => {
            const workId = card.getAttribute('data-id');
            router.showWorkDetail(workId);
        });
        card.style.cursor = 'pointer';
    });

    // 件数表示を更新
    const worksCountNumber = document.querySelector('.works-count-number');
    if (worksCountNumber) {
        worksCountNumber.textContent = worksData.length;
    }

    // Re-initialize scroll animations for newly added elements
    initScrollAnimations();
}

// ===== Get Work by ID =====
function getWorkById(id) {
    return worksData.find(work => work.id === id);
}

// ===== SPA Router =====
class Router {
    constructor() {
        this.routes = {
            '/': 'home',
            '/works': 'works',
            '/voice': 'voice',
            '/about': 'about',
            '/faq': 'faq',
            '/contact': 'contact'
        };
        this.currentPath = null;
        this.currentSlide = 0;
        this.totalSlides = 0;
        this.init();
    }

    init() {
        // popstateイベント（ブラウザの戻る/進むボタン）
        window.addEventListener('popstate', (e) => {
            this.handleRoute(e.state?.path || window.location.pathname);
        });

        // ナビリンククリックイベント
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (!link) return;

            const href = link.getAttribute('href');
            // 内部リンクのみ処理（http://, https://, mailto:, tel: は除外）
            if (href && !href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('tel:') && href.startsWith('/')) {
                e.preventDefault();
                this.navigate(href);
            }
        });

        // モバイルメニュー初期化
        this.navToggle = document.getElementById('navToggle');
        this.navMenu = document.getElementById('navMenu');
        if (this.navToggle) {
            this.navToggle.addEventListener('click', () => this.toggleMobileMenu());
        }

        // 初期ロード時のURLを処理
        let initialPath = window.location.pathname;

        // Live Server等でファイル名が含まれる場合はルートパスとして扱う
        // 例: /day089/index.html → /
        // 例: /day089/ → /
        if (initialPath.endsWith('index.html') || initialPath.includes('/day089')) {
            // ディレクトリパスを抽出（末尾のindex.htmlを削除）
            let dirPath = initialPath.replace(/\/index\.html$/, '');
            // /day089や/day089/のようなパスは/として扱う
            if (dirPath.endsWith('/day089') || dirPath === '/day089') {
                initialPath = '/';
            }
        }

        // Works詳細パターンをチェック
        const worksDetailMatch = initialPath.match(/^\/works\/([^/]+)$/);
        if (worksDetailMatch) {
            this.showWorkDetail(worksDetailMatch[1]);
        } else if (initialPath !== '/' && initialPath !== '') {
            // サブページの場合
            const sectionId = this.routes[initialPath];
            if (sectionId) {
                this.showPageDirect(sectionId);
                this.updateActiveNav(initialPath);
            }
        } else {
            // ルートパスの場合はホームページを表示
            this.showPageDirect('home');
        }
    }

    // ページを直接表示（URL変更なし、アニメーションなし）
    showPageDirect(pageName) {
        const allPages = document.querySelectorAll('.page');
        allPages.forEach(page => {
            page.classList.remove('active', 'visible');
        });

        const targetPage = document.querySelector(`[data-page="${pageName}"]`);
        if (targetPage) {
            targetPage.classList.add('active', 'visible');
        }
    }

    toggleMobileMenu() {
        if (this.navToggle && this.navMenu) {
            this.navToggle.classList.toggle('active');
            this.navMenu.classList.toggle('active');
            document.body.style.overflow = this.navMenu.classList.contains('active') ? 'hidden' : '';
        }
    }

    closeMobileMenu() {
        if (this.navToggle && this.navMenu) {
            this.navToggle.classList.remove('active');
            this.navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    async navigate(path) {
        // Works詳細パターン (/works/{id})
        const worksDetailMatch = path.match(/^\/works\/([^/]+)$/);
        if (worksDetailMatch) {
            this.showWorkDetail(worksDetailMatch[1]);
            return;
        }

        // 通常ルート
        const sectionId = this.routes[path];
        if (sectionId) {
            // URL更新
            if (path === '/') {
                history.pushState({ path: '/', scrollPos: 0 }, '', ' ');
            } else {
                history.pushState({ path, scrollPos: 0 }, '', path);
            }

            this.updateActiveNav(path);
            this.closeMobileMenu();

            // ページ遷移アニメーション
            const currentPage = document.querySelector('.page.visible');
            const nextPage = document.querySelector(`[data-page="${sectionId}"]`);

            if (currentPage && currentPage !== nextPage) {
                currentPage.classList.remove('visible');
                currentPage.classList.add('fade-out');
                await this.delay(300);
                currentPage.classList.remove('active', 'fade-out');
            }

            if (nextPage) {
                nextPage.classList.add('active');
                await this.delay(50);
                nextPage.classList.add('visible');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else {
            this.show404();
        }
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    handleRoute(path) {
        // Works詳細パターン
        const worksDetailMatch = path.match(/^\/works\/([^/]+)$/);
        if (worksDetailMatch) {
            this.showWorkDetail(worksDetailMatch[1]);
            return;
        }

        const sectionId = this.routes[path];
        if (sectionId) {
            this.showPageDirect(sectionId);
            this.updateActiveNav(path);
        } else {
            this.show404();
        }
    }

    updateActiveNav(path) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');

            // Works詳細ページの場合は/worksをアクティブに
            if (path.startsWith('/works/') && href === '/works') {
                link.classList.add('active');
            } else if (href === path) {
                link.classList.add('active');
            }
        });

        // フッターナビも更新
        const footerLinks = document.querySelectorAll('.footer-nav a');
        footerLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');

            // Works詳細ページの場合は/worksをアクティブに
            if (path.startsWith('/works/') && href === '/works') {
                link.classList.add('active');
            } else if (href === path) {
                link.classList.add('active');
            }
        });
    }

    showWorkDetail(workId) {
        const work = getWorkById(workId);
        if (!work) {
            console.warn(`Work not found: ${workId}`);
            this.show404();
            return;
        }

        // 詳細ページのコンテンツを更新
        this.updateWorkDetailContent(work);

        // 詳細ページを表示（アニメーションなし）
        this.showPageDirect('work-detail');

        // URLを更新
        history.pushState({ path: `/works/${workId}` }, '', `/works/${workId}`);
        this.updateActiveNav('/works');

        // スクロールをトップへ
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    updateWorkDetailContent(work) {
        // パンくず
        document.getElementById('detail-breadcrumb-title').textContent = work.title;

        // スライダー画像
        const sliderTrack = document.getElementById('detail-slider-track');
        if (sliderTrack) {
            sliderTrack.innerHTML = work.images.map((img, index) => `
                <div class="work-slider-slide" data-index="${index}">
                    <img src="${img}" alt="${work.title}">
                </div>
            `).join('');
        }

        // スライダードット
        const sliderDots = document.getElementById('detail-slider-dots');
        if (sliderDots) {
            sliderDots.innerHTML = work.images.map((_, index) => `
                <button class="work-slider-dot ${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="写真 ${index + 1}"></button>
            `).join('');

            // ドットクリックイベント
            sliderDots.querySelectorAll('.work-slider-dot').forEach(dot => {
                dot.addEventListener('click', () => {
                    const index = parseInt(dot.dataset.index);
                    this.goToSlide(index);
                });
            });
        }

        // スライダー矢印
        const prevBtn = document.getElementById('detail-slider-prev');
        const nextBtn = document.getElementById('detail-slider-next');
        if (prevBtn) prevBtn.onclick = () => this.prevSlide();
        if (nextBtn) nextBtn.onclick = () => this.nextSlide();

        // 現在のスライドインデックスをリセット
        this.currentSlide = 0;
        this.totalSlides = work.images.length;

        // 詳細情報
        document.getElementById('detail-tag').textContent = work.tag;
        document.getElementById('detail-title').textContent = work.title;
        document.getElementById('detail-area').textContent = work.area;
        document.getElementById('detail-structure').textContent = work.structure;
        document.getElementById('detail-price').textContent = `費用目安：${work.price}`;
        document.getElementById('detail-period').textContent = `施工期間：${work.period}`;
        document.getElementById('detail-location').textContent = work.location;
        document.getElementById('detail-completion').textContent = work.completionDate;
        document.getElementById('detail-description').textContent = work.description;
        document.getElementById('detail-floorplan').textContent = work.floorPlan;

        // リード文（説明文の最初の文）
        const descSentences = work.description.split('。');
        document.getElementById('detail-lead').textContent = descSentences[0] + '。';

        // こだわりポイント（カテゴリーに基づいて生成）
        const featuresContainer = document.getElementById('detail-features');
        if (featuresContainer) {
            const features = this.getFeaturesForCategory(work.category);
            featuresContainer.innerHTML = features.map((feature, index) => `
                <li class="work-feature-item">
                    <span class="work-feature-icon">${String(index + 1).padStart(2, '0')}</span>
                    <div class="work-feature-content">
                        <h4 class="work-feature-name">${feature.name}</h4>
                        <p class="work-feature-desc">${feature.desc}</p>
                    </div>
                </li>
            `).join('');
        }

        // 関連事例を表示（同じカテゴリの他の事例）
        this.renderRelatedWorks(work.category, work.id);
    }

    getFeaturesForCategory(category) {
        const features = {
            renovation: [
                { name: '構造の再生', desc: '既存の構造を診断し、耐震性を向上させました' },
                { name: '自然素材の活用', desc: '無垢材や自然塗料で、経年変化を楽しむ住まいに' },
                { name: '現代的な設備', desc: '最新の設備機器で、快適な暮らしを実現' }
            ],
            new: [
                { name: '高気密・高断熱', desc: '省エネ性能の高い住まいで、光熱費を削減' },
                { name: '耐震構造', desc: '最新の耐震基準をクリアした安心の構造' },
                { name: '自由設計', desc: 'ライフスタイルに合わせた間取りを提案' }
            ],
            mansion: [
                { name: 'フルリノベーション', desc: '内装をすべて一新し、新築同様の空間に' },
                { name: '機能的収納', desc: 'コンパクトながら収納力を最大化' },
                { name: '防音・断熱', desc: '快適な室内環境を実現' }
            ],
            flat: [
                { name: 'バリアフリー', desc: '将来にわたって快適に暮らせる設計' },
                { name: '庭とのつながり', desc: 'アウトドアリビングとして楽しめるテラス' },
                { name: '自然光と風', desc: 'すべての部屋から光と風を取り込む設計' }
            ]
        };
        return features[category] || features.renovation;
    }

    goToSlide(index) {
        const sliderTrack = document.getElementById('detail-slider-track');
        const slides = document.querySelectorAll('.work-slider-slide');
        const dots = document.querySelectorAll('.work-slider-dot');

        if (sliderTrack) {
            sliderTrack.style.transform = `translateX(-${index * 100}%)`;
        }

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });

        this.currentSlide = index;
    }

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(nextIndex);
    }

    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.goToSlide(prevIndex);
    }

    renderRelatedWorks(category, currentId) {
        const relatedGrid = document.getElementById('related-works-grid');
        if (!relatedGrid) return;

        const relatedWorks = worksData
            .filter(w => w.category === category && w.id !== currentId)
            .slice(0, 3);

        if (relatedWorks.length === 0) {
            // 同じカテゴリの事例がない場合は、他のカテゴリから取得
            const otherWorks = worksData
                .filter(w => w.id !== currentId)
                .slice(0, 3);
            relatedGrid.innerHTML = otherWorks.map(work => `
                <article class="work-related-card">
                    <a href="/works/${work.id}" class="work-related-link">
                        <div class="work-related-image">
                            <img src="${work.images[0]}" alt="${work.title}">
                        </div>
                        <div class="work-related-content">
                            <span class="work-related-tag">${work.tag}</span>
                            <h3 class="work-related-name">${work.title}</h3>
                            <p class="work-related-meta">${work.area} / ${work.price}</p>
                        </div>
                    </a>
                </article>
            `).join('');
            return;
        }

        relatedGrid.innerHTML = relatedWorks.map(work => `
            <article class="work-related-card">
                <a href="/works/${work.id}" class="work-related-link">
                    <div class="work-related-image">
                        <img src="${work.images[0]}" alt="${work.title}">
                    </div>
                    <div class="work-related-content">
                        <span class="work-related-tag">${work.tag}</span>
                        <h3 class="work-related-name">${work.title}</h3>
                        <p class="work-related-meta">${work.area} / ${work.price}</p>
                    </div>
                </a>
            </article>
        `).join('');
    }

    show404() {
        console.warn('404: Page not found');
        // トップページへリダイレクト
        this.navigate('/');
    }
}

// ===== Initialize Router =====
let router;

// ===== Works Filter =====
function initWorksFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const workCards = document.querySelectorAll('.work-card');
    const worksCountNumber = document.querySelector('.works-count-number');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;

            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter cards with animation
            let visibleCount = 0;
            workCards.forEach((card, index) => {
                const cardCategory = card.dataset.category;

                // Reset animation
                card.classList.remove('fade-in');

                if (category === 'all' || cardCategory === category) {
                    card.classList.remove('hidden');
                    // Add staggered animation
                    setTimeout(() => {
                        card.classList.add('fade-in');
                    }, index * 50);
                    visibleCount++;
                } else {
                    card.classList.add('hidden');
                }
            });

            // Update count
            if (worksCountNumber) {
                worksCountNumber.textContent = visibleCount;
            }
        });
    });
}

// ===== Initialize Works Filter on Load =====
function initWorksOnLoad() {
    const workCards = document.querySelectorAll('.work-card');

    // Add fade-in animation on initial load
    workCards.forEach((card, index) => {
        card.style.opacity = '0';
        setTimeout(() => {
            card.classList.add('fade-in');
            card.style.opacity = '';
        }, 100 + (index * 80));
    });
}

// ===== Navigation Scroll Effect =====
const nav = document.getElementById('nav');

function handleNavScroll() {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

// ===== Intersection Observer for Animations =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(el => observer.observe(el));

    // Observe work cards
    document.querySelectorAll('.work-card').forEach(el => observer.observe(el));

    // Observe process steps
    document.querySelectorAll('.process-step').forEach(el => observer.observe(el));
}

// ===== Event Listeners =====
// Scroll event for nav
window.addEventListener('scroll', () => {
    handleNavScroll();
});

// Close mobile menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && router) {
        router.closeMobileMenu();
    }
});

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    // Router初期化（内部で初期ロード処理も行う）
    router = new Router();

    handleNavScroll();

    // 施工事例カード描画・フィルター初期化
    renderWorks();
    initWorksFilter();
    initWorksOnLoad();

    initScrollAnimations();
    initFAQ();
    initContactForm();
});

// ===== Work Slider =====
// スライダー機能はRouterクラス内で動的に生成されるため、静的な初期化は不要


// ===== FAQ Accordion =====
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isExpanded = item.getAttribute('aria-expanded') === 'true';

            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle current item
            item.setAttribute('aria-expanded', !isExpanded);
        });
    });
}

// ===== Contact Form =====
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const submitBtn = document.getElementById('submitBtn');
    const formSuccess = document.getElementById('formSuccess');

    // Form fields
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const typeInput = document.getElementById('type');
    const messageInput = document.getElementById('message');

    // Validation functions
    function validateRequired(input) {
        const value = input.value.trim();
        return value !== '';
    }

    function validateEmail(input) {
        const value = input.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    }

    function showError(input, show = true) {
        const formGroup = input.closest('.form-group');
        if (show) {
            input.classList.add('error');
            formGroup.classList.add('has-error');
        } else {
            input.classList.remove('error');
            formGroup.classList.remove('has-error');
        }
    }

    function validateForm() {
        let isValid = true;

        // Validate name
        if (!validateRequired(nameInput)) {
            showError(nameInput, true);
            isValid = false;
        } else {
            showError(nameInput, false);
        }

        // Validate email
        if (!validateRequired(emailInput)) {
            showError(emailInput, true);
            isValid = false;
        } else if (!validateEmail(emailInput)) {
            showError(emailInput, true);
            isValid = false;
        } else {
            showError(emailInput, false);
        }

        // Validate type
        if (!validateRequired(typeInput)) {
            showError(typeInput, true);
            isValid = false;
        } else {
            showError(typeInput, false);
        }

        // Validate message
        if (!validateRequired(messageInput)) {
            showError(messageInput, true);
            isValid = false;
        } else {
            showError(messageInput, false);
        }

        return isValid;
    }

    // Clear error on input
    [nameInput, emailInput, typeInput, messageInput].forEach(input => {
        if (input) {
            input.addEventListener('input', () => {
                showError(input, false);
            });
            input.addEventListener('blur', () => {
                if (input.value.trim()) {
                    if (input === emailInput && !validateEmail(input)) {
                        showError(input, true);
                    } else {
                        showError(input, false);
                    }
                }
            });
        }
    });

    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Validate form
        if (!validateForm()) {
            // Scroll to first error
            const firstError = document.querySelector('.form-group.has-error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual API call)
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Hide form and show success message
        form.style.display = 'none';
        formSuccess.style.display = 'block';

        // Optional: Scroll to success message
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
}
