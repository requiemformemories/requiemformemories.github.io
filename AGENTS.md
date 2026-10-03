# Repository guidance

These rules apply to Codex, Claude, and other coding agents working in this repository.

## Project structure

- This is Fumitsuki's personal website, hosted on GitHub Pages with the custom domain in `CNAME`.
- `index.html` contains semantic HTML and metadata, `styles.css` contains the responsive layout and animation, and `main.js` progressively enhances photo links with a native dialog. Images live in `images/`; the self-hosted wordmark font and its license live in `fonts/`.
- There is no build step, package manifest, or automated test suite. Keep small changes dependency-free; do not introduce a framework or build pipeline unless requested.
- Preserve `CNAME` and existing public paths unless the task explicitly requires changing them.

## Content and markup

- Use Traditional Chinese for prose and preserve the owner's voice. Keep proper names and technical terms as supplied. Do not rewrite personal descriptions into generic portfolio copy; layout work should preserve the original wording unless copy changes are requested.
- Do not invent employment details, dates, talk abstracts, or links. Keep the latest talk in the featured section and older talks in reverse chronological order in the archive; avoid duplicating the latest talk.
- Experience entries normally contain organization, role, and dates only. Keep the National Taiwan University Library and Information Science Lab 12 description unless asked otherwise.
- The site uses standard HTML, not AMP. Use native elements, meaningful image `alt` text, explicit intrinsic dimensions, and lazy loading for below-the-fold images.
- Keep CSS readable in `styles.css` and JavaScript small in `main.js`. Content, navigation, and image links must remain usable without JavaScript.
- Preserve existing anchors `#workexp` and `#talks`. Use native anchor links, accessible headings, visible keyboard focus, and keyboard-operable photo dialogs.
- Keep the C / Moonlight wordmark animation brief and finite. Respect `prefers-reduced-motion`; the full name must remain visible when animation is disabled.
- Keep canonical, Open Graph, Twitter, and structured data consistent with `https://fumitsuki.tw/` and the current page. Do not infer an event's year solely from a slide URL slug.

## Responsive layout and images

- Fix the cause of horizontal overflow (box sizing, fixed widths, flex minimum widths, or text wrapping). Do not hide the problem with page-wide `overflow-x: hidden`.
- Keep images within their containers and check narrow screens as well as desktop layouts.
- Compress new raster assets before committing, preserve aspect ratio and orientation, and strip unnecessary metadata. Use descriptive filenames such as `coscup2026.jpg`.
- Aim for at most 200 KB for ordinary photos; inspect assets over 500 KB or with a long edge over 1920px. These are review thresholds, not reasons to sacrifice legibility or lightbox quality.
- Report unreferenced large assets before deleting or recompressing them; they may still have public consumers.
- Keep the wordmark font subset small and retain its open-source license. The current subset only contains the letters in `Fumitsuki`; regenerate it before changing that text.

## Verification

- Preview locally with `python3 -m http.server 8765 --bind 127.0.0.1`.
- For layout changes, use a real browser at widths 320, 360, 390, 768, 1024, and 1440px. Confirm `document.documentElement.scrollWidth <= window.innerWidth`, inspect the layout, and check affected navigation and image lightboxes.
- After markup changes, check HTML, local asset paths, image dimensions, metadata, and supplied links. Exercise the lightbox with keyboard and touch-sized viewports, reduced motion, and JavaScript disabled. Do not claim checks passed if a required tool was unavailable.
- Run `git diff --check` and review the diff before committing. Keep temporary browser scripts, screenshots, dependencies, and audit output outside the repository.

## Commits

- Use Conventional Commits: `<type>(optional-scope): <description>`, for example `fix: prevent horizontal overflow on mobile` or `feat: add COSCUP 2026 participation`.
- Prefer small commits grouped by purpose. Do not include unrelated changes or commit credentials, original oversized photos, or temporary files.
- Summarize the changes, verification performed, and any remaining limitations when handing off.
