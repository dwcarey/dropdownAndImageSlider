let autoScroll;

function autoScrollActivate() {
  if (autoScroll) {
    clearTimeout(autoScroll);
  }
  autoScroll = setTimeout(nextButtonFunction, 5000);
}

function showImage(currentImageIndex, newImageIndex) {

  const oldImageID = `sliderImage-${currentImageIndex}`;
  const oldImage = document.getElementById(oldImageID);
  oldImage.classList.remove('visible');
  const newImageID = `sliderImage-${newImageIndex}`;
  const newImage = document.getElementById(newImageID);
  newImage.classList.add('visible');

  const oldTextID = `navNumber-${currentImageIndex}`;
  const oldText = document.getElementById(oldTextID);
  oldText.classList.remove('selectedNav');

  const newTextID = `navNumber-${newImageIndex}`;
  const newText = document.getElementById(newTextID);
  newText.classList.add('selectedNav');
  autoScrollActivate();
}

function backButtonFunction() {
  const oldImage = document.querySelector('.visible');
  const oldImageIndex = oldImage.id.split('-')[1];

  if (oldImageIndex > 0) {
    const newImageIndex = (+oldImageIndex - 1);
    showImage(oldImageIndex, newImageIndex);
  } else {
    showImage(oldImageIndex, 9);
  }
}

function nextButtonFunction() {
  const oldImage = document.querySelector('.visible');
  const oldImageIndex = oldImage.id.split('-')[1];

  if (oldImageIndex < 9) {
    const newImageIndex = (+oldImageIndex + 1);
    showImage(oldImageIndex, newImageIndex);
  } else {
    showImage(oldImageIndex, 0);
  }
}

function navButtonFunction(buttonIndex) {
    const oldImage = document.querySelector('.visible');
    const oldImageIndex = oldImage.id.split('-')[1];
    showImage(oldImageIndex, buttonIndex);
}

export { backButtonFunction, nextButtonFunction, showImage, navButtonFunction };
