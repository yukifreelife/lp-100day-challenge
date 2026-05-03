from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
ASSETS_DIR = ROOT / "public" / "assets"
OG_DIR = ASSETS_DIR / "og"
FONT_DIR = Path("/System/Library/Fonts")
RESPONSIVE_WIDTHS = [320, 480, 640, 960, 1200]


def load_font(size, weight="W8"):
    candidates = [
        FONT_DIR / f"ヒラギノ角ゴシック {weight}.ttc",
        FONT_DIR / "Hiragino Sans GB.ttc",
        FONT_DIR / "Helvetica.ttc",
    ]

    for candidate in candidates:
        if candidate.exists():
            return ImageFont.truetype(str(candidate), size=size)

    return ImageFont.load_default()


def save_modern_formats(path, responsive=False):
    image = Image.open(path)

    if image.mode not in {"RGB", "RGBA"}:
        image = image.convert("RGBA")

    outputs = []

    def save_pair(target_image, target_path):
        webp_path = target_path.with_suffix(".webp")
        avif_path = target_path.with_suffix(".avif")
        target_image.save(webp_path, "WEBP", quality=86, method=6)
        target_image.save(avif_path, "AVIF", quality=68, speed=6)
        outputs.extend([webp_path, avif_path])

    save_pair(image, path)

    if responsive:
        for width in RESPONSIVE_WIDTHS:
            if width >= image.width:
                continue

            height = round(image.height * (width / image.width))
            resized = image.resize((width, height), Image.Resampling.LANCZOS)
            target_path = path.with_name(f"{path.stem}-{width}{path.suffix}")
            save_pair(resized, target_path)

    return outputs


def draw_rounded_shadow(base, box, radius=28, offset=(0, 18), blur=28, fill=(37, 35, 33, 34)):
    shadow = Image.new("RGBA", base.size, (0, 0, 0, 0))
    shadow_draw = ImageDraw.Draw(shadow)
    x1, y1, x2, y2 = box
    ox, oy = offset
    shadow_draw.rounded_rectangle((x1 + ox, y1 + oy, x2 + ox, y2 + oy), radius=radius, fill=fill)
    base.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(blur)))


def text_size(draw, text, font):
    left, top, right, bottom = draw.textbbox((0, 0), text, font=font)
    return right - left, bottom - top


def draw_centered_text(draw, xy, text, font, fill):
    x, y = xy
    width, height = text_size(draw, text, font)
    draw.text((x - width / 2, y - height / 2), text, font=font, fill=fill)


def create_ogp():
    OG_DIR.mkdir(parents=True, exist_ok=True)

    canvas = Image.new("RGBA", (1200, 630), (251, 250, 246, 255))
    draw = ImageDraw.Draw(canvas)

    # Fur-like soft diagonal strokes.
    for x in range(-220, 1320, 72):
        draw.line((x, 0, x + 280, 630), fill=(232, 225, 214, 66), width=4)
        draw.line((x + 28, 0, x + 308, 630), fill=(255, 255, 255, 130), width=2)

    draw.ellipse((-110, 370, 290, 770), fill=(255, 216, 77, 44))
    draw.ellipse((860, -170, 1300, 270), fill=(74, 168, 255, 42))

    draw_rounded_shadow(canvas, (74, 62, 1126, 568), radius=42)
    draw.rounded_rectangle((74, 62, 1126, 568), radius=42, fill=(255, 253, 248, 232), outline=(232, 225, 214, 210), width=3)

    title_font = load_font(88, "W8")
    lead_font = load_font(34, "W6")
    small_font = load_font(26, "W6")
    badge_font = load_font(28, "W8")

    # Odd-eye motif.
    draw.ellipse((142, 112, 188, 158), fill=(74, 168, 255, 255))
    draw.ellipse((214, 112, 260, 158), fill=(255, 216, 77, 255))
    draw.ellipse((156, 126, 174, 144), fill=(37, 35, 33, 190))
    draw.ellipse((228, 126, 246, 144), fill=(37, 35, 33, 190))

    draw.text((136, 190), "しろとはちの", font=title_font, fill=(37, 35, 33, 255))
    draw.text((136, 298), "ひなた時間", font=title_font, fill=(37, 35, 33, 255))
    draw.text((142, 414), "2匹の猫と過ごす、やさしい日常", font=lead_font, fill=(75, 72, 67, 255))

    draw.rounded_rectangle((142, 486, 552, 536), radius=12, fill=(242, 72, 61, 255))
    draw_centered_text(draw, (347, 508), "架空YouTubeチャンネルLP", badge_font, (255, 255, 255, 255))

    # Simple whiskers.
    for y in (470, 488, 506):
        draw.arc((492, y - 20, 650, y + 44), start=198, end=342, fill=(75, 72, 67, 180), width=3)
        draw.arc((584, y - 20, 742, y + 44), start=198, end=342, fill=(75, 72, 67, 180), width=3)

    hero = Image.open(ASSETS_DIR / "illustrations" / "hero-cats.png").convert("RGBA")
    hero.thumbnail((430, 474), Image.Resampling.LANCZOS)
    shadow = Image.new("RGBA", hero.size, (0, 0, 0, 0))
    shadow.alpha_composite(hero)
    shadow = shadow.filter(ImageFilter.GaussianBlur(14))
    shadow_alpha = shadow.getchannel("A").point(lambda value: int(value * 0.18))
    shadow.putalpha(shadow_alpha)
    canvas.alpha_composite(shadow, (724, 118))
    canvas.alpha_composite(hero, (704, 96))

    logo = Image.open(ASSETS_DIR / "logos" / "logo-cats.png").convert("RGBA")
    logo.thumbnail((132, 64), Image.Resampling.LANCZOS)
    canvas.alpha_composite(logo, (938, 466))
    draw.text((862, 532), "しろとはちのひなた時間", font=small_font, fill=(75, 72, 67, 255))

    output_path = OG_DIR / "ogp-shiro-hachi.png"
    canvas.convert("RGB").save(output_path, "PNG", optimize=True)
    save_modern_formats(output_path)

    return output_path


def create_icon_assets():
    hero = Image.open(ASSETS_DIR / "illustrations" / "hero-cats.png").convert("RGBA")
    logo = Image.open(ASSETS_DIR / "logos" / "logo-cats.png").convert("RGBA")

    canvas = Image.new("RGBA", (512, 512), (251, 250, 246, 255))
    draw = ImageDraw.Draw(canvas)

    for x in range(-120, 620, 48):
        draw.line((x, 0, x + 200, 512), fill=(232, 225, 214, 68), width=4)

    draw.ellipse((-78, 360, 176, 614), fill=(255, 216, 77, 56))
    draw.ellipse((356, -82, 598, 160), fill=(74, 168, 255, 54))
    draw.rounded_rectangle((34, 34, 478, 478), radius=94, fill=(255, 253, 248, 238), outline=(232, 225, 214, 220), width=4)

    hero.thumbnail((372, 410), Image.Resampling.LANCZOS)
    canvas.alpha_composite(hero, ((512 - hero.width) // 2, 72))

    logo.thumbnail((112, 54), Image.Resampling.LANCZOS)
    canvas.alpha_composite(logo, (200, 398))

    icon_512 = ROOT / "public" / "icon-512.png"
    icon_192 = ROOT / "public" / "icon-192.png"
    apple_icon = ROOT / "public" / "apple-touch-icon.png"
    favicon = ROOT / "public" / "favicon.ico"

    canvas.save(icon_512, "PNG", optimize=True)
    canvas.resize((192, 192), Image.Resampling.LANCZOS).save(icon_192, "PNG", optimize=True)
    canvas.resize((180, 180), Image.Resampling.LANCZOS).save(apple_icon, "PNG", optimize=True)
    canvas.save(favicon, sizes=[(16, 16), (32, 32), (48, 48)])

    return [icon_512, icon_192, apple_icon, favicon]


def main():
    png_paths = [
        path
        for path in ASSETS_DIR.rglob("*.png")
        if "/mockups/" not in path.as_posix() and "/og/" not in path.as_posix()
    ]

    generated = []
    for path in png_paths:
        generated.extend(save_modern_formats(path, responsive=True))

    ogp_path = create_ogp()
    icon_paths = create_icon_assets()
    print(f"converted source pngs: {len(png_paths)}")
    print(f"generated modern files: {len(generated) + 2}")
    print(f"created ogp: {ogp_path.relative_to(ROOT)}")
    print(f"created icons: {len(icon_paths)}")


if __name__ == "__main__":
    main()
