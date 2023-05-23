import Lion from "./eelco-bohtlingk-RDlbL4B_bmI-unsplash.jpg";

function hello() {
  const greetings = document.createElement('h1');
  greetings.textContent = 'Greetings Nerds';
  greetings.classList.add('hello');
  document.body.appendChild(greetings);

  const lionImage = new Image();
  lionImage.src = Lion;
  document.body.appendChild(lionImage);
}

export { hello };
