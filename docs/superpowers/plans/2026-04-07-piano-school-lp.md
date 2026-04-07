# Piano School LP Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a complete landing page for Piano Garden, a small-scale piano school targeting children (ages 3-12) and their parents, featuring course information, pricing tabs, FAQ accordion, and trial lesson reservation form.

**Architecture:** Static single-page LP with semantic HTML5, CSS3 with variables for theming, and vanilla JavaScript for interactions (tabs, form, animations). No build process required - browser-native.

**Tech Stack:** HTML5, CSS3 (Variables/Grid/Flexbox), Vanilla JavaScript (ES6+)

---

## File Structure

```
day072/
├── index.html        # Main HTML - all 8 sections
├── style.css         # Styles - variables, base, sections, responsive
├── script.js         # Interactions - tabs, form, animations
└── images/
    ├── hero/         # Placeholder hero image
    ├── about/        # Placeholder teacher photo
    ├── facility/     # Placeholder facility photos
    └── course/       # Placeholder course images
```

---

### Task 1: Create HTML Structure

**Files:**
- Create: `/Users/yuuki/Works/lp-100/day072/index.html`

- [ ] **Step 1: Write HTML skeleton with meta tags**

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Piano Garden - 幼児から小学生まで、無理なく続くピアノ教室。心を育てるピアノレッスン。">
    <meta property="og:title" content="Piano Garden | 心を育てる、ピアノ">
    <meta property="og:description" content="幼児から小学生まで、無理なく続くピアノ教室">
    <meta property="og:type" content="website">
    <title>Piano Garden | 心を育てる、ピアノ</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
```

- [ ] **Step 2: Add Navigation section**

```html
    <!-- Navigation -->
    <nav class="nav" id="nav">
        <div class="nav-container">
            <a href="#" class="nav-logo">Piano Garden</a>
            <button class="nav-toggle" id="navToggle" aria-label="Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="nav-menu" id="navMenu">
                <li><a href="#about" class="nav-link">教室について</a></li>
                <li><a href="#course" class="nav-link">コース</a></li>
                <li><a href="#facility" class="nav-link">教室</a></li>
                <li><a href="#voice" class="nav-link">お客様の声</a></li>
                <li><a href="#faq" class="nav-link">よくある質問</a></li>
                <li><a href="#contact" class="nav-link cta-link">体験予約</a></li>
            </ul>
        </div>
    </nav>
```

- [ ] **Step 3: Add Hero Section (FV)**

```html
    <!-- Hero Section -->
    <section class="hero" id="hero">
        <div class="hero-bg"></div>
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <div class="hero-badges">
                <span class="hero-badge">👨‍👩‍👧‍👦 生徒数50名以上</span>
                <span class="hero-badge">🎵 指導実績10年</span>
                <span class="hero-badge">⭐ Googleレビュー4.8</span>
            </div>
            <h1 class="hero-title">
                <span class="hero-title-main">心を育てる、ピアノ</span>
                <span class="hero-title-main">幼児から小学生まで、無理なく続く</span>
            </h1>
            <p class="hero-subtitle">一人一人のペースに合わせた指導で、音楽の楽しさを大切にしています。楽しみながら基礎を身につけ、定期的な発表会で達成感を体験。</p>
            <div class="hero-cta">
                <a href="#contact" class="btn btn-primary">体験レッスンを予約する（無料）</a>
            </div>
        </div>
        <div class="hero-scroll">
            <span class="hero-scroll-text">スクロール</span>
            <div class="hero-scroll-line"></div>
        </div>
    </section>
```

- [ ] **Step 4: Add About Section**

```html
    <!-- About Section -->
    <section class="about" id="about">
        <div class="container">
            <div class="section-header fade-in">
                <span class="section-label">教室について</span>
                <h2 class="section-title">音楽の楽しさを、からだ全体で</h2>
                <p class="section-desc">私たちは、ピアノを通して子どもたちの心を育てています</p>
            </div>

            <div class="about-grid">
                <div class="about-image fade-in">
                    <div class="about-image-wrapper">
                        <div class="placeholder-image placeholder-teacher"></div>
                    </div>
                </div>
                <div class="about-content fade-in">
                    <h3 class="about-title">こだわりの指導</h3>
                    <p class="about-text">
                        私たちは一人一人のペースに合わせた指導を大切にしています。
                        無理に進めるのではなく、お子様が「楽しい」と感じられることを最優先。
                        そうすることで、ピアノが一生の友達になります。
                    </p>
                    <ul class="about-features">
                        <li class="about-feature">
                            <span class="about-feature-icon">🎹</span>
                            <div class="about-feature-content">
                                <h4>基礎からしっかり</h4>
                                <p>正しい姿勢、指使いから、音楽的な表現まで</p>
                            </div>
                        </li>
                        <li class="about-feature">
                            <span class="about-feature-icon">🎼</span>
                            <div class="about-feature-content">
                                <h4>ソルフェージー併用</h4>
                                <p>耳を育て、読譜力を高める</p>
                            </div>
                        </li>
                        <li class="about-feature">
                            <span class="about-feature-icon">🎤</span>
                            <div class="about-feature-content">
                                <h4>発表会の実施</h4>
                                <p>年に2回、達成感を味わう機会</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
