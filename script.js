(function () {
  var imgs = document.querySelectorAll('.tile-img[data-href]');
  imgs.forEach(function (b) {
    b.addEventListener('click', function () {
      window.location.href = b.getAttribute('data-href');
    });
  });

  // Category tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"][data-tab]'));
  var tiles = document.querySelectorAll('#catalog-panel .tile');
  var panel = document.getElementById('catalog-panel');
  var countEl = document.getElementById('cat-count');
  var names = { designs: 'Designs', shirts: 'Shirts', hoodies: 'Hoodies', hats: 'Hats', all: 'All' };
  var valid = ['designs', 'shirts', 'hoodies', 'hats', 'all'];

  function select(name, focus) {
    var shown = 0;
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
    countEl.textContent = shown + (shown === 1 ? ' item' : ' items') + (name === 'all' ? '' : ' · ' + names[name]);
  }

  function fromHash(scroll) {
    var h = window.location.hash.replace('#', '').toLowerCase();
    if (valid.indexOf(h) !== -1 || h === 'catalog') {
      select(h === 'catalog' ? 'designs' : h, false);
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
  select('designs', false);
  fromHash(true);
})();
