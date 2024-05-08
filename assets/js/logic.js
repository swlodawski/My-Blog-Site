const themeswitcher = document.querySelector('#theme-switcher')
const container = document.querySelector('.container');
let mode = 'light'

themeswitcher.addEventListener('click', function() {

if (mode === 'light') {
    mode = 'dark';
container.setAttribute('class', 'dark');
} else {mode = 'light';
container.setAttribute('class', 'light');}

});

