const toggleSwitch = document.querySelector('#dark-mode-toggle');
const body = document.querySelector('body');
const darkLabel = document.querySelector('#dark-change');

toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('dark-mode');
    darkLabel.textContent = 'Light Mode';
  } else {
    body.classList.remove('dark-mode');
    darkLabel.textContent = 'Dark Mode';
  }    
});