# Shiven Maurya — Portfolio

A cinematic 3D personal portfolio built with React 19, TypeScript, Vite, Tailwind CSS v4, React Three Fiber and Framer Motion — content sourced entirely from my resume.

## Tech stack

- **React 19 + TypeScript** — component architecture
- **Vite** — dev server and build
- **Tailwind CSS v4** — styling, via the `@tailwindcss/vite` plugin
- **React Three Fiber + three.js** — the drifting-particle/wireframe-orb hero backdrop
- **Framer Motion** — scroll reveals, hero entrance, tilt/parallax on the photo and project cards

## Structure

```
src/
  components/     Navbar, Hero, About, Education, Projects, Skills, Certifications, Contact, Footer
  components/Scene.tsx   the R3F hero background
  data/resume.ts  single source of truth for all content
public/
  photo.jpg       profile photo
  resume.pdf      downloadable resume
```

## Running locally

```bash
npm install
npm run dev
```

## Building

```bash
npm run build
npm run preview
```

## Deploying to Vercel

1. Push this repo to GitHub.
2. In Vercel, click **Add New → Project** and import the repo.
3. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output dir `dist`.
4. Click **Deploy**.

## Contact

- Email: shiven20041@gmail.com
- GitHub: [github.com/Shiven17102](https://github.com/Shiven17102)
- LinkedIn: [linkedin.com/in/shiven-anil-kumar-maurya-43389825a](https://linkedin.com/in/shiven-anil-kumar-maurya-43389825a)
