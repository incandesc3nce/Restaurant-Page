import { fillHomeContent } from "./content-modules/home";
import { fillMenuContent } from "./content-modules/menu";
import { fillAboutContent } from "./content-modules/about";
import './style.css';

const buttonHandler = (function() {
  const homeBtn = document.querySelector('#home');
  const menuBtn = document.querySelector('#menu');
  const aboutBtn = document.querySelector('#about');
  
  const getActiveButton = () => document.querySelector('.btn-active');

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

  const handleButtonClick = (event) => {
    const clickedButton = event.target;
    
    toggleActiveButton();
    clickedButton.classList.add('btn-active');
    clickedButton.classList.remove('btn-inactive');

    removeChildren();

    if (clickedButton.id === 'home') {
      fillHomeContent();
    } else if (clickedButton.id === 'menu') {
      fillMenuContent();
    } else if (clickedButton.id === 'about') {
      fillAboutContent();
    }
  };

  const addListeners = () => {
    homeBtn.addEventListener('click', handleButtonClick);
    menuBtn.addEventListener('click', handleButtonClick);
    aboutBtn.addEventListener('click', handleButtonClick);
  };

  return { addListeners };
})(); 

fillHomeContent();
buttonHandler.addListeners();