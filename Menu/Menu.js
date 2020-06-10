let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out",
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned markup to the DOM.
*/
function menuMaker(arr) {
  menuCall();
}

const button = document.createElement("button");
const menuCall = (arr) => {
  const menu = document.createElement("div");
  menu.appendChild(ul(arr));
  return menu;
};

const ul = (arr) => {
  const menu_ul = document.createElement("ul");
  menu_ul.appendChild(li(menuItems));
  return menu_ul;
};

const li = (arr) => {
  const menu_ul_li = document.createElement("li");
  arr.map((item) => {
    return (menu_ul_li.textContent = item);
  });

  return menu_ul_li;
};

const makeBtn = (type, className) => {
  button.addEventListener("click", (e) => {
    menu.classList.toggle("menu-open");
  });
};

const header = document.querySelector(".header");
menu.appendChild(menuMaker(menuItems));
