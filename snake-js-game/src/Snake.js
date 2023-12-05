import { ApplE } from "./Apple";

export class Snake {

    constructor(Apple) {
        const canvas = document.querySelector('canvas');
        this.ctx = canvas.getContext('2d');
        this.x = 10;
        this.y = 10;
        this.size = 40;
        this.segment=[];
        this.apple = Apple 

    }

    //deplacement du snake 
    move() {
        switch (this.direction) {
            // A gauche 
            case 'left':
                this.x--;
                break;
            // A droite     
            case 'right':
                this.x++;
                break;
            //en bas     
            case 'down':
                this.y++;
                break;
            // en bas     
            case 'up':
                this.y--;
                break;
        }
    
    }
    grow() {
        this.segment.push({ x: this.x, y: this.y });
          
      }
}