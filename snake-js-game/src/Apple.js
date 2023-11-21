export class ApplE{
    constructor() {
        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');
        this.size = 40; 
        this.GenerateRandomPosition();
    }
    GenerateRandomPosition(){
        this.x = Math.floor(Math.random() * (800 / this.size)) * this.size;
        this.y = Math.floor(Math.random() * (800 / this.size)) * this.size;
    }
   
}
