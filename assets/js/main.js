document.addEventListener('DOMContentLoaded', function () {
  // AOS — scroll reveal animations
  if (window.AOS) {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      disable: function () { return window.innerWidth < 992; }
    });
  }

  // Navbar background solidifies after scrolling past the hero
  var navbar = document.querySelector('.navbar.site-navbar');
  if (navbar) {
    var onScroll = function () {
      navbar.classList.toggle('navbar-scrolled', window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Highlight current nav link based on resolved pathname
  var here = window.location.pathname.replace(/\/index\.html$/, '/');
  var marked = false;
  document.querySelectorAll('.navbar .nav-link[href], .navbar .dropdown-item[href]').forEach(function (a) {
    if (marked) { return; }
    var rawHref = a.getAttribute('href');
    if (!rawHref || rawHref === '#' || rawHref.charAt(0) === '#') { return; }
    var linkPath = a.pathname.replace(/\/index\.html$/, '/');
    if (linkPath === here) {
      marked = true;
      var parentDropdown = a.closest('.dropdown');
      if (parentDropdown) {
        parentDropdown.querySelector('.nav-link').classList.add('active');
      } else {
        a.classList.add('active');
      }
    }
  });

  // Close the mobile menu automatically once a real destination link is tapped.
  // Dropdown-togglere (Media, TUP, Hjem) skal IKKE lukke menyen — de åpner undermeny.
  var collapseEl = document.querySelector('.navbar-collapse');
  if (collapseEl && window.bootstrap) {
    collapseEl.querySelectorAll('a.nav-link:not(.dropdown-toggle), a.dropdown-item').forEach(function (link) {
      link.addEventListener('click', function () {
        if (collapseEl.classList.contains('show') && window.innerWidth < 992) {
          var instance = window.bootstrap.Collapse.getOrCreateInstance(collapseEl);
          instance.hide();
        }
      });
    });
  }
});
