// Select the theme switch checkbox
const themeSwitch = document.getElementById('theme-switch');

// Add an event listener for theme toggle
themeSwitch.addEventListener('change', () => {
  if (themeSwitch.checked) {
    // Enable light mode
    document.body.classList.add('light-mode');
    document.querySelector('header').classList.add('light-mode');
  } else {
    // Enable dark mode
    document.body.classList.remove('light-mode');
    document.querySelector('header').classList.remove('light-mode');
  }
});
