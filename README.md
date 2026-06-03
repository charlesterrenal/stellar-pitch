# StellarPH Onboarding Deck

An interactive, responsive presentation deck built for incoming interns at **StellarPH**. The application acts as a comprehensive, structured onboarding tool, guiding new members through StellarPH's core mission, the wider Philippine startup landscape, historical milestones, future outlook, and key ecosystem insights.

---

## Key Features & UI Design

- **Light-First Theme with Dark Mode**: Tailored HSL color palette designed to be premium and modern, featuring an accessible, local-storage-persisted Theme Toggle.
- **Card-Based Section Layouts**: Clean, structured card grids designed to present complex information clearly, removing raw walls of text.
- **Alternating Vertical Timeline**: A centralized visual timeline tracking the journey of StellarPH from its founding in Cebu to its 2026 milestones.
- **Interactive Ecosystem Map**: A card-based categorization of the major players (Venture builders, Accelerators, Investors, Government agencies, and TBIs) shaping the Philippine startup landscape.
- **Full Brand Identity**: Features official integrated StellarPH brand logo SVGs.
- **Micro-Animations & Transitions**: Fluid fade-in effects on scroll via Intersection Observer hooks.

---

## Project Directory Structure

```text
stellar-pitch/
├── public/                  # Static assets including brand logo SVGs
│   ├── StellarPH-ColoredLogo.svg
│   └── StellarPH-FullLogo.svg
├── src/
│   ├── assets/              # Default SVGs and hero illustrations
│   ├── components/          # Reusable UI widgets
│   │   └── ThemeToggle.tsx  # Light/Dark mode toggler
│   ├── hooks/               # Custom React hooks (e.g., useFadeIn)
│   ├── sections/            # Sections of the presentation deck
│   │   ├── Content.tsx      # Onboarding content and insights
│   │   ├── Ecosystem.tsx    # Philippine startup landscape map
│   │   ├── Future.tsx       # Horizon goals & strategic bets
│   │   ├── Overview.tsx     # Hero overview & 3 pillars
│   │   └── Timeline.tsx     # Historical milestone timeline
│   ├── App.tsx              # Application layout & sticky navigation
│   ├── index.css            # Responsive layout tokens, variables, & styles
│   └── main.tsx             # Application entry point
├── package.json             # Scripts and dependencies
└── vite.config.ts           # Bundler configuration
```

---

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended) along with `npm` or `yarn`.

### Running Locally

1. Clone the repository and navigate to the project directory:
   ```bash
   cd stellar-pitch
   ```

2. Install the project dependencies:
   ```bash
   npm install
   ```

3. Start the local Vite development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local URL (usually `http://localhost:5173`).

---

## Deployment & Production Build

To compile the application into a production bundle, execute:

```bash
npm run build
```

This generates optimized static files inside the `/dist` directory, ready to be hosted on static providers such as GitHub Pages, Netlify, Vercel, or Firebase Hosting.

To preview the production build locally, run:

```bash
npm run preview
```
