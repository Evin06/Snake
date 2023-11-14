import '../css/style.css';
import { SNAKE } from './Snake.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const snake = new SNAKE();

// Fonction pour gérer les événements de clavier
const handleKeyPress = (event) => {
  switch (event.key) {
    case 'ArrowLeft':
      snake.moveLeft();
      break;
    case 'ArrowRight':
      snake.moveRight();
      break;
    case 'ArrowDown':
      snake.moveDown();
      break;
    case 'ArrowUp':
      snake.moveUp();
      break;
  }
};


document.addEventListener('keydown', handleKeyPress);

const move = () => {
 
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 800, 800);

  
  ctx.fillStyle = 'red';
  ctx.fillRect(snake.x * snake.size, snake.y * snake.size, snake.size, snake.size);

 
  requestAnimationFrame(move);
};

move();  