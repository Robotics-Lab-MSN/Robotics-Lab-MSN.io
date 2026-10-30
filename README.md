# Robotics-Lab-MSN.io

Official website for the RAS Major lab at ASU.

---

## How this website works (read me first!)

This site is deliberately the simplest kind of website: plain HTML, CSS and a
tiny bit of JavaScript. No frameworks, no build tools, no packages to install.

| File            | What it is | Analogy |
| --------------- | ---------- | ------- |
| `index.html`    | What is on the page (words, sections, cards) | the skeleton |
| `css/style.css` | How it looks (colors, sizes, spacing) | the paint |
| `js/main.js`    | The small bits of movement (mobile menu, footer year) | the muscles |

Every file is commented line by line in plain English, so you can open any of
them and understand what each piece does and why it is there.

## See the site on your own computer

Double-click `index.html`. That is genuinely it.

## Edit the words on the site

1. Open `index.html` in any editor.
2. Find the section you want - each one starts with a big comment sign.
3. Change the words between the tags.
4. Save, refresh the browser. Done.

## Add a new project card

1. Open `index.html` and find `SECTION 02 - WHAT WE'RE UP TO`.
2. Copy one whole `<article class="card">...</article>` block.
3. Paste it inside the same `<div class="card-grid">` and change the title,
   the one-sentence description, and (when you have one) add a photo.
4. When a card holds a real project, remove the `card-placeholder` class so it
   gets the solid "finished" border instead of the dashed "empty frame" one.

## How publishing works

This repository is a GitHub Pages repo (`Robotics-Lab-MSN.io`). The live site
serves whatever is on `main` once Pages is switched on in the repo settings.
New work happens on branches and gets reviewed before it touches `main`, so
the public site never shows half-finished changes.
