const userName = document.getElementById('userbox');
const title = document.getElementById('titlebox');
const content = document.getElementById('contentbox');
const submit = document.getElementById('submitbutton');
// I set variables for all my form elements from the index.html sheet that the user will interact with and for which I want to pull the value inputs.

function saveBlog() {
//I am declaring the variable for the function that will save the user input values that will be put into localstorage and will then be retreived and rendered to the blog content page. 
  const blogList = JSON.parse(localStorage.getItem('blogList'));
// I am telling the computer to retrieve the blogList input from localstorage and convert that information from a JSON string, back into an object.
    const post = { 
    userName: userName.value.trim(),
    title: title.value.trim(),
    content: content.value.trim(),
    };
// I am declaring an object named post with multiple key value pairs that I will push into an empty array of objects that will appear on the blog content page.
    if(blogList === null){
        localStorage.setItem('blogList', JSON.stringify([post]));
//I am telling the computer that if the input values are null, ensure the user has inputted something in all fields before setting the items in localstorage. 
    } else {
        blogList.push(post)
//If the user has inoputed all values then push that input into the object post. 
        localStorage.setItem('blogList', JSON.stringify(blogList));
//I am telling the computer after the user input has been pushed into the object array to then store it in localstorage to later be retrieved. As well as convert it to a JSON string value. 
    }
}

    document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myForm').addEventListener
// I am setting an event listener for the submit form button on index.html sheet to register the user click interaction/.

    document.getElementById('myForm').addEventListener
    ('submit', function(event) {
        event.preventDefault();
//I am setting a preventdefult event to keep the information from being cleared when the document is refreshed. 
    if(validateForm()) {
            saveBlog();
            window.location.href = 'blog.html';
//I am setting a failsafe to validate the form user input before it is officially stored within the blog.html and then referencing what html page the input will render to. 
        }
    });
    });

function validateForm() {
    const userName = document.getElementById('userbox').value.trim();
    const title = document.getElementById('titlebox').value.trim();
    const content = document.getElementById('contentbox').value.trim(); 
//I am catching the user input values for each input box and then using the trim to remove any extra whitspace. 
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
//I am creating a loop of alerts for each input area to ensure the user inputs a value into each box. Otherwise they will recieve an alert to fill the box. Once inputs are recieved the cycle will end and the code can continue to execute. 