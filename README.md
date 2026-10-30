# Robotics-Lab-MSN.io

Website for the Robotics Systems Instructional Lab ("RAS Lab") - Room 231,
ISTB 12, ASU Polytechnic campus, School of Manufacturing Systems and Networks.

---

## How this website works (read me first!)

This site is deliberately the simplest kind of website: plain HTML, CSS and a
tiny bit of JavaScript. No frameworks, no build tools, no packages to install.

| File / folder       | What it is | Analogy |
| ------------------- | ---------- | ------- |
| `index.html`        | The directory page: what the lab is, has and does | the skeleton |
| `labs/`             | Full copies of the instructional lab guides | extra chapters |
| `css/style.css`     | How everything looks | the paint |
| `js/main.js`        | Small movements (mobile menu, footer year) | the muscles |

Every file is commented line by line in plain English, so you can open any of
them and understand what each piece does and why it is there. Facts that were
checked against an outside source carry a `SOURCE:` comment naming the page
and the day it was checked; things still needed from Praj are marked
`TODO(Praj)`.

## See the site on your own computer

Double-click `index.html`. That is genuinely it.

## Edit the words on the site

1. Open `index.html` in any editor.
2. Find the section you want - each one starts with a big comment sign.
3. Change the words between the tags.
4. Save, refresh the browser. Done.

## Add a card (project, course, equipment, person, news)

1. Open `index.html` and find the matching section.
2. Copy one whole `<article class="card">...</article>` block.
3. Paste it inside the same `<div class="card-grid">` and change the words.
4. When a card holds real content, remove the `card-placeholder` class so it
   gets the solid "finished" border instead of the dashed "empty frame" one.

## The lab guide pages

`labs/isaac-sim-lab-1.html` is the full text of RAS 545's Lab 1, copied from
the authors' original document (source and license are named in a comment at
the top of the file). Labs 2 and 3 are being moved the same way: convert the
source document to HTML, wrap it in the same page template, and link it from
the Isaac Sim section of `index.html`.

## How publishing works

This repository is a GitHub Pages repo (`Robotics-Lab-MSN.io`). The live site
serves whatever is on `main` once Pages is switched on in the repo settings.
New work happens on branches and gets reviewed before it touches `main`, so
the public site never shows half-finished changes.
