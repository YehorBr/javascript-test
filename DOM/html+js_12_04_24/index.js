const openModalRef = document.querySelector('[data-action="open-modal"]')
const closeModalRef = document.querySelector('[data-action="close-modal"]')
const backdropRef = document.querySelector('.js-backdrop')
window.addEventListener('keydown', onEscClose)

function onEscClose(event){
    if(event.code === 'Escape'){
        onCloseModal()
    }
}


openModalRef.addEventListener('click', onOpenModal)
function onOpenModal() {
    document.body.classList.add('show-modal')
}

closeModalRef.addEventListener('click', onCloseModal)
function onCloseModal() {
    document.body.classList.remove('show-modal')
}

