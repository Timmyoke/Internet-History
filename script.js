// script.js
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll('.timeline-nav');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
