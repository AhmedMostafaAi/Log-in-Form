const toggleSwitch = document.querySelector('.toggle');
const body = document.querySelector('body');

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.toggle('dark-mode');
  toggleSwitch.checked = true;
}

toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }    
});
