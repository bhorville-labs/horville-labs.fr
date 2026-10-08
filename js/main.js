/* Horville Labs — vanilla JS, no dependencies. */
(function () {
  "use strict";

  var doc = document;

  /* ----- Footer year ----- */
  var yearEl = doc.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* ----- Centralized configuration ----- */
  var config = window.SITE_CONFIG;

  if (config && config.links) {
    doc.querySelectorAll("[data-site-link]").forEach(function (el) {
      var key = el.getAttribute("data-site-link");
      if (config.links[key]) {
        el.setAttribute("href", config.links[key]);
      }
    });
  }

  /* ----- Header state on scroll ----- */
  var header = doc.querySelector("[data-header]");

  function updateHeader() {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    }
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  /* ----- Mobile navigation ----- */
  var toggle = doc.querySelector(".nav-toggle");
  var nav = doc.querySelector("[data-nav]");

  function setNavOpen(open) {
    if (!toggle || !nav) return;
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setNavOpen(!nav.classList.contains("is-open"));
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        setNavOpen(false);
      }
    });

    doc.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setNavOpen(false);
      }
    });

    doc.addEventListener("click", function (event) {
      if (
        nav.classList.contains("is-open") &&
        !nav.contains(event.target) &&
        !toggle.contains(event.target)
      ) {
        setNavOpen(false);
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 860) {
        setNavOpen(false);
      }
    });
  }

  /* ----- Scroll reveal ----- */
  var reveals = doc.querySelectorAll(".reveal");
  var reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (!("IntersectionObserver" in window) || reducedMotion) {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    reveals.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  /* ----- Active section in nav ----- */
  var navLinks = {};

  doc.querySelectorAll('.nav-list a[href^="#"]').forEach(function (link) {
    var id = link.getAttribute("href").slice(1);
    if (id) {
      navLinks[id] = link;
    }
  });

  if ("IntersectionObserver" in window) {
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = navLinks[entry.target.id];
          if (!link) return;

          if (entry.isIntersecting) {
            Object.keys(navLinks).forEach(function (key) {
              navLinks[key].removeAttribute("aria-current");
            });
            link.setAttribute("aria-current", "true");
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    Object.keys(navLinks).forEach(function (id) {
      var section = doc.getElementById(id);
      if (section) {
        sectionObserver.observe(section);
      }
    });
  }
})();
