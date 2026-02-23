const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const desktopMedia = window.matchMedia("(min-width: 960px)");

if (menuButton && nav) {
  const setNavInert = (value) => {
    if ("inert" in nav) {
      nav.inert = value;
    }
    if (value) {
      nav.setAttribute("inert", "");
    } else {
      nav.removeAttribute("inert");
    }
  };

  const openMenu = () => {
    nav.classList.add("is-open");
    nav.setAttribute("aria-hidden", "false");
    setNavInert(false);
    menuButton.setAttribute("aria-expanded", "true");
  };

  const closeMenu = () => {
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    if (desktopMedia.matches) {
      nav.removeAttribute("aria-hidden");
      setNavInert(false);
    } else {
      nav.setAttribute("aria-hidden", "true");
      setNavInert(true);
    }
  };

  const syncMenuState = () => {
    if (desktopMedia.matches) {
      nav.classList.remove("is-open");
      nav.removeAttribute("aria-hidden");
      setNavInert(false);
      menuButton.setAttribute("aria-expanded", "false");
      return;
    }

    if (nav.classList.contains("is-open")) {
      nav.setAttribute("aria-hidden", "false");
      setNavInert(false);
      menuButton.setAttribute("aria-expanded", "true");
      return;
    }

    nav.setAttribute("aria-hidden", "true");
    setNavInert(true);
    menuButton.setAttribute("aria-expanded", "false");
  };

  menuButton.addEventListener("click", () => {
    if (nav.classList.contains("is-open")) {
      closeMenu();
      return;
    }
    openMenu();
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (!desktopMedia.matches) {
        closeMenu();
      }
    });
  });

  window.addEventListener("resize", syncMenuState);

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      closeMenu();
    }
  });

  syncMenuState();
}
