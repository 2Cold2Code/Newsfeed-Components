let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out",
];

function newEl(selector, appendTo, elClass, textCont){
  const element = document.createElement(selector);
  elClass && element.classList.add(elClass);
  textCont && (element.textContent = textCont);
  appendTo.appendChild(element);
  return appendTo;
}

const img = document.querySelector('.menu-button');

function show (data, ...args){
  console.log(data, ...args);
}


function menuMaker(arr) {
  const menu = document.createElement('div');
  menu.classList.add('menu', 'menu-container');
  img.appendChild(menu)
  show('The img tag is: ', img)
  ulMaker(arr)
  const openButton = makeBtn('menu--open', img, img);
  show('this is the menu after open/close btns and menu creation', menu)
  return menu;
}

function ulMaker(arr) {
  const menu = document.querySelector('.menu-container');
  const ul = newEl('ul', menu, 'list-container');
  show(ul)
  arr.map(item => {
    return li(item)
  }
)
  return ul;
};

function li(item) {
  let ul = document.querySelector('.list-container');
  const listItem = newEl('li', ul, 'list-item', item)
  return listItem;
};

const toggleEl = (classtype, applyToNode) => {
  return applyToNode['classList'].toggle(classtype);
}
function makeBtn(appendTo) {
  const button = document.createElement('button');
  button.addEventListener('click', (e) => {
    toggleEl(menu, 'menu--open')
  });
  appendTo.appendChild(button)
};

menuMaker(menuItems)