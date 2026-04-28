from collections import deque
from pathlib import Path
import json
import shutil

from PIL import Image, ImageEnhance


ROOT = Path(__file__).resolve().parents[1]
GENERATED = Path("/Users/yuuki/.codex/generated_images/019dd1c3-4a07-76e3-8565-e99a4b79e7f2")
OUT_ROOT = ROOT / "public" / "assets" / "nemunote-v2"
SOURCE_DIR = OUT_ROOT / "sources"
REFERENCE_DIR = OUT_ROOT / "references"
ASSET_DIR = OUT_ROOT / "extracted"
CURATED_DIR = OUT_ROOT / "curated"


SOURCES = {
    "icons-a": "ig_01af5bfa1f31e5f50169f018e0f0e48191a4fd03a395a01e24.png",
    "icons-b": "ig_01af5bfa1f31e5f50169f02ce270ac819185efcfc2382b561b.png",
    "photos": "ig_01af5bfa1f31e5f50169f02dc6ad088191b16361c454dd70fd.png",
    "app-assets": "ig_05e5b5ef2e7fa9dd0169f067bc75188191aa722be7f3c8862b.png",
    "lp-reference": "ig_05e5b5ef2e7fa9dd0169f068709d0481918e15fd5c879dc425.png",
}


MOCKUP_REFERENCES = {
    "mock-section-01-hero.png": "ig_01af5bfa1f31e5f50169f0157cb98c81919ded054b8cfbcd10.png",
    "mock-section-02-features.png": "ig_01af5bfa1f31e5f50169f0163dbb708191879ce7e97ae63365.png",
    "mock-section-03-report.png": "ig_01af5bfa1f31e5f50169f0167dbf588191b5e8cdff82842da4.png",
    "mock-section-04-pricing.png": "ig_01af5bfa1f31e5f50169f016c49d50819198fc7dff51745dc8.png",
    "mock-section-05-guide.png": "ig_01af5bfa1f31e5f50169f0170eef808191b1edcafcdfb8ffa0.png",
    "mock-section-06-download.png": "ig_01af5bfa1f31e5f50169f0175ebae88191a8f6856eb8790eb6.png",
    "mock-section-07-privacy.png": "ig_01af5bfa1f31e5f50169f017a449d881918d6ee048271b5383.png",
    "mock-section-08-support.png": "ig_01af5bfa1f31e5f50169f017e5f3bc819187a4a6b5d7f7c0a1.png",
    "mock-section-09-faq.png": "ig_01af5bfa1f31e5f50169f0182d22c08191a1d52545c61400bb.png",
}


REFERENCE_CROPS = {
    "lp-hero-phone-combo.png": (429, 57, 806, 451),
    "lp-download-photo-band.png": (0, 1592, 374, 1752),
    "lp-app-icon.png": (96, 1659, 169, 1730),
    "lp-badge-app-store.png": (386, 1708, 480, 1736),
    "lp-badge-google-play.png": (504, 1708, 615, 1736),
    "lp-qr-download-card.png": (687, 1620, 816, 1748),
    "lp-qr-download-code.png": (656, 1662, 756, 1748),
}


NAME_HINTS = {
    "icons-a": [
        "moon-cloud-stars",
        "star-small-01",
        "star-small-02",
        "star-small-03",
        "star-small-04",
        "cloud-sleep",
        "shield-privacy",
        "score-ring-icon",
        "music-note-icon",
        "sun-icon",
        "phone-mini",
    ],
    "icons-b": [
        "moon-stars",
        "shield-lock-icon",
        "star-outline-icon",
        "music-note-icon",
        "sun-icon",
        "bell-icon",
        "bar-chart-icon",
        "bed-icon",
        "phone-icon",
        "mail-icon",
        "headphones-icon",
        "cloud-sleep",
    ],
    "photos": [
        "photo-bedside-lamp",
        "photo-phone-bed",
        "photo-morning-window",
        "photo-bath",
        "photo-forest-light",
        "photo-white-bedroom",
    ],
    "app-assets": [
        "phone-dashboard",
        "phone-weekly-report",
        "photo-plant-window",
        "photo-bedside-table",
        "photo-bath-small",
        "score-ring-badge",
        "music-badge",
        "morning-badge",
        "cloud-large",
    ],
}


CURATED_MAP = {
    "phone-dashboard.png": "app-assets-01-phone-dashboard.png",
    "phone-weekly-report.png": "app-assets-02-phone-weekly-report.png",
    "photo-white-bed-plant.png": "app-assets-03-photo-plant-window.png",
    "photo-bedside-book-lamp.png": "app-assets-04-photo-bedside-table.png",
    "photo-warm-bath.png": "app-assets-05-photo-bath-small.png",
    "decor-mint-crescent-large.png": "app-assets-06-score-ring-badge.png",
    "decor-peach-star-large.png": "app-assets-07-music-badge.png",
    "decor-peach-star-soft.png": "app-assets-08-morning-badge.png",
    "decor-lilac-star-large.png": "app-assets-09-cloud-large.png",
    "decor-lilac-star-small.png": "app-assets-10-asset-10.png",
    "decor-lilac-cloud.png": "app-assets-12-asset-12.png",
    "icon-sleep-score-badge.png": "app-assets-13-asset-13.png",
    "icon-sleep-sound-badge.png": "app-assets-14-asset-14.png",
    "icon-morning-reflection-badge.png": "app-assets-15-asset-15.png",
    "decor-sleeping-moon.png": "icons-a-01-moon-cloud-stars.png",
    "decor-star-mint.png": "icons-a-02-star-small-01.png",
    "decor-star-lilac.png": "icons-a-03-star-small-02.png",
    "decor-star-peach.png": "icons-a-04-star-small-03.png",
    "decor-cloud-sleep.png": "icons-a-05-star-small-04.png",
    "icon-privacy-shield.png": "icons-a-13-asset-13.png",
    "icon-score-ring.png": "icons-a-12-asset-12.png",
    "icon-music-note.png": "icons-a-11-phone-mini.png",
    "icon-smile-sleep.png": "icons-a-14-asset-14.png",
    "icon-sun-face.png": "icons-a-19-asset-19.png",
    "icon-bath.png": "icons-b-22-asset-22.png",
    "icon-bell.png": "icons-b-23-asset-23.png",
    "icon-bar-chart.png": "icons-b-24-asset-24.png",
    "icon-phone-list.png": "icons-b-29-asset-29.png",
    "icon-headset.png": "icons-b-30-asset-30.png",
    "icon-mail.png": "icons-b-31-asset-31.png",
    "photo-guide-bedside.png": "photos-01-photo-bedside-lamp.png",
    "photo-guide-phone-bed.png": "photos-02-photo-phone-bed.png",
    "photo-guide-morning-window.png": "photos-03-photo-morning-window.png",
    "photo-guide-forest.png": "photos-04-photo-bath.png",
    "photo-guide-bath.png": "photos-05-photo-forest-light.png",
    "photo-guide-rain-window.png": "photos-06-photo-white-bedroom.png",
}


def is_key_pixel(r, g, b):
    return g > 180 and r < 95 and b < 95 and g > r * 1.8 and g > b * 1.8


def chroma_to_alpha(image):
    rgba = image.convert("RGBA")
    pixels = rgba.load()
    for y in range(rgba.height):
        for x in range(rgba.width):
            r, g, b, a = pixels[x, y]
            if is_key_pixel(r, g, b):
                pixels[x, y] = (r, g, b, 0)
    return rgba


def alpha_mask(image):
    alpha = image.getchannel("A")
    return alpha.load()


def components(image, min_area=700):
    mask = alpha_mask(image)
    w, h = image.size
    seen = bytearray(w * h)
    found = []
    for y in range(h):
        for x in range(w):
            idx = y * w + x
            if seen[idx] or mask[x, y] == 0:
                continue
            q = deque([(x, y)])
            seen[idx] = 1
            area = 0
            left = right = x
            top = bottom = y
            while q:
                cx, cy = q.popleft()
                area += 1
                left = min(left, cx)
                right = max(right, cx)
                top = min(top, cy)
                bottom = max(bottom, cy)
                for nx, ny in ((cx + 1, cy), (cx - 1, cy), (cx, cy + 1), (cx, cy - 1)):
                    if nx < 0 or ny < 0 or nx >= w or ny >= h:
                        continue
                    nidx = ny * w + nx
                    if seen[nidx] or mask[nx, ny] == 0:
                        continue
                    seen[nidx] = 1
                    q.append((nx, ny))
            if area >= min_area:
                found.append({"area": area, "box": (left, top, right + 1, bottom + 1)})
    found.sort(key=lambda item: (item["box"][1], item["box"][0]))
    return found


def trim_component(image, box, padding=8):
    left, top, right, bottom = box
    left = max(0, left - padding)
    top = max(0, top - padding)
    right = min(image.width, right + padding)
    bottom = min(image.height, bottom + padding)
    return image.crop((left, top, right, bottom)), (left, top, right, bottom)


def main():
    SOURCE_DIR.mkdir(parents=True, exist_ok=True)
    REFERENCE_DIR.mkdir(parents=True, exist_ok=True)
    ASSET_DIR.mkdir(parents=True, exist_ok=True)
    CURATED_DIR.mkdir(parents=True, exist_ok=True)

    manifest = {
        "description": "NemuNote v2 reusable generated assets. Source sheets are preserved, extracted assets are transparent PNGs.",
        "sources": {},
        "references": {},
        "assets": [],
    }

    for source_key, filename in SOURCES.items():
        src = GENERATED / filename
        if not src.exists():
            raise FileNotFoundError(src)
        copied = SOURCE_DIR / f"{source_key}.png"
        shutil.copy2(src, copied)
        manifest["sources"][source_key] = str(copied.relative_to(ROOT))

        if source_key == "lp-reference":
            continue

        image = chroma_to_alpha(Image.open(src))
        comps = components(image, min_area=500 if source_key.startswith("icons") else 1400)
        hints = NAME_HINTS.get(source_key, [])
        for index, comp in enumerate(comps, start=1):
            crop, padded_box = trim_component(image, comp["box"])
            hint = hints[index - 1] if index - 1 < len(hints) else f"asset-{index:02d}"
            filename_out = f"{source_key}-{index:02d}-{hint}.png"
            out = ASSET_DIR / filename_out
            crop.save(out)
            manifest["assets"].append(
                {
                    "id": filename_out.removesuffix(".png"),
                    "file": str(out.relative_to(ROOT)),
                    "source": source_key,
                    "box": list(padded_box),
                    "size": [crop.width, crop.height],
                    "usage": infer_usage(source_key, hint),
                }
            )

    for reference_name, filename in MOCKUP_REFERENCES.items():
        src = GENERATED / filename
        if not src.exists():
            raise FileNotFoundError(src)
        copied = REFERENCE_DIR / reference_name
        shutil.copy2(src, copied)
        manifest["references"][reference_name.removesuffix(".png")] = str(copied.relative_to(ROOT))

    (OUT_ROOT / "asset-manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")

    curated_manifest = {
        "description": "Curated reusable assets for the next NemuNote LP implementation. Use these first; extracted/ contains raw auto-sliced extras.",
        "assets": [],
    }
    for curated_name, extracted_name in CURATED_MAP.items():
        src = ASSET_DIR / extracted_name
        if not src.exists():
            raise FileNotFoundError(src)
        dst = CURATED_DIR / curated_name
        shutil.copy2(src, dst)
        with Image.open(dst) as image:
            curated_manifest["assets"].append(
                {
                    "id": curated_name.removesuffix(".png"),
                    "file": str(dst.relative_to(ROOT)),
                    "sourceExtract": str(src.relative_to(ROOT)),
                    "size": [image.width, image.height],
                    "usage": infer_usage("curated", curated_name),
                }
            )

    lp_reference = Image.open(SOURCE_DIR / "lp-reference.png").convert("RGBA")
    for cropped_name, box in REFERENCE_CROPS.items():
        crop = lp_reference.crop(box)
        dst = CURATED_DIR / cropped_name
        crop.save(dst)
        curated_manifest["assets"].append(
            {
                "id": cropped_name.removesuffix(".png"),
                "file": str(dst.relative_to(ROOT)),
                "sourceExtract": str((SOURCE_DIR / "lp-reference.png").relative_to(ROOT)),
                "box": list(box),
                "size": [crop.width, crop.height],
                "usage": infer_usage("reference-crop", cropped_name),
            }
        )

    muted_src = CURATED_DIR / "photo-white-bed-plant.png"
    muted_dst = CURATED_DIR / "photo-white-bed-plant-muted.png"
    source_image = Image.open(muted_src).convert("RGBA")
    base = Image.new("RGBA", source_image.size, (252, 252, 248, 255))
    base.alpha_composite(source_image)
    muted = ImageEnhance.Color(base.convert("RGB")).enhance(0.12)
    muted = ImageEnhance.Brightness(muted).enhance(1.08)
    muted = ImageEnhance.Contrast(muted).enhance(0.92)
    muted.save(muted_dst)
    curated_manifest["assets"].append(
        {
            "id": "photo-white-bed-plant-muted",
            "file": str(muted_dst.relative_to(ROOT)),
            "sourceExtract": str(muted_src.relative_to(ROOT)),
            "size": [muted.width, muted.height],
            "usage": "muted hero background photo derived from curated bedroom photo",
        }
    )
    (OUT_ROOT / "curated-manifest.json").write_text(json.dumps(curated_manifest, ensure_ascii=False, indent=2), encoding="utf-8")


def infer_usage(source_key, hint):
    if "phone" in hint:
        return "app UI screenshot / device mockup"
    if hint.startswith("photo"):
        return "sleep guide or article thumbnail"
    if "moon" in hint or "star" in hint or "cloud" in hint:
        return "decorative LP motif"
    if "icon" in hint or "badge" in hint or "shield" in hint or "music" in hint or "sun" in hint:
        return "feature, pricing, privacy, or support icon"
    return "general reusable LP asset"


if __name__ == "__main__":
    main()
