document.querySelectorAll('.collapsible-section').forEach(section => {
  const button = section.querySelector('.about-title');
  const content = section.querySelector('.about-content');
  const star = section.querySelector('.star-icon');

  button.addEventListener('click', () => {
    const isExpanded = content.classList.contains('expanded');

    if (isExpanded) {
      // COLLAPSE
      content.style.maxHeight = content.scrollHeight + 'px'; // Fix height
      content.offsetHeight; // Force reflow
      content.style.maxHeight = '0px';
      content.classList.remove('expanded');
      star.classList.remove('rotated');
    } else {
      // EXPAND
      content.classList.add('expanded');
      content.style.maxHeight = content.scrollHeight + 'px';
      star.classList.add('rotated');
    }
  });

  // Cleanup after transition ends
  content.addEventListener('transitionend', (e) => {
    if (!content.classList.contains('expanded')) {
      // Keep the thin line visible
      content.style.border = 'none';
      content.style.borderTop = '0.09em solid black';
    } else {
      // Allow natural height after opening
      content.style.maxHeight = 'none';
    }
  });
});