```

- [ ] **Step 5: Add Course Section**

```html
    <!-- Course Section -->
    <section class="course" id="course">
        <div class="container">
            <div class="section-header fade-in">
                <span class="section-label">コース紹介</span>
                <h2 class="section-title">お子様に合わせたコース</h2>
                <p class="section-desc">年齢や目的に合わせて、最適なプログラムをご用意</p>
            </div>

            <div class="course-grid">
                <div class="course-card fade-in">
                    <div class="course-image">
                        <div class="placeholder-image placeholder-course-1"></div>
                    </div>
                    <div class="course-content">
                        <span class="course-badge">幼児コース</span>
                        <h3 class="course-title">3歳〜年長</h3>
                        <p class="course-desc">リズム感を養い、音楽遊びからピアノへ。30分レッスンで集中力を育てます。</p>
                        <ul class="course-features">
                            <li>歌とリズム遊び</li>
                            <li>ピアノに触れる導入</li>
                            <li>音符と鍵盤の親しみ</li>
                        </ul>
                        <p class="course-price">¥8,000 / 月（週1回・30分）</p>
                    </div>
                </div>

                <div class="course-card course-popular fade-in">
                    <div class="course-popular-badge">人気</div>
                    <div class="course-image">
                        <div class="placeholder-image placeholder-course-2"></div>
                    </div>
                    <div class="course-content">
                        <span class="course-badge">小学生コース</span>
                        <h3 class="course-title">小学1年生〜6年生</h3>
                        <p class="course-desc">基礎技術の定着と、曲を仕上げる達成感。45分レッスンで充実の内容。</p>
                        <ul class="course-features">
                            <li>正しい基礎技術</li>
                            <li>ソルフェージー併用</li>
                            <li>発表会への挑戦</li>
                        </ul>
                        <p class="course-price">¥10,000 / 月（週1回・45分）</p>
                    </div>
                </div>

                <div class="course-card fade-in">
                    <div class="course-image">
                        <div class="placeholder-image placeholder-course-3"></div>
                    </div>
                    <div class="course-content">
                        <span class="course-badge">グレードコース</span>
                        <h3 class="course-title">検定・コンペ対策</h3>
                        <p class="course-desc">ピティナ・ステップ検定やコンペティションを目指す生徒への専門指導。</p>
                        <ul class="course-features">
                            <li>ピティナ・ステップ対策</li>
                            <li>コンペティション支援</li>
                            <li>60分レッスン</li>
                        </ul>
                        <p class="course-price">¥15,000 / 月（週1回・60分）</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
```

- [ ] **Step 6: Add Voice Section**

```html
    <!-- Voice Section -->
    <section class="voice" id="voice">
        <div class="container">
            <div class="section-header fade-in">
                <span class="section-label">お客様の声</span>
                <h2 class="section-title">保護者の方々からの声</h2>
                <p class="section-desc">実際に通っていただいている方々の率直な感想です</p>
            </div>

            <div class="voice-grid">
                <div class="voice-card fade-in">
                    <div class="voice-header">
                        <div class="voice-icon">👩</div>
                        <div class="voice-info">
                            <p class="voice-name">A.S様</p>
                            <p class="voice-child">小学1年生のお子様</p>
                        </div>
                    </div>
                    <p class="voice-text">「最初はピアノに興味がなかったのですが、先生の楽しいレッスンのおかげで、今では自分から練習するように。発表会での姿を見て、成長を感じました。」</p>
                </div>

                <div class="voice-card fade-in">
                    <div class="voice-header">
                        <div class="voice-icon">👨</div>
                        <div class="voice-info">
                            <p class="voice-name">M.K様</p>
                            <p class="voice-child">年長のお子様</p>
                        </div>
                    </div>
                    <p class="voice-text">「先生が優しく、子供も安心して通っています。保護者にもレッスンの様子を報告してくださるので、家庭での練習もしやすいです。」</p>
                </div>

                <div class="voice-card fade-in">
                    <div class="voice-header">
                        <div class="voice-icon">👩</div>
                        <div class="voice-info">
                            <p class="voice-name">T.H様</p>
                            <p class="voice-child">小学3年生のお子様</p>
                        </div>
                    </div>
                    <p class="voice-text">「グレードコースで検定対策をお願いしています。先生が的確なアドバイスをしてくれるので、子供も迷いなく練習できています。」</p>
                </div>
            </div>
        </div>
    </section>
```

- [ ] **Step 7: Add Facility Section**

```html
    <!-- Facility Section -->
    <section class="facility" id="facility">
        <div class="container">
            <div class="section-header fade-in">
                <span class="section-label">教室紹介</span>
                <h2 class="section-title">安心の環境と設備</h2>
                <p class="section-desc">お子様が集中してレッスンを受けられる環境を整えています</p>
            </div>

            <div class="facility-grid">
                <div class="facility-item fade-in">
                    <div class="facility-image">
                        <div class="placeholder-image placeholder-facility-1"></div>
                    </div>
                    <div class="facility-content">
                        <h3 class="facility-title">グランドピアノ</h3>
                        <p class="facility-desc">ヤマハのグランドピアノを使用。豊かな音色で本物の音楽に触れられます。</p>
                    </div>
                </div>

                <div class="facility-item fade-in">
                    <div class="facility-image">
                        <div class="placeholder-image placeholder-facility-2"></div>
                    </div>
                    <div class="facility-content">
                        <h3 class="facility-title">防音レッスン室</h3>
                        <p class="facility-desc">防音設備の整ったレッスン室で、周りを気にせず集中できます。</p>
                    </div>
                </div>

                <div class="facility-item fade-in">
                    <div class="facility-image">
                        <div class="placeholder-image placeholder-facility-3"></div>
                    </div>
                    <div class="facility-content">
                        <h3 class="facility-title">保護者待機スペース</h3>
                        <p class="facility-desc">レッスン中、保護者の方もお待ちいただけるスペースをご用意。</p>
                    </div>
                </div>

                <div class="facility-item fade-in">
                    <div class="facility-image">
                        <div class="placeholder-image placeholder-facility-4"></div>
                    </div>
                    <div class="facility-content">
                        <h3 class="facility-title">駐車場完備</h3>
                        <p class="facility-desc">教室専用の駐車場をご用意。お車でお越しいただけます。</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
