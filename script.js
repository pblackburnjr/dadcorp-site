(function () {
  var canHover = window.matchMedia('(hover: hover) and (pointer: fine)');
  var imgs = document.querySelectorAll('.tile-img');
  function clear(except) {
    imgs.forEach(function (b) { if (b !== except) b.classList.remove('revealed'); });
  }
  imgs.forEach(function (b) {
    b.addEventListener('click', function () {
      var url = b.getAttribute('data-href');
      if (canHover.matches || b.classList.contains('revealed')) {
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
})();
