let people = [
  'Brittney',
  'Carly',
  'Dan',
  'Danielle',
  'Kassandra',
  'Kierran',
  'Kristina',
  'Lauren',
  'Maliha',
  'Selena',
  'Will',
  'Yvonne',
  'Alice',
  'Katie',
  'Krystle',
  'Michelle',
];

const personList = document.querySelector('.person-list');
const newPersonBtn = document.querySelector('.person-btn');
const resetBtn = document.querySelector('.reset');

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
};

const reset = () => {
  people = [
    'Brittney',
    'Carly',
    'Dan',
    'Danielle',
    'Kassandra',
    'Kierran',
    'Kristina',
    'Lauren',
    'Maliha',
    'Selena',
    'Will',
    'Yvonne',
    'Alice',
    'Katie',
    'Krystle',
    'Michelle',
  ];

  personList.textContent = '';
  newPersonBtn.disabled = false;
  const gameOverP = document.querySelector('.game-over');
  gameOverP.remove();
};

newPersonBtn.addEventListener('click', getNewPerson);
resetBtn.addEventListener('click', reset);
