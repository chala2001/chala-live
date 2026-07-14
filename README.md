# Chalaka Perera — Portfolio

A single-page personal portfolio. **React + Vite**, no backend, no database.
Terminal / engineer aesthetic, dark + light themes, smooth-scroll navigation and
subtle scroll animations.

**Stack:** React 18 · Vite · Framer Motion · react-scroll · pure CSS (CSS variables, no UI kit)

---

## 📚 Documentation

Three detailed guides live alongside this README — read them in this order:

1. **[HOW-IT-WORKS.md](HOW-IT-WORKS.md)** — how the whole codebase fits together
   (folders, data-driven design, theming, animations). Start here to understand it.
2. **[UPDATING-CONTENT.md](UPDATING-CONTENT.md)** — exactly where and how to change
   your content over time (add a job, cert, project, swap your photo/résumé, recolour).
3. **[DEPLOYMENT.md](DEPLOYMENT.md)** — what Vercel is and every step + command to put
   the site online for free, with a custom domain.

---

## 1. Run locally

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the Vite dev server → http://localhost:5173
```

Build a production bundle and preview it:

```bash
npm run build    # outputs to /dist
npm run preview  # serve the built /dist locally
```

---

## 2. Make it yours (edit content)

**Almost everything lives in one file:** [`src/data/profile.js`](src/data/profile.js)

- `profile` — name, roles, tagline, email, social links
- `about` — bio paragraphs + the three stat tiles
- `experience` — your WSO2 SRE internship (add future roles here)
- `education` — degree + GPA
- `skills` — grouped tech list
- `projects` — the curated project cards (set `featured: true` to highlight)

Change text there and the whole site updates. No component edits needed for content.

### Your photo

1. Export a professional headshot, **square**, ideally ~600×600px.
2. Convert it to **WebP** (smaller + faster than PNG/JPG):
   - Online: squoosh.app → export as WebP.
   - CLI: `cwebp -q 82 photo.jpg -o profile.webp`
3. Save it as **`public/profile.webp`**.

Until you add it, the site automatically shows your GitHub avatar as a fallback —
so it never looks broken.

### Your résumé

Drop a PDF at **`public/Chalaka_Perera_Resume.pdf`** and the hero "Résumé" button
will download it. (Rename in `profile.resume` if you use a different filename.)

### Project screenshots (optional upgrade)

For heavier visuals, compress screenshots to `.webp` and place them in `public/`,
then extend the project cards in `profile.js` + `Projects.jsx` to show them.

---

## 3. Deploy to Vercel (free)

1. Push this folder to a **GitHub repository**.
2. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import that repo.
3. Vercel auto-detects Vite. Just click **Deploy**. That's it.

Every `git push` to `main` now auto-builds and deploys (this is your CI/CD —
a nice thing to mention to recruiters).

### Custom domain (cheap / free options)

- **Free:** your `*.vercel.app` URL works immediately.
- **Cheap:** buy a domain (`chalakaperera.dev`, `.me`, `.xyz` are ~\$3–12/yr on
  Namecheap / Porkbun / Cloudflare), then in Vercel → **Project → Settings →
  Domains → Add**, and point the domain's DNS to Vercel (Vercel shows the exact
  records). HTTPS is automatic.

---

## 4. Project structure

```
├─ index.html            # meta tags, fonts, root mount
├─ vercel.json           # Vercel build + cache config
├─ public/
│  ├─ favicon.svg
│  ├─ profile.webp       # ← add your photo here
│  └─ *.pdf              # ← add your résumé here
└─ src/
   ├─ main.jsx           # entry + ThemeProvider
   ├─ App.jsx            # section composition
   ├─ index.css          # design system + CSS variables (theming)
   ├─ App.css            # component styles
   ├─ context/ThemeContext.jsx
   ├─ data/profile.js    # ← ALL your content
   └─ components/        # Navbar, Hero, About, Experience, Skills, Projects, Contact, Footer
```
