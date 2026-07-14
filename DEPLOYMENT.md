# 🚀 Deployment Guide — Putting Your Portfolio Online

This guide takes you from "it works on my laptop" to "anyone in the world can visit
my portfolio at a real URL." It assumes **zero prior deployment experience** and
explains every term and every command.

Read it top to bottom the first time. After that, deploying updates becomes a single
`git push`.

---

## Table of contents

1. [What "deploying" actually means](#1-what-deploying-actually-means)
2. [What is Vercel, and why we use it](#2-what-is-vercel-and-why-we-use-it)
3. [How your project gets built (the mental model)](#3-how-your-project-gets-built-the-mental-model)
4. [Prerequisites (one-time setup)](#4-prerequisites-one-time-setup)
5. [Step 1 — Put your code on GitHub](#5-step-1--put-your-code-on-github)
6. [Step 2 — Deploy to Vercel (the easy way)](#6-step-2--deploy-to-vercel-the-easy-way)
7. [Step 3 — This is CI/CD (and why recruiters care)](#7-step-3--this-is-cicd-and-why-recruiters-care)
8. [Step 4 — Add a custom domain](#8-step-4--add-a-custom-domain)
9. [Alternative — Deploy with the Vercel CLI](#9-alternative--deploy-with-the-vercel-cli)
10. [Everyday workflow (after first deploy)](#10-everyday-workflow-after-first-deploy)
11. [Troubleshooting](#11-troubleshooting)
12. [Glossary](#12-glossary)

---

## 1. What "deploying" actually means

Right now your site runs with `npm run dev`. That starts a **development server** on
your own computer at `http://localhost:5173`. The word `localhost` literally means
"this machine" — **nobody else on the internet can open that link.** It only exists
while your laptop is on and the command is running.

**Deploying** means:

1. Turning your React source code into a small bundle of plain, optimized files
   (`.html`, `.css`, `.js`) — this is called **building**.
2. Copying those files onto a computer that is always on and connected to the
   internet (a **server**), owned by a hosting company.
3. Giving that server a public web address (a **URL**) so anyone can visit.

We use **Vercel** as the hosting company because for a site like this it is **free,
fast, and almost fully automatic.**

---

## 2. What is Vercel, and why we use it

**Vercel** is a cloud hosting platform built specifically for front-end sites and
frameworks like React, Vite, and Next.js. Think of it as a service that:

- **Watches your GitHub repository.** Every time you push new code, it notices.
- **Builds your project for you** (it runs `npm install` + `npm run build` on its
  own servers — you don't do it manually).
- **Publishes the result** to a global **CDN** (Content Delivery Network — a network
  of servers around the world, so your site loads fast whether the visitor is in
  Colombo or California).
- **Gives you HTTPS automatically** (the padlock 🔒 in the browser — secure by
  default, no configuration).
- **Gives you a free URL** like `your-project.vercel.app`.

**Why Vercel instead of alternatives?**

| Option | Effort | Cost | Notes |
|---|---|---|---|
| **Vercel** ✅ | Lowest | Free | Auto-detects Vite, auto-builds on push, free HTTPS + domain |
| Netlify | Low | Free | Very similar to Vercel; also a great choice |
| GitHub Pages | Medium | Free | Works, but needs extra config for Vite routing |
| Your own VPS | High | ~$5/mo | You manage the server, updates, HTTPS — overkill here |

For a static React portfolio, **Vercel is the path of least resistance.**

> 💡 **"Static" site?** Your portfolio has no backend and no database — it's just
> files. That's called a **static site**, and static sites are the easiest and
> cheapest thing to host on earth. This is exactly why we designed it this way.

---

## 3. How your project gets built (the mental model)

Here is the whole pipeline, start to finish:

```
   YOUR CODE                    VERCEL'S SERVERS                THE INTERNET
┌───────────────┐   git push  ┌────────────────────┐        ┌──────────────┐
│  src/*.jsx    │ ──────────► │ 1. npm install     │        │              │
│  src/*.css    │             │ 2. npm run build   │ ─────► │ your-site    │
│  package.json │             │    → creates /dist │ deploy │ .vercel.app  │
│  index.html   │             │ 3. upload /dist    │        │  🔒 (HTTPS)  │
└───────────────┘             └────────────────────┘        └──────────────┘
   (on GitHub)                  (happens automatically)      (visitors go here)
```

- **`npm install`** downloads the libraries listed in `package.json` (React,
  Framer Motion, etc.) into a `node_modules/` folder.
- **`npm run build`** runs Vite, which compiles all your `.jsx` and `.css` into a
  tiny, fast `dist/` folder. This is the part `vercel.json` in your project
  configures.
- Vercel then serves the contents of `dist/` to the world.

You never run these on Vercel yourself — **it does all three automatically** every
time you push to GitHub.

---

## 4. Prerequisites (one-time setup)

You need three free things. You likely already have all of them.

### 4.1 Node.js (you already have it)

Check:

```bash
node --version    # should print v18 or higher
npm --version
```

If missing, install from <https://nodejs.org> (choose the "LTS" version).

### 4.2 Git (you already have it)

Git is the tool that tracks your code history and uploads it to GitHub. Check:

```bash
git --version
```

First-time Git users should set their identity (do this once, globally):

```bash
git config --global user.name "Chalaka Perera"
git config --global user.email "chalakasamith@gmail.com"
```

### 4.3 A GitHub account

You already have one: **[github.com/chala2001](https://github.com/chala2001)**.
GitHub is where your code lives online. Vercel reads from it.

### 4.4 A Vercel account (create now, takes 1 minute)

1. Go to <https://vercel.com/signup>.
2. Click **"Continue with GitHub"** — this links the two accounts so Vercel can see
   your repositories. This is the smoothest setup.

---

## 5. Step 1 — Put your code on GitHub

Your portfolio currently exists only on your laptop. We need to push it to a GitHub
repository first.

### 5.1 Turn the folder into a Git repository

Open a terminal **inside the project folder** (`/home/chalaka/chalaLive`) and run:

```bash
cd /home/chalaka/chalaLive     # make sure you're in the project

git init                       # start tracking this folder with Git
git add .                      # stage every file (the .gitignore excludes node_modules)
git commit -m "Initial commit: personal portfolio"   # save a snapshot
```

**What just happened?**
- `git init` created a hidden `.git/` folder that records history.
- `git add .` selected all files to include. Your `.gitignore` already tells Git to
  **skip** `node_modules/` and `dist/` (those get rebuilt, so we never upload them).
- `git commit` saved a checkpoint labelled with a message.

### 5.2 Create an empty repository on GitHub

1. Go to <https://github.com/new>.
2. **Repository name:** `portfolio` (or `chalaka-portfolio`).
3. Visibility: **Public** (recommended — recruiters can see your clean code).
4. **Do NOT** tick "Add a README" / ".gitignore" / "license" — your folder already
   has these, and adding them on GitHub causes a conflict.
5. Click **Create repository**.

### 5.3 Connect and push

GitHub will show you a page with commands. Use the **"…or push an existing
repository"** block. It looks like this (GitHub fills in your real username):

```bash
git remote add origin https://github.com/chala2001/portfolio.git
git branch -M main
git push -u origin main
```

- `git remote add origin …` tells your local repo where the GitHub copy lives.
- `git branch -M main` names your main branch `main` (the modern default).
- `git push -u origin main` **uploads** your code to GitHub.

> 🔑 If Git asks for a password, GitHub no longer accepts your account password over
> HTTPS. Create a **Personal Access Token**: GitHub → Settings → Developer settings →
> Personal access tokens → Tokens (classic) → Generate new token → tick `repo` scope
> → copy it → paste it as the password. (Or set up SSH keys — see GitHub's docs.)

Refresh your GitHub repo page — your files are now online. ✅

---

## 6. Step 2 — Deploy to Vercel (the easy way)

Now the satisfying part.

1. Go to <https://vercel.com/new> (you're logged in via GitHub from step 4.4).
2. You'll see **"Import Git Repository"** with a list of your GitHub repos.
   Find **`portfolio`** and click **Import**.
   - First time only: Vercel may ask for permission to access your GitHub repos.
     Click **Install** / **Authorize** and allow it (you can limit it to just this
     repo if you prefer).
3. Vercel now shows a **configuration screen**. The good news: **it auto-detects
   everything** because this is a standard Vite project. You should see:
   - **Framework Preset:** `Vite` ✅ (detected automatically)
   - **Build Command:** `npm run build` ✅
   - **Output Directory:** `dist` ✅
   - **Install Command:** `npm install` ✅

   You do **not** need to change anything. (These match your `vercel.json`.)
4. Click **Deploy**.
5. Wait ~30–60 seconds. You'll see build logs streaming (this is Vercel running
   `npm install` and `npm run build` on its servers). When it finishes you get
   **confetti 🎉** and a live URL like:

   ```
   https://portfolio-chala2001.vercel.app
   ```

6. Click it. **Your portfolio is live on the internet.** Share that link anywhere.

---

## 7. Step 3 — This is CI/CD (and why recruiters care)

You just set up a **CI/CD pipeline** without writing any pipeline code. Here's what
that means and why it's worth mentioning in interviews:

- **CI = Continuous Integration:** every code change is automatically built and
  validated.
- **CD = Continuous Deployment:** every successful build is automatically published.

From now on, your workflow is:

```bash
# 1. edit your content (e.g. src/data/profile.js)
# 2. save the change with Git
git add .
git commit -m "Update: added new project"
# 3. push
git push
```

The moment you `git push`, **Vercel automatically rebuilds and redeploys** your live
site — usually within a minute. No manual upload, ever.

**Bonus — Preview Deployments:** if you push to a *different* branch (not `main`),
Vercel builds a separate **preview URL** just for that branch, so you can test
changes before they hit your real site. This is exactly how professional teams ship
software. Mentioning "my portfolio auto-deploys via a Git-based CI/CD pipeline on
Vercel" signals real DevOps awareness. 🎯

---

## 8. Step 4 — Add a custom domain

`portfolio-chala2001.vercel.app` works forever and is free. But
`chalakaperera.dev` looks far more professional on a CV.

### 8.1 Buy a domain (cheap)

Domains are rented yearly. Good, honest registrars:

| Registrar | Notes |
|---|---|
| **Cloudflare** | Sells at cost, no markup — usually the cheapest. |
| **Porkbun** | Cheap, clean UI, free WHOIS privacy. |
| **Namecheap** | Popular, frequent promos. |

Typical prices per year: `.dev` ~$12, `.me` ~$10–20, `.xyz` / `.site` ~$1–3 (first
year). For a developer, **`.dev` looks the most professional.** Search for
`chalakaperera.dev`, `chalaka.dev`, etc., and buy one.

### 8.2 Connect it to Vercel

1. In Vercel: open your project → **Settings** → **Domains**.
2. Type your domain (e.g. `chalakaperera.dev`) → **Add**.
3. Vercel shows you **DNS records** to add — usually either:
   - An **`A` record** pointing to a Vercel IP, or
   - A **`CNAME` record** pointing to `cname.vercel-dns.com`.
4. Go to your **registrar's dashboard** → DNS settings → add exactly the records
   Vercel gave you.
5. Wait for **DNS propagation** (the internet updating its address book) — anywhere
   from a few minutes to a couple of hours.
6. Vercel auto-issues a free **HTTPS certificate**. Done — your site now loads at
   your custom domain with a padlock. 🔒

> 💡 **Easiest possible route:** if you buy the domain **through Cloudflare** and
> use Cloudflare's nameservers, Vercel + Cloudflare configuration is nearly
> one-click. But any registrar works fine with the manual DNS records above.

---

## 9. Alternative — Deploy with the Vercel CLI

The GitHub method in Step 2 is recommended (because it gives you auto-deploys). But
if you ever want to deploy **directly from your terminal** without GitHub, you can:

```bash
# install the Vercel command-line tool globally
npm install -g vercel

# log in (opens your browser once)
vercel login

# from inside the project folder, deploy a preview
vercel

# deploy straight to production
vercel --prod
```

The CLI will ask a few questions the first time (project name, etc.) — accept the
defaults. This is handy for quick one-off deploys, but for your portfolio the
**GitHub → Vercel auto-deploy** setup is better long-term.

---

## 10. Everyday workflow (after first deploy)

Once everything above is done once, your entire update loop is:

```bash
# make your edits (usually just src/data/profile.js — see UPDATING-CONTENT.md)

# preview locally first (optional but smart)
npm run dev            # open http://localhost:5173 and check it looks right

# ship it
git add .
git commit -m "Describe what you changed"
git push
```

Vercel rebuilds and your live site updates in ~1 minute. That's it.

---

## 11. Troubleshooting

**❌ "Build failed" on Vercel**
- Read the red lines in the build log. 99% of the time it's a typo in
  `src/data/profile.js` — a **missing comma**, an **unclosed quote**, or an
  **unclosed bracket** `{ } [ ]`.
- Reproduce it locally to find the exact line: run `npm run build` on your machine.
  The error points to the file and line number.

**❌ Push rejected / "authentication failed"**
- Use a **Personal Access Token** as your password (see the note in Step 5.3), not
  your GitHub account password.

**❌ Photo or résumé shows 404**
- Files in `public/` are served at the site root. `public/profile.webp` becomes
  `/profile.webp`. Make sure the filename **exactly** matches (case-sensitive!) what
  `profile.js` references.

**❌ Changes not appearing on the live site**
- Did you `git push`? Check the **Deployments** tab in Vercel — a new deployment
  should appear after each push. If not, the push didn't reach GitHub.
- Hard-refresh your browser: `Ctrl+Shift+R` (Linux/Windows) to bypass cache.

**❌ Custom domain not working after adding**
- DNS can take up to a few hours. Verify your records at
  <https://dnschecker.org>. Make sure you didn't add a duplicate/conflicting record.

---

## 12. Glossary

| Term | Plain-English meaning |
|---|---|
| **localhost** | Your own computer. Not visible to the internet. |
| **build** | Compiling your React source into optimized static files (`dist/`). |
| **deploy** | Copying those files to a public server so people can visit. |
| **server** | An always-on computer that serves your files to visitors. |
| **static site** | A site made of plain files, with no backend/database. Yours. |
| **repository (repo)** | A folder of code tracked by Git, usually stored on GitHub. |
| **commit** | A saved snapshot of your code at a point in time. |
| **push** | Uploading your commits to GitHub. |
| **CDN** | A worldwide network of servers that makes your site load fast everywhere. |
| **HTTPS** | Encrypted, secure connection (the 🔒 padlock). Vercel gives it free. |
| **DNS** | The internet's address book — maps `yourname.dev` to a server. |
| **CI/CD** | Automatic build + deploy on every code change. You now have this. |
| **domain / registrar** | Your web address, and the company you rent it from. |

---

**Next:** once deployed, see **[UPDATING-CONTENT.md](UPDATING-CONTENT.md)** for how
to change your portfolio's content over time, and
**[HOW-IT-WORKS.md](HOW-IT-WORKS.md)** to understand how the code fits together.
