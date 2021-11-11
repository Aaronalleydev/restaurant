function createMenu() {
  const menuDisplay = document.createElement('div');
  menuDisplay.classList.add('contactDisplay');

  const homeImg = document.createElement('img');
  homeImg.src = 'images/burger.jpg'
  homeImg.alt = 'A juicy Burger'

  menuDisplay.appendChild(homeImg);
  menuDisplay.appendChild(createParagraph('This is going to be the Menu page'));

  return menuDisplay;
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