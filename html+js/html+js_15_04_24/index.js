const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
    ];
    
const colorPickerContainerEl = document.querySelector('.js-color-picker');
const option = colorPickerOptions[0]
const btnEl = document.createElement('button')
btnEl.type = 'button'
btnEl.textContent = option.label
btnEl.style.backgroundColor = option.color

const btnElList = colorPickerOptions.map(option =>{
    const btnEl = document.createElement('button')
    btnEl.type = 'button'
    btnEl.textContent = option.label
    btnEl.style.backgroundColor = option.color

    return btnEl
})

console.log(btnElList);
colorPickerContainerEl.append(...btnElList)