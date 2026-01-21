# PumuPlay

## 1. Project Overview

PumuPlay is a modern web platform designed for SMEs (Small and Medium-sized Enterprises). It focuses on providing cutting-edge automation, tailored micro SaaS solutions, and autonomous agentic agents to reduce operational overhead and unlock peak productivity.

### Visual Style & Vibe

- **Mood**: Modern, Professional, Clean, High-Tech.
- **Color Palette**: Light theme foundation (`bg-gray-50`) with high contrast text (`text-gray-900`) and defined Primary/Secondary accents.
- **Typography**: Prompt (Google Fonts).
- **UI Elements**: Rounded buttons (`rounded-full`), clean cards, large bold headings, smooth transitions.
- **Icon Pack**: Lucide React.

## 2. Architecture & Structure

### Frontend Pages

- **Home (`/`)**: Landing page featuring a Hero section, Services overview, and capability highlights.
- **Services Section**: Detailed breakdown of offerings (Automation, Micro SaaS, Agents).
- **Layouts**: `Layout.astro` providing common structure (Navbar, Footer).

## 3. Tech Stack & Defaults

This project follows a strict tech stack configuration.

- **Runtime & Bundler**: [Bun](https://bun.sh)
- **Frontend/Web**:
  - **Framework**: Astro (via Bun)
  - **Interactivity**: React 19 + TypeScript
  - **Styling**: Tailwind CSS + clsx/tailwind-merge
  - **Icons**: Lucide React
- **Content**: MDX support (`@astrojs/mdx`)
- **Environment**:
  - `.env` configured (if applicable).

## 4. Operations & Instructions

### Setup & Run

1. **Install Dependencies**: `bun install`
2. **Start Local Development**: `bun dev`
   - Access at `http://localhost:4321` (default Astro port).

### Adding Features

1. Create a new branch/task.
2. Create components in `src/components`.
3. Use `src/pages` for new routes.
4. Verify using `bun dev` and `bun run build`.

### Verification

- **Build**: `bun run build`
- **Preview**: `bun run preview`

## 5. Tools, Agents & Skills

- **MCP Servers**: astro-docs (if available).
- **Skills**: Astro, React, Tailwind CSS.

## 6. Waypoints / Milestones

- [x] Project Initialization
- [x] Core Architecture Setup (Astro + Tailwind)
- [x] Landing Page Implementation
  - [x] Hero Section
  - [x] Navbar
  - [x] Services Section
  - [ ] Add Motion
