let people = [];
let peopleBase = [];

const personList = document.querySelector('.person-list');
const newPersonBtn = document.querySelector('.person-btn');
const resetBtn = document.querySelector('.reset');
const textArea = document.querySelector('.container__textarea');
const submitBtn = document.querySelector('.container__btn--submit');
const instructions = document.querySelector('.instructions');

const getNewPerson = () => {
  const arrLen = people.length;

  if (arrLen <= 0) {
    const gameOver = document.createElement('p');
    gameOver.classList.add('game-over');
    console.log(gameOver);
    gameOver.textContent = 'Game over! Click the reset button to start over.';
    personList.insertAdjacentElement('beforebegin', gameOver);
    newPersonBtn.disabled = true;
    return;
  }

  const randomNum = Math.floor(Math.random() * Math.floor(arrLen));

  // Add person to list
  const bingoPerson = document.createElement('li');
  bingoPerson.textContent = people[randomNum];
  personList.appendChild(bingoPerson);

  // Remove person from array
  people = people.filter(person => person !== people[randomNum]);
  if (people.length <= 0) {
    const gameOver = document.createElement('p');
    gameOver.classList.add('game-over');
    gameOver.textContent = 'Game over! Click the reset button to start over.';
    personList.insertAdjacentElement('beforebegin', gameOver);
    newPersonBtn.disabled = true;
    return;
  }
};

const reset = () => {
  people = [...peopleBase];

  personList.textContent = '';
  newPersonBtn.disabled = false;
  const gameOverP = document.querySelector('.game-over');
  gameOverP.remove();
};

const handleListSubmit = e => {
  e.preventDefault();

  console.log(textArea.value);
  // Remove all whitespace and split names into an array
  peopleBase = textArea.value.replace(/\s/g, '').split(',');
  people = [...peopleBase];
  newPersonBtn.disabled = false;
  instructions.style.display = 'none';
};

newPersonBtn.addEventListener('click', getNewPerson);
resetBtn.addEventListener('click', reset);
submitBtn.addEventListener('click', handleListSubmit);
