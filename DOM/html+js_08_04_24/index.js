const containerEl = document.querySelector('body')
const listEl = document.querySelector('.site-nav')
const mainContainerRef = document.querySelector('.hero')

// const titleRef = document.querySelector('.title')
// titleRef.textContent = 'my first element'
// titleRef.classList.add('title')
// titleRef.style.color = 'purple'

// console.log(titleRef);

// listEl.before(titleRef)

// const imageRef = document.createElement('img')
// imageRef.alt = 'mountains'
// imageRef.src = 'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg'


// console.log(imageRef);

// mainContainerRef.append(imageRef)


const titleEl = document.querySelector('.title')
// titleEl.textContent = 'Це <span>заголовок</span>'
// console.log(titleEl.textContent);
titleEl.innerHTML = 'Це <span>заголовок</span>'
console.log(titleEl.innerHTML);
