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
  const openButton = makeBtn(img);
  show('this is the menu after open/close btns and menu creation', menu)
  return menu;
}

function ulMaker(arr) {
  const menu = document.querySelector('.menu-container');
  const ul = newEl('ul', menu, 'ul');
  show(ul)
  arr.map(item => {
    return li(item)
  }
)
  return ul;
};

function li(item) {
  let ul = document.querySelector('.ul');
  const listItem = newEl('li', ul, 'li', item)
  return listItem;
};

const toggleEl = (classtype, applyToNode) => {
  return applyToNode.classList.toggle(classtype);
}
const hamburger = Object.create(img)
function makeBtn(appendTo) {
  let menu = document.querySelector('.menu-container')
  const button = document.createElement('button');
  button.addEventListener('click', (e) => {
    menu.classList === 'menu--open' ? (e.target.src = './http://icons.iconarchive.com/icons/fatcow/farm-fresh/32/application-control-bar-icon.png') : Object.apply(e.target, hamburger);
    toggleEl('menu--open', menu);
    console.log(menu)
  });
  appendTo.appendChild(button)
};

menuMaker(menuItems)