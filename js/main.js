const body = document.querySelector('body');
const activateButton = document.querySelector('#activate');

activateButton.addEventListener(
  "click",
  () => {
    body.classList.add("transform");
    activateButton.remove(); 
//     Great, Great, my code works. TYGGGGG.
  }
);
