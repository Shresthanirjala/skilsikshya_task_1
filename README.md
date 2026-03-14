# Vrit Tech

This is a Next.js application built with React and Tailwind CSS. It includes custom UI components (buttons, carousels, sheets) and a SkillShikshya journey page that showcases a step-by-step learning experience.

## Tech Stack

- Next.js
- React
- Tailwind CSS (v4)
- Base UI (`@base-ui/react`)
- Lucide Icons (`lucide-react`)
- Class Variance Authority (`class-variance-authority`)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## Available Scripts

- `npm run dev` – Start the development server
- `npm run build` – Build the production bundle
- `npm start` – Start the production server (after build)

## Project Structure

- `src/app` – App router pages, layout, and global styles
- `src/components/ui` – Reusable UI components (button, carousel, sheet)
- `src/layout` – Layout components like the Navbar
- `src/lib` – Utility helpers such as `cn`

## Customization

You can customize styles in `src/app/globals.css` and extend or modify UI components in `src/components/ui` to fit your design needs.
