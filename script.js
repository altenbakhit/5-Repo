const bookJs = document.querySelectorAll('.book');
const bodyJs = document.querySelector('body');
const adJs = document.querySelector('.adv');
const listItems = document.querySelectorAll('li');
const newElem = document.createElement('li')


console.log(bookJs);
console.dir(bodyJs);
console.log(adJs);
console.log(listItems);
console.log(newElem);

bookJs[0].before(bookJs[1]);
bookJs[3].before(bookJs[4]);
bookJs[5].after(bookJs[2]);

bodyJs.style.backgroundImage = "url(./image/you-dont-know-js.jpg)"

adJs.remove();

listItems[9].before(listItems[2]);
listItems[7].before(listItems[8]);
listItems[3].after(listItems[6]);
listItems[6].after(listItems[8]);

listItems[47].after(listItems[55]);
listItems[50].after(listItems[48]);
listItems[53].after(listItems[51]);

newElem.textContent = 'Глава 8: За пределами ES6'
newElem.classList.add('elem')

listItems[25].append(newElem);