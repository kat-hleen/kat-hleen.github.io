document.addEventListener("DOMContentLoaded", () => {

  // ALL glow elements
  const glows = {
    portfolio: document.querySelector(".portfolio-glow"),
    contact: document.querySelector(".contact-glow"),
    resume: document.querySelector(".resume-glow"),
    instagram: document.querySelector(".instagram-glow"),
    itch: document.querySelector(".itch-glow"),
    meteor: document.querySelector(".meteor-glow"),
    sketchbook: document.querySelector(".sketchbook-glow")
  };

  // ALL hotspots
  const hotspots = {
    portfolio: document.querySelector(".portfolio"),
    contact: document.querySelector(".contact"),
    resume: document.querySelector(".resume"),
    instagram: document.querySelector(".instagram"),
    itch: document.querySelector(".itch"),
    meteor: document.querySelector(".meteor"),
    sketchbook: document.querySelector(".sketchbook")
  };

  function resetGlow() {
    Object.values(glows).forEach(glow => {
      if (glow) glow.style.opacity = "0";
    });
  }

  // attach events safely
  Object.keys(hotspots).forEach(key => {
    const hotspot = hotspots[key];
    const glow = glows[key];

    if (hotspot && glow) {
      hotspot.addEventListener("mouseenter", () => {
        resetGlow();
        glow.style.opacity = "1";
      });

      hotspot.addEventListener("mouseleave", resetGlow);
    }
  });

});