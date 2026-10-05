# Fumitsuki's personal website

A static personal website at <https://fumitsuki.tw/>, published from `master` with GitHub Pages. No build step or application dependencies are required.

## Files

- `index.html`: introduction, latest talk, interests, experience, talk archive, and sharing metadata.
- `styles.css`: responsive layout and the C / Moonlight wordmark animation.
- `main.js`: optional photo lightbox using a native `<dialog>`; image links still work without JavaScript.
- `images/`: photos, favicon, and the 1200 × 630 sharing image (`social-preview.png`).
- `fonts/`: the Cormorant Garamond subset for `Fumitsuki` and its SIL Open Font License. The subset only includes the name's characters.
- `CNAME`: GitHub Pages custom domain. Keep existing public asset paths intact.
- `AGENTS.md`: shared guidance for coding agents; `CLAUDE.md` imports it.

## Local preview

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open <http://127.0.0.1:8765/>. Check narrow phones and desktop layouts, reduced motion, keyboard navigation, photo viewing, and the page without JavaScript. The site was migrated from AMP to standard HTML in October 2026.

Keep the sharing image consistent with the wordmark when updating the visual identity. Keep the latest talk near the top of the page; move its predecessor into the archive. Update employment information in both the visible content and metadata when it changes.

`images/favicon.svg` is the source for the moon-and-star icon. Keep the 32 × 32 PNG fallback and the opaque 180 × 180 Apple touch icon in sync with it. Bump the icon links' version query when changing them so browsers can refresh their cached favicon.
