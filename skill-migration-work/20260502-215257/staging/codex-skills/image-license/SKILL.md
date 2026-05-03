---
name: "image-license"
description: "This skill should be used when the user asks about \"image license\", \"image attribution\", \"image copyright\", \"can I use this image\", \"image rights\", \"Creative Commons\", \"check image license\", \"verify image usage\", or wants to understand if an image can be legally used in their website, project, or content. Also use when checking attribution requirements for images or finding properly licensed images."
---

## Source Metadata

The source skill included additional metadata. It is preserved here for migration traceability.

```yaml
version: 1.0.0
```

# Image License Checker

This skill helps you verify whether images can be legally used in your websites, projects, or content, and ensures proper attribution when required.

## Common Image Licenses

### Free to Use (No Attribution Required)
- **CC0 (Creative Commons Zero)**: Public domain dedication, free for any use without attribution
- **Public Domain**: Copyright has expired or waived, free for any use
- **Unsplash License**: Free to use commercially, no attribution required (but appreciated)

### Free to Use (Attribution Required)
- **CC BY 4.0**: Free to use, must attribute the creator
- **CC BY-SA**: Free to use, must attribute and share alike under same license
- **CC BY-ND**: Free to use, must attribute, no derivatives allowed
- **Pexels License**: Free to use, attribution not required but appreciated

### Restricted Use
- **CC BY-NC**: Free to use for non-commercial purposes only
- **CC BY-NC-SA**: Non-commercial, attribution required, share alike
- **CC BY-NC-ND**: Non-commercial, attribution required, no derivatives
- **Standard Copyright**: Requires explicit permission from creator

## How to Check Image License

### When You Have an Image URL
1. **Check the source platform**:
   - Unsplash → Generally free (Unsplash License)
   - Pexels → Free (Pexels License)
   - Pixabay → Free (Pixabay License)
   - Pixnio → Public domain or CC0

2. **Look for license indicators**:
   - Check image page for "License", "Usage", or "Download" sections
   - Look for Creative Commons badges
   - Check EXIF metadata for copyright info

3. **Use reverse image search**:
   - Google Images, TinEye, or Bing Visual Search
   - Find original source and verify license there

### License Verification Checklist
- [ ] Identify the image source/platform
- [ ] Find the specific license terms
- [ ] Check if commercial use is allowed (if needed)
- [ ] Verify attribution requirements
- [ ] Check if modification is allowed
- [ ] Confirm if attribution must be visible (vs. hidden metadata)

## Proper Attribution Format

### Basic Attribution Template
```
Photo by [Creator Name] on [Platform Name]
```

### Creative Commons Attribution Format
```
[Image Title] by [Creator Name] is licensed under CC [License Type] (e.g., CC BY 4.0)
```

### HTML Example
```html
<a href="https://source-url.com">
  <img src="image.jpg" alt="Description">
</a>
<p>
  Photo by <a href="creator-url">Creator Name</a> on <a href="platform-url">Platform</a>,
  licensed under <a href="license-url">CC BY 4.0</a>
</p>
```

## Safe Image Sources

| Source | License | Attribution Required | Commercial Use |
|--------|---------|---------------------|----------------|
| Unsplash | Unsplash License | Optional | Yes |
| Pexels | Pexels License | Optional | Yes |
| Pixabay | Pixabay License | Optional | Yes |
| Pixnio | Public Domain/CC0 | No | Yes |
| Wikimedia Commons | Varies | Varies | Varies |
| Flickr (CC filters) | Creative Commons | Yes | Varies |

## Warning Signs

⚠️ **Avoid using images from these sources without explicit permission:**
- Google Images (without filtering by license)
- Pinterest
- Instagram
- Random websites
- Stock photo sites (watermarked images)

⚠️ **Red flags that indicate potential issues:**
- No license information visible
- "All rights reserved" notice
- Watermark present
- Source is a social media platform
- Cannot trace back to original creator

## Requesting Permission

If you find an image you want to use but the license is unclear:

1. **Contact the creator directly**
2. **Include in your request:**
   - How you plan to use the image
   - Whether it's commercial or personal use
   - Where it will be published
   - Whether you'll provide attribution
3. **Get written permission** (email or message response is sufficient)

## Tools for License Verification

- **Creative Commons Search**: https://search.creativecommons.org/
- **Google Images** (Tools → Usage Rights → Filter)
- **Unsplash**: All images free under Unsplash License
- **Pexels**: All images free under Pexels License
- **TinEye**: Reverse image search to find original source

## Quick Decision Flow

```
Is the license clearly stated?
├── No → DON'T USE or contact creator
└── Yes → Is it commercial use?
    ├── Yes → Does license allow commercial use?
    │   ├── No → DON'T USE
    │   └── Yes → Use with proper attribution if required
    └── No (personal use) → Use with proper attribution if required
```

## Questions to Ask About Your Image

When verifying an image for use, provide:
1. Where you found the image (URL)
2. How you plan to use it (website, blog, commercial, personal)
3. Whether you can modify/resize the image
4. What attribution format you're planning to use

This skill will help you verify the license and ensure compliance.
