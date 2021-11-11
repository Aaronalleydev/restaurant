import loadHome from './homepage';
import loadContact from './contact'
import loadMenu from './menu'


function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const restaurantName = document.createElement('h1');
  restaurantName.classList.add('restaurantName');
  restaurantName.textContent = "Ya Boi's Burgers"

  header.appendChild(restaurantName); 
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement('nav');
  nav.classList.add('nav');

  const homeLink = document.createElement('button');
  homeLink.classList.add('navItem');
  homeLink.textContent = 'Home';
  homeLink.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(homeLink);
    loadHome();
  });

  const menuLink = document.createElement('button')
  menuLink.classList.add('navItem');
  menuLink.textContent = 'Menu';
  menuLink.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(menuLink);
    loadMenu();
  });

  const contactLink = document.createElement('button')
  contactLink.classList.add('navItem');
  contactLink.textContent = 'Contact';
  contactLink.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(contactLink);
    loadContact();
  });

  nav.appendChild(homeLink);
  nav.appendChild(menuLink);
  nav.appendChild(contactLink);

  return nav;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".navLink");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
    button.classList.add("active");
  });
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute('id', 'main');

  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const copyRight = document.createElement('p');
  copyRight.textContent = 'Copyright 2021 Aaron\'s site'

  const gitHubLink = document.createElement('a');
  gitHubLink.href = 'https://github.com/Aaronalleydev/'
  gitHubLink.textContent = 'GitHub'

  footer.appendChild(copyRight)
  footer.appendChild(gitHubLink)

  return footer
}

function loadPage() {
  const content = document.getElementById('content');
  content.appendChild(createHeader())
  content.appendChild(createMain())
  content.appendChild(createFooter())
  
  setActiveButton(document.querySelector(".navLink"));
  loadHome();
}

export default loadPage;