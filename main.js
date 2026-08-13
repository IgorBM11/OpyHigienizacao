// Opy Health × Starbridge — Project Status Site
(function () {
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));
  var sections = Array.prototype.slice.call(document.querySelectorAll('main .section'));

  function setActive(id) {
    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.dataset.section === id);
    });
  }

  // Custom scroll-to computed from section heights rather than the native
  // anchor-jump / scrollIntoView (or even offsetTop), which for a
  // position: sticky element reflect its CURRENT stuck/visual position, not
  // its true place in the document. Because sections stack via sticky to
  // create the "conveyor" effect, a covered section still reports
  // rect.top === 0 (and offsetTop equal to the current scroll position)
  // while stuck, which fools those APIs into thinking it's already in view
  // and backward navigation silently fails. Summing offsetHeight (a pure
  // size, unaffected by sticky positioning) of preceding sections gives a
  // reliable target.
  function scrollToId(id) {
    var target = document.getElementById(id);
    if (!target) return;
    var top = 0;
    for (var i = 0; i < sections.length; i++) {
      if (sections[i] === target) break;
      top += sections[i].offsetHeight;
    }
    window.scrollTo({ top: top, left: 0, behavior: 'smooth' });
  }

  Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]')).forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('href').slice(1);
      if (!document.getElementById(id)) return;
      e.preventDefault();
      history.pushState(null, '', '#' + id);
      scrollToId(id);
      setActive(id);
    });
  });

  if ('IntersectionObserver' in window && sections.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    sections.forEach(function (section) { observer.observe(section); });
  }

  var navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 8);
  }, { passive: true });
})();
