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
        if (this.segment.length > 0) {
            // Déplacez chaque segment du serpent en suivant le segment précédent
            for (let i = this.segment.length - 1; i > 0; i--) {
                this.segment[i].x = this.segment[i - 1].x;
                this.segment[i].y = this.segment[i - 1].y;
            }
            // Mettez à jour la position du premier segment pour suivre la tête
            this.segment[0].x = this.x;
            this.segment[0].y = this.y;
        }
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