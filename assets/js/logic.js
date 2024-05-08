const themeswitcher = document.querySelector('#theme-switcher')
const container = document.querySelector('.container');
let mode = 'light'
// I created the relevant variables an querys selector ID's for the fields whoe uer input will be pushed to the form and localstorage.
// let mode = 'light';

themeswitcher.addEventListener('click', function() {

if (mode === 'light') {
    mode = 'dark';
container.setAttribute('class', 'dark');
} else {mode = 'light';
container.setAttribute('class', 'light');}

});

