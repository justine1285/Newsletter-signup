const emailForm = document.querySelector('.emailForm');
const successContainer = document.querySelector('.successContainer');
const mainContainer = document.querySelector('.mainContainer');

emailForm.addEventListener('submit', (e) => {
e.preventDefault(); //prevents default submission

const errorText = document.querySelector('.errorText');
const inputSpace = document.querySelector('.inputSpace');


//valide email function
const validateEmail = function (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

if (validateEmail(inputSpace.value)) {
    errorText.style.display = 'none';

    inputSpace.value = '';
    inputSpace.style.borderColor = 'gray';
    inputSpace.classList.remove('error');

    // show success container
    successContainer.style.display = "flex";
    mainContainer.style.display = "none";
} else {
    errorText.style.display = 'flex';
    inputSpace.style.borderColor = 'red';
    inputSpace.classList.add('error');
}
})

const dismissBtn = document.querySelector('.dismiss');
dismissBtn.addEventListener('click', () => {
    successContainer.style.display = "none";
    mainContainer.style.display = "flex";
})

