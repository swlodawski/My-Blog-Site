const userName = document.getElementById('userbox');
const title = document.getElementById('titlebox');
const content = document.getElementById('contentbox');
const submit = document.getElementById('submitbutton');
// I set variables for all my form elements from the index.html sheet that the user will intereact with and ffor which I want to pull the value inputs.

function saveBlog() {
    
  const blogList = JSON.parse(localStorage.getItem('blogList'));

    const post = { 
    userName: userName.value.trim(),
    title: title.value.trim(),
    content: content.value.trim(),
    };
// I am declaring an object with multiple key value pairs that I will push into an empty array of objects that will appear on the blog content page.
    if(blogList === null){
        localStorage.setItem('blogList', JSON.stringify([post]));
    } else {
        blogList.push(post)

        localStorage.setItem('blogList', JSON.stringify(blogList));
    }
}

    document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myForm').addEventListener


    document.getElementById('myForm').addEventListener
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

