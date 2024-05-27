// const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');

// targetBtn.addEventListener('click', onClick)

// removeListenerBtn.removeEventListener('click', onClick)

// function onClick(event){
//     console.log(event.target);
// }

// const form = document.querySelector('.js-register-form');

// form.addEventListener('submit', onSubmit)

// function onSubmit(event){
//     event.preventDefault()
//     const form = event.currentTarget
//     const password = form.elements.password.value

//     console.dir(password);

//     form.reset()
// }

const input = document.querySelector('.js-input');
const nameLabel = document.querySelector('.js-button > span');
const licenseCheckbox = document.querySelector('.js-license');
const btn = document.querySelector('.js-button')

input.addEventListener('input', (event) => {
    console.log(event.currentTarget.value);

    nameLabel.textContent += event.currentTarget.value
})
