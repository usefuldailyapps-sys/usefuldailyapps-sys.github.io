# Useful Daily Apps — Website

Landing page for [usefuldailyapps-sys.github.io](https://usefuldailyapps-sys.github.io/).

Static site — pure HTML, CSS, and a small dash of JavaScript. No build step.

## Local preview

Open `index.html` directly in your browser, or serve the folder:

```powershell
# Python
python -m http.server 8080

# Node (npx)
npx serve .
```

Then visit `http://localhost:8080`.

## Deploy to GitHub Pages

This site is meant to live at the **root** of the `usefuldailyapps-sys.github.io` repository.

1. Create (or clone) the repository `usefuldailyapps-sys.github.io` on the `usefuldailyapps-sys` org/account.
2. Copy the contents of this folder to the repo root.
3. Commit and push to `main`.
4. In repo **Settings → Pages**, set the source to `main` branch, `/` (root).

GitHub will serve the site at `https://usefuldailyapps-sys.github.io/` within a minute or two.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Markup, structure, and content for every section |
| `styles.css` | All styling — design tokens, layout, animations |
| `script.js` | Scroll reveal, nav state, mouse parallax, card tilt |
| `favicon.svg` | Browser tab icon |

## Apps featured

- **FinTracker** — Personal finance tracking. [Live](https://play.google.com/store/apps/details?id=com.santhoshkumr96.fintracker)
- **FileTracker** — Personal document vault. [Live](https://play.google.com/store/apps/details?id=com.santhoshkumr96.docvault)
- **PantryPal** — Kitchen inventory. [Live](https://play.google.com/store/apps/details?id=com.santhoshkumr96.pantrypal)
- **OneThing** — Single-focus productivity. [Coming soon](https://play.google.com/store/apps/details?id=com.santhoshkumr96.onething)
- **Cadence** — Flexible habit tracker. In closed testing.
