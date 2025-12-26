// // const titleEl = document.querySelector('h1')
// // console.log(titleEl);

// // const subtitleEl = document.querySelector('.subtitle')
// // console.log(subtitleEl);

// // const inputEl = document.querySelector('[type="text"]')
// // console.log(inputEl);

// // const textEl = document.querySelector('#text')
// // console.log(textEl);

// // const captionEl = document.querySelector('h2')
// // console.log(captionEl);

// // const captionElAll = document.querySelectorAll('h2')
// // console.log(captionElAll);

// const itemsEL = document.querySelector('ul')
// console.log(itemsEL);

// const paretnEl = itemsEL.parentNode
// console.log(paretnEl);

// const itemEl = itemsEL.firstElementChild
// // console.log(itemEl);



// const numbers = [4, 7, 2, 9, 1, 6];
// const totalNum = Math.max(...numbers)
// console.log(totalNum);



// elem.parentNode — вибере батька elem
// elem.childNodes — псевдомасив зберігає всі дочірні елементи, включаючи текстові.
// elem.children — псевдомасив зберігає тільки дочірні вузли-елементи, тобто відповідні тегам.
// elem.firstChild — вибере перший дочірній елемент всередині elem, включаючи текстові вузли.
// elem.firstElementChild — вибере перший дочірній вузол-елемент всередині elem.
// elem.lastChild — вибере останній дочірній елемент всередині elem, включаючи текстові вузли.
// elem.lastElementChild — вибере останній дочірній вузол-елемент всередині elem.
// elem.previousSibling — вибере елемент "зліва" від elem (його попереднього сусіда)
// elem.previousElementSibling - вибере вузол-елемент "зліва" від elem (його попереднього сусіда)
// elem.nextSibling — вибере елемент "справа" від elem (його наступного сусіда)
// elem.nextElementSibling — вибере вузол-елемент "справа" від elem (його попереднього сусіда)

// const titleEl = document.querySelector('#title')
// console.log(titleEl);
// const titleReferens = document.getElementById('title')
// titleReferens.style.color = 'red'
// console.log(titleReferens);


// const linkEl = document.querySelector('.link')
// linkEl.classList.add('facebook')
// console.log(linkEl.classList.contains('facebook'));
// linkEl.classList.remove('link')
// linkEl.classList.replace('facebook','link')
// linkEl.classList.toggle('link')
// console.log(linkEl);
















// // Зробіть всі зовнішні посилання помаранчевими, змінюючи властивість style.

// const linkEl = document.querySelector('a')
// linkEl.style.color = 'red'
// console.log(linkEl);


// Оберіть всі посилання всередині списку та додайте першому і останньому клас зі стилями

const elemRef = document.querySelectorAll('ul > li > a')
elemRef[0].classList.add('first')
elemRef[elemRef.length - 1].classList.add('last')
console.log(elemRef);

