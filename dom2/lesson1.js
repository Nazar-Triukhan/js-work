const title = document.createElement('h2')
title.textContent = 'hello word'
title.classList.add('title')
console.log(title);

const img = document.createElement('img')
img.src = "data:image/jpeg;base64,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"
img.alt = 'sdfgh'
console.log(img);

const bodyRef = document.querySelector('body')
// bodyRef.prepend(title,img)


const boxRef = document.querySelector('.box')
boxRef.append(title,img)
console.log(bodyRef);



// <ul id="categories">
//   <li class="item">
//     <h2>Тварини</h2>

//     <ul>
//       <li>Кіт</li>
//       <li>Хом'як</li>
//       <li>Кінь</li>
//       <li>Папуга</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Продукти</h2>

//     <ul>
//       <li>Хліб</li>
//       <li>Петрушка</li>
//       <li>Сир</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Технології</h2>

//     <ul>
//       <li>HTML</li>
//       <li>CSS</li>
//       <li>JavaScript</li>
//       <li>React</li>
//       <li>Node</li>
//     </ul>
//   </li>
// </ul>