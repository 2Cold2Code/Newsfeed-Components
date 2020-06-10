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
}

const img = document.querySelector('.menu-button').parentNode;

function show (data, ...args){
  console.log(data, ...args);
}

show('The img tag is: ', img)

function menuMaker(arr) {
  const menu = newEl('div', img, 'menu-container');
  const openButton = makeBtn('menu--open', menu, img);
  const closeButton = makeBtn('menu--open', menu, img)
  return menu
}

function ul(arr) {
  const ulArr = newEl('ul', menu, 'list-container');
  arr.map(item => {
    let itemEl = newEl('li', ulArr, 'list-item', item);

  }
)
  return ulArr;
};

function li(item) {
  const listItem = document.createElement('li');
  li.textContent = item;
  return listItem;
};

function makeBtn(classtype, applyToNode, appendTo) {
  const button = document.createElement('button');
  button.click((e) => {
    applyToNode['classList'].toggle(classtype);
  });
  appendTo.appendChild(button)
};
