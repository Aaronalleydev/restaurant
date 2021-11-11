function createHome() {
  const homeDisplay = document.createElement('div');
  homeDisplay.classList.add('homeDisplay');

  const homeImg = document.createElement('img');
  homeImg.src = 'images/burger.jpg'
  homeImg.alt = 'A juicy Burger'

  homeDisplay.appendChild(homeImg);
  homeDisplay.appendChild(createParagraph('The juciest burgers in town.'));

  return homeDisplay;
}

function createParagraph(p) {
  const paragraph = document.createElement('p');
  paragraph.textContent = p;
  return paragraph;
}

function loadHome() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createHome());
}

export default loadHome;