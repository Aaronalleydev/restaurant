
function createMenu() {
  const menuDisplay = document.createElement('div');
  menuDisplay.classList.add('menuDisplay');

  menuDisplay.appendChild(createParagraph('This is going to be the Menu page'));


  menuDisplay.appendChild(createMenueItem('images/chicken.jpg', 'A juicy Burger', ' A cwispy chicken burger!'))
  menuDisplay.appendChild(createMenueItem('images/egg.jpg', 'An egg burger', 'This is the egg burger'))

  return menuDisplay;
}

function createMenueItem(img, alt, desc) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menuItem')
  const menuImage = document.createElement('img');
  menuImage.src = img
  menuImage.alt = alt

  const menuDesc = document.createElement('p');
  menuDesc.textContent = desc;

  menuItem.appendChild(menuImage);
  menuItem.appendChild(menuDesc);

  return menuItem;
}

function createParagraph(p) {
  const paragraph = document.createElement('p');
  paragraph.textContent = p;
  return paragraph;
}

function loadMenu() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createMenu());
}

export default loadMenu;