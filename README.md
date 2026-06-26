# Vanya BK — GitHub Pages redesign

A responsive, one-page portfolio for `VanyaBK/vanyabk.github.io`. It is plain HTML, CSS, and JavaScript—no build tools, framework, or GitHub Actions required.

## Files

- `index.html` — site content and metadata
- `styles.css` — responsive visual system, animations, and accessibility styles
- `script.js` — mobile navigation, motion reveal, and current footer year
- `assets/favicon.svg` — site favicon

## Publish to GitHub Pages

From a clean checkout of `VanyaBK/vanyabk.github.io`, replace the old homepage files with the contents of this folder and commit/push to the branch GitHub Pages publishes (usually `main`).

```bash
cp -R /path/to/vanyabk-github-pages-redesign/. /path/to/vanyabk.github.io/
git add index.html styles.css script.js assets README.md
git commit -m "Redesign personal website"
git push
```

GitHub Pages should redeploy automatically. The site needs no separate build command.

## Content decisions

- Research, employment, and publication content reflect the supplied resume.
- The site uses the publicly listed Gmail contact rather than an employer address.
- A CV PDF is intentionally not bundled. This avoids accidentally publishing your phone number; add a downloadable CV only after creating a web-safe version.
- The Self-Correction publication is presented as a workshop item without an invented paper URL. Add its canonical public link when you have one.

## Local preview

```bash
cd /path/to/vanyabk-github-pages-redesign
python3 -m http.server 8000
```

Open `http://localhost:8000`.
