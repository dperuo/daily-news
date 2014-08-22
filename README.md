Daily News
==========

A front-end developer coding challenge for [NYDailyNews.com][nydn].

The entire module is housed within the `<div class="offers">...</div>` container element. This allows for easy importing into any html page.

`<div>` elements and CSS classes maintain IE8 compatibility without using [HTML5Shiv][shiv].

Category links and offer panels are housed inside list elements.

Images load last so they appear on top of the other elements without using CSS z-index.

[BEM-style][bem] CSS selectors are used for class names. [Modernizr.js][modjs] enforces progressive enhancement on modern browsers, with fallbacks for IE8.

Absolute and relative CSS positioning of elements avoids float issues in IE8

JSON data loads via jQuery's `$.getJSON()` method. jQuery v1.11.1 keeps IE8 compatibility. [Mustache.js][mustjs] allows for easy maintenance of the HTML template.


### Still To Do

- [ ] **Code dynamic category list loading:**
  The category list is currently hard coded into the markup. This list should load dynamically from the JSON data. The data is passed to a function that sorts the category list into an array and removes duplicate entries. This array is then loaded into the Mustache template.

- [ ] **Code images as CSS3:**
  Images are used for the logo, arrows, and price banners. These elements should be coded using CSS3, with images as fallbacks.

- [ ] **Code event handlers for category switching:**
  Event handlers for switching between categories are needed. The handlers listen for clicks and scroll the appropriate offer panels into view.

- [ ] **Code event handlers for hiding and showing elements:**
  Event handlers for hiding and showing the "View Deal" button are needed. This handler listens for mouse hover and manipulates the appropriate button.

- [ ] **Add touchscreen functionality:**
  Swipe and fastclick controls.

- [ ] **Minify and concatenate assets:**
  JavaScript, CSS, and images.

[nydn]:   http://nydailynews.com
[shiv]:   https://code.google.com/p/html5shiv/
[bem]:    http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/
[modjs]:  http://modernizr.com/
[mustjs]: http://mustache.github.io/
