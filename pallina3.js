class Dimensione {
    constructor(larghezza, altezza) {
        this.larghezza = larghezza;
        this.altezza = altezza;
    }
}

class Posizione {
    constructor(limiti) {
        this.top = Math.floor(Math.random() * limiti.innerHeight - 20);
        this.left = Math.floor(Math.random() * limiti.innerWidth - 20);
    }

    get topPX() {
        return this.top + 'px';
    }

    get leftPX() {
        return this.left + 'px';
    }
}

class Spostamento {
    orizzontale = Math.random() < 0.5 ? 1 + Math.floor(Math.random() * 10) : -1 * (1 + Math.floor(Math.random() * 10));
    verticale = Math.random() < 0.5 ? 1 + Math.floor(Math.random() * 10) : -1 * (1 + Math.floor(Math.random() * 10));

    /* constructor() {
        let velocita = Math.random() * 10 + 1;            
        if (Math.random() < 0.5) {
            this.orizzontale = velocita;
        }
        else {
            this.orizzontale = velocita * -1;
        }
        velocita = Math.random() * 10 + 1;
        if (Math.random() < 0.5) {
            this.verticale = velocita;
        }
        else {
            this.verticale = velocita * -1;
        }
    } */
}

class Pallina {
    dimensione = new Dimensione(20, 20);
    posizione = new Posizione(window);
    spostamento = new Spostamento();

    constructor(urlImmagine) {
        this.immagine = new Image(this.dimensione.larghezza, this.dimensione.altezza);
        this.immagine.src = urlImmagine;
        this.immagine.style.position = 'absolute';
        this.immagine.style.left = this.posizione.leftPX;
        this.immagine.style.top = this.posizione.topPX;
        document.body.appendChild(this.immagine);
    }

    sposta(limiti) {
        // controllo la posizione
        if (this.posizione.left <= 0 || this.posizione.left >= limiti.innerWidth - this.dimensione.larghezza) {
            this.spostamento.orizzontale = this.spostamento.orizzontale * -1;
        }

        if (this.posizione.top <= 0 || this.posizione.top >= limiti.innerHeight - this.dimensione.altezza) {
            this.spostamento.verticale = this.spostamento.verticale * -1;
        }

        this.posizione.left += this.spostamento.orizzontale;
        this.posizione.top += this.spostamento.verticale;

        this.immagine.style.left = this.posizione.leftPX;
        this.immagine.style.top = this.posizione.topPX;
    }
}

class Palline {
    palline = [];
    inMovimento = false;
    constructor(numero, urlImmagine) {
        for (let i = 0; i < numero; i++) {
            this.palline.push(new Pallina(urlImmagine));
        }
    }
    sposta(limiti) {
        this.palline.forEach(pallina => {
            pallina.sposta(limiti);
        });
    }
}

var palline;
var timer;

function avvia() {
    let numeroPalline = document.getElementById('inputNumeroPalline').value;
    palline = new Palline(numeroPalline, './images/ball.png');

    timer = setInterval(() => {
        palline.sposta(window);
    }, 15);
    palline.inMovimento = true;
}

function fermaRiavvia() {
    if (palline.inMovimento) {
        clearInterval(timer);
        document.getElementById('buttonFermaRiavvia').innerText = 'Riavvia';
        palline.inMovimento = false;
    }
    else {
        timer = setInterval(() => {
            palline.sposta(window);
        }, 15);
        document.getElementById('buttonFermaRiavvia').innerText = 'Ferma';
        palline.inMovimento = true;
    }
    
    //Si potrebbe fare anche così
    //palline.inMovimento = !palline.inMovimento;
}

