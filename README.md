# IEEE Education Week Sri Lanka 2025

Official website for IEEE Education Week Sri Lanka — a free event for students, undergraduates, graduates, and professionals.

**Event:** 07 April 2025 · TRACE Expert City, Colombo 10

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+ ([download](https://nodejs.org))
- npm v9+

### Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
# → Opens at http://localhost:5173
```

### Production Build

```bash
npm run build
# Output goes to /dist
```

---

## 🌐 GitHub Pages Deployment

### Step 1 — Update `vite.config.ts`

Open `vite.config.ts` and change the repo name to match **your** GitHub repository:

```ts
// vite.config.ts
const GITHUB_REPO_NAME = 'your-repo-name-here'; // ← Change this!
```

- If your repo URL is `https://github.com/your-org/ieee-eduweek` → use `'ieee-eduweek'`
- If you have a **custom domain** (e.g. `educationweek.ieee.lk`) → set `base: '/'` directly

### Step 2 — Method A: GitHub Actions (Recommended — fully automatic)

1. Push your code to a GitHub repository
2. Go to **Settings → Pages**
3. Set **Source** to **"GitHub Actions"**
4. Push to `main` branch — the workflow at `.github/workflows/deploy.yml` runs automatically

Your site will be live at: `https://your-org.github.io/ieee-eduweek/`

### Step 3 — Method B: Manual Deploy (one command)

```bash
# Builds and pushes /dist to the gh-pages branch automatically
npm run deploy
```

This uses the `gh-pages` npm package. After running:
1. Go to **Settings → Pages**
2. Set **Source** to **"Deploy from a branch"**
3. Choose branch: `gh-pages` / `/ (root)`

---

## 📁 Project Structure

```
ieee-eduweek/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deploy to GitHub Pages on push
├── public/
│   ├── favicon.svg             # Site icon
│   └── 404.html               # SPA redirect for GitHub Pages routing
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky nav with Past Editions dropdown
│   │   ├── Hero.tsx            # Bento-grid hero with live countdown
│   │   ├── About.tsx           # About + organizers + animated stats
│   │   ├── Features.tsx        # Why attend — bento-grid layout
│   │   ├── Speakers.tsx        # Speaker grid with photo cards
│   │   ├── Schedule.tsx        # Tabbed schedule (3 tracks)
│   │   ├── Partners.tsx        # Tiered partner badges
│   │   ├── Contact.tsx         # Contact + venue details
│   │   ├── Footer.tsx          # Footer with Past Editions links
│   │   └── ScrollProgress.tsx  # Top scroll progress bar
│   ├── data/
│   │   └── index.ts            # All static content (speakers, schedule, etc.)
│   ├── hooks/
│   │   ├── useScrollSpy.ts     # Active nav section tracker
│   │   └── useCountUp.ts       # Animated number counter
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css               # Design system + global styles
├── vite.config.ts              # ← Update GITHUB_REPO_NAME here
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🎨 Design System

| Token         | Value                     | Usage                         |
|---------------|---------------------------|-------------------------------|
| Brand dark    | `#0d4a3a`                 | Headings, dark cards, buttons |
| Brand primary | `#15803d`                 | Accents, links, active states |
| Brand light   | `#f0fdf4`                 | Tinted backgrounds            |
| Slate 900     | `#0f172a`                 | Body headings                 |
| Slate 500     | `#64748b`                 | Body text                     |
| White         | `#ffffff`                 | Cards, page background        |
| Font          | Plus Jakarta Sans         | All text                      |
| Mono font     | JetBrains Mono            | Labels, tags, timestamps      |

---

## 📅 Past Editions

| Year | URL |
|------|-----|
| 2025 (current) | https://educationweek.ieee.lk |
| 2024 | https://educationweek.ieee.lk/2024/ |
| 2023 | https://educationweek.ieee.lk/2023/ |

---

## 🛠️ Commands Reference

| Command           | Action                                        |
|-------------------|-----------------------------------------------|
| `npm run dev`     | Start local dev server at localhost:5173       |
| `npm run build`   | Build for production → `/dist`                |
| `npm run preview` | Preview the production build locally           |
| `npm run deploy`  | Build + push to `gh-pages` branch (Method B)  |

---

## ✏️ Customizing Content

All site content lives in **`src/data/index.ts`**:

- `SPEAKERS` — add/edit speaker cards
- `SCHEDULE_SESSIONS` — update the event programme
- `PARTNERS` — add sponsor/partner logos
- `CONTACTS` — update organizing committee contacts
- `PAST_EDITIONS` — update archive links each year
- `NAV_LINKS` — change navigation items

---

*Designed & Developed by IEEE Young Professionals Sri Lanka*
