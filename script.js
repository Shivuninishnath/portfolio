// Load particles.js background
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#38bdf8",
      opacity: 0.5,
      width: 1
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  }
});

// Extra: Smooth scroll for social links (optional enhancement)
document.querySelectorAll('.social-links a').forEach(link => {
  link.addEventListener('click', e => {
    // external links open in new tab
    link.setAttribute("target", "_blank");
  });
});