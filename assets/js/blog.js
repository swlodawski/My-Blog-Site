const themeswitcher = document.querySelector('#theme-switcher')
let container = document.querySelector('.container');
let mode = 'light'
// I declared the variable to reference the theme switcher and toggle container and set the variable for the light mode which will be the switch default setting.

function displayBlogPosts () {
    const blogPost = document.getElementById('blogPost');

    const blogList = JSON.parse(localStorage.getItem('blogList'));

    blogList.forEach(element => {
        const child = document.createElement('div')
        const title = document.createElement('h2')
        const userName = document.createElement('h3')
        const content = document.createElement('p')

        title.innerHTML = element.title
        title.innerHTML = element.userName
        title.innerHTML = element.content

        child.appendChild(title)
        child.appendChild(userName)
        child.appendChild(content)

        blogPost.appendChild(child)
    }); 
        
    }
    displayBlogPosts();

    themeswitcher.addEventListener('click', function() {
    if (mode === 'light') {
        mode = 'dark';
    container.setAttribute('class', 'light');    
    } else {
        mode = 'light';
    container.setAttribute('class', 'dark');
    } 
    });
    // I brought in the event listener function to allow the them switcher to toggle from light to dark based on user interaction. Additionally I set the light as default with the ability to swich the container attribute to dark mode.
