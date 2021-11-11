function createContact() {
  const contactDisplay = document.createElement('div');
  contactDisplay.classList.add('contactDisplay');

  const homeImg = document.createElement('img');
  homeImg.src = 'images/burger.jpg'
  homeImg.alt = 'A juicy Burger'

  contactDisplay.appendChild(homeImg);
  contactDisplay.appendChild(createParagraph('This is going to be the contact page'));

  return contactDisplay;
}

function createParagraph(p) {
  const paragraph = document.createElement('p');
  paragraph.textContent = p;
  return paragraph;
}

function loadContact() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createContact());
}

export default loadContact;