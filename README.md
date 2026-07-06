# GradQuest Sol — Website

A 6-page React site (Home, Programmes, About, Founder's Note, Privacy Policy, Contact)
built with React Router + Tailwind CSS, in the Oxford/Cambridge heritage theme
(navy #0B1F3B / brass gold #C9962E / cream #F6F1E4).

**Photo placeholders are now click-to-upload.** The 4 faculty cards, the founder
photo, and the header/footer logo are all live upload slots — no code editing
needed to add real photos. See "Uploading photos" below.

---

## 1. Run it on your computer

You need [Node.js](https://nodejs.org) version 18 or later installed.

```bash
# 1. unzip the project, then open a terminal inside the folder
cd gradquest-sol

# 2. install dependencies (only needed once)
npm install

# 3. start the local dev server
npm start
```

Your browser should open automatically at **http://localhost:3000**. If not,
open that address manually. Any code changes you make will hot-reload.

To build a production-ready version (a `build/` folder you can deploy anywhere):

```bash
npm run build
```

---

## 2. Uploading photos into the placeholders

Once the site is running:

- **Faculty photos** — go to the **About** page, scroll to "Faculty & Mentors",
  click any photo box, and choose an image file. It appears immediately.
- **Founder photo** — go to **Founder's Note**, click the photo box on the left.
- **Logo** — click the crest logo in the top-left of the header (or in the footer).

Hover over an uploaded photo to see **Replace** / **Remove** controls.

Photos are stored in the visitor's own browser (via `localStorage`), so:
- They'll still be there next time *you* open the site in that browser.
- They will **not** automatically appear for other visitors — browser storage
  is per-device. For a real public launch where every visitor sees the same
  photos, ask a developer to wire the upload to a small backend/storage
  bucket instead (Anthropic's Claude Code or Claude Desktop can help with
  that step if you want to go further).

---

## 3. Put it on GitHub, step by step

### A. Create the repository on GitHub
1. Go to https://github.com and log in.
2. Click the **+** icon (top right) → **New repository**.
3. Name it, e.g. `gradquest-sol-website`. Leave it **empty** (don't add a
   README/.gitignore there — you already have your own).
4. Click **Create repository**. Keep the page open — GitHub shows you the
   commands you'll need next.

### B. Push your local project
Open a terminal inside the `gradquest-sol` folder and run:

```bash
git init
git add .
git commit -m "Initial commit — GradQuest Sol website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/gradquest-sol-website.git
git push -u origin main
```

Replace `YOUR-USERNAME` and the repo name with your actual GitHub URL (shown
on the empty repo's page). If GitHub asks for credentials, use a
[personal access token](https://github.com/settings/tokens) instead of your
password.

### C. Making changes later
Any time you edit a file (colors, text, add a new photo slot, etc.):

```bash
git add .
git commit -m "Describe what you changed"
git push
```

### D. (Optional) Free hosting so anyone can visit the live site
Once it's on GitHub, you can deploy it for free with **Vercel** or **Netlify**:
1. Go to https://vercel.com (or https://netlify.com) and sign in with GitHub.
2. Click "New Project" / "Add new site" → pick your `gradquest-sol-website` repo.
3. Build command: `npm run build` · Output directory: `build`.
4. Deploy — you'll get a live `https://...vercel.app` URL in about a minute.

---

## 4. Making other changes (text, colors, pages)

Everything is plain React + Tailwind, organized like this:

```
src/
  lib/content.js        <- all the editable text: brand name, phone numbers,
                            programme descriptions, process steps, FAQs, etc.
  components/            <- header, footer, passport stamp, photo upload slot...
  pages/                  <- one file per page (Home.jsx, About.jsx, ...)
  index.css               <- color variables (--navy, --gold, --cream) and
                            reusable classes (.btn-gold, .card-lift, etc.)
```

- **To change text** (phone number, address, programme descriptions, footer
  tagline): edit `src/lib/content.js` — nothing else needs to change.
- **To change colors**: edit the `:root { --navy: ...; --gold: ...; }`
  block at the top of `src/index.css`. Everything on the site reads from
  those three variables, so changing them there recolors the whole site
  consistently — the page layout, spacing and structure are untouched.
- **To add a new photo upload slot** anywhere else: use
  `<PhotoSlot id="something-unique" label="My Photo" />` — pick any unique
  `id` string and it works immediately.

The overall look (navy/gold/cream palette, passport-stamp motif, page
layout and section order) has been kept exactly as designed — only the
placeholder photo/logo boxes were made interactive.
