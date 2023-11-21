import '../css/style.css';
import { Snake } from './Snake.js';
import { ApplE } from './Apple.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const snake = new Snake();
const Apple = new ApplE();

// Fonction pour gérer les événements de clavier
const handleKeyPress = (event) => {
  switch (event.key) {
    case 'ArrowLeft':
      snake.direction ='left';
      break;
    case 'ArrowRight':
      snake.direction ='right';
      break;
    case 'ArrowDown':
      snake.direction ='down';
      break;
    case 'ArrowUp':
      snake.direction ='up';
      break;
  }
};


document.addEventListener('keydown', handleKeyPress);

const move = () => {
 
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 800, 800);
 
  snake.move();
  ctx.fillStyle = 'Green';
  ctx.fillRect(snake.x * snake.size, snake.y * snake.size, snake.size, snake.size);
  
  if(snake.x < 0 || snake.x >= 800/snake.size || snake.y<0 || snake.y >= 800/snake.size){
    ctx.font = '50px Arial';
    ctx.fillStyle = 'Red';
    ctx.fillText('Game Over', 270, 300);
    return;
  }

  ctx.fillStyle = 'red';
  ctx.fillRect(Apple.x , Apple.y , Apple.size, Apple.size);

  setTimeout(() => {
    requestAnimationFrame(move);
  }, 150);
};

requestAnimationFrame(move);