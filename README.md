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
| `equipment/`        | One page per equipment family in the lab | the exhibit rooms |
| `images/`           | Photos of the lab and its equipment | the photo album |
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

`labs/` holds the full text of every instructional lab guide, copied from the
authors' original documents (each file names its source in a comment at the
top): the three Isaac Sim simulation labs and the four articulated robot
(Dobot) labs. The six industrial automation labs are listed on the home page
as placeholders until the teaching team finishes their guides.

## The equipment pages

`equipment/` has one page per equipment family (FANUC, Universal Robots,
JAKA, Dobot, Allen-Bradley PLCs, Isaac Sim workstations). Each says what the
equipment is and which labs use it, and links back to the matching guides.

## Add the hero photos

The home page is ready to show large rotating photos of the lab behind the
headline (company landing-page style). To switch that on:

1. Put the photo files in `images/hero/`.
2. Open `js/main.js`, find `HERO_PHOTOS`, and list the file names there.
3. Save and push. The hero crossfades between them every 6 seconds.

Equipment photos work the same way: drop them in `images/equipment/` and
uncomment the `TODO(Praj)` image line on the matching equipment page.

## How publishing works

This repository is a GitHub Pages repo (`Robotics-Lab-MSN.io`). The live site
serves whatever is on `main` once Pages is switched on in the repo settings.
New work happens on branches and gets reviewed before it touches `main`, so
the public site never shows half-finished changes.
