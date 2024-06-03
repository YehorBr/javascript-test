// const linkRef = document.querySelector('main-link')

// const heading = document.createElement('h1');
// console.log(heading);

// heading.textContent = 'Привіт, це перший мій створений елемент!';
// console.log(heading);

// heading.classList.add('title');
// console.log(heading);

// document.body.appendChild(heading);


const firstImg = document.createElement('img')
const mainButton = document.createElement('button')
console.log(firstImg);
console.log(mainButton);

firstImg.setAttribute('src', 'https://freshmart.com.ua/storage/web/cache/product/119/yabluko-dzhonagold.jpeg?w=912&h=690&fit=resize&q=80&fm=pjpg&t=1571622127&s=8e5f9c635489fd405c1e71f15249c265')
mainButton.setAttribute('type', 'button')
console.log(firstImg);

mainButton.textContent = 'button'
console.log(mainButton);

document.body.appendChild(firstImg);
document.body.appendChild(mainButton);


