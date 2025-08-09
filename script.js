// Contact form handler
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Thank you for your message, Ranjith! I will get back to you soon.");
});

// Smooth fade-in animation for elements
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in, .slide-up");
  elements.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = el.classList.contains("slide-up") ? "translateY(20px)" : "none";
    setTimeout(() => {
      el.style.transition = "all 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200 * index);
  });
});