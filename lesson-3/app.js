document.getElementById('registerform').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const lastName = document.getElementById('LastName');
    const email = document.getElementById('email');
    const number = document.getElementById('number');
    const password = document.getElementById('password');

    validateField(name, /^[A-Za-z]{2,}$/); 
    validateField(lastName, /^[A-Za-z]{2,}$/); 
    validateField(email, /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/); 
    validateField(number, /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g); 
    validateField(password, /^.{6,}$/); 
});

function validateField(input, regex) {
    const icon = input.nextElementSibling;
    if (regex.test(input.value)) {
        input.classList.remove('error');
        input.classList.add('success');
        icon.classList.remove('error');
        icon.classList.add('success');
        icon.innerHTML = '&#10004;';
    } 
    else {
        input.classList.remove('success');
        input.classList.add('error');
        icon.classList.remove('success');
        icon.classList.add('error');
        icon.innerHTML = '&#10006;';
    }
}