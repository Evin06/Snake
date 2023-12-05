export class ApplE {
    constructor() {
        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');
        //taille de la pomme 
        this.size = 40;
        this.GenerateRandomPosition();
    }
    GenerateRandomPosition() {
        //genere une position aleatoire pour la position x  
        this.x = Math.floor(Math.random() * (800 / this.size)) * this.size;
        //genere une position aleatoire pour la position y  
        this.y = Math.floor(Math.random() * (800 / this.size)) * this.size;
    }

}
