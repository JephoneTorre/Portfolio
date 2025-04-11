// Select the theme switch checkbox
const themeSwitch = document.getElementById('theme-switch');

// Select the theme icon (moon-and-stars image)
const themeIcon = document.querySelector('.theme-toggle .theme-icon');

// Add an event listener for theme toggle
themeSwitch.addEventListener('change', () => {
  if (themeSwitch.checked) {
    // Enable light mode
    document.body.classList.add('light-mode');
    document.querySelector('header').classList.add('light-mode');
    // Reset image contrast for light mode
    themeIcon.style.filter = 'contrast(1)';
  } else {
    // Enable dark mode
    document.body.classList.remove('light-mode');
    document.querySelector('header').classList.remove('light-mode');
    // Adjust image contrast for dark mode
    themeIcon.style.filter = 'contrast(0.5)';
  }
});
