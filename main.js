const container = document.querySelector('.container');
const button = document.querySelector('button');

button.addEventListener('click', onClick);

function onClick() {
  let gridDimension;
  do {
    gridDimension = prompt('Enter grid dimensions');
  } while (!Number.isInteger(+gridDimension));
  drawGrid(gridDimension);
}

const re = /\d{1,3}/;

function darkenColor() {
  const currentShade = this.style.backgroundColor.match(re)[0];
  if (!currentShade) return;
  const newShade = currentShade - 25;
  this.style.backgroundColor = `rgb(${newShade}, ${newShade}, ${newShade})`
}

function drawGrid(dimensions=16) {
  container.innerHTML = '';
  container.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${dimensions}, 1fr)`;

  for (let i = 0; i < dimensions; i++) {
    for (let j = 0; j < dimensions; j++) {
      const square = document.createElement('div');
      square.id = i * dimensions + j;
      square.classList.add('square');
      square.style.backgroundColor = 'rgb(255, 255, 255)'
      square.addEventListener('mouseover', darkenColor);
      container.appendChild(square);
    }
  }
}

drawGrid();
