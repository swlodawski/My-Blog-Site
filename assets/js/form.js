<<<<<<< HEAD
const userName = document.getElementById('userbox');
const title = document.getElementById('titlebox');
const content = document.getElementById('contentbox');
const submit = document.getElementById('submitbutton');
let mode = 'light';
=======
function saveBlog() {
    document.addEventListener('DOMContentLoaded', function() {
    const userName = document.getElementById('username');
    const title = document.getElementById('title');
    const content = document.getElementById('content');
    // const myForm = document.getElementById('myForm');
    // const submit = document.getElementById('submit');
>>>>>>> b6aa2ecedaed19e8b79477b82885eaad73f38c31



function saveBlog() {
    
  const blogList = JSON.parse(localStorage.getItem('blogList'));

    const post = { 
    userName: userName.value.trim(),
    title: title.value.trim(),
    content: content.value.trim(),
    };

    if(blogList === null){
        localStorage.setItem('blogList', JSON.stringify([post]));
    } else {
        blogList.push(post)

        localStorage.setItem('blogList', JSON.stringify(blogList));
    }
}
<<<<<<< HEAD
    document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myForm').addEventListener
=======

    document.getElementById('form section').addEventListener
>>>>>>> b6aa2ecedaed19e8b79477b82885eaad73f38c31
    ('submit', function(event) {
        event.preventDefault();

    if(validateForm()) {
            saveBlog();
            window.location.href = 'blog.html';
        }
    });
    });


function validateForm() {
    const userName = document.getElementById('userbox').value.trim();
    const title = document.getElementById('titlebox').value.trim();
    const content = document.getElementById('contentbox').value.trim(); 
    
    if( userName === '') {
        alert('Please Enter Your username');
        return false;
    }

    if( title === '') {
        alert('Please Enter Your title');
        return false;
    }

    if( content === '') {
        alert('Please Enter Your content');
        return false;
    }
    return true;
}

themeswither.addEventListener('click', function() {
    if (mode === 'light') {
        mode = 'dark';
    container.setAttribute('class', 'light');    
    } else {
        mode = 'light';
    container.setAttribute('class', 'dark');
    }
    });

    themeswither.addEventListener('click', function() {

    })

