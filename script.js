(function () {
  var canHover = window.matchMedia('(hover: hover) and (pointer: fine)');
  var imgs = document.querySelectorAll('.tile-img[data-href]');
  function clear(except) {
    imgs.forEach(function (b) { if (b !== except) b.classList.remove('revealed'); });
  }
  imgs.forEach(function (b) {
    b.addEventListener('click', function () {
      var url = b.getAttribute('data-href');
      // Tiles with no alternate image (hoodies) go straight to the shop.
      if (canHover.matches || !b.querySelector('.img-shirt') || b.classList.contains('revealed')) {
        window.location.href = url;
      } else {
        clear(b);
        b.classList.add('revealed');
      }
    });
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.tile-img')) clear(null);
  });

  // Category tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"][data-tab]'));
  var tiles = document.querySelectorAll('#catalog-panel .tile');
  var panel = document.getElementById('catalog-panel');
  var banner = document.getElementById('soon-banner');
  var countEl = document.getElementById('cat-count');
  var names = { all: 'All', shirts: 'Shirts', hoodies: 'Hoodies', hats: 'Hats' };
  var valid = ['all', 'shirts', 'hoodies', 'hats'];

  function select(name, focus) {
    var shown = 0;
    clear(null);
    tabs.forEach(function (t) {
      var on = t.getAttribute('data-tab') === name;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      if (on) { panel.setAttribute('aria-labelledby', t.id); if (focus) t.focus(); }
    });
    tiles.forEach(function (li) {
      var show = name === 'all' || li.getAttribute('data-cat') === name;
      li.hidden = !show;
      if (show) shown++;
    });
    banner.hidden = !(name === 'hats' || name === 'all');
    countEl.textContent = shown + (shown === 1 ? ' item' : ' items') + (name === 'all' ? '' : ' · ' + names[name]);
  }

  function fromHash(scroll) {
    var h = window.location.hash.replace('#', '').toLowerCase();
    if (valid.indexOf(h) !== -1 || h === 'catalog') {
      select(h === 'catalog' ? 'all' : h, false);
      if (scroll) {
        var c = document.getElementById('catalog');
        if (c) c.scrollIntoView();
      }
    }
  }

  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () {
      var name = t.getAttribute('data-tab');
      select(name, false);
      history.replaceState(null, '', '#' + name);
    });
    t.addEventListener('keydown', function (e) {
      var n = -1;
      if (e.key === 'ArrowRight') n = (i + 1) % tabs.length;
      else if (e.key === 'ArrowLeft') n = (i - 1 + tabs.length) % tabs.length;
      else if (e.key === 'Home') n = 0;
      else if (e.key === 'End') n = tabs.length - 1;
      if (n < 0) return;
      e.preventDefault();
      var name = tabs[n].getAttribute('data-tab');
      select(name, true);
      history.replaceState(null, '', '#' + name);
    });
  });

  window.addEventListener('hashchange', function () { fromHash(true); });
  select('all', false);
  fromHash(true);
})();