```

- [ ] **Step 8: Add Schedule & Pricing Section**

```html
    <!-- Schedule Section -->
    <section class="schedule" id="schedule">
        <div class="container">
            <div class="section-header fade-in">
                <span class="section-label">スケジュール・料金</span>
                <h2 class="section-title">レッスン時間と料金プラン</h2>
                <p class="section-desc">コース別の料金と、スケジュールをご確認ください</p>
            </div>

            <div class="schedule-layout">
                <div class="schedule-table fade-in">
                    <h3 class="schedule-title">レッスン時間</h3>
                    <table class="timetable">
                        <tr>
                            <th>月〜金</th>
                            <td>14:00 〜 19:00</td>
                        </tr>
                        <tr>
                            <th>土</th>
                            <td>10:00 〜 18:00</td>
                        </tr>
                        <tr>
                            <th>日・祝日</th>
                            <td>休み</td>
                        </tr>
                    </table>
                    <p class="schedule-note">※ 時間帯は空状況によります</p>
                </div>

                <div class="pricing-tabs fade-in">
                    <div class="tab-buttons">
                        <button class="tab-button active" data-tab="toddler">幼児コース</button>
                        <button class="tab-button" data-tab="elementary">小学生コース</button>
                        <button class="tab-button" data-tab="grade">グレードコース</button>
                    </div>

                    <div class="tab-content active" id="toddler">
                        <div class="pricing-header">
                            <span class="pricing-course">幼児コース</span>
                            <span class="pricing-age">3歳〜年長</span>
                        </div>
                        <div class="pricing-body">
                            <div class="pricing-price">
                                <span class="pricing-amount">¥8,000</span>
                                <span class="pricing-period">/ 月</span>
                            </div>
                            <ul class="pricing-features">
                                <li>週1回・30分レッスン</li>
                                <li>リズム遊び・導入</li>
                                <li>音符と鍵盤の親しみ</li>
                                <li>発表会参加可能</li>
                            </ul>
                        </div>
                    </div>

                    <div class="tab-content" id="elementary">
                        <div class="pricing-header">
                            <span class="pricing-course">小学生コース</span>
                            <span class="pricing-age">小学1年生〜6年生</span>
                        </div>
                        <div class="pricing-body">
                            <div class="pricing-price">
                                <span class="pricing-amount">¥10,000</span>
                                <span class="pricing-period">/ 月</span>
                            </div>
                            <ul class="pricing-features">
                                <li>週1回・45分レッスン</li>
                                <li>基礎技術の定着</li>
                                <li>ソルフェージー併用</li>
                                <li>発表会参加可能</li>
                            </ul>
                        </div>
                    </div>

                    <div class="tab-content" id="grade">
                        <div class="pricing-header">
                            <span class="pricing-course">グレードコース</span>
                            <span class="pricing-age">検定・コンペ対策</span>
                        </div>
                        <div class="pricing-body">
                            <div class="pricing-price">
                                <span class="pricing-amount">¥15,000</span>
                                <span class="pricing-period">/ 月</span>
                            </div>
                            <ul class="pricing-features">
                                <li>週1回・60分レッスン</li>
                                <li>ピティナ・ステップ対策</li>
                                <li>コンペティション支援</li>
                                <li>発表会参加可能</li>
                            </ul>
                        </div>
                    </div>

                    <div class="pricing-note">
                        <p>入会金: ¥20,000（教材費込）</p>
                        <p>兄弟割引: 2人目から¥1,000割引</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
```

- [ ] **Step 9: Add FAQ Section**

```html
    <!-- FAQ Section -->
    <section class="faq" id="faq">
        <div class="container">
            <div class="section-header fade-in">
                <span class="section-label">よくある質問</span>
                <h2 class="section-title">ご質問にお答えします</h2>
                <p class="section-desc">よくいただく質問と回答をご確認ください</p>
            </div>

            <div class="faq-list">
                <div class="faq-item">
                    <button class="faq-question">
                        <span>ピアノは持っていないとダメですか？</span>
                        <span class="faq-icon">+</span>
                    </button>
                    <div class="faq-answer">
                        <p>ご自宅にピアノがなくても大丈夫です。レッスンで使用するグランドピアノで練習できます。ただし、宿題としての練習時間をご用意いただくと、上達が早まります。電子ピアノでも構いませんので、練習環境の準備をご検討ください。</p>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question">
                        <span>体験レッスンには何を持っていけばいいですか？</span>
                        <span class="faq-icon">+</span>
                    </button>
                    <div class="faq-answer">
                        <p>特に持参していただくものはありません。手ぶらでお越しください。お子様が飲み物を欲しがる場合もありますので、水筒などを持っていただいても構いません。</p>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question">
                        <span>欠席した場合はどうなりますか？</span>
                        <span class="faq-icon">+</span>
                    </button>
                    <div class="faq-answer">
                        <p>当日の欠席の場合、振替レッスンはできません。事前にご連絡いただければ、別日程への振替が可能です（月1回まで）。</p>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question">
                        <span>兄弟一緒に通えますか？</span>
                        <span class="faq-icon">+</span>
                    </button>
                    <div class="faq-answer">
                        <p>はい、可能です。兄弟で同時にレッスンを受けることも、時間をずらして受けることもできます。兄弟割引（2人目から¥1,000割引）もご用意しています。</p>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question">
                        <span>大人の再開も受け付けていますか？</span>
                        <span class="faq-icon">+</span>
                    </button>
                    <div class="faq-answer">
                        <p>はい、大人のピアノレッスンも承っています。初心者の方、久しぶりに再開されたい方も、お気軽にご相談ください。大人向けのカリキュラムでご案内します。</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
