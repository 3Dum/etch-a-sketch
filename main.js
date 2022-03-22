const container = document.querySelector('.container');

function changeColor(e) {
  this.style.backgroundColor = 'green';
}

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const square = document.createElement('div');
    square.id = i * 16 + j;
    square.classList.add('square');
    square.addEventListener('mouseover', changeColor);
    container.appendChild(square);
  }
}