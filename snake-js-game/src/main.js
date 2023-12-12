//importer le css dans le js 
import '../css/style.css';
//importer le snake dans le js
import { Snake } from './Snake.js';
//importer la pomme dans le js 
import { ApplE } from './Apple.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//création d'une pomme 
const Apple = new ApplE();
//création d'un snake
const snake = new Snake();
var Point = 0;

//touche pour deplacer le snake  
const KeyPress = (event) => {
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

document.addEventListener('keydown', KeyPress);

const move = () => {

  //fond noir
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 800, 800);

  //Affichage des points pendant la partie 
  ctx.font = '25px Arial';
  ctx.fillStyle = 'white';
  ctx.fillText('Score: ' + Point, canvas.width - 790, 30);

  snake.move();
  //affichage de la tête du snake 
  ctx.fillStyle = 'Green';
  ctx.fillRect(snake.x * snake.size, snake.y * snake.size, snake.size, snake.size);

  //affichage de du corp du snake
  ctx.fillStyle = 'darkgreen';
  for (let i = 0; i < snake.segment.length; i++) {
    ctx.fillRect(snake.segment[i].x * snake.size, snake.segment[i].y * snake.size, snake.size, snake.size);
  }


  if (snake.x < 0 || snake.x >= 800 / snake.size || snake.y < 0 || snake.y >= 800 / snake.size) {

    // Ecrire game Over en rouge au milieu de l'ecran 
    ctx.font = '50px Arial';
    ctx.fillStyle = 'Red';
    ctx.fillText('Game Over', 270, 300);
    //afficher le score en blanc avec les points 
    ctx.font = '35px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('Score : ' + Point, 325, 360);
    //Afficher pour recommencer 
    ctx.font = '25px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('Appuyer sur F5 pour rejouer', 240, 420);

    return;
  }

  //affichage de la pomme 
  ctx.fillStyle = 'red';
  ctx.fillRect(Apple.x, Apple.y, Apple.size, Apple.size);

  //faire que si le snake a la meme position que la pomme ca change la position de la pomme et ajoute un point
  if (snake.x == Apple.x / Apple.size && snake.y == Apple.y / Apple.size) {
    Apple.GenerateRandomPosition();
    //fait grandir le snake 
    snake.grow();
    //ajoute des points dans la variable point
    Point++
  }

  setTimeout(() => {
    requestAnimationFrame(move);
  }, 110);
};

requestAnimationFrame(move);