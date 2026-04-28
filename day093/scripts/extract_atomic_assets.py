from pathlib import Path

from PIL import Image, ImageDraw


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public" / "reference-mockups"
OUT = ROOT / "public" / "extracted" / "atomic"


def load(section):
    return Image.open(SOURCE / f"{section}.png").convert("RGBA")


def trim_alpha(image, padding=4):
    alpha = image.getchannel("A")
    bbox = alpha.getbbox()
    if bbox is None:
        return image
    left = max(0, bbox[0] - padding)
    top = max(0, bbox[1] - padding)
    right = min(image.width, bbox[2] + padding)
    bottom = min(image.height, bbox[3] + padding)
    return image.crop((left, top, right, bottom))


def transparent_background(crop, mode="soft"):
    pixels = crop.load()
    for y in range(crop.height):
        for x in range(crop.width):
            r, g, b, a = pixels[x, y]
            mx = max(r, g, b)
            mn = min(r, g, b)
            sat = mx - mn
            if mode == "soft":
                remove = (r > 238 and g > 238 and b > 232) or (mx > 232 and sat < 20)
            else:
                remove = r > 246 and g > 246 and b > 242
            if remove:
                pixels[x, y] = (r, g, b, 0)
    return trim_alpha(crop)


def save_isolated(section, box, name, mode="soft"):
    image = load(section)
    crop = image.crop(box)
    transparent_background(crop, mode=mode).save(OUT / f"{name}.png")


def save_rect(section, box, name, radius=0):
    image = load(section)
    crop = image.crop(box)
    if radius:
        mask = Image.new("L", crop.size, 0)
        draw = ImageDraw.Draw(mask)
        draw.rounded_rectangle((0, 0, crop.width, crop.height), radius=radius, fill=255)
        crop.putalpha(mask)
    crop.save(OUT / f"{name}.png")


def save_phone(section, box, name, radius=76, scale=2):
    image = load(section)
    crop = image.crop(box)
    if scale != 1:
        crop = crop.resize((crop.width * scale, crop.height * scale), Image.Resampling.LANCZOS)
        radius *= scale
    mask = Image.new("L", crop.size, 0)
    draw = ImageDraw.Draw(mask)
    inset = max(2, int(2 * scale))
    draw.rounded_rectangle((inset, inset, crop.width - inset, crop.height - inset), radius=radius, fill=255)
    crop.putalpha(mask)
    trim_alpha(crop, padding=0).save(OUT / f"{name}.png")


def main():
    OUT.mkdir(parents=True, exist_ok=True)

    # Logo / recurring decorative motifs. Each crop is isolated by color and
    # then trimmed to the visible object, leaving transparent bounds.
    isolated_assets = [
        ("home", (88, 28, 150, 90), "logo-crescent"),
        ("home", (650, 196, 770, 310), "moon-peach-home"),
        ("home", (1472, 175, 1550, 250), "star-lilac-home"),
        ("home", (1506, 626, 1568, 690), "star-peach-home"),
        ("home", (850, 430, 890, 470), "star-mint-home"),
        ("features", (650, 120, 735, 205), "moon-peach-features"),
        ("features", (1510, 478, 1555, 525), "star-mint-features"),
        ("report", (85, 118, 165, 200), "moon-peach-report"),
        ("report", (1475, 198, 1535, 260), "star-mint-report"),
        ("pricing", (292, 142, 372, 220), "moon-mint-pricing"),
        ("pricing", (415, 118, 452, 150), "star-peach-pricing"),
        ("pricing", (1272, 150, 1296, 178), "star-lilac-pricing"),
        ("voices", (80, 112, 145, 175), "moon-peach-voices"),
        ("voices", (1485, 770, 1550, 835), "moon-peach-voices-bottom"),
        ("faq", (220, 118, 292, 190), "moon-peach-faq"),
        ("guide", (1510, 118, 1572, 180), "moon-peach-guide"),
        ("download", (70, 120, 150, 205), "moon-mint-download"),
        ("download", (1510, 102, 1582, 185), "moon-peach-download"),
        ("privacy", (685, 145, 855, 325), "privacy-shield"),
        ("privacy", (1350, 300, 1425, 365), "privacy-cloud"),
    ]
    for section, box, name in isolated_assets:
        save_isolated(section, box, name)

    # Complex app UI screenshots and pictorial content. These are retained as
    # atomic images because exact recreation would require raster detail.
    save_phone("home", (1008, 93, 1392, 760), "phone-home")
    save_phone("features", (1198, 89, 1505, 760), "phone-features", radius=58)
    save_phone("report", (1218, 284, 1440, 806), "phone-report", radius=50)
    save_phone("privacy", (1208, 272, 1424, 806), "phone-privacy", radius=48)
    save_rect("download", (768, 128, 1372, 730), "phones-download", radius=76)

    # Article / QR / store artwork from the mockups.
    save_rect("guide", (148, 319, 510, 540), "guide-featured-photo", radius=10)
    save_rect("guide", (147, 597, 344, 730), "guide-thumb-drink", radius=8)
    save_rect("guide", (391, 597, 590, 730), "guide-thumb-phone", radius=8)
    save_rect("guide", (636, 597, 834, 730), "guide-thumb-stretch", radius=8)
    save_rect("guide", (881, 597, 1078, 730), "guide-thumb-bath", radius=8)
    save_rect("download", (158, 451, 388, 616), "store-buttons", radius=8)
    save_rect("download", (477, 488, 610, 623), "qr-code", radius=6)


if __name__ == "__main__":
    main()
