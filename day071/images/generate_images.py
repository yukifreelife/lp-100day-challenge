#!/usr/bin/env python3
"""
Day071 Image Generator
Creates SVG placeholder images for ROAST LAB LP
"""

import os
from pathlib import Path

# Colors from design system
COLORS = {
    'primary': '#6f4e37',
    'secondary': '#a67b5b',
    'accent': '#c4a484',
    'text': '#2c2c2c',
    'bg': '#faf8f5',
    'white': '#ffffff',
}

def create_svg(content, width, height, filename, colors=None):
    """Create an SVG file with the given content"""
    if colors is None:
        colors = COLORS

    gradient = f'''<defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:{colors['secondary']};stop-opacity:1" />
            <stop offset="100%" style="stop-color:{colors['primary']};stop-opacity:1" />
        </linearGradient>
    </defs>'''

    svg = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="{width}" height="{height}">
    {gradient}
    <rect width="100%" height="100%" fill="url(#grad)"/>
    {content}
</svg>'''

    filepath = Path(__file__).parent / filename
    filepath.parent.mkdir(parents=True, exist_ok=True)
    with open(filepath, 'w') as f:
        f.write(svg)
    print(f'Created: {filename}')

# Create images directory structure
base = Path(__file__).parent
(base / 'hero').mkdir(exist_ok=True)
(base / 'about').mkdir(exist_ok=True)
(base / 'origins').mkdir(exist_ok=True)
(base / 'menu').mkdir(exist_ok=True)
(base / 'beans').mkdir(exist_ok=True)
(base / 'gallery').mkdir(exist_ok=True)

# Hero Background (1920x1080)
hero_content = '''
<circle cx="960" cy="540" r="400" fill="{colors['accent']}" opacity="0.3"/>
<circle cx="700" cy="400" r="200" fill="{colors['white']}" opacity="0.1"/>
<circle cx="1200" cy="700" r="250" fill="{colors['accent']}" opacity="0.2"/>
<!-- Coffee beans scattered -->
<ellipse cx="400" cy="800" rx="30" ry="20" fill="{colors['primary']}" opacity="0.4" transform="rotate(-30 400 800)"/>
<ellipse cx="1500" cy="300" rx="25" ry="15" fill="{colors['primary']}" opacity="0.3" transform="rotate(45 1500 300)"/>
<ellipse cx="200" cy="200" rx="20" ry="12" fill="{colors['secondary']}" opacity="0.3" transform="rotate(15 200 200)"/>
<ellipse cx="1700" cy="900" rx="28" ry="18" fill="{colors['primary']}" opacity="0.35" transform="rotate(-20 1700 900)"/>
<!-- Steam lines -->
<path d="M 800 350 Q 820 300 800 250" stroke="{colors['white']}" stroke-width="3" fill="none" opacity="0.3" stroke-linecap="round"/>
<path d="M 850 380 Q 870 330 850 280" stroke="{colors['white']}" stroke-width="2" fill="none" opacity="0.25" stroke-linecap="round"/>
<path d="M 750 360 Q 770 310 750 260" stroke="{colors['white']}" stroke-width="2" fill="none" opacity="0.2" stroke-linecap="round"/>
'''
create_svg(hero_content, 1920, 1080, 'hero/hero-bg.jpg.svg',
           {'primary': '#5a3e2c', 'secondary': '#8b6914', 'accent': '#c4a484'})

# Roaster Image (800x600)
roaster_content = f'''
<rect x="250" y="150" width="300" height="350" rx="20" fill="{COLORS['text']}" opacity="0.3"/>
<circle cx="400" cy="320" r="100" fill="{COLORS['accent']}" opacity="0.4"/>
<circle cx="400" cy="320" r="60" fill="{COLORS['white']}" opacity="0.2"/>
<rect x="300" y="450" width="200" height="40" rx="5" fill="{COLORS['text']}" opacity="0.2"/>
<!-- Heat glow -->
<ellipse cx="400" cy="480" rx="120" ry="20" fill="{COLORS['accent']}" opacity="0.3"/>
'''
create_svg(roaster_content, 800, 600, 'about/roaster.jpg.svg')

# Origin Cards
origin_configs = [
    ('ethiopia-yirgacheffe', '#d4a574', '#8b6914', '☕'),
    ('colombia-narino', '#a67c52', '#6b5210', '🌱'),
    ('guatemala-antigua', '#7b5a3a', '#4a3525', '🏔️'),
]
for name, color1, color2, emoji in origin_configs:
    content = f'''
<circle cx="200" cy="150" r="80" fill="{color1}" opacity="0.4"/>
<text x="200" y="180" font-size="60" text-anchor="middle">{emoji}</text>
<circle cx="350" cy="280" r="50" fill="{color2}" opacity="0.3"/>
<circle cx="80" cy="320" r="40" fill="{color1}" opacity="0.25"/>
'''
    create_svg(content, 400, 300, f'origins/{name}.jpg.svg',
               {'primary': color2, 'secondary': color1, 'accent': COLORS['accent']})

# Menu Items
menu_items = [
    ('espresso', '#4a3525'),
    ('cappuccino', '#c4a484'),
    ('latte', '#d4c4b0'),
    ('sandwich', '#a67c52'),
    ('quiche', '#8b6914'),
    ('cheesecake', '#f09433'),
]
for name, color in menu_items:
    content = f'''
<circle cx="150" cy="150" r="100" fill="{color}" opacity="0.5"/>
<rect x="100" y="200" width="100" height="80" rx="10" fill="{COLORS['white']}" opacity="0.2"/>
'''
    create_svg(content, 300, 300, f'menu/{name}.jpg.svg')

# Bean Products
bean_configs = [
    ('house-blend', '#6f4e37', '●○●'),
    ('ethiopia', '#8b6914', '◐○◐'),
    ('brazil', '#c4a35a', '○●○'),
]
for name, color, pattern in bean_configs:
    content = f'''
<rect width="100%" height="100%" fill="{color}"/>
<text x="150" y="140" font-size="48" text-anchor="middle" fill="{COLORS['white']}" opacity="0.4">{pattern}</text>
<ellipse cx="100" cy="250" rx="40" ry="25" fill="{COLORS['white']}" opacity="0.15" transform="rotate(-30 100 250)"/>
<ellipse cx="200" cy="220" rx="35" ry="22" fill="{COLORS['white']}" opacity="0.12" transform="rotate(20 200 220)"/>
'''
    create_svg(content, 300, 300, f'beans/{name}.jpg.svg')

# Gallery Images (600x450 or 600x600)
gallery_configs = [
    ('interior-01', '#f5e6d3', '🪑'),
    ('interior-02', '#e8d4bf', '☕'),
    ('latte-art', '#d4c4b0', '🫖'),
    ('pour-over', '#a67b5b', '💧'),
    ('sweets-01', '#f09433', '🍰'),
    ('coffee-beans', '#6f4e37', '🫘'),
    ('roasting', '#c9b1a9', '🔥'),
]
for name, color, emoji in gallery_configs:
    content = f'''
<rect width="100%" height="100%" fill="{color}"/>
<text x="300" y="240" font-size="80" text-anchor="middle" opacity="0.5">{emoji}</text>
'''
    create_svg(content, 600, 450, f'gallery/{name}.jpg.svg')

# Favicon
favicon_content = f'''
<rect width="100%" height="100%" fill="{COLORS['primary']}"/>
<text x="16" y="24" font-size="20" fill="{COLORS['white']}" font-weight="bold">R</text>
'''
create_svg(favicon_content, 32, 32, 'favicon.svg')

print('\n✅ All images generated successfully!')
print('📁 Images directory structure created.')
