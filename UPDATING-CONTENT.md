# ✏️ Updating Your Portfolio — Where & How to Change Everything

Your portfolio is **data-driven**: almost every word, link, and list on the site
comes from **one file**:

> ### 📄 `src/data/profile.js`

Change something there, save, and the site updates. This guide shows the **exact**
edit for every common change, with copy-paste examples.

> 🧠 **You do not need to know React** to use this guide. You're editing simple
> lists and text. Just keep the punctuation intact — see
> [The 5 rules that prevent 99% of errors](#-the-5-rules-that-prevent-99-of-errors)
> at the bottom.

---

## Table of contents

- [The workflow (every time you update)](#the-workflow-every-time-you-update)
- [Where each part of the site comes from](#where-each-part-of-the-site-comes-from)
- [1. Basic info (name, role, tagline, email, links)](#1-basic-info-name-role-tagline-email-links)
- [2. The rotating job titles in the hero](#2-the-rotating-job-titles-in-the-hero)
- [3. About text + the stat tiles](#3-about-text--the-stat-tiles)
- [4. Experience (add a new job)](#4-experience-add-a-new-job)
- [5. Education](#5-education)
- [6. Skills](#6-skills)
- [7. Certifications (add a new one)](#7-certifications-add-a-new-one)
- [8. Projects (add / feature / reorder)](#8-projects-add--feature--reorder)
- [9. Your photo](#9-your-photo)
- [10. Your résumé (CV)](#10-your-résumé-cv)
- [11. Change the accent colour / theme](#11-change-the-accent-colour--theme)
- [12. Add a whole new section (advanced)](#12-add-a-whole-new-section-advanced)
- [The 5 rules that prevent 99% of errors](#-the-5-rules-that-prevent-99-of-errors)
- [Publishing your changes](#publishing-your-changes)

---

## The workflow (every time you update)

```bash
# 1. Start the local preview so you see changes live as you type
npm run dev            # opens http://localhost:5173 (auto-refreshes on save)

# 2. Edit src/data/profile.js in your editor. Save. The browser updates instantly.

# 3. When it looks right, publish it:
git add .
git commit -m "Update: <what you changed>"
git push               # Vercel auto-deploys your live site in ~1 minute
```

That's the entire loop. Keep `npm run dev` running in a terminal while you edit — it
**hot-reloads**, so you get instant feedback.

---

## Where each part of the site comes from

| What you see on the site | Which variable in `profile.js` |
|---|---|
| Name, role, tagline, email, social links | `profile` |
| Rotating titles under your name | `profile.roles` |
| About paragraphs + stat tiles | `about` |
| Experience timeline | `experience` |
| Education (degree + A/L) | `education` |
| Skill cards | `skills` |
| Certifications grid | `certifications` |
| Project cards | `projects` |
| Navbar links + section order | `navLinks` |

Open `src/data/profile.js` and you'll see each of these clearly labelled with a
comment header like `// ── Experience ──`.

---

## 1. Basic info (name, role, tagline, email, links)

Find the `profile` object at the top of the file:

```js
export const profile = {
  name: 'Chalaka Perera',
  tagline: 'I build full-stack systems, ship them on cloud-native infrastructure…',
  status: 'Open to Software Engineering, DevOps & SRE roles',
  email: 'chalakasamith@gmail.com',

  socials: {
    github: 'https://github.com/chala2001',
    linkedin: 'https://www.linkedin.com/in/chalaka-perera-a280b9324',
    email: 'mailto:chalakasamith@gmail.com',
  },
}
```

**To change any of these**, just replace the text between the quotes. For example, to
update your status banner:

```js
  status: 'Available from December 2026 · Colombo / Remote',
```

> ⚠️ If you change your **email**, change it in **both** places: `email:` and
> `socials.email:` (keep the `mailto:` prefix on the second one).

---

## 2. The rotating job titles in the hero

The animated titles under your name come from the `roles` list:

```js
  roles: [
    'Software Developer',
    'DevOps / SRE Engineer',
    'Agentic AI Developer',
  ],
```

- **Edit** a title → change the text in quotes.
- **Add** one → add a new line ending in a comma:

```js
  roles: [
    'Software Developer',
    'DevOps / SRE Engineer',
    'Agentic AI Developer',
    'Cloud Engineer',          // ← added
  ],
```

- **Remove** one → delete its line.

Keep them short — they're meant to cycle quickly.

---

## 3. About text + the stat tiles

```js
export const about = {
  paragraphs: [
    "I'm a Computer Engineering undergraduate at the University of Peradeniya…",
    "Most of my work lives at the intersection of full-stack development and DevOps…",
  ],
  stats: [
    { value: '3.97', label: 'GPA / 4.00' },
    { value: '20+', label: 'Public Projects' },
    { value: '15+', label: 'Certifications' },
    { value: '4', label: 'Domains · Full-Stack · Cloud · AI · IoT' },
  ],
}
```

- **Rewrite your bio** → edit the text inside `paragraphs`. Each `"…"` is one
  paragraph. Add another paragraph by adding another `"…",` line.
- **Update a stat** → change its `value` and/or `label`. Example when you hit 25
  projects:

```js
    { value: '25+', label: 'Public Projects' },
```

> ✍️ Notice the bio uses **double quotes** `"…"` because the text contains
> apostrophes (`I'm`). If you write a paragraph with an apostrophe, use double
> quotes around it too. (See rule #2 at the bottom.)

---

## 4. Experience (add a new job)

The `experience` list holds your jobs, **newest first**. Each job is one `{ … }`
block:

```js
export const experience = [
  {
    role: 'Site Reliability Engineering Intern',
    company: 'WSO2',
    period: 'Apr 2026 — Oct 2026',
    type: 'Internship',
    location: 'Colombo · On-site',
    summary: 'On the SRE team, building AI-driven tooling…',
    highlights: [
      'Built an Agentic AI system for browser automation…',
      'Developed a RAG pipeline with LLMs…',
    ],
    stack: ['Agentic AI', 'LLM / RAG', 'Python'],
  },
  // ← new jobs go here, at the TOP of the list to appear first
]
```

**To add a new job**, copy an entire block (from `{` to `},`) and paste it as the
**first** item, then edit the fields:

```js
export const experience = [
  {
    role: 'Software Engineer',              // your new job
    company: 'Some Company',
    period: 'Nov 2026 — Present',
    type: 'Full-time',
    location: 'Colombo · Hybrid',
    summary: 'One-line description of the role.',
    highlights: [
      'A concrete achievement with impact.',
      'Another achievement — quantify it if you can.',
    ],
    stack: ['React', 'Spring Boot', 'AWS'],
  },
  {
    role: 'Site Reliability Engineering Intern',   // existing job, now second
    // …unchanged…
  },
]
```

Field meanings:
- `type` shows as a small chip (e.g. `Internship`, `Full-time`, `Part-time`).
- `location` is optional — delete the line if you don't want it.
- `highlights` become the bullet points.
- `stack` become the small tech tags at the bottom.

---

## 5. Education

```js
export const education = [
  {
    degree: 'BSc Engineering — Computer Engineering',
    school: 'University of Peradeniya',
    period: 'Jun 2022 — Present',
    detail: 'Final GPA 3.97 / 4.00',
  },
  {
    degree: 'GCE Advanced Level — Physical Science',
    school: 'Royal College, Colombo',
    period: 'Completed',
    detail: '3 A passes · Z-score 2.0291',
  },
]
```

When you graduate, update the first entry's `period` to e.g. `Jun 2022 — 2027` and
`detail` to your final classification. Add more entries the same way (copy a block,
edit it).

---

## 6. Skills

Skills are grouped into cards. Each group is `{ group: '…', items: […] }`:

```js
export const skills = [
  {
    group: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'Go', 'C / C++', 'SQL'],
  },
  {
    group: 'Cloud & DevOps',
    items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Helm'],
  },
]
```

- **Add a skill** → add `'NewSkill',` inside the group's `items: [ … ]` list.
- **Add a whole new group** → copy a `{ group: …, items: […] }` block and paste it.
- **Remove** → delete the `'skill'` or the whole block.

Example — adding Rust to Languages:

```js
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'Go', 'Rust', 'C / C++', 'SQL'],
```

---

## 7. Certifications (add a new one)

Each certificate is one `{ … }` in the `certifications` list:

```js
export const certifications = [
  { name: 'Terraform', issuer: 'TestDome', date: 'May 2026', badge: 'Top 10% globally', highlight: true },
  { name: 'AWS Cloud Practitioner Essentials', issuer: 'Amazon Web Services', date: '2026', highlight: true },
  { name: 'SQL (Basic)', issuer: 'HackerRank', date: 'Jul 2026' },
]
```

Fields:
- `name` — the certificate title.
- `issuer` — who issued it.
- `date` — when.
- `highlight: true` — *(optional)* gives the card an accent look. Use it for your
  strongest 4–6 certs. Leave it out for the rest.
- `badge: '…'` — *(optional)* a small pill like `Top 10% globally`.

**To add a new certificate**, copy a line and edit it:

```js
  { name: 'Certified Kubernetes Administrator', issuer: 'CNCF', date: 'Jan 2027', highlight: true },
```

The count in the section heading ("15 credentials…") updates **automatically** — it's
computed from the length of this list.

> 🔗 **Want each cert to be clickable to its verification page?** Add a `url` field:
> `{ name: '…', issuer: '…', date: '…', url: 'https://link-to-credential' }`.
> Tell me and I'll wire the cards to use it — currently they link collectively to
> your LinkedIn certifications page via `profile.certificationsUrl`.

---

## 8. Projects (add / feature / reorder)

Each project card is one `{ … }` in the `projects` list:

```js
export const projects = [
  {
    name: 'CloudCare — AWS on Terraform',
    category: 'Cloud & DevOps',        // must match one of the filter categories
    featured: true,                    // true = accent border + "★ featured" tag
    description: 'Production-style, AWS-native Hospital Management System…',
    tags: ['Terraform', 'AWS', 'GitHub Actions', 'OIDC', 'IaC'],
    repo: 'https://github.com/chala2001/cloud-care',
  },
]
```

Fields:
- `name` — the project title (also the clickable link text).
- `category` — **must** be one of: `'Cloud & DevOps'`, `'Full-Stack'`, `'AI / ML'`
  (these are the filter buttons, defined in `projectCategories`).
- `featured: true` — highlights it. Set to `false` (or delete the line) for normal.
- `description` — the summary paragraph.
- `tags` — the little tech pills.
- `repo` — the GitHub URL the card links to.

**Add a project** → copy a block, paste it, edit the fields. **Reorder** → move the
blocks up/down (top = shown first). **Feature/unfeature** → flip `featured`.

**Add a new filter category** → add it to the `projectCategories` list *and* use that
exact string as a project's `category`:

```js
export const projectCategories = ['All', 'Cloud & DevOps', 'Full-Stack', 'AI / ML', 'IoT']
```

---

## 9. Your photo

1. Get a **square** headshot (roughly 600×600px looks best).
2. Convert it to **WebP** (smaller & faster than PNG/JPG):
   - Easiest: go to <https://squoosh.app>, drag your photo in, choose **WebP** on the
     right, download.
   - Or via command line: `cwebp -q 82 myphoto.jpg -o profile.webp`
3. Put the file at **`public/profile.webp`** (replace the placeholder).

That's it — the hero photo updates. (If the file is missing, the site automatically
shows your GitHub avatar, so it never looks broken.)

To use a **different filename**, update this line in `profile.js`:

```js
  photo: '/profile.webp',   // change to match your file, e.g. '/chalaka.webp'
```

> Files in `public/` are served from the site root, so `public/profile.webp` is
> reachable at `/profile.webp`. Keep the leading slash.

---

## 10. Your résumé (CV)

1. Save your CV as a PDF named **`Chalaka_Perera_Resume.pdf`**.
2. Drop it into the **`public/`** folder.
3. The hero's **"Résumé"** button now downloads it.

Different filename? Update this line in `profile.js`:

```js
  resume: '/Chalaka_Perera_Resume.pdf',   // change to match your file
```

---

## 11. Change the accent colour / theme

The signature colour (teal, used on buttons, links, highlights) is defined **once**
in `src/index.css`. Change these two `--accent` lines:

```css
:root {                       /* DARK theme */
  --accent: #38c7d4;          /* ← your brand colour here */
}
:root[data-theme='light'] {   /* LIGHT theme */
  --accent: #0e8f9c;          /* ← a slightly darker shade for light backgrounds */
}
```

Pick any hex colour (get codes from <https://colorhunt.co> or a colour picker). Use a
**brighter** shade for dark mode and a **slightly darker** one for light mode so text
stays readable. Save, and the entire site re-themes.

The warm secondary colour (used on the `$` prompts and small accents) is `--amber` in
the same file, if you want to tweak that too.

---

## 12. Add a whole new section (advanced)

If someday you want a brand-new section (e.g. "Blog" or "Talks"), the pattern is:

1. **Add the data** to `profile.js` (a new `export const talks = [ … ]`).
2. **Create the component** `src/components/Talks.jsx` — copy an existing one like
   `Certifications.jsx` and adapt it (it's the closest template).
3. **Register it** in `src/App.jsx`: `import Talks` and place `<Talks />` where you
   want it.
4. **Add a nav link** in `profile.js` → `navLinks` array:
   `{ id: 'talks', label: 'talks' }` (the `id` must match the `id` on your
   `<section>`).
5. **Renumber** the `// 0N. …` labels in the section headings if you inserted it in
   the middle.

This is more involved — if you get stuck, ask me and I'll scaffold it for you.

---

## 🛟 The 5 rules that prevent 99% of errors

`profile.js` is JavaScript. If the site suddenly shows a blank/error screen after an
edit, it's almost always one of these:

1. **Every item needs a comma after it.**
   ```js
   items: ['Python', 'Java', 'Go']   // ✅ commas between, none needed after last (but allowed)
   ```
2. **Text with an apostrophe must use double quotes.**
   ```js
   summary: "I'm building…"    // ✅ double quotes
   summary: 'I'm building…'    // ❌ the apostrophe ends the string early → error
   ```
3. **Brackets must stay balanced.** Every `{` needs a `}`, every `[` a `]`, every
   `(` a `)`. If you delete a block, delete the whole thing including its brackets.
4. **Don't remove the `export` keyword** in front of a variable — the components
   import it by that name.
5. **Keep the quotes.** Every piece of text needs quotes around it: `'like this'`.

**If something breaks:** the `npm run dev` terminal (and the browser console, opened
with F12) prints the **exact file and line number** of the problem. Read that line —
it's usually a missing comma or quote. Undo your last change if unsure.

---

## Publishing your changes

Once your edit looks right in `npm run dev`:

```bash
git add .
git commit -m "Update: e.g. added CKA certification"
git push
```

Vercel automatically rebuilds and your **live site updates within ~1 minute**. See
**[DEPLOYMENT.md](DEPLOYMENT.md)** for the full deployment picture.

---

**Quick reference:** 95% of your future updates are just editing
`src/data/profile.js`, saving, and running the three git commands above. Everything
else in this file is for the occasional bigger change.
