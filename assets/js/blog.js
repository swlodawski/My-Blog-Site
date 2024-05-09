const themeswitcher = document.querySelector('#theme-switcher')
let container = document.querySelector('.container');
let mode = 'light'


function displayBlogPosts () {
    const blogPost = document.getElementById('blogPost');

    const blogList = JSON.parse(localStorage.getItem('blogList'));

    blogList.forEach(element => {
        const child = document.createElement('div')
        const title = document.createElement('h1')
        const userName = document.createElement('h5')
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

    themeswitcher.addEventListener('click', function() {

    })