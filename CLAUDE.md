# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/institutional site for Avante Global (seguros e consultoria empresarial), built with React 19 + TypeScript + Vite, styled with Tailwind CSS v4, and routed client-side with react-router-dom v7. Content and UI copy are in Brazilian Portuguese.

## Commands

```bash
npm run dev       # start Vite dev server
npm run build     # type-check (tsc -b) then production build
npm run lint      # eslint .
npm run preview   # preview the production build
```

There is no test suite configured in this repo.

## Architecture

- **Single-page-per-route structure**: `src/App.tsx` wires up all routes with `react-router-dom`. Each route renders one top-level component from `src/components/`, one per site section (`Institucional`, `Seguros`, `Tecnologias`, `Consultorias`, `Parceiros`, `Novidades`). The `/` route composes `Hero` + `Inicio`. `Header` and `Footer` render on every route, outside `<Routes>`.
- **`SectionPlaceholder`**: a shared layout for simple/stub sections (eyebrow tag, heading, divider, body text, back-to-home link). Real content pages like `Institucional` follow the same visual pattern (eyebrow → heading → divider → text) but are hand-built rather than using the placeholder — check whether an existing section should stay a placeholder or graduate to a full component before adding content.
- **Content-as-data pattern**: page components keep their copy in local arrays/objects at the top of the file (e.g. `NAV_LINKS` in `Header.tsx`, `PILARES` and `LIDERANCA` in `Institucional.tsx`) and map over them in JSX rather than hardcoding repeated markup.
- **Styling**: Tailwind v4 utility classes directly in JSX; no CSS modules or styled-components. Custom design tokens (colors, fonts) are defined once via `@theme` in `src/index.css` (e.g. `--color-navy-deep`, `--color-sky-accent`, `--font-hero`) and consumed as Tailwind classes like `bg-navy-deep`, `text-blue`, `font-hero`. Responsive overrides use Tailwind's `max-lg:` prefix throughout (mobile styles are overrides of a desktop-first base, not `sm:`/`md:` progressive enhancement).
- **Static assets**: images referenced with absolute `/`-rooted paths (e.g. `/logodark.png`) live in `public/`; a few source-imported assets (logo, react/vite svgs, hero image) live in `src/assets/`. Some content images are hotlinked from Unsplash rather than stored locally.
- **No global state management** — components are self-contained, no context/store beyond React Router.
