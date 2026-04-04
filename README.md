# Portfolio Web App

A customizable React + Vite portfolio template with animated visuals, configurable branding, and runtime theme/font switching.

## Features

- Config-driven profile and project sections
- Runtime theme toggle (`Dark` / `Light`)
- Runtime font selection (`Space Grotesk`, `Inter`, `Poppins`)
- Responsive layout with Tailwind CSS

## Run Locally

```bash
npm install
npm run dev
```

App runs on `http://localhost:3000` by default.

## Build

```bash
npm run build
```

## Customize Content

Edit:

- `src/config/portfolioConfig.js` for name, links, headline, bio, and projects
- `src/config/portfolioConfig.js > three.models` for GLB model paths/positions/scales

## 3D Assets

The project includes sample GLB models from Khronos glTF Sample Models in `public/models`:

- `DamagedHelmet.glb`
- `BoomBox.glb`
- `Avocado.glb`

Source: https://github.com/KhronosGroup/glTF-Sample-Models

## Public Repo Checklist

Before publishing:

- Verify personal info and URLs in `src/config/portfolioConfig.js`
- Replace placeholder project URLs (`*.example.com`) with real links
- Keep `.env*` out of source control
- Confirm no private keys or credentials are committed
- Run `npm run lint` and `npm run build`

## License

This project is licensed under the MIT License. See `LICENSE`.
