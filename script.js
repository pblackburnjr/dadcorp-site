(function () {
  // Shirt, hoodie, and hat tiles: one mockup image, click goes to the shop when data-href is set.
  // Hat buy URLs are not live yet; tiles use data-href-placeholder until those URLs are filled in.
  document.querySelectorAll('.tile-img[data-href]').forEach(function (b) {
    b.addEventListener('click', function () {
      window.location.href = b.getAttribute('data-href');
    });
  });

  // Current-section highlight for the category boxes and header nav.
  var ids = ['designs', 'shirts', 'hoodies', 'hats'];
  var sections = ids.map(function (id) { return document.getElementById(id); });
  var about = document.getElementById('about');
  var catalog = document.getElementById('catalog');
  var links = Array.prototype.slice.call(
    document.querySelectorAll('#category-bar a[href^="#"], .site-header nav a[href^="#"]')
  );
  var current = null;
  var ticking = false;

  function setCurrent(id) {
    if (id === current) return;
    current = id;
    links.forEach(function (a) {
      if (a.getAttribute('href') === '#' + id) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  }

  function update() {
    ticking = false;
    var line = 140; // just below the sticky header
    var id = null;
    if (about && about.getBoundingClientRect().top <= line) {
      id = 'about';
    } else {
      sections.forEach(function (s, i) {
        if (s && s.getBoundingClientRect().top <= line) id = ids[i];
      });
      // Boxes are on screen but no section has reached the top yet.
      if (!id && catalog && catalog.getBoundingClientRect().top < window.innerHeight * 0.6) id = 'designs';
    }
    setCurrent(id);
  }

  function onScroll() {
    if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  window.addEventListener('hashchange', onScroll);

  // #catalog should land on the category boxes (the section itself already does).
  update();
})();
