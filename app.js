function enterSite() {
  const gate = document.getElementById("age-gate");
  const site = document.getElementById("main-site");

  gate.style.transition = "opacity 0.8s ease";
  gate.style.opacity = "0";

  setTimeout(() => {
    gate.style.display = "none";
    site.style.display = "block";
    requestAnimationFrame(() => {
      site.style.opacity = "1";
    });
  }, 800);
}

function leaveSite() {
  window.location.href = "https://www.google.com";
}
