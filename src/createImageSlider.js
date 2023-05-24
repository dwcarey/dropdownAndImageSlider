import image0 from './Images/bao1.jpg';
import image1 from './Images/bao2.jpg';
import image2 from './Images/bao3.jpg';
import image3 from './Images/bao4.jpg';
import image4 from './Images/bao5.jpg';
import image5 from './Images/cat1.jpg';
import image6 from './Images/cat2.jpg';
import image7 from './Images/cat3.jpg';
import image8 from './Images/cat4.jpg';
import image9 from './Images/cat5.jpg';

import {
  backButtonFunction, nextButtonFunction, showImage, navButtonFunction,
} from './sliderButtons';

const imageArray = [image0, image1, image2, image3, image4, image5, image6, image7, image8, image9];

function createImageSlider() {
  const content = document.getElementById('content');
  const imageSliderContainer = document.createElement('div');
  imageSliderContainer.id = 'imageSliderContainer';
  const navNumbersContainer = document.createElement('div');
  navNumbersContainer.id = 'navNumbersContainer';

  for (let i = 0; i < imageArray.length; i += 1) {
    const imageItem = new Image();
    imageItem.id = `sliderImage-${i}`;
    imageItem.classList.add('sliderImage');
    imageItem.src = imageArray[i];
    imageSliderContainer.appendChild(imageItem);
    const navNumber = document.createElement('button');
    const navNumberText = i + 1;
    navNumber.classList.add('navNumberButton');
    navNumber.textContent = navNumberText;
    navNumber.id = `navNumber-${i}`;
    navNumbersContainer.appendChild(navNumber);
  }

  const imageSliderContainerHolder = document.createElement('div');
  imageSliderContainerHolder.id = 'imageSliderContainerHolder';

  const backButton = document.createElement('button');
  backButton.id = 'backButton';
  backButton.textContent = '<';

  const nextButton = document.createElement('button');
  nextButton.id = 'nextButton';
  nextButton.textContent = '>';

  backButton.addEventListener('click', () => {
    backButtonFunction();
  });

  nextButton.addEventListener('click', () => {
    nextButtonFunction();
  });

  navNumbersContainer.addEventListener('click', (e) => {
    if ((e.target.id.split('-')[0]) === ('navNumber')) {
      const clickedButton = e.target.id.split('-')[1];
      navButtonFunction(clickedButton);
    }
  });

  imageSliderContainerHolder.appendChild(backButton);
  imageSliderContainerHolder.appendChild(imageSliderContainer);
  imageSliderContainerHolder.appendChild(nextButton);
  imageSliderContainerHolder.appendChild(navNumbersContainer);

  content.appendChild(imageSliderContainerHolder);

  showImage(0, 0);
}

export { createImageSlider };
