#!/usr/bin/env python3
"""
Day071 Realistic Image Generator
Creates realistic SVG images for ROAST LAB LP
"""

import os
from pathlib import Path
import base64
from typing import Tuple

base = Path(__file__).parent

# Create directories
(base / 'hero').mkdir(exist_ok=True)
(base / 'about').mkdir(exist_ok=True)
(base / 'barista').mkdir(exist_ok=True)
(base / 'origins').mkdir(exist_ok=True)
(base / 'menu').mkdir(exist_ok=True)
(base / 'beans').mkdir(exist_ok=True)
(base / 'gallery').mkdir(exist_ok=True)

def create_coffee_svg(style: str = 'espresso', size: Tuple[int, int] = (600, 400)) -> str:
    """Create a coffee cup SVG"""
    import uuid
    w, h = size
    gradient_id = f"cupGrad_{uuid.uuid4().hex[:6]}"
    coffee_id = f"coffeeGrad_{uuid.uuid4().hex[:6]}"
    shadow_id = f"shadow_{uuid.uuid4().hex[:6]}"

    colors = {
        'espresso': {'cup': '#2c1810', 'coffee': '#1a0f0a', 'foam': '#d4a574'},
        'latte': {'cup': '#f5f5f5', 'coffee': '#8b6914', 'foam': '#f5f5f5'},
        'cappuccino': {'cup': '#f5f5f5', 'coffee': '#8b6914', 'foam': '#d4a574'},
        'americano': {'cup': '#e8e8e8', 'coffee': '#2c1810', 'foam': '#d4a574'},
        'mocha': {'cup': '#f5f5f5', 'coffee': '#3d2914', 'foam': '#c4a35a'},
        'coldbrew': {'cup': '#8bc34a', 'coffee': '#1a0f0a', 'ice': '#87ceeb'},
    }

    if style not in colors:
        style = 'espresso'

    c = colors[style]

    svg = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">
    <defs>
        <linearGradient id="{gradient_id}" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:{c['cup']};stop-opacity:1" />
            <stop offset="100%" style="stop-color:{c['cup']};stop-opacity:0.8" />
        </linearGradient>
        <linearGradient id="{coffee_id}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:{c['coffee']};stop-opacity:1" />
            <stop offset="100%" style="stop-color:{c['coffee']};stop-opacity:0.9" />
        </linearGradient>
        <filter id="{shadow_id}">
            <feDropShadow dx="0" dy="4" stdDeviation="8" flood-opacity="0.3"/>
        </filter>
    </defs>

    <!-- Saucer -->
    <ellipse cx="{w//2}" cy="{h-40}" rx="{w//2-20}" ry="12" fill="#e0e0e0" opacity="0.5"/>

    <!-- Cup -->
    <path d="M {w//2-80} {h-120} Q {w//2-80} {h-40} {w//2+80} {h-40} Q {w//2+80} {h-120} {w//2-80} {h-120}"
          fill="url(#{gradient_id})" filter="url(#{shadow_id})"/>

    <!-- Coffee liquid -->
    <ellipse cx="{w//2}" cy="{h-110}" rx="{w//2-85}" ry="{h-180}" fill="url(#{coffee_id})"/>

    <!-- Foam for latte/cappuccino -->
    {generate_foam(w, h, c['foam'], style, gradient_id)}

    <!-- Steam -->
    {generate_steam(w, h, gradient_id)}
</svg>'''
    return svg

def generate_foam(w, h, color, style, gradient_id):
    if style not in ['latte', 'cappuccino']:
        return ''

    foam_circles = ''
    positions = [(0, -15), (25, -20), (-25, -18), (15, -25), (-20, -22)]

    for i, (x_offset, y_offset) in enumerate(positions):
        cx = w//2 + x_offset
        cy = h - 110 + y_offset
        foam_circles += f'<circle cx="{cx}" cy="{cy}" r="{8 + i}" fill="{color}" opacity="0.8"/>'

    return foam_circles

def generate_steam(w, h, gradient_id):
    steam_lines = ''
    for i in range(3):
        x = w//2 - 20 + i * 20
        steam_lines += f'<path d="M {x} {h-140} Q {x+5} {h-160} {x} {h-180}" stroke="#ffffff" stroke-width="2" fill="none" opacity="{0.4 - i*0.1}" stroke-linecap="round"/>'
    return steam_lines

def create_roaster_svg() -> str:
    """Create a coffee roaster SVG"""
    w, h = 800, 600
    svg = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">
    <defs>
        <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#8b7355"/>
            <stop offset="50%" style="stop-color:#6f4e37"/>
            <stop offset="100%" style="stop-color:#4a3525"/>
        </linearGradient>
        <linearGradient id="drumGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#c9a484"/>
            <stop offset="100%" style="stop-color:#6f4e37"/>
        </linearGradient>
        <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
    </defs>

    <!-- Background -->
    <rect width="100%" height="100%" fill="#faf8f5"/>

    <!-- Roaster Body -->
    <ellipse cx="400" cy="450" rx="200" ry="30" fill="#4a3525"/>
    <rect x="200" y="150" width="400" height="300" rx="20" fill="url(#metalGrad)"/>

    <!-- Drum -->
    <ellipse cx="400" cy="150" rx="160" ry="40" fill="url(#drumGrad)"/>
    <ellipse cx="400" cy="150" rx="140" ry="30" fill="#2c1810"/>

    <!-- Window -->
    <ellipse cx="400" cy="200" rx="100" ry="80" fill="#1a0f0a" opacity="0.8"/>

    <!-- Handle -->
    <path d="M 600 180 Q 700 200 720 250" stroke="#8b7355" stroke-width="15" fill="none" stroke-linecap="round"/>
    <path d="M 200 180 Q 100 200 80 250" stroke="#8b7355" stroke-width="15" fill="none" stroke-linecap="round"/>

    <!-- Tray -->
    <rect x="150" y="500" width="500" height="20" rx="10" fill="#8b7355"/>

    <!-- Coffee beans -->
    <ellipse cx="250" cy="480" rx="12" ry="8" fill="#6f4e37" transform="rotate(-30 250 480)"/>
    <ellipse cx="300" cy="485" rx="12" ry="8" fill="#5c4428" transform="rotate(15 300 485)"/>
    <ellipse cx="500" cy="482" rx="12" ry="8" fill="#6f4e37" transform="rotate(-20 500 482)"/>
    <ellipse cx="550" cy="488" rx="12" ry="8" fill="#5c4428" transform="rotate(25 550 488)"/>

    <!-- Heat glow -->
    <ellipse cx="400" cy="540" rx="100" ry="15" fill="#c4a484" opacity="0.3" filter="url(#glow)"/>
</svg>'''
    return svg

def create_origin_svg(country: str, w: int = 400, h: int = 300) -> str:
    """Create origin country SVG"""
    colors = {
        'ethiopia': {'bg': '#d4a574', 'accent': '#8b6914', 'icon': '☕'},
        'colombia': {'bg': '#a67c52', 'accent': '#6b5210', 'icon': '🌱'},
        'guatemala': {'bg': '#7b5a3a', 'accent': '#4a3525', 'icon': '🏔️'},
    }

    if country not in colors:
        country = 'ethiopia'

    c = colors[country]

    svg = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">
    <defs>
        <linearGradient id="originGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:{c['accent']};stop-opacity:0.3"/>
            <stop offset="100%" style="stop-color:{c['bg']};stop-opacity:1"/>
        </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="{c['bg']}"/>

    <!-- Coffee farm illustration -->
    <circle cx="{w//2}" cy="{h//2}" r="{min(w,h)//3}" fill="{c['accent']}" opacity="0.3"/>

    <!-- Mountains/hills -->
    <path d="M 0 {h} Q {w//3} {h//2} {w//2} {h//3 + 20} L {w} {h} Z" fill="{c['accent']}" opacity="0.2"/>

    <!-- Coffee cherries -->
    <g transform="translate({w//2}, {h//2})">
        <circle cx="0" cy="-30" r="12" fill="#c4a35a"/>
        <circle cx="20" cy="-25" r="11" fill="#b33d22"/>
        <circle cx="-15" cy="-20" r="10" fill="#a02820"/>
    </g>

    <!-- Country icon -->
    <text x="{w//2}" y="{h-30}" font-size="60" text-anchor="middle">{c['icon']}</text>
</svg>'''
    return svg

def create_bean_svg(bean_type: str, w: int = 300, h: int = 300) -> str:
    """Create coffee bean SVG"""
    colors = {
        'house-blend': {'light': '#8b6914', 'dark': '#5c4428', 'accent': '#c4a35a'},
        'ethiopia': {'light': '#c4a35a', 'dark': '#8b6914', 'accent': '#f5d4a5'},
        'brazil': {'light': '#c9a67c', 'dark': '#7b5a3a', 'accent': '#d4a35a'},
    }

    if bean_type not in colors:
        bean_type = 'house-blend'

    c = colors[bean_type]

    svg = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/0/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">
    <defs>
        <linearGradient id="beanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:{c['light']};stop-opacity:1"/>
            <stop offset="50%" style="stop-color:{c['dark']};stop-opacity:1"/>
            <stop offset="100%" style="stop-color:{c['light']};stop-opacity:0.8"/>
        </linearGradient>
        <filter id="beanShadow">
            <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.3"/>
        </filter>
    </defs>

    <!-- Background -->
    <rect width="100%" height="100%" fill="#faf8f5"/>

    <!-- Coffee beans scattered -->
    <!-- Bean 1 -->
    <ellipse cx="100" cy="80" rx="18" ry="12" fill="url(#beanGrad)" transform="rotate(-25 100 80)" filter="url(#beanShadow)"/>
    <!-- Bean 2 -->
    <ellipse cx="220" cy="120" rx="18" ry="12" fill="url(#beanGrad)" transform="rotate(35 220 120)" filter="url(#beanShadow)"/>
    <!-- Bean 3 -->
    <ellipse cx="150" cy="200" rx="18" ry="12" fill="url(#beanGrad)" transform="rotate(-15 150 200)" filter="url(#beanShadow)"/>
    <!-- Bean 4 -->
    <ellipse cx="80" cy="220" rx="18" ry="12" fill="url(#beanGrad)" transform="rotate(40 80 220)" filter="url(#beanShadow)"/>
    <!-- Bean 5 -->
    <ellipse cx="250" cy="220" rx="18" ry="12" fill="url(#beanGrad)" transform="rotate(-30 250 220)" filter="url(#beanShadow)"/>
    <!-- Bean 6 -->
    <ellipse cx="180" cy="160" rx="18" ry="12" fill="url(#beanGrad)" transform="rotate(20 180 160)" filter="url(#beanShadow)"/>

    <!-- Center line (bean package seam) -->
    <line x1="100" y1="80" x2="100" y2="80" stroke="{c['dark']}" stroke-width="1"/>
    <line x1="220" y1="120" x2="220" y2="120" stroke="{c['dark']}" stroke-width="1" transform="rotate(35 220 120)"/>

    <!-- Label -->
    <text x="{w//2}" y="{h-30}" font-size="16" font-weight="bold" fill="{c['dark']}" text-anchor="middle" opacity="0.6">{bean_type.upper().replace('-', ' ')}</text>
</svg>'''
    return svg

def create_gallery_svg(scene: str, w: int = 600, h: int = 450) -> str:
    """Create gallery scene SVG"""
    scenes = {
        'interior-01': {'bg': '#f5e6d3', 'elements': '🪑☕💻'},
        'interior-02': {'bg': '#e8d4bf', 'elements': '👥☕💬'},
        'latte-art': {'bg': '#d4c4b0', 'elements': '☕🎨❄️'},
        'pour-over': {'bg': '#a67b5b', 'elements': '🫗💧⏱️'},
        'sweets-01': {'bg': '#f09433', 'elements': '🍰🧁🎂'},
        'coffee-beans': {'bg': '#6f4e37', 'elements': '🫘🫘🫘'},
        'roasting': {'bg': '#c9b1a9', 'elements': '🔥🌡️☕'},
        'barista-01': {'bg': '#d4c4b0', 'elements': '👨‍🍳☕'},
        'coffee-cup-01': {'bg': '#f5f5f5', 'elements': '☕'},
        'cafe-sign': {'bg': '#6f4e37', 'elements': '☕🪧'},
        'pastry-case': {'bg': '#f09433', 'elements': '🥐🥨🧁'},
        'morning-light': {'bg': '#ffe4b5', 'elements': '☀️☕🌅'},
    }

    if scene not in scenes:
        scene = 'interior-01'

    s = scenes[scene]

    svg = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">
    <defs>
        <linearGradient id="sceneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.3"/>
            <stop offset="100%" style="stop-color:{s['bg']};stop-opacity:0.2"/>
        </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="{s['bg']}"/>
    <rect width="100%" height="100%" fill="url(#sceneGrad)"/>

    <!-- Scene elements as emoji -->
    <text x="{w//2}" y="{h//2}" font-size="100" text-anchor="middle" opacity="0.6">{s['elements']}</text>

    <!-- Subtle texture -->
    <circle cx="{w*0.2}" cy="{h*0.3}" r="50" fill="#ffffff" opacity="0.1"/>
    <circle cx="{w*0.8}" cy="{h*0.7}" r="80" fill="#000000" opacity="0.05"/>
</svg>'''
    return svg

def create_food_svg(food_type: str, w: int = 300, h: int = 300) -> str:
    """Create food item SVG"""
    foods = {
        'sandwich': {'bg': '#deb887', 'food': '🥪', 'accent': '#8b4513'},
        'quiche': {'bg': '#f5e6d3', 'food': '🥧', 'accent': '#ffd700'},
        'cheesecake': {'bg': '#f09433', 'food': '🍰', 'accent': '#fff8dc'},
        'croissant': {'bg': '#daa520', 'food': '🥐', 'accent': '#c4a35a'},
        'scone': {'bg': '#c4a35a', 'food': '🧁', 'accent': '#8b4513'},
        'blt': {'bg': '#cd853f', 'food': '🥪', 'accent': '#228b22'},
    }

    if food_type not in foods:
        food_type = 'sandwich'

    f = foods[food_type]

    svg = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">
    <defs>
        <radialGradient id="plateGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1"/>
            <stop offset="100%" style="stop-color:#e0e0e0;stop-opacity:1"/>
        </radialGradient>
        <filter id="foodShadow">
            <feDropShadow dx="3" dy="3" stdDeviation="5" flood-opacity="0.3"/>
        </filter>
    </defs>

    <!-- Plate -->
    <ellipse cx="{w//2}" cy="{h//2+20}" rx="{w//2-20}" ry="{h//2-20}" fill="url(#plateGrad)"/>
    <ellipse cx="{w//2}" cy="{h//2+20}" rx="{w//2-30}" ry="{h//2-30}" fill="#c9c9c9"/>

    <!-- Food item -->
    <text x="{w//2}" y="{h//2}" font-size="120" text-anchor="middle" filter="url(#foodShadow)">{f['food']}</text>
</svg>'''
    return svg

def create_hero_bg() -> str:
    """Create hero background SVG"""
    w, h = 1920, 1080
    svg = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/0/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">
    <defs>
        <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#6f4e37"/>
            <stop offset="50%" style="stop-color:#8b5e3c"/>
            <stop offset="100%" style="stop-color:#4a3525"/>
        </linearGradient>
        <filter id="blur">
            <feGaussianBlur stdDeviation="50"/>
        </filter>
    </defs>

    <!-- Background -->
    <rect width="100%" height="100%" fill="url(#heroGrad)"/>

    <!-- Coffee elements -->
    <g opacity="0.1">
        <!-- Large beans in background -->
        <ellipse cx="200" cy="900" rx="150" ry="100" fill="#a67b5b"/>
        <ellipse cx="1700" cy="150" rx="200" ry="140" fill="#8b5e3c"/>
        <ellipse cx="500" cy="200" rx="120" ry="80" fill="#6f4e37"/>
        <ellipse cx="1400" cy="950" rx="180" ry="120" fill="#a67b5b"/>
    </g>

    <!-- Warm overlay -->
    <rect width="100%" height="100%" fill="url(#heroGrad)" opacity="0.3"/>
</svg>'''
    return svg

def save_svg(content: str, filename: str):
    """Save SVG to file"""
    filepath = base / filename
    filepath.parent.mkdir(parents=True, exist_ok=True)
    with open(filepath, 'w') as f:
        f.write(content)
    print(f'Created: {filename}')

# Generate images
print('Creating realistic SVG images...')

# Hero
save_svg(create_hero_bg(), 'hero/hero-bg.jpg.svg')

# Roaster
save_svg(create_roaster_svg(), 'about/roaster.jpg.svg')

# Origins
save_svg(create_origin_svg('ethiopia'), 'origins/ethiopia-yirgacheffe.jpg.svg')
save_svg(create_origin_svg('colombia'), 'origins/colombia-narino.jpg.svg')
save_svg(create_origin_svg('guatemala'), 'origins/guatemala-antigua.jpg.svg')

# Menu items - Drinks
save_svg(create_coffee_svg('espresso'), 'menu/espresso.jpg.svg')
save_svg(create_coffee_svg('cappuccino'), 'menu/cappuccino.jpg.svg')
save_svg(create_coffee_svg('latte'), 'menu/latte.jpg.svg')
save_svg(create_coffee_svg('americano'), 'menu/americano.jpg.svg')
save_svg(create_coffee_svg('mocha'), 'menu/mocha.jpg.svg')
save_svg(create_coffee_svg('coldbrew'), 'menu/cold-brew.jpg.svg')
save_svg(create_coffee_svg('matcha'), 'menu/matcha-latte.jpg.svg')

# Menu items - Food
save_svg(create_food_svg('sandwich'), 'menu/sandwich.jpg.svg')
save_svg(create_food_svg('quiche'), 'menu/quiche.jpg.svg')
save_svg(create_food_svg('cheesecake'), 'menu/cheesecake.jpg.svg')
save_svg(create_food_svg('croissant'), 'menu/croissant.jpg.svg')
save_svg(create_food_svg('scone'), 'menu/scone.jpg.svg')
save_svg(create_food_svg('blt'), 'menu/blt.jpg.svg')

# Beans
save_svg(create_bean_svg('house-blend'), 'beans/house-blend.jpg.svg')
save_svg(create_bean_svg('ethiopia'), 'beans/ethiopia.jpg.svg')
save_svg(create_bean_svg('brazil'), 'beans/brazil.jpg.svg')

# Gallery
save_svg(create_gallery_svg('interior-01'), 'gallery/interior-01.jpg.svg')
save_svg(create_gallery_svg('interior-02'), 'gallery/interior-02.jpg.svg')
save_svg(create_gallery_svg('latte-art'), 'gallery/latte-art.jpg.svg')
save_svg(create_gallery_svg('pour-over'), 'gallery/pour-over.jpg.svg')
save_svg(create_gallery_svg('sweets-01'), 'gallery/sweets-01.jpg.svg')
save_svg(create_gallery_svg('coffee-beans'), 'gallery/coffee-beans.jpg.svg')
save_svg(create_gallery_svg('roasting'), 'gallery/roasting.jpg.svg')
save_svg(create_gallery_svg('barista-01'), 'gallery/barista-01.jpg.svg')
save_svg(create_gallery_svg('coffee-cup-01'), 'gallery/coffee-cup-01.jpg.svg')
save_svg(create_gallery_svg('cafe-sign'), 'gallery/cafe-sign.jpg.svg')
save_svg(create_gallery_svg('pastry-case'), 'gallery/pastry-case.jpg.svg')
save_svg(create_gallery_svg('morning-light'), 'gallery/morning-light.jpg.svg')

print('\\n✅ All realistic images created successfully!')
print(f'Total images generated: {len(list(base.rglob("**/*.svg")))}')
