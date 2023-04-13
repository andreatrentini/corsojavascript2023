class Size {
    constructor (width, height) {
        this.width = width;
        this.height = height
    }
}

class Position {
    constructor (limits) {
        this.top = Math.floor(Math.random() * (limits.innerHeight - 20));
        this.left = Math.floor(Math.random() * (limits.innerWidth - 20));
    }

    get topPX() {
        return this.top + 'px';
    }

    get leftPX() {
        return this.left + 'px'
    }
}

class Shift {   
    orizzontal = Math.random() < 0.5 ? 1 + Math.floor(Math.random() * 10): -1 * (1 + Math.floor(Math.random() * 10));
    vertical = Math.random() < 0.5 ? 1 + Math.floor(Math.random() * 10): -1 * (1 + Math.floor(Math.random() * 10));
}

class Ball {  
    constructor(path, area) {
        this.image = new Image(this.size.width, this.size.height);
        this.image.src = path;        
        this.image.style.position = 'absolute'; 
        this.image.style.left = this.position.leftPX; 
        this.image.style.top = this.position.topPX; 
        document.body.appendChild(this.image);              
    }

    size = new Size(20, 20);
    position = new Position(window);
    shift = new Shift();        
    
    move(limits) {
        // controllo posizione
        if (this.position.left <= 0 || this.position.left >= limits.innerWidth - this.size.width - 10) {
            this.shift.orizzontal = -1 * this.shift.orizzontal;
        }

        if (this.position.top <= 0 || this.position.top >= limits.innerHeight - this.size.height - 10) {
            this.shift.vertical *= -1;
        }
        this.position.left += this.shift.orizzontal;
        this.position.top += this.shift.vertical;
        
        this.image.style.left = this.position.leftPX;
        this.image.style.top = this.position.topPX;
    }
}

class Balls {
    balls = [];
    constructor(path, number, area) {
        for (let i = 0; i < number; i++) {
            this.balls.push(new Ball(path, area));        
        }
    }
    
    move(limits) {
        for (let i = 0; i < this.balls.length; i++) {
            this.balls[i].move(limits);          
        }        
    }        

    remove() {
        for (let i = 0; i < this.balls.length; i++) {
            this.balls[i].remove();           
        }
    }
}

var balls;
var timer;

function generate() {
    let nrBalls = document.getElementById('nrBalls').value;    
    if (balls) {
        balls.remove();
    }
    balls = new Balls('./images/ball.png', nrBalls, window);    
}

function start() {
    timer = setInterval(() => {
        balls.move(window);
    }, 15);
}

function stop() {
    clearInterval(timer);
}

function clearPage() {
    console.log('ok');
    document.body.innerHTML = `<div id="commandArea"> 
    Numero di palline: <input type="number" id="nrBalls" value="10">
    <button onClick="generate()">Generate</button>
    <button onClick="start()">Start</button>
    <button onClick="stop()">Stop</button>
    <button onClick="clearPage()">Clear</button>
</div> `;
    balls = new Balls('./images/ball.png', 0);        
}