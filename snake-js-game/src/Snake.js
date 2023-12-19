export class Snake {

    constructor() {
        const canvas = document.querySelector('canvas');
        this.ctx = canvas.getContext('2d');
        this.x = 10;
        this.y = 10;
        this.size = 40;
        this.corps=[];
       
    }

    //deplacement du snake 
    move() {
        if (this.corps.length > 0) {
             
            // Mettez à jour la position du premier segment pour suivre la tête
             this.corps[0].x = this.x;
             this.corps[0].y = this.y;
            // Déplacez chaque segment du serpent en suivant le segment précédent
            for (let i = this.corps.length - 1; i > 0; i--) {
                this.corps[i].x = this.corps[i - 1].x;
                this.corps[i].y = this.corps[i - 1].y;
            }
           
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
        this.corps.push({ x: this.x, y: this.y });      
      }
}