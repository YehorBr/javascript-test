 const containerRef = document.querySelector('.js-container')

 containerRef.addEventListener('click', onButtonClick)

 function onButtonClick(event){
    // console.log(event.target);
    // console.log(event.currentTarget);

    if(event.target.nodeName !== 'BUTTON'){
        return
    }

    event.target.style.backgroundColor = 'green'

 }