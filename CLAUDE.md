# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal portfolio site for "danimim.eth" styled as a Windows 95/98 desktop:
clickable desktop icons open draggable windows, with a taskbar, Start menu, and
live clock. It is a static site — no framework, no build step, no dependencies,
no package manager, and no test suite.

## Running locally

Open `index.html` directly, or serve the directory so relative asset paths and
`fetch()` work correctly:

```
python3 -m http.server 8000   # then visit http://localhost:8000
```

There is nothing to build, lint, or test.

## Architecture

The site is rendered entirely client-side from three files, loaded in order at
the bottom of `index.html`:

1. **`assets/js/data.js`** — all site content as a single `SITE_DATA` object
   assigned to `window.SITE_DATA`. This is the only file to edit for content
   changes (experience entries, talks, links, reading list, articles, cats,
   hobbies, the Formspree endpoint, the Spotify playlist URL).

2. **`assets/js/app.js`** — one `Windows95Desktop` class, instantiated on
   `DOMContentLoaded`. It owns all behavior: window open/close/minimize/focus,
   z-index stacking, pointer-based dragging, the Start menu, the clock, and the
   contact form. `populateContent()` reads `SITE_DATA` and injects markup into
   the empty `<div id="*-content">` placeholders in `index.html`.

3. **`index.html`** — static shell. Every "window" is a `<div class="window"
   id="...">` with an empty content placeholder; the desktop and Start menu use
   `data-window` / `data-action` attributes that `app.js` wires up by querying
   the DOM.

**Key convention:** content and structure are separated. `index.html` defines
the window *shells*; `data.js` holds the *content*; `app.js` is the glue. Adding
a new section means adding a window shell in `index.html`, a content placeholder
div, content in `SITE_DATA`, and a corresponding `populate*` call.

### Notable details

- Windows are shown by toggling the `active` / `minimized` CSS classes, not by
  adding/removing DOM nodes. All windows exist in the DOM at all times.
- Folder views (Reading list, My articles) use accordion folders; their icons
  are mapped positionally via `SITE_DATA.folderIcons` (array index must line up
  with the folder order).
- The contact form posts to `SITE_DATA.FORMSPREE_ENDPOINT`; if that is falsy it
  falls back to a `mailto:` link.
- Images use inline `onerror` handlers that swap in an emoji or fallback icon,
  so missing assets degrade gracefully rather than breaking layout.
- The "Do you like cats?" Start-menu flow is an intentional gag: answering "No"
  opens an Error window instead of the gallery.

### Second page: Groove Crypto Club

`groove/` is a standalone second page served at `/groove/`, linked from the
"Groove Crypto Club" desktop icon above the Recycle Bin on the main page. It
reuses `assets/css/style.css` for the Win95 chrome and `assets/js/data.js` for
content, but has its own `groove/groove.css` and `groove/groove.js` (the
`GrooveDesktop` class — a trimmed copy of the main windowing logic). Its four
windows — Videos, Newsletter, Vinyl, Playlist — are populated from
`SITE_DATA.groove`. Because this page lives in a subfolder, asset paths in the
`groove` data block and in `groove/index.html` are root-absolute (`/assets/...`,
`/icons/...`) so they resolve correctly from `/groove/`.

### Third page: Growth (Frutiger Aero / Windows Vista theme)

`growth/` is a third standalone page served at `/growth/`, linked from the
"Growth" desktop icon above the Groove icon on the main page. **Unlike the
Win95 main page and Groove, this page is themed Frutiger Aero / Windows
Vista** — glassy translucent windows, rounded corners, aurora/sky background,
glossy orb buttons, Segoe UI typography. It therefore does NOT load
`assets/css/style.css`; `growth/growth.css` is fully self-contained.

The class is `GrowthDesktop` in `growth/growth.js`. Content is read from
`SITE_DATA.growth` in `assets/js/data.js`, with these top-level keys:

- `about` — HTML intro for the About window.
- `articlesIntro` — short line above the Articles list.
- `articles` — array of `{ id, windowId, title, status, date, summary, html }`.
  Each article has a dedicated window in `growth/index.html` whose content
  div id is `<windowId>-content`. Clicking an article card opens that window.
- `upcoming` — array of `{ title, summary }` placeholders shown after the
  real article list.
- `resources` / `toolstack` — categorized blocks rendered into the
  Resources and Tool stack windows.
- `donate` — `{ intro, address, note }` rendered in the Donate window with
  a copy-to-clipboard button. Reuses the same EVM wallet as Groove.

Adding a new article means: (1) push a new entry to `SITE_DATA.growth.articles`
with a unique `windowId`, and (2) add a matching window shell in
`growth/index.html` (`<div class="window" id="<windowId>">` with
`<div id="<windowId>-content">` inside).

Per-page icons live in `/icons/growth-*.png` and degrade to emoji via
`onerror` like the other pages. The main-page `/icons/growth.png` icon is the
one to drop into the repo's `/icons/` folder.

## Conventions

- UI text, code comments, and `console.log` debug strings are all in English.
- `data.js` and `app.js` contain leftover `console.log` debug statements — keep
  this in mind; they are not errors.
