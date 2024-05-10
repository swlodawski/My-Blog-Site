const themeswitcher = document.querySelector('#theme-switcher')
let container = document.querySelector('.container');
let mode = 'light'
// I declared the variables to reference the theme switcher and toggle container and set the variable for the light mode which will be the switch default setting.

function displayBlogPosts () {
    const blogPost = document.getElementById('blogPost');
// I am declaring the blogPost variable will be accessed by the displayBlogPosts function.
    const blogList = JSON.parse(localStorage.getItem('blogList'));
// I am setting the variable to retrieve the blogList information from localstorage. And convert it from a JSON string back into an object.
    blogList.forEach(element => {
        const child = document.createElement('div')
        const title = document.createElement('h2')
        const userName = document.createElement('h3')
        const content = document.createElement('p')
// I am initializing the create element functionality and setting it to create div, h2, h3 and p elements for my blog content. And attributing these new elements to the blogList variable. Then setting the items to be displayed within the document object.
        title.innerHTML = element.title
        title.innerHTML = element.userName
        title.innerHTML = element.content
//I am telling the computer that when these elements are created. I want the user values for the userName, title and content inputs to appear in the DOM.
        child.appendChild(title)
        child.appendChild(userName)
        child.appendChild(content)
//I am telling the computer to append the actual DOM so the newly created elements can now appear on the broswer screen.
        blogPost.appendChild(child)
    }); 
//This will alow the newly created elements to appear within the specied blogPost section of my blog.html file. 
    }
    displayBlogPosts();
//Finally I am calling the displBlogPosts Function. 
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
