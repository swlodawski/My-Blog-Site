const themeswitcher = document.querySelector('#theme-switcher')
const container = document.querySelector('.container');
let mode = 'light'
// I declared the variable to reference the theme switcher and toggle container and set the variable for the light mode which will be the switch default setting.
themeswitcher.addEventListener('click', function() {

if (mode === 'light') {
    mode = 'dark';
container.setAttribute('class', 'dark');
} else {mode = 'light';
container.setAttribute('class', 'light');}
});
    // I brought in the event listener function to allow the them switcher to toggle from light to dark based on user interaction. Additionally I set the light as default with the ability to swich the container attribute to dark mode.
