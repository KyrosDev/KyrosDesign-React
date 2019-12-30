$(document).ready(() => {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth - 7;
    canvas.height = window.innerHeight;
  
    c = canvas.getContext("2d");

    
    function Bubble(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = arrayColors[Math.floor(Math.random() * arrayColors.length)];
        
        this.draw = function() {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
            c.fillStyle = this.color;
            c.fill();
        }
        
        this.update = () => {
            
            if ( this.x + this.radius > innerWidth -7 || this.x - this.radius < 0 ) {
                this.dx = -this.dx;
            }
            
            if ( this.y + this.radius > innerHeight - 120 || this.y - this.radius < 0 ) {
                this.dy = -this.dy;
            }
            
            this.x += this.dx;
            this.y += this.dy;
            
        }
        
    }
    
    let bubbles = []
    let arrayColors = ["#4552ff", "#5c5c5c"]; 

    for (let i = 0; i < 10; i++){
        let dx = (Math.random()  - .5) * 2;
        let dy = (Math.random()  - .5) * 2;
        let radius = (Math.random() * 3) * 20;
        let x = Math.random() * (window.innerWidth - 7) + 17;
        let y = Math.random() * (window.innerHeight - 140) + 10;
        bubbles.push(new Bubble(x, y, dx, dy, radius));
    }

    const animate = () => {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);

        for (let i = 0; i < bubbles.length; i++){
            bubbles[i].draw();
            bubbles[i].update();
        }

    }

    animate()

});