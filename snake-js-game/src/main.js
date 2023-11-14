import '../css/style.css';
import { SNAKE } from './Snake.js';
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const snake = new SNAKE

const move = () => {

  // Dessine la grille de jeu
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 800, 800); 


  ctx.fillStyle = 'red';
  ctx.fillRect(snake.x * snake.size, snake.y * snake.size, snake.size, snake.size);

};


  // Rafraichit à chaque seconde
  setTimeout(() => {
    requestAnimationFrame(move);
  }, 1000);
  

