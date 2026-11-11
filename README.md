# Eric Chan · Portfolio

[View the portfolio](https://ericchw.github.io/eric-portfolio/)

A personal software engineering portfolio focused on business applications, API integrations, and workflow automation. Profile details follow Eric's résumé; the clinic intake project is an independent portfolio demonstration.

## Experience

- A custom Three.js systems sketch with pointer interaction and animated data paths.
- Light and dark themes, plus a persistent animation toggle. Reduced-motion settings start with a static illustration.
- A featured [clinic intake automation demo](https://github.com/ericchw/vpc-n8n-intake-demo) with a real, click-to-play 24-second dashboard recording.
- Filterable project links, a work-history timeline, and layouts for desktop and mobile.

The intake recording uses fictional records, a local Python API, and disposable SQLite. The demo repository also includes n8n workflows and PostgreSQL through Docker Compose. It is not a live clinical integration or affiliated with a clinic.

## Local development

Use Node.js 22 or newer.

```bash
npm ci
npm run dev
```

Open the URL printed by Vite. The app uses `/eric-portfolio/` as its base path.

```bash
npm run build
npm run preview
```

## Update content

- `src/data/resume.js`: profile, projects, skills, experience, education, and certifications.
- `src/components/SystemScene.jsx`: the decorative Three.js scene. It stops rendering while offscreen or in a hidden tab and disposes its WebGL resources on unmount.
- `src/index.css`: typography, color tokens, responsive layouts, and motion preferences.
- `public/media/`: the intake recording and its static poster. Regenerate the recording in the intake demo repository using `scripts/capture_demo.py`.

## GitHub Pages

Pushing to `main` runs `.github/workflows/deploy.yml`, builds the static site, and deploys it to GitHub Pages using GitHub Actions. The public address stays at `https://ericchw.github.io/eric-portfolio/`.
