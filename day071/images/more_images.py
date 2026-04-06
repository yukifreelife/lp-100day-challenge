#!/usr/bin/env python3
"""
Day071 Additional Images
Creates more SVG images for ROAST LAB LP
"""

import os
from pathlib import Path

# Colors
COLORS = {
    'primary': '#6f4e37',
    'secondary': '#a67b5b',
    'accent': '#c4a484',
}

base = Path(__file__).parent
(base / 'gallery').mkdir(exist_ok=True)
(base / 'menu').mkdir(exist_ok=True)

def create_svg(content, width, height, filename, bg_color):
    """Create an SVG file"""
    svg = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="{width}" height="{height}">
    <rect width="100%" height="100%" fill="{bg_color}"/>
    {content}
</svg>'''

    filepath = base / filename
    with open(filepath, 'w') as f:
        f.write(svg)
    print(f'Created: {filename}')

# More gallery images
additional_gallery = [
    ('barista-01', '#d4c4b0', '👨‍🍳'),
    ('coffee-cup-01', '#8b6914', '☕'),
    ('cafe-sign', '#6f4e37', '🪧'),
    ('pastry-case', '#f09433', '🧁'),
    ('coffee-bag', '#c4a484', '🛍️'),
    ('morning-light', '#e8d4bf', '🌅'),
]

for name, color, emoji in additional_gallery:
    content = f'''
<text x="300" y="240" font-size="80" text-anchor="middle" opacity="0.5">{emoji}</text>
<circle cx="150" cy="350" r="80" fill="{COLORS['accent']}" opacity="0.2"/>
<circle cx="450" cy="150" r="60" fill="{COLORS['primary']}" opacity="0.15"/>
'''
    create_svg(content, 600, 450, f'gallery/{name}.jpg.svg', color)

# More menu items
additional_menu = [
    ('americano', '#4a3525'),
    ('mocha', '#8b4513'),
    ('matcha-latte', '#7dae38'),
    ('cold-brew', '#3d2914'),
    ('croissant', '#daa520'),
    ('scone', '#c4a35a'),
]

for name, color in additional_menu:
    content = f'''
<circle cx="150" cy="150" r="120" fill="{color}" opacity="0.5"/>
<circle cx="150" cy="150" r="80" fill="#ffffff" opacity="0.15"/>
'''
    create_svg(content, 300, 300, f'menu/{name}.jpg.svg', color)

print('\n✅ Additional images created!')
