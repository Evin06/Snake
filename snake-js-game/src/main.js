import '../css/style.css';
import { Snake } from './Snake.js';
import { ApplE } from './Apple.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const snake = new Snake();
const Apple = new ApplE();
var Point = 0;

const handleKeyPress = (event) => {
  switch (event.key) {
    case 'ArrowLeft':
      snake.direction = 'left';
      break;
    case 'ArrowRight':
      snake.direction = 'right';
      break;
    case 'ArrowDown':
      snake.direction = 'down';
      break;
    case 'ArrowUp':
      snake.direction = 'up';
      break;
    
  }
};

document.addEventListener('keydown', handleKeyPress);

const move = () => {

  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 800, 800);
  
  ctx.font = '25px Arial';
  ctx.fillStyle = 'white';
  ctx.fillText('Score: ' + Point, canvas.width - 790, 30);
  
  snake.move();
  ctx.fillStyle = 'Green';
  ctx.fillRect(snake.x * snake.size, snake.y * snake.size, snake.size, snake.size);

  if (snake.x < 0 || snake.x >= 800 / snake.size || snake.y < 0 || snake.y >= 800 / snake.size) {
    ctx.font = '50px Arial';
    ctx.fillStyle = 'Red';
    ctx.fillText('Game Over', 270, 300);
    ctx.font = '30px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('Score : '+ Point, 320, 350);
  
    return;
  }

  ctx.fillStyle = 'red';
  ctx.fillRect(Apple.x, Apple.y, Apple.size, Apple.size);
  if (snake.x == Apple.x / Apple.size && snake.y == Apple.y / Apple.size) {
    Apple.GenerateRandomPosition();
    Point++
  }

  setTimeout(() => {
    requestAnimationFrame(move);
  }, 120);
};

requestAnimationFrame(move);