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

function changeColor(e) {
  this.style.backgroundColor = 'green';
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
      square.addEventListener('mouseover', changeColor);
      container.appendChild(square);
    }
  }
}

drawGrid();
