import '../css/style.css';


const gameContainer = document.querySelector('.game-container');

function getRandomCell() {
  const cells = Array.from(document.querySelectorAll('.cell'));
  return cells[Math.floor(Math.random() * cells.length)];
}

const character = document.createElement('img');
character.src = '../img/goblin.png';
character.className = 'character';

character.onload = function () {
  const randomCell = getRandomCell();
  randomCell.appendChild(character);

  setInterval(() => {
    const newCell = getRandomCell();
    newCell.appendChild(character);
  }, 1000);
};