```

- [ ] **Step 10: Add Contact Section and close HTML**

```html
    <!-- Contact Section -->
    <section class="contact" id="contact">
        <div class="container">
            <div class="section-header fade-in">
                <span class="section-label">体験予約</span>
                <h2 class="section-title">体験レッスンをお申し込み</h2>
                <p class="section-desc">お気軽にお問い合わせください</p>
            </div>

            <div class="contact-layout">
                <div class="contact-form-wrapper fade-in">
                    <form class="contact-form" id="contactForm">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="childName">お子様のお名前 <span class="required">必須</span></label>
                                <input type="text" id="childName" name="childName" required>
                            </div>
                            <div class="form-group">
                                <label for="childGrade">学年 <span class="required">必須</span></label>
                                <select id="childGrade" name="childGrade" required>
                                    <option value="">選択してください</option>
                                    <optgroup label="幼稚園">
                                        <option value="toddler-1">年少</option>
                                        <option value="toddler-2">年中</option>
                                        <option value="toddler-3">年長</option>
                                    </optgroup>
                                    <optgroup label="小学生">
                                        <option value="elementary-1">小学1年生</option>
                                        <option value="elementary-2">小学2年生</option>
                                        <option value="elementary-3">小学3年生</option>
                                        <option value="elementary-4">小学4年生</option>
                                        <option value="elementary-5">小学5年生</option>
                                        <option value="elementary-6">小学6年生</option>
                                    </optgroup>
                                    <optgroup label="大人">
                                        <option value="adult">大人（再開・初心者）</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label for="parentName">保護者の方のお名前 <span class="required">必須</span></label>
                                <input type="text" id="parentName" name="parentName" required>
                            </div>
                            <div class="form-group">
                                <label for="phone">電話番号 <span class="required">必須</span></label>
                                <input type="tel" id="phone" name="phone" required>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="email">メールアドレス <span class="required">必須</span></label>
                            <input type="email" id="email" name="email" required>
                        </div>

                        <div class="form-group">
                            <label for="preferredCourse">希望コース</label>
                            <select id="preferredCourse" name="preferredCourse">
                                <option value="">選択してください</option>
                                <option value="toddler">幼児コース</option>
                                <option value="elementary">小学生コース</option>
                                <option value="grade">グレードコース</option>
                                <option value="adult">大人向け</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>希望日時（第1〜3希望）</label>
                            <div class="form-row">
                                <input type="datetime-local" id="date1" name="date1" class="form-datetime">
                                <input type="datetime-local" id="date2" name="date2" class="form-datetime">
                                <input type="datetime-local" id="date3" name="date3" class="form-datetime">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="message">備考・ご質問</label>
                            <textarea id="message" name="message" rows="4"></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary btn-full">体験レッスンを予約する</button>
                    </form>
                </div>

                <div class="contact-info fade-in">
                    <div class="contact-info-card">
                        <h3 class="contact-info-title">Piano Garden</h3>
                        <div class="contact-info-item">
                            <span class="contact-info-icon">📍</span>
                            <div>
                                <p class="contact-info-label">住所</p>
                                <p>〒150-0000<br>東京都渋谷区○○1-2-3<br>○○ビル2F</p>
                            </div>
                        </div>
                        <div class="contact-info-item">
                            <span class="contact-info-icon">🚶</span>
                            <div>
                                <p class="contact-info-label">アクセス</p>
                                <p>○○駅から徒歩5分</p>
                            </div>
                        </div>
                        <div class="contact-info-item">
                            <span class="contact-info-icon">📞</span>
                            <div>
                                <p class="contact-info-label">電話番号</p>
                                <p>03-XXXX-XXXX</p>
                            </div>
                        </div>
                        <div class="contact-info-item">
                            <span class="contact-info-icon">✉️</span>
                            <div>
                                <p class="contact-info-label">メール</p>
                                <p>info@pianogarden.example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p class="footer-copy">&copy; 2026 Piano Garden. All rights reserved.</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 11: Commit HTML structure**

```bash
cd /Users/yuuki/Works/lp-100
git add day072/index.html
git commit -m "feat(day072): add HTML structure for piano school LP"
```

---

### Task 2: Create CSS Styles

**Files:**
- Create: `/Users/yuuki/Works/lp-100/day072/style.css`

- [ ] **Step 1: Write CSS Variables and Base Styles**

```css
/* ============================================
   CSS Variables
   ============================================ */
:root {
    /* Colors */
    --color-primary: #a7c7e7;
    --color-secondary: #d4e5f7;
    --color-accent: #f8c5d5;
    --color-text: #2c2c2c;
    --color-text-light: #666666;
    --color-bg: #faf8f5;
    --color-white: #ffffff;
    --color-border: #e0d5cc;
    --color-success: #4caf50;
    --color-shadow: rgba(0, 0, 0, 0.1);

    /* Typography */
    --font-family: 'Noto Sans JP', sans-serif;
    --font-size-base: 16px;
    --font-size-small: 14px;
    --font-size-large: 18px;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-bold: 700;

    /* Spacing */
    --spacing-xs: 8px;
    --spacing-sm: 16px;
    --spacing-md: 24px;
    --spacing-lg: 32px;
    --spacing-xl: 48px;
    --spacing-xxl: 80px;

    /* Container */
    --container-max-width: 1200px;
    --container-padding: 20px;

    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 16px;
    --radius-full: 50%;

    /* Transitions */
    --transition-fast: 0.2s ease;
    --transition-base: 0.3s ease;
    --transition-slow: 0.5s ease;
}

/* ============================================
   Reset & Base
   ============================================ */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-family);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-regular);
    color: var(--color-text);
    background-color: var(--color-bg);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

a {
    color: inherit;
    text-decoration: none;
}

button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
}

ul {
    list-style: none;
}

/* ============================================
   Container
   ============================================ */
.container {
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: 0 var(--container-padding);
}

/* ============================================
   Section Header
   ============================================ */
.section-header {
    text-align: center;
    margin-bottom: var(--spacing-xl);
}

.section-label {
    display: inline-block;
    padding: 4px 16px;
    background-color: var(--color-primary);
    color: var(--color-white);
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-medium);
    border-radius: var(--radius-full);
    margin-bottom: var(--spacing-sm);
}

.section-title {
    font-size: clamp(24px, 4vw, 36px);
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--spacing-sm);
}

.section-desc {
    color: var(--color-text-light);
    font-size: var(--font-size-large);
}
```

- [ ] **Step 2: Write Button and Utility Styles**

```css
/* ============================================
   Buttons
   ============================================ */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 32px;
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-medium);
    border-radius: var(--radius-full);
    transition: all var(--transition-base);
}

.btn-primary {
    background-color: var(--color-primary);
    color: var(--color-white);
}

.btn-primary:hover {
    background-color: #96b5d6;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--color-shadow);
}

.btn-secondary {
    background-color: var(--color-white);
    color: var(--color-text);
    border: 2px solid var(--color-border);
}

.btn-secondary:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
}

.btn-full {
    width: 100%;
}

/* ============================================
   Fade-in Animation
   ============================================ */
.fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

/* ============================================
   Placeholder Images
   ============================================ */
.placeholder-image {
    background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-white);
    font-size: 48px;
    border-radius: var(--radius-lg);
}

.placeholder-hero {
    width: 100%;
    height: 400px;
}

.placeholder-teacher {
    width: 100%;
    aspect-ratio: 1 / 1;
}

.placeholder-course-1,
.placeholder-course-2,
.placeholder-course-3 {
    width: 100%;
    aspect-ratio: 16 / 9;
}

.placeholder-facility-1,
.placeholder-facility-2,
.placeholder-facility-3,
.placeholder-facility-4 {
    width: 100%;
    aspect-ratio: 16 / 9;
}
```

- [ ] **Step 3: Write Navigation Styles**

```css
/* ============================================
   Navigation
   ============================================ */
.nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    box-shadow: 0 2px 10px var(--color-shadow);
}

.nav-container {
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: 0 var(--container-padding);
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
}

.nav-logo {
    font-size: 20px;
    font-weight: var(--font-weight-bold);
    color: var(--color-primary);
}

.nav-toggle {
    display: none;
    flex-direction: column;
    gap: 4px;
    width: 24px;
}

.nav-toggle span {
    width: 100%;
    height: 2px;
    background-color: var(--color-text);
    transition: all var(--transition-base);
}

.nav-menu {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
}

.nav-link {
    padding: 8px 16px;
    font-weight: var(--font-weight-medium);
    transition: color var(--transition-fast);
}

.nav-link:hover {
    color: var(--color-primary);
}

.cta-link {
    background-color: var(--color-primary);
    color: var(--color-white) !important;
    padding: 8px 20px;
    border-radius: var(--radius-full);
}

.cta-link:hover {
    background-color: #96b5d6;
}
```

- [ ] **Step 4: Write Hero Section Styles**

```css
/* ============================================
   Hero Section
   ============================================ */
.hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-xxl) var(--container-padding);
    padding-top: 80px;
}

.hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%);
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.1);
}

.hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 800px;
}

.hero-badges {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
    justify-content: center;
    margin-bottom: var(--spacing-lg);
}

.hero-badge {
    padding: 6px 16px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: var(--radius-full);
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-medium);
}

.hero-title {
    margin-bottom: var(--spacing-md);
}

.hero-title-main {
    display: block;
    font-size: clamp(28px, 5vw, 48px);
    font-weight: var(--font-weight-bold);
    line-height: 1.3;
    color: var(--color-white);
}

.hero-subtitle {
    font-size: clamp(16px, 2vw, 20px);
    color: rgba(255, 255, 255, 0.95);
    margin-bottom: var(--spacing-xl);
}

.hero-cta {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
    justify-content: center;
}

.hero-scroll {
    position: absolute;
    bottom: var(--spacing-xl);
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: var(--color-white);
}

.hero-scroll-text {
    display: block;
    font-size: 12px;
    margin-bottom: 8px;
}

.hero-scroll-line {
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, var(--color-white), transparent);
    margin: 0 auto;
    animation: scrollDown 2s infinite;
}

@keyframes scrollDown {
    0%, 100% { opacity: 0; transform: translateY(-10px); }
    50% { opacity: 1; transform: translateY(0); }
}
```

- [ ] **Step 5: Write About Section Styles**

```css
/* ============================================
   About Section
   ============================================ */
.about {
    padding: var(--spacing-xxl) 0;
    background-color: var(--color-white);
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-xl);
    align-items: center;
}

.about-image-wrapper {
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: 0 10px 30px var(--color-shadow);
}

.about-title {
    font-size: 24px;
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--spacing-sm);
}

.about-text {
    color: var(--color-text-light);
    margin-bottom: var(--spacing-md);
}

.about-features {
    margin-top: var(--spacing-lg);
}

.about-feature {
    display: flex;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-md);
}

.about-feature-icon {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-secondary);
    border-radius: var(--radius-full);
    font-size: 20px;
}

.about-feature-content h4 {
    font-weight: var(--font-weight-medium);
    margin-bottom: 4px;
}

.about-feature-content p {
    font-size: var(--font-size-small);
    color: var(--color-text-light);
}
```

- [ ] **Step 6: Write Course Section Styles**

```css
/* ============================================
   Course Section
   ============================================ */
.course {
    padding: var(--spacing-xxl) 0;
    background-color: var(--color-bg);
}

.course-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-lg);
}

.course-card {
    background-color: var(--color-white);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: 0 4px 20px var(--color-shadow);
    transition: transform var(--transition-base);
    position: relative;
}

.course-card:hover {
    transform: translateY(-8px);
}

.course-popular {
    border: 2px solid var(--color-accent);
}

.course-popular-badge {
    position: absolute;
    top: 16px;
    right: 16px;
    padding: 4px 12px;
    background-color: var(--color-accent);
    color: var(--color-white);
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-medium);
    border-radius: var(--radius-full);
}

.course-image {
    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    overflow: hidden;
}

.course-content {
    padding: var(--spacing-md);
}

.course-badge {
    display: inline-block;
    padding: 4px 12px;
    background-color: var(--color-secondary);
    color: var(--color-text);
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-medium);
    border-radius: var(--radius-full);
    margin-bottom: var(--spacing-sm);
}

.course-title {
    font-size: 20px;
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--spacing-sm);
}

.course-desc {
    color: var(--color-text-light);
    font-size: var(--font-size-small);
    margin-bottom: var(--spacing-md);
}

.course-features {
    margin-bottom: var(--spacing-md);
}

.course-features li {
    padding: 4px 0;
    font-size: var(--font-size-small);
    color: var(--color-text-light);
}

.course-features li::before {
    content: "✓ ";
    color: var(--color-primary);
    font-weight: var(--font-weight-bold);
}

.course-price {
    font-size: 20px;
    font-weight: var(--font-weight-bold);
    color: var(--color-primary);
}
```

- [ ] **Step 7: Write Voice Section Styles**

```css
/* ============================================
   Voice Section
   ============================================ */
.voice {
    padding: var(--spacing-xxl) 0;
    background-color: var(--color-white);
}

.voice-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-lg);
}

.voice-card {
    padding: var(--spacing-md);
    background-color: var(--color-bg);
    border-radius: var(--radius-lg);
}

.voice-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-sm);
}

.voice-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-secondary);
    border-radius: var(--radius-full);
    font-size: 24px;
}

.voice-name {
    font-weight: var(--font-weight-medium);
}

.voice-child {
    font-size: var(--font-size-small);
    color: var(--color-text-light);
}

.voice-text {
    color: var(--color-text-light);
    font-size: var(--font-size-small);
    line-height: 1.8;
}
```

- [ ] **Step 8: Write Facility Section Styles**

```css
/* ============================================
   Facility Section
   ============================================ */
.facility {
    padding: var(--spacing-xxl) 0;
    background-color: var(--color-bg);
}

.facility-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-lg);
}

.facility-item {
    background-color: var(--color-white);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: 0 4px 20px var(--color-shadow);
}

.facility-image {
    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    overflow: hidden;
}

.facility-content {
    padding: var(--spacing-md);
}

.facility-title {
    font-size: 18px;
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--spacing-xs);
}

.facility-desc {
    color: var(--color-text-light);
    font-size: var(--font-size-small);
}
```

- [ ] **Step 9: Write Schedule & Pricing Section Styles**

```css
/* ============================================
   Schedule Section
   ============================================ */
.schedule {
    padding: var(--spacing-xxl) 0;
    background-color: var(--color-white);
}

.schedule-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-xl);
}

.schedule-title {
    font-size: 20px;
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--spacing-md);
}

.timetable {
    width: 100%;
    border-collapse: collapse;
}

.timetable th,
.timetable td {
    padding: var(--spacing-sm);
    text-align: left;
    border-bottom: 1px solid var(--color-border);
}

.timetable th {
    font-weight: var(--font-weight-medium);
    white-space: nowrap;
}

.schedule-note {
    margin-top: var(--spacing-sm);
    font-size: var(--font-size-small);
    color: var(--color-text-light);
}

/* ============================================
   Pricing Tabs
   ============================================ */
.pricing-tabs {
    background-color: var(--color-bg);
    border-radius: var(--radius-lg);
    padding: var(--spacing-md);
}

.tab-buttons {
    display: flex;
    gap: var(--spacing-xs);
    margin-bottom: var(--spacing-md);
}

.tab-button {
    flex: 1;
    padding: 12px;
    background-color: var(--color-white);
    border-radius: var(--radius-md);
    font-weight: var(--font-weight-medium);
    transition: all var(--transition-base);
}

.tab-button:hover {
    background-color: var(--color-secondary);
}

.tab-button.active {
    background-color: var(--color-primary);
    color: var(--color-white);
}

.tab-content {
    display: none;
    background-color: var(--color-white);
    border-radius: var(--radius-md);
    padding: var(--spacing-md);
}

.tab-content.active {
    display: block;
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}

.pricing-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-md);
}

.pricing-course {
    font-weight: var(--font-weight-bold);
}

.pricing-age {
    padding: 4px 12px;
    background-color: var(--color-secondary);
    border-radius: var(--radius-full);
    font-size: var(--font-size-small);
}

.pricing-price {
    display: flex;
    align-items: baseline;
    gap: 8px;
    margin-bottom: var(--spacing-md);
}

.pricing-amount {
    font-size: 32px;
    font-weight: var(--font-weight-bold);
    color: var(--color-primary);
}

.pricing-period {
    font-size: var(--font-size-small);
    color: var(--color-text-light);
}

.pricing-features {
    margin-bottom: var(--spacing-md);
}

.pricing-features li {
    padding: 8px 0;
    border-bottom: 1px solid var(--color-border);
}

.pricing-features li::before {
    content: "✓ ";
    color: var(--color-success);
    font-weight: var(--font-weight-bold);
}

.pricing-note {
    padding-top: var(--spacing-sm);
    border-top: 1px solid var(--color-border);
    font-size: var(--font-size-small);
    color: var(--color-text-light);
}

.pricing-note p {
    margin-bottom: 4px;
}
```

- [ ] **Step 10: Write FAQ Section Styles**

```css
/* ============================================
   FAQ Section
   ============================================ */
.faq {
    padding: var(--spacing-xxl) 0;
    background-color: var(--color-bg);
}

.faq-list {
    max-width: 800px;
    margin: 0 auto;
}

.faq-item {
    background-color: var(--color-white);
    border-radius: var(--radius-md);
    margin-bottom: var(--spacing-sm);
    overflow: hidden;
}

.faq-question {
    width: 100%;
    padding: var(--spacing-md);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: var(--font-weight-medium);
    text-align: left;
}

.faq-icon {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-secondary);
    border-radius: var(--radius-full);
    transition: transform var(--transition-base);
}

.faq-item.active .faq-icon {
    transform: rotate(45deg);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height var(--transition-base);
}

.faq-answer p {
    padding: 0 var(--spacing-md) var(--spacing-md);
    color: var(--color-text-light);
    font-size: var(--font-size-small);
    line-height: 1.8;
}

.faq-item.active .faq-answer {
    max-height: 300px;
}
```

- [ ] **Step 11: Write Contact Section Styles**

```css
/* ============================================
   Contact Section
   ============================================ */
.contact {
    padding: var(--spacing-xxl) 0;
    background-color: var(--color-white);
}

.contact-layout {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: var(--spacing-xl);
}

.contact-form-wrapper {
    background-color: var(--color-bg);
    border-radius: var(--radius-lg);
    padding: var(--spacing-md);
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-md);
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-group label {
    margin-bottom: var(--spacing-xs);
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-small);
}

.required {
    color: #e74c3c;
}

.form-group input,
.form-group select,
.form-group textarea {
    padding: 12px;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    font-family: inherit;
    font-size: var(--font-size-base);
    transition: border-color var(--transition-base);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--color-primary);
}

.form-datetime {
    width: 100%;
}

/* ============================================
   Contact Info
   ============================================ */
.contact-info {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
}

.contact-info-card {
    background-color: var(--color-bg);
    border-radius: var(--radius-lg);
    padding: var(--spacing-md);
}

.contact-info-title {
    font-size: 20px;
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--spacing-md);
}

.contact-info-item {
    display: flex;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-md);
}

.contact-info-icon {
    flex-shrink: 0;
    font-size: 20px;
}

.contact-info-label {
    font-weight: var(--font-weight-medium);
    margin-bottom: 4px;
}

.contact-info-item p {
    font-size: var(--font-size-small);
    color: var(--color-text-light);
}
```

- [ ] **Step 12: Write Footer and Responsive Styles**

```css
/* ============================================
   Footer
   ============================================ */
.footer {
    padding: var(--spacing-md) 0;
    background-color: var(--color-text);
    color: var(--color-white);
}

.footer-copy {
    text-align: center;
    font-size: var(--font-size-small);
    color: rgba(255, 255, 255, 0.7);
}

/* ============================================
   Responsive Design
   ============================================ */
@media (max-width: 1199px) {
    .about-grid,
    .course-grid,
    .voice-grid,
    .facility-grid,
    .schedule-layout,
    .contact-layout {
        grid-template-columns: 1fr;
    }

    .about-image {
        order: -1;
    }
}

@media (max-width: 767px) {
    :root {
        --spacing-xxl: 48px;
        --spacing-xl: 32px;
    }

    /* Navigation */
    .nav-toggle {
        display: flex;
    }

    .nav-menu {
        position: fixed;
        top: 60px;
        left: 0;
        right: 0;
        flex-direction: column;
        padding: var(--spacing-md);
        background-color: var(--color-white);
        box-shadow: 0 4px 10px var(--color-shadow);
        transform: translateY(-100%);
        opacity: 0;
        transition: all var(--transition-base);
    }

    .nav-menu.active {
        transform: translateY(0);
        opacity: 1;
    }

    /* Hero */
    .hero-badges {
        flex-direction: column;
    }

    /* Course */
    .course-grid {
        grid-template-columns: 1fr;
    }

    /* Voice */
    .voice-grid {
        grid-template-columns: 1fr;
    }

    /* Facility */
    .facility-grid {
        grid-template-columns: 1fr;
    }

    /* Schedule */
    .schedule-layout {
        grid-template-columns: 1fr;
    }

    /* Form */
    .form-row {
        grid-template-columns: 1fr;
    }

    .tab-buttons {
        flex-direction: column;
    }
}

/* ============================================
   Accessibility
   ============================================ */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

- [ ] **Step 13: Commit CSS styles**

```bash
cd /Users/yuuki/Works/lp-100
git add day072/style.css
git commit -m "feat(day072): add CSS styles for piano school LP"
```

---

### Task 3: Create JavaScript Interactions

**Files:**
- Create: `/Users/yuuki/Works/lp-100/day072/script.js`

- [ ] **Step 1: Write Utility Functions**

```javascript
// ============================================
// Utility Functions
// ============================================

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
```

- [ ] **Step 2: Write Navigation Toggle**

```javascript
// ============================================
// Navigation Toggle
// ============================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav')) {
            navMenu.classList.remove('active');
        }
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}
```

- [ ] **Step 3: Write Fade-in Animation with Intersection Observer**

```javascript
// ============================================
// Fade-in Animation
// ============================================

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    fadeObserver.observe(el);
});
```

- [ ] **Step 4: Write Pricing Tabs Functionality**

```javascript
// ============================================
// Pricing Tabs
// ============================================

const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        const targetContent = document.getElementById(tabId);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});
```

- [ ] **Step 5: Write FAQ Accordion**

```javascript
// ============================================
// FAQ Accordion
// ============================================

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');

        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Toggle clicked item
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});
```

- [ ] **Step 6: Write Grade Selection to Course Mapping**

```javascript
// ============================================
// Grade Selection to Course Mapping
// ============================================

const gradeSelect = document.getElementById('childGrade');
const courseSelect = document.getElementById('preferredCourse');

if (gradeSelect && courseSelect) {
    const gradeToCourse = {
        'toddler-1': 'toddler',
        'toddler-2': 'toddler',
        'toddler-3': 'toddler',
        'elementary-1': 'elementary',
        'elementary-2': 'elementary',
        'elementary-3': 'elementary',
        'elementary-4': 'elementary',
        'elementary-5': 'elementary',
        'elementary-6': 'elementary',
        'adult': 'adult'
    };

    gradeSelect.addEventListener('change', () => {
        const selectedGrade = gradeSelect.value;
        const recommendedCourse = gradeToCourse[selectedGrade];

        if (recommendedCourse) {
            courseSelect.value = recommendedCourse;
        }
    });
}
```

- [ ] **Step 7: Write Contact Form Validation**

```javascript
// ============================================
// Contact Form Validation
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic validation
        const requiredFields = contactForm.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = '#e74c3c';
            } else {
                field.style.borderColor = '';
            }
        });

        // Email validation
        const emailField = document.getElementById('email');
        if (emailField) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailField.value)) {
                isValid = false;
                emailField.style.borderColor = '#e74c3c';
            }
        }

        if (isValid) {
            // Show success message (in production, send to server)
            alert('体験レッスンの予約を受け付けました！\n担当者より折り返しご連絡いたします。');
            contactForm.reset();
        }
    });

    // Clear error styles on input
    contactForm.querySelectorAll('input, select, textarea').forEach(field => {
        field.addEventListener('input', () => {
            field.style.borderColor = '';
        });
    });
}
```

- [ ] **Step 8: Commit JavaScript**

```bash
cd /Users/yuuki/Works/lp-100
git add day072/script.js
git commit -m "feat(day072): add JavaScript interactions for piano school LP"
```

---

### Task 4: Update worksData in script.js (Root)

**Files:**
- Modify: `/Users/yuuki/Works/lp-100/script.js`

- [ ] **Step 1: Add Day072 entry to worksData**

Open `/Users/yuuki/Works/lp-100/script.js` and add the following entry to the `worksData` array (around line 40-50, find the last existing entry and append after it):

```javascript
{
  day: "Day72",
  title: "Piano Garden - ピアノ教室LP",
  category: "Education",
  industry: "教育",
  focus: "体験予約",
  summary: "幼児から小学生を対象とした小規模ピアノ教室のLP。保護者向けに安心感と成長を実感させる情報を提供し、体験予約への誘導を最適化。",
  metric: "コース別タブ切り替え・学年連動フォーム・FAQアコーディオン",
  tech: ["HTML5", "CSS3", "JavaScript"],
  url: "./day072/"
}
```

- [ ] **Step 2: Commit worksData update**

```bash
cd /Users/yuuki/Works/lp-100
git add script.js
git commit -m "feat(portfolio): add Day072 piano school LP to worksData"
```

---

### Task 5: Create Daily Progress Log

**Files:**
- Create: `/Users/yuuki/Works/lp-100/lp100-progress/daily/day072.md`

- [ ] **Step 1: Write daily progress log**

```markdown
# Day 072 Progress Log

**Date**: 2026-04-07
**Phase**: LP制作（新規デザイン）
**Status**: Completed

---

## Session Start

**Time**: 2026-04-07
**Starting Point**: Day071 completed - Cafe & Roastery LP完成

---

## 今日の目的

幼児から小学生を対象とした小規模ピアノ教室のLPを作成する。保護者向けに安心感と成長を実感させる情報を提供し、体験予約への誘導を最適化する。

---

## タスク

- [x] ブレインストーミング（テーマ・カテゴリ決定）
- [x] デザイン仕様策定
- [x] HTML/CSS/JSコーディング
- [x] レスポンシブ対応
- [x] 料金タブ切り替え実装
- [x] 学年選択→コース連動実装
- [x] FAQアコーディオン実装
- [x] 体験予約フォーム実装
- [x] script.jsにworksData追加
- [x] 進捗ログ作成

---

## 進捗

### 2026-04-07 セッション

#### 1. ブレインストーミング
- カテゴリ: Education（個人事業主・小規模）
- ジャンル: Piano School（ピアノ教室）
- アプローチ: 保護者向け安心感重視型

#### 2. ブランド決定
- ブランド名: **Piano Garden**（ピアノガーデン）
- キャッチ: 「心を育てる、ピアノ」
- サブキャッチ: 「幼児から小学生まで、無理なく続くピアノ教室」

#### 3. デザイン仕様
- カラー: ソフトブルー系（#a7c7e7）を基調
- フォント: Noto Sans JP
- レイアウト: 保護者に安心感を与える余白のある構成

#### 4. LP構築完了

**プロジェクト**: `/Users/yuuki/Works/lp-100/day072/`

**ファイル構成**:
```
day072/
├── DESIGN.md       # デザイン仕様書
├── README.md       # プロジェクト概要
├── index.html      # メインHTML
├── style.css       # スタイルシート
├── script.js       # JavaScript
└── images/         # 画像ディレクトリ
```

**セクション構成**:
1. FV - ヒーロー、キャッチ、信頼バッジ、CTA
2. About - 教室の想い、先生プロフィール、指導方針
3. Course - 3コース（幼児・小学生・グレード）
4. Voice - 保護者の声
5. Facility - 教室設備・ピアノ紹介
6. Schedule - スケジュール表、料金プラン（タブ切り替え）
7. FAQ - よくある質問（アコーディオン）
8. Contact - 体験予約フォーム、アクセス

**実装機能**:
- 料金プランのタブ切り替え
- 学年選択で推奨コースを自動選択
- FAQアコーディオン
- スムーズスクロール
- フェードインアニメーション
- モバイルメニュー
- フォームバリデーション

---

## 学び

### ピアノ教室LPのポイント
- 保護者が決定者であることを意識
- 先生のプロフィール・指導方針が最重要
- 料金プランは比較しやすく（タブ切り替え）
- 「何年生」でコースを自動選択するUX
- FAQで保護者の疑問を解消

### 既存Education LPsとの差別化
- Day0XX: その他教育
- Day072: ピアノ教室（幼児〜小学生、施設紹介、料金タブ）

### 教育系LPの設計
- 実績・信頼性の可視化（生徒数、指導歴、レビュー）
- 保護者向け情報の優先（安全性、環境、指導方針）
- 予約フォームの入力支援（学年→コース連動）

---

## 完成物

**パス**: `/Users/yuuki/Works/lp-100/day072/`
**URL**: http://localhost:8080/day072/
**デザインスペック**: `/Users/yuuki/Works/lp-100/day072/DESIGN.md`

---

## 次回やること

### Day073
- 次のLPテーマを選定・開始
```

- [ ] **Step 2: Commit daily progress log**

```bash
cd /Users/yuuki/Works/lp-100
git add lp100-progress/daily/day072.md
git commit -m "docs(day072): add daily progress log"
```

---

### Task 6: Final Verification

- [ ] **Step 1: Start local server and verify**

```bash
cd /Users/yuuki/Works/lp-100
python3 -m http.server 8080
```

Then open `http://localhost:8080/day072/` in browser and verify:
- [ ] All sections display correctly
- [ ] Navigation links work (smooth scroll)
- [ ] Pricing tabs switch correctly
- [ ] Grade selection updates course selection
- [ ] FAQ accordion opens/closes
- [ ] Mobile menu works
- [ ] Form validation shows errors
- [ ] Responsive design works on mobile viewport

- [ ] **Step 2: Check portfolio page includes Day072**

Open `http://localhost:8080/` and verify Day072 appears in:
- [ ] FV reel (if configured)
- [ ] Featured Cases or All Works
- [ ] Category filter works (Education category)

---

**Plan complete.** All files are created with complete content. No placeholders remaining.
