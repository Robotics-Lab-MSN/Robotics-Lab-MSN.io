/* ==================================================================
   RAS LAB WEBSITE - THE MUSCLES (main.js)

   This file does exactly two small jobs:

     JOB 1: On phones, the "hamburger" button opens and closes the
            navigation menu.

     JOB 2: The year in the footer always shows the current year,
            so the site never looks abandoned.

   There is nothing else here on purpose. Simple is good.
   ================================================================== */


/* ------------------------------------------------------------------
   JOB 1: THE MOBILE MENU

   How it works:
     - index.html has a button with id="menu-button" and a link list
       with id="nav-links".
     - style.css hides the link list on phones.
     - When the button is tapped, we add (or remove) the class
       "is-open" on the link list, and style.css shows it again.
   ------------------------------------------------------------------ */

// Find the two pieces on the page, by the ids we gave them in index.html.
const menuButton = document.getElementById('menu-button');  // the hamburger
const navLinks = document.getElementById('nav-links');      // the link list

// Only wire this up if both pieces exist (they always should,
// but checking first means the site can never crash over a menu).
if (menuButton && navLinks) {

  // "addEventListener" means: when someone clicks the button,
  // run the little recipe inside the braces.
  menuButton.addEventListener('click', function () {

    // Toggle = add the class if it's missing, remove it if it's there.
    // This one line is the whole open/close switch.
    navLinks.classList.toggle('is-open');

    // Tell screen readers whether the menu is now open or closed.
    // (Accessibility: blind visitors' software announces this.)
    const menuIsOpen = navLinks.classList.contains('is-open');
    menuButton.setAttribute('aria-expanded', menuIsOpen);
  });

  // After the visitor taps a link inside the open menu,
  // close the menu so the page underneath is visible again.
  navLinks.addEventListener('click', function (event) {

    // event.target is the exact thing that was tapped.
    // Only close the menu if that thing was a link.
    if (event.target.tagName === 'A') {
      navLinks.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
}


/* ------------------------------------------------------------------
   JOB 2: THE SELF-UPDATING YEAR

   The footer contains:  <span id="year">2026</span>
   Below, we ask the visitor's device what year it is and write that
   into the span. Nobody ever has to update the footer by hand.
   ------------------------------------------------------------------ */

// Find the footer year span by its id.
const yearSpan = document.getElementById('year');

// If it exists, put the current year into it.
if (yearSpan) {
  // "new Date()" is the device's clock; ".getFullYear()" is the year.
  yearSpan.textContent = new Date().getFullYear();
}



/* ------------------------------------------------------------------
   JOB 3: THE ROTATING HERO PHOTOS

   Praj asked for a company-style landing page: big photographs of the
   lab behind the hero text, gently changing from one to the next.

   HOW TO ADD THE PHOTOS (when Praj supplies them):
     1. Put the image files in the images/hero/ folder.
     2. List their file names in HERO_PHOTOS below, in the order they
        should appear, for example:
            const HERO_PHOTOS = ["lab-wide.jpg", "robot-cell.jpg"];
     3. Done - the hero crossfades between them every few seconds.

   While the list is empty this code does nothing at all, and the hero
   keeps its plain blueprint-grid look.
   ------------------------------------------------------------------ */

// The hero photos, as file names inside images/hero/.
// First set selected from Praj's lab photo folder, 2026-10-30:
// robot cells, machine tending, and the robotics hall.
const HERO_PHOTOS = ["hero-1.jpg", "hero-2.jpg", "hero-3.jpg", "hero-4.jpg"];

// Only run when there is both a hero photo layer and at least one photo.
const heroSection = document.getElementById('hero');
const heroBg = document.getElementById('hero-bg');

if (heroSection && heroBg && HERO_PHOTOS.length > 0) {

  // Put one <img> per photo into the photo layer.
  HERO_PHOTOS.forEach(function (fileName, index) {
    const img = document.createElement('img');
    img.src = 'images/hero/' + fileName;
    img.alt = '';              /* decorative background; the hero text says it all */
    if (index === 0) {
      img.classList.add('is-active');  /* the first photo starts visible */
    }
    heroBg.appendChild(img);
  });

  // Tell the stylesheet there are photos to show.
  heroSection.classList.add('hero-has-photos');

  // Every 6 seconds, fade to the next photo (looping back to the first).
  let currentPhoto = 0;
  const photos = heroBg.querySelectorAll('img');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (photos.length > 1 && !reduceMotion) {
    setInterval(function () {
      photos[currentPhoto].classList.remove('is-active');
      currentPhoto = (currentPhoto + 1) % photos.length;
      photos[currentPhoto].classList.add('is-active');
    }, 6000);
  }
}
