from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
MOCKUPS = ROOT / "mockups"
PUBLIC = ROOT / "public" / "assets"


def ensure_dirs():
    for directory in [
        PUBLIC / "illustrations",
        PUBLIC / "thumbnails",
        PUBLIC / "featured",
        PUBLIC / "gallery",
        PUBLIC / "relationship",
        PUBLIC / "wallpapers",
        PUBLIC / "logos",
    ]:
        directory.mkdir(parents=True, exist_ok=True)


def crop(src, box, out, mask=None):
    image = Image.open(src).convert("RGBA").crop(box)
    if mask:
        image = apply_mask(image, mask)
    out.parent.mkdir(parents=True, exist_ok=True)
    image.save(out)


def apply_mask(image, mask_spec):
    kind = mask_spec["kind"]
    padding = mask_spec.get("padding", 0)
    feather = mask_spec.get("feather", 3)
    width, height = image.size
    mask = Image.new("L", (width, height), 0)
    draw = ImageDraw.Draw(mask)

    if kind == "ellipse":
        draw.ellipse(
            (padding, padding, width - padding, height - padding),
            fill=255,
        )
    elif kind == "rounded":
        radius = mask_spec.get("radius", 24)
        draw.rounded_rectangle(
            (padding, padding, width - padding, height - padding),
            radius=radius,
            fill=255,
        )
    elif kind == "hero":
        draw.ellipse((18, 0, width - 18, height - 18), fill=255)
        draw.rounded_rectangle((32, int(height * 0.52), width - 32, height - 8), radius=42, fill=255)
    else:
        raise ValueError(f"Unknown mask kind: {kind}")

    if feather:
        mask = mask.filter(ImageFilter.GaussianBlur(feather))

    result = image.copy()
    result.putalpha(mask)
    return result


def main():
    ensure_dirs()

    home = MOCKUPS / "home-lp.png"
    profile = MOCKUPS / "pages" / "character-profile.png"
    videos = MOCKUPS / "pages" / "video-list.png"
    gallery = MOCKUPS / "pages" / "gallery.png"

    crop(
        home,
        (17, 16, 111, 61),
        PUBLIC / "logos" / "logo-cats.png",
        {"kind": "rounded", "padding": 1, "radius": 22, "feather": 1},
    )
    crop(
        home,
        (374, 78, 835, 585),
        PUBLIC / "illustrations" / "hero-cats.png",
        {"kind": "hero", "feather": 5},
    )
    crop(
        home,
        (65, 690, 224, 857),
        PUBLIC / "illustrations" / "profile-shiro.png",
        {"kind": "ellipse", "padding": 2, "feather": 2},
    )
    crop(
        home,
        (476, 690, 620, 857),
        PUBLIC / "illustrations" / "profile-hachi.png",
        {"kind": "ellipse", "padding": 2, "feather": 2},
    )
    crop(
        profile,
        (465, 110, 826, 420),
        PUBLIC / "illustrations" / "intro-cats.png",
        {"kind": "hero", "feather": 5},
    )
    crop(
        videos,
        (450, 76, 870, 356),
        PUBLIC / "illustrations" / "video-hero-cats.png",
        {"kind": "hero", "feather": 5},
    )
    crop(
        gallery,
        (398, 102, 835, 402),
        PUBLIC / "illustrations" / "gallery-hero-cats.png",
        {"kind": "hero", "feather": 5},
    )

    profile_detail_boxes = [
        ("shiro-likes", (268, 858, 409, 982)),
        ("shiro-personality", (292, 1017, 424, 1129)),
        ("shiro-charm", (286, 1164, 424, 1284)),
        ("hachi-likes", (666, 858, 812, 984)),
        ("hachi-personality", (672, 1016, 814, 1128)),
        ("hachi-charm", (674, 1164, 817, 1284)),
    ]
    for name, box in profile_detail_boxes:
        crop(profile, box, PUBLIC / "illustrations" / f"profile-detail-{name}.png", {"kind": "rounded", "padding": 0, "radius": 12, "feather": 1})

    thumbnail_boxes = [
        ("morning-stretch", (33, 1034, 218, 1198)),
        ("snack-time", (230, 1034, 416, 1198)),
        ("window-watch", (435, 1034, 621, 1198)),
        ("weekend-games", (638, 1034, 824, 1198)),
    ]
    for name, box in thumbnail_boxes:
        crop(home, box, PUBLIC / "thumbnails" / f"{name}.png", {"kind": "rounded", "padding": 0, "radius": 10, "feather": 1})

    gallery_boxes = [
        ("nap-together", (34, 1311, 218, 1430)),
        ("box-hideout", (236, 1311, 420, 1430)),
        ("window-pair", (437, 1311, 621, 1430)),
        ("music-room", (638, 1311, 823, 1430)),
        ("soft-bed", (34, 1460, 218, 1579)),
        ("face-to-face", (236, 1460, 420, 1579)),
        ("round-sleep", (437, 1460, 621, 1579)),
        ("sunny-room", (638, 1460, 823, 1579)),
    ]
    for name, box in gallery_boxes:
        crop(home, box, PUBLIC / "gallery" / f"{name}.png", {"kind": "rounded", "padding": 0, "radius": 10, "feather": 1})

    relationship_boxes = [
        ("morning-greeting", (73, 1392, 283, 1538)),
        ("snack-meeting", (326, 1392, 536, 1538)),
        ("window-watch", (581, 1392, 792, 1538)),
    ]
    for name, box in relationship_boxes:
        crop(profile, box, PUBLIC / "relationship" / f"{name}.png", {"kind": "rounded", "padding": 0, "radius": 14, "feather": 1})

    crop(videos, (48, 416, 453, 688), PUBLIC / "featured" / "weekly-playtime.png", {"kind": "rounded", "padding": 0, "radius": 14, "feather": 1})

    video_library_boxes = [
        ("morning-stretch", (29, 814, 290, 988)),
        ("snack-time", (319, 814, 580, 988)),
        ("window-watch", (608, 814, 869, 988)),
        ("fur-grooming", (29, 1124, 290, 1298)),
        ("box-hideout", (319, 1124, 580, 1298)),
        ("night-rest", (608, 1124, 869, 1298)),
    ]
    for name, box in video_library_boxes:
        crop(videos, box, PUBLIC / "thumbnails" / f"library-{name}.png", {"kind": "rounded", "padding": 0, "radius": 10, "feather": 1})

    crop(gallery, (239, 424, 812, 720), PUBLIC / "featured" / "best-shot.png", {"kind": "rounded", "padding": 0, "radius": 16, "feather": 1})

    gallery_page_boxes = [
        ("sun-stretch", (37, 820, 223, 1045)),
        ("round-eyes", (237, 820, 424, 1045)),
        ("snack-sign", (437, 820, 624, 1045)),
        ("window-back", (638, 820, 824, 1045)),
        ("sleep-together", (37, 1110, 223, 1335)),
        ("tiny-paws", (237, 1110, 424, 1335)),
        ("box-shiro", (437, 1110, 624, 1335)),
        ("yarn-hachi", (638, 1110, 824, 1335)),
    ]
    for name, box in gallery_page_boxes:
        crop(gallery, box, PUBLIC / "gallery" / f"page-{name}.png", {"kind": "rounded", "padding": 0, "radius": 10, "feather": 1})

    wallpaper_boxes = [
        ("sunny-shiro", (43, 1450, 285, 1597)),
        ("blue-sky-pair", (309, 1450, 551, 1597)),
        ("rolling-hachi", (571, 1450, 813, 1597)),
    ]
    for name, box in wallpaper_boxes:
        crop(gallery, box, PUBLIC / "wallpapers" / f"{name}.png", {"kind": "rounded", "padding": 0, "radius": 10, "feather": 1})


if __name__ == "__main__":
    main()
