import { updateBackground } from './updateBackground';

function createDropdown(buttonArray) {
  const content = document.getElementById('content');

  const dropdownHolder = document.createElement('div');
  dropdownHolder.id = 'dropdownHolder';

  const mainDropdown = document.createElement('div');
  mainDropdown.textContent = 'Select Background';
  mainDropdown.id = 'mainDropdown';
  
  for (let i = 0; i < buttonArray.length; i += 1) {
    const dropdownOption = document.createElement('button');
    dropdownOption.type = 'button';
    dropdownOption.classList.add('dropdownOption');
    dropdownOption.id = `dropdownOption-${buttonArray[i]}`;
    dropdownOption.textContent = `${buttonArray[i]}`;
    dropdownOption.addEventListener('click', () => {
        const colourSelection = dropdownOption.id.split('-')[1];
        updateBackground(colourSelection);
    });
    mainDropdown.appendChild(dropdownOption);
  }

  mainDropdown.addEventListener('mouseover', () => {
    const dropdownOptionButtons = document.querySelectorAll('.dropdownOption');
    dropdownOptionButtons.forEach((option) => {
      option.classList.add('dropdownVisible');
    });
  }); 

  mainDropdown.addEventListener('mouseout', () => {
    const dropdownOptionButtons = document.querySelectorAll('.dropdownOption');
    dropdownOptionButtons.forEach((option) => {
      option.classList.remove('dropdownVisible');
    });
  }); 

  content.appendChild(mainDropdown);
}

export { createDropdown };
