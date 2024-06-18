import { fillHomeContent } from "./content-modules/home";
import { fillMenuContent } from "./content-modules/menu";
import './style.css';

const buttonHandler = (function() {
  const homeBtn = document.querySelector('#home');
  const menuBtn = document.querySelector('#menu');
  const aboutBtn = document.querySelector('#about');
  
  const getActiveButton = () => {return document.querySelector('.btn-active')};

  const toggleActiveButton = () => {
    const activeButton = getActiveButton();
    activeButton.classList.remove('btn-active');
    activeButton.classList.add('btn-inactive');
  };

  const removeChildren = () => {
    const content = document.querySelector('#content');
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
  };

  const addListeners = () => {
    homeBtn.addEventListener('click', () => {
      toggleActiveButton();
      homeBtn.classList.add('btn-active');
      homeBtn.classList.remove('btn-inactive');
      
      removeChildren();
      fillHomeContent();
    });
    menuBtn.addEventListener('click', () => {
      toggleActiveButton();
      menuBtn.classList.add('btn-active');
      menuBtn.classList.remove('btn-inactive');
  
      removeChildren();
      fillMenuContent();
    });
  };

  return { addListeners };
})(); 

fillHomeContent();
buttonHandler.addListeners();