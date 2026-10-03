# Repository guidance

These rules apply to Codex, Claude, and other coding agents working in this repository.

## Project structure

- This is Fumitsuki's personal website, hosted on GitHub Pages with the custom domain in `CNAME`.
- `index.html` contains the page content, AMP markup, and inline CSS. Images live in `images/`.
- There is no build step, package manifest, or automated test suite. Keep small changes dependency-free; do not introduce a framework or build pipeline unless requested.
- Preserve `CNAME` and existing public paths unless the task explicitly requires changing them.

## Content and markup

- Use Traditional Chinese for prose and preserve the owner's voice. Keep proper names and technical terms as supplied.
- Do not invent employment details, dates, talk abstracts, or links. Add community participation in reverse chronological order and follow the existing card structure.
- Experience entries normally contain organization, role, and dates only. Keep the National Taiwan University Library and Information Science Lab 12 description unless asked otherwise.
- Preserve AMP compatibility: use `amp-img` with explicit closing tags, meaningful `alt` text, dimensions matching the asset's aspect ratio, and a suitable responsive layout.
- Keep styles inside the existing `style[amp-custom]`. Preserve AMP boilerplate and required component scripts; do not add arbitrary client-side JavaScript.
- Keep new CSS readable. Avoid reformatting the existing minified utility CSS or unrelated page content.

## Responsive layout and images

- Fix the cause of horizontal overflow (box sizing, fixed widths, flex minimum widths, or text wrapping). Do not hide the problem with page-wide `overflow-x: hidden`.
- Keep images within their containers and check narrow screens as well as desktop layouts.
- Compress new raster assets before committing, preserve aspect ratio and orientation, and strip unnecessary metadata. Use descriptive filenames such as `coscup2026.jpg`.
- Aim for at most 200 KB for ordinary photos; inspect assets over 500 KB or with a long edge over 1920px. These are review thresholds, not reasons to sacrifice legibility or lightbox quality.
- Report unreferenced large assets before deleting or recompressing them; they may still have public consumers.

## Verification

- Preview locally with `python3 -m http.server 8765 --bind 127.0.0.1`.
- For layout changes, use a real browser at widths 320, 360, 390, 768, 1024, and 1440px. Confirm `document.documentElement.scrollWidth <= window.innerWidth`, inspect the layout, and check affected navigation and image lightboxes.
- Validate AMP after markup changes. Check changed local image paths, dimensions, and supplied links; do not claim checks passed if a required tool was unavailable.
- Run `git diff --check` and review the diff before committing. Keep temporary browser scripts, screenshots, dependencies, and audit output outside the repository.

## Commits

- Use Conventional Commits: `<type>(optional-scope): <description>`, for example `fix: prevent horizontal overflow on mobile` or `feat: add COSCUP 2026 participation`.
- Prefer small commits grouped by purpose. Do not include unrelated changes or commit credentials, original oversized photos, or temporary files.
- Summarize the changes, verification performed, and any remaining limitations when handing off.
