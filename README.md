<!-- xonettn -->
<div align="center">

# 💼 Reusable Tech Portfolio

Portfolio of Neal Frazier, an AI and Software Security Developer building intelligent security solutions, modern web apps, and practical automation.


![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white) ![Three.js](https://img.shields.io/badge/Three.js-000000?logo=three.js&logoColor=white) ![Framer](https://img.shields.io/badge/Framer_Motion-0055FF?logo=framer&logoColor=white) ![Netlify](https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=white)

![Deploy](https://img.shields.io/badge/Deployed-Netlify-00C7B7?logo=netlify&logoColor=white)

</div>

---

## 📋 Overview
Portfolio of Neal Frazier, an AI and Software Security Developer building intelligent security solutions, modern web apps, and practical automation.

## 📦 Tech Stack
- React
- Vite
- Tailwind CSS
- Netlify (deployed)

## 🗂️ Project Structure
```
reusable-tech-portfolio/
  - plugins
  - public
  - src
  - tools
  (104 files total)
```

## 🚀 Getting Started

### 📋 Prerequisites
- Node.js (v18+)
- npm or yarn

### 📦 Installation
```bash
git clone https://github.com/1nc0gn30/reusable-tech-portfolio.git
cd reusable-tech-portfolio
npm install
```

### 💻 Development
```bash
npm run dev
```

### 🔨 Build
```bash
npm run build
```

### ⚙️ Available Scripts
  npm run dev - vite --host :: --port 3000
  npm run build - mkdir -p ../../dist/apps && node tools/generate-llms.js || true && vite build --outDir ../../dist/apps/web
  npm run build:netlify - node tools/generate-llms.js || true && vite build --outDir dist
  npm run start - vite preview --outDir ../../dist/apps/web --host :: --port 3000
  npm run lint - eslint . --quiet
  npm run lint:warn - eslint .

## 📂 Original README
<details>
<summary>Click to expand original README</summary>

# Portfolio Web App

[![Deploy to Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?logo=netlify&logoColor=white)](https://app.netlify.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18-149ECA?logo=react&logoColor=white)](https://react.dev/)

A modern React + Vite portfolio with cinematic 3D visuals, runtime style customization, and Netlify-ready deployment.

## 👁️ Preview

![Portfolio Preview](./public/og-image.png)

## Highlights

- Bold single-page portfolio layout: hero, projects, about, contact
- Interactive Three.js background with real GLB assets
- Runtime customization panel:
  - 15 theme variants
  - 8 font options
- Netlify-ready setup:
  - SPA redirects
  - Netlify Forms contact form
  - `netlify.toml` included
- SEO baseline included:
  - Open Graph + Twitter cards
  - Canonical URL + JSON-LD
  - `robots.txt` + `sitemap.xml`

## 📦 Tech Stack

- React 18
- Vite 7
- Tailwind CSS
- Framer Motion
- Three.js

## 🗂️ Project Structure

- `src/config/portfolioConfig.js`: site content, links, theme defaults, 3D settings
- `src/lib/applyTheme.js`: runtime theme and font system
- `src/components/Three3DScene.jsx`: 3D scene and GLB loading
- `src/pages/HomePage.jsx`: main page sections and Netlify contact form
- `public/models`: GLB assets
- `netlify.toml`: Netlify build/publish/redirect config
- `public/_redirects`: SPA fallback routing

## 💻 Local Development

```bash
npm install
npm run dev
```

Default local URL: `http://localhost:3000`

## 🔨 Build

General production build:

```bash
npm run build
```

Netlify build (outputs to `dist`):

```bash
npm run build:netlify
```

## Customization Guide

### 1. Personal Info and Content

Edit `src/config/portfolioConfig.js`:

- `brand`: name, role, hero copy, about text
- `links`: GitHub/LinkedIn/website URLs
- `projects`: project cards and links

### 2. Theme and Font Options

Runtime options are defined in `src/lib/applyTheme.js`:

- `THEME_OPTIONS`: label + mode (`light` or `dark`)
- `themePalettes`: HSL token sets
- `FONT_OPTIONS`: font families + Google Fonts URLs

### 3. 3D Scene and Models

3D settings live in `src/config/portfolioConfig.js > three`:

- particle count/spread
- motion/parallax smoothing
- model list (`models`)

Model files are served from `public/models` and referenced like:

```js
{ path: '/models/DamagedHelmet.glb', scale: 2.3, position: [-8, 4, -4], spinY: 0.0018 }
```

## Included GLB Assets

This repo currently includes sample models from Khronos glTF Sample Models:

- `DamagedHelmet.glb`
- `BoomBox.glb`
- `Avocado.glb`

Source: https://github.com/KhronosGroup/glTF-Sample-Models

## 🚀 Netlify Deployment

This repo already includes:

- `netlify.toml`
- `public/_redirects`
- Netlify form markup in `index.html` and `HomePage.jsx`

### 🚀 Deploy Steps

1. Push repo to GitHub
2. Import project in Netlify
3. Build command: `npm run build:netlify`
4. Publish directory: `dist`

## 📬 Netlify Contact Form

The contact form is configured for Netlify Forms with:

- `data-netlify="true"`
- `data-netlify-honeypot="bot-field"`
- hidden static registration form in `index.html`

After first deploy, verify submissions in Netlify:

- Site dashboard -> `Forms` -> `contact`

## ⚙️ SEO Setup

Configured in `index.html`:

- `title`, `description`, `author`
- `canonical`
- Open Graph tags
- Twitter card tags
- JSON-LD (`Person` schema)

Also included:

- `public/robots.txt`
- `public/sitemap.xml`

If your domain changes, update all references from:

- `https://simple-portfolio.nealfrazier.tech/`

## ✅ Public Release Checklist

Before sharing publicly:

1. Replace placeholder project URLs (`*.example.com`) with real links
2. Verify all personal/profile links in `portfolioConfig.js`
3. Confirm OG image exists at `public/og-image.png`
4. Run:
   - `npm run lint`
   - `npm run build:netlify`
5. Confirm `.gitignore` is respected and no secrets are tracked

## 📜 License

MIT License. See `LICENSE`.

</details>

## 📝 TODO / Roadmap
- [ ] Add unit tests
- [ ] Add Dockerfile for containerized deployment
- [ ] Add CI/CD pipeline
- [ ] Add contribution guidelines (CONTRIBUTING.md)
- [ ] Improve error handling and edge cases
- [ ] Add environment variable documentation
- [ ] Update dependencies to latest versions
- [ ] Add code comments and inline documentation

## 🚀 Deployment
This project is deployed on Netlify. See netlify.toml for configuration.

## 👤 Author
**Neal Frazier** - [@AshAmplifies](https://github.com/1nc0gn30)

## 🔗 Links
- GitHub: https://github.com/1nc0gn30/reusable-tech-portfolio

---
*This README was enhanced as part of the neals-projects-2026 batch update.*

---

<div align="center">

**[xonettn]** · Built by [Neal Frazier](https://github.com/1nc0gn30) · [@AshAmplifies](https://twitter.com/AshAmplifies)

</div>
