# 🧩 How It Works — The Code, Explained

This document explains **how your whole portfolio is put together** — every folder,
every file, and how they cooperate to produce the site you see in the browser. It's
written so that even if you've never touched React before, you'll understand what
each piece does and where to look when you want to change something.

---

## Table of contents

1. [The 30-second summary](#1-the-30-second-summary)
2. [The technology choices (and why)](#2-the-technology-choices-and-why)
3. [The folder & file map](#3-the-folder--file-map)
4. [How a page render actually happens (the boot sequence)](#4-how-a-page-render-actually-happens-the-boot-sequence)
5. [The data-driven design (the most important idea)](#5-the-data-driven-design-the-most-important-idea)
6. [The theme system (light / dark mode)](#6-the-theme-system-light--dark-mode)
7. [The animation system (Framer Motion)](#7-the-animation-system-framer-motion)
8. [The smooth-scroll navigation (react-scroll)](#8-the-smooth-scroll-navigation-react-scroll)
9. [The styling system (CSS variables)](#9-the-styling-system-css-variables)
10. [Component-by-component tour](#10-component-by-component-tour)
11. [How it all connects — one diagram](#11-how-it-all-connects--one-diagram)

---

## 1. The 30-second summary

- It's a **single-page website** built with **React** (a JavaScript UI library) and
  **Vite** (a fast build tool).
- **All your content** — name, projects, skills, certs — lives in **one file**:
  [`src/data/profile.js`](src/data/profile.js).
- The visual **sections** (Hero, About, Projects…) are **React components** in
  [`src/components/`](src/components/). Each one reads from that data file and renders it.
- **Styling** is plain CSS driven by **CSS variables**, which also power the
  **light/dark theme toggle**.
- **Framer Motion** adds the fade-in animations; **react-scroll** makes the navbar
  links glide smoothly to each section.
- There is **no backend and no database** — it's all static files.

---

## 2. The technology choices (and why)

| Technology | What it is | Why it's here |
|---|---|---|
| **React** | A library for building UIs out of reusable "components" | Industry standard; recruiters expect it; lets us split the page into clean pieces |
| **Vite** | A build tool + dev server | Extremely fast startup and hot-reload; compiles React into optimized static files |
| **Framer Motion** | An animation library for React | Smooth, tasteful fade/slide animations with almost no code |
| **react-scroll** | Smooth-scrolling navigation | Clicking a navbar link glides to the section instead of jumping |
| **Plain CSS + CSS variables** | Styling with native browser features | No heavy UI framework = smaller, faster, more "hand-built" feel; variables enable theming |

**No backend / database on purpose:** a portfolio only *displays* information. It
doesn't need to store user accounts or process forms server-side. Keeping it static
makes it free to host, impossible to "go down," and trivial to deploy.

---

## 3. The folder & file map

```
chalaLive/
│
├── index.html              ← the single HTML page the browser loads first
├── package.json            ← lists dependencies + the npm scripts (dev/build)
├── vite.config.js          ← Vite configuration (tells it to use React)
├── vercel.json             ← how Vercel should build & cache the site
├── .gitignore              ← files Git should ignore (node_modules, dist…)
│
├── public/                 ← static assets served as-is at the site root
│   ├── favicon.svg         ← the little icon in the browser tab
│   ├── profile.webp        ← YOUR PHOTO goes here
│   └── (resume.pdf)        ← YOUR RÉSUMÉ goes here
│
├── src/                    ← all the source code
│   ├── main.jsx            ← the entry point — mounts React into index.html
│   ├── App.jsx             ← lists the sections in order
│   ├── index.css           ← global styles + the theme variables (colours)
│   ├── App.css             ← styles for the individual components
│   │
│   ├── data/
│   │   └── profile.js      ← ⭐ ALL YOUR CONTENT lives here
│   │
│   ├── context/
│   │   └── ThemeContext.jsx ← the light/dark mode logic
│   │
│   └── components/         ← one file per visual section
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Experience.jsx
│       ├── Skills.jsx
│       ├── Certifications.jsx
│       ├── Projects.jsx
│       ├── Contact.jsx
│       ├── Footer.jsx
│       ├── Reveal.jsx      ← shared animation wrapper (reused everywhere)
│       └── Icons.jsx       ← all the SVG icons (GitHub, LinkedIn…)
│
└── (generated, not committed)
    ├── node_modules/       ← downloaded libraries (created by `npm install`)
    └── dist/               ← the built site (created by `npm run build`)
```

**The two most important files for you** are `src/data/profile.js` (your content)
and `src/index.css` (your colours). You can run this whole portfolio for years and
only ever touch those two.

---

## 4. How a page render actually happens (the boot sequence)

When a visitor opens your site, this chain fires in order:

```
1. Browser loads  index.html
        │  index.html contains an empty <div id="root"></div>
        │  and a <script src="/src/main.jsx">
        ▼
2. main.jsx runs
        │  - imports index.css (global styles apply)
        │  - wraps everything in <ThemeProvider> (enables light/dark)
        │  - tells React to render <App /> into the #root div
        ▼
3. App.jsx runs
        │  - imports App.css (component styles apply)
        │  - returns the list of sections in order:
        │      <Navbar/> <Hero/> <About/> <Experience/> <Skills/>
        │      <Certifications/> <Projects/> <Contact/> <Footer/>
        ▼
4. Each section component runs
        │  - imports the data it needs from src/data/profile.js
        │  - loops over that data and produces HTML elements
        │  - wraps them in <Reveal> so they fade in on scroll
        ▼
5. The finished page appears, fully styled and animated.
```

So `index.html` is nearly empty — **React builds the entire page in the browser**
from your components and your data. That's what "single-page React app" means.

---

## 5. The data-driven design (the most important idea)

This is the single most important thing to understand, because it's what makes
updates so easy.

**The content is completely separated from the code.**

- Your **content** (words, links, lists) lives in `src/data/profile.js` as plain
  JavaScript objects and arrays.
- Your **components** don't contain any hard-coded text. Instead they **import** the
  data and loop over it.

For example, the Skills section doesn't say "Python, Java, …" in its code. It says
"for each skill group in the data, draw a card." Here's the actual pattern:

```jsx
// src/data/profile.js  — the DATA
export const skills = [
  { group: 'Languages', items: ['Python', 'Java', 'JavaScript'] },
  { group: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Kubernetes'] },
]
```

```jsx
// src/components/Skills.jsx  — the CODE that DISPLAYS it
import { skills } from '../data/profile.js'

// for each group in the data, render a card:
{skills.map((category) => (
  <div className="skills__card">
    <h3>{category.group}</h3>
    {category.items.map((skill) => <span>{skill}</span>)}
  </div>
))}
```

`.map()` is a JavaScript function that means **"do this for every item in the
list."** So if you add a fourth skill to the array, a fourth chip appears
automatically — **you never touch `Skills.jsx`.**

👉 **This is why updating your portfolio = editing one data file.** Full instructions
are in **[UPDATING-CONTENT.md](UPDATING-CONTENT.md)**.

---

## 6. The theme system (light / dark mode)

The light/dark toggle is powered by **CSS variables** + a small piece of React state.

**How colours are defined** — in `src/index.css`, every colour is a variable:

```css
:root {                    /* DARK theme (the default) */
  --bg: #0b0f14;           /* page background */
  --text: #e7edf4;         /* main text colour */
  --accent: #38c7d4;       /* the teal highlight colour */
}

:root[data-theme='light'] {   /* LIGHT theme overrides */
  --bg: #f6f7f9;
  --text: #0f1720;
  --accent: #0e8f9c;
}
```

Every component's CSS uses these variables, e.g. `background: var(--bg)`.

**How the toggle works** — [`ThemeContext.jsx`](src/context/ThemeContext.jsx):

1. It remembers the current theme (`'dark'` or `'light'`) in React state.
2. When you click the sun/moon button, it flips that value.
3. It writes `data-theme="light"` (or removes it) onto the page's root element.
4. The CSS above instantly swaps every variable → the whole site recolours.
5. It **saves your choice** in the browser's `localStorage`, so the site remembers
   your preference next visit.

To change your brand colour site-wide, you edit **one line** — `--accent` — and
every button, link, and highlight updates. (See UPDATING-CONTENT.md § "Change the
accent colour".)

---

## 7. The animation system (Framer Motion)

All the "fade up as you scroll" animations come from **one reusable component**:
[`Reveal.jsx`](src/components/Reveal.jsx).

```jsx
// Reveal wraps any content and animates it into view once, on scroll.
<Reveal>
  <h2>Some heading</h2>
</Reveal>
```

Under the hood it uses Framer Motion's `whileInView` feature: the wrapped element
starts slightly lower and transparent, then slides up and fades in **the moment it
scrolls into view.** Because every section uses this same wrapper, the whole site has
**one consistent motion language** instead of a mishmash.

Other Framer Motion touches:
- The **hero** staggers its lines in one after another on load.
- The **navbar** slides down when the page loads.
- The **project cards** animate when you switch category filters.
- The **theme icon** spins when you toggle.

> ♿ Accessibility: `index.css` includes a `prefers-reduced-motion` rule that turns
> animations off for users who've asked their OS to reduce motion.

---

## 8. The smooth-scroll navigation (react-scroll)

The navbar links don't use normal HTML anchors. They use react-scroll's `<Link>`:

```jsx
<Link to="projects" smooth offset={-72} duration={500}>projects</Link>
```

- `to="projects"` — the `id` of the section to scroll to (each `<section>` has an id
  like `id="projects"`).
- `smooth` — glide instead of jump.
- `offset={-72}` — stop 72px early so the fixed navbar doesn't cover the heading.
- `spy` (used in the navbar) — automatically highlights the link for whichever
  section is currently on screen.

The section `id`s and the navbar links both come from the **same `navLinks` array**
in `profile.js`, so they can never fall out of sync.

---

## 9. The styling system (CSS variables)

There are exactly **two** stylesheets:

- **`src/index.css`** — the *design system*: the colour variables (both themes),
  fonts, spacing, the background grid, buttons, chips, and shared helpers like
  `.section-label`. **This is where the "look" is defined.**
- **`src/App.css`** — the *component styles*: the specific layout of the navbar,
  hero, cards, timeline, etc. Class names are namespaced by section (`.hero__name`,
  `.project__tag`) so they never clash.

No Tailwind, no Bootstrap, no styled-components. Just CSS — which keeps the bundle
small and the design genuinely yours.

---

## 10. Component-by-component tour

| Component | What it renders | Reads from `profile.js` |
|---|---|---|
| **Navbar.jsx** | Fixed top bar: brand, section links, theme toggle, mobile menu | `navLinks`, `profile` |
| **Hero.jsx** | The first screen: your name, the typewriter role, CTAs, the terminal card with your photo | `profile` |
| **About.jsx** | Your bio paragraphs, the stat tiles, and education (incl. A/L) | `about`, `education` |
| **Experience.jsx** | The timeline of jobs (WSO2, Teaching Assistant) | `experience` |
| **Skills.jsx** | Grouped technology cards | `skills` |
| **Certifications.jsx** | The grid of 15 certificates, highlighted ones accented | `certifications`, `profile` |
| **Projects.jsx** | Filterable project cards (All / Cloud & DevOps / Full-Stack / AI) | `projects`, `projectCategories`, `profile` |
| **Contact.jsx** | The closing call-to-action + email + socials | `profile` |
| **Footer.jsx** | The bottom credit line + social icons | `profile` |
| **Reveal.jsx** | *(not a section)* the shared scroll-in animation wrapper | — |
| **Icons.jsx** | *(not a section)* all SVG icons as small components | — |

Every section follows the **same recipe**:
1. `import` its slice of data from `profile.js`.
2. `.map()` over that data to build elements.
3. Wrap pieces in `<Reveal>` for the fade-in.
4. Style with classes defined in `App.css`.

Once you've read one component, you understand them all.

---

## 11. How it all connects — one diagram

```
                    ┌───────────────────────────────┐
                    │     src/data/profile.js       │   ← YOU EDIT THIS
                    │  (name, jobs, skills, certs,  │
                    │   projects, nav links…)       │
                    └───────────────┬───────────────┘
                                    │ imported by every section
        ┌───────────────┬───────────┼───────────┬────────────────┐
        ▼               ▼           ▼           ▼                ▼
    Navbar.jsx      Hero.jsx    Skills.jsx  Projects.jsx   Certifications.jsx ...
        │               │           │           │                │
        └──────┬────────┴─────┬─────┴─────┬─────┴────────┬───────┘
               │ all use      │ all use   │ all wrapped  │
               ▼              ▼           ▼ in <Reveal>  ▼
        react-scroll    ThemeContext   Framer Motion   App.css + index.css
        (smooth nav)    (light/dark)   (animations)    (styling + colours)
               │              │           │                │
               └──────────────┴─────┬─────┴────────────────┘
                                     ▼
                              App.jsx (orders the sections)
                                     ▼
                              main.jsx (mounts React)
                                     ▼
                              index.html  →  the browser shows the page
```

**In one sentence:** your **data** flows into **components**, which are ordered by
**App.jsx**, styled by **CSS variables**, animated by **Framer Motion**, navigated by
**react-scroll**, and mounted into **index.html** by **main.jsx** — then Vite builds
it all into static files that Vercel serves to the world.

---

**Next:** ready to change something? Go to
**[UPDATING-CONTENT.md](UPDATING-CONTENT.md)** — it shows the exact copy-paste
patterns for editing every part of your portfolio.
