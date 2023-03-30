var pallina = {  
    dimensione: {
        width: 20,
        height: 20
    },  
    posizione: {
        top: 400,
        left: 400,
        getTop()  {
            return this.top + 'px';
        },
        getLeft() {
            return this.left + 'px'
        }
    },
    spostamento: {
        orizzontale: Math.random() < 0.5 ? 1 + Math.floor(Math.random() * 10): -1 * (1 + Math.floor(Math.random() * 10)),
        verticale: Math.random() < 0.5 ? 1 + Math.floor(Math.random() * 10): -1 * (1 + Math.floor(Math.random() * 10))
    },
    immagine: new Image(20, 20),

    inizializza() {
        // Impostare il file da visualizzare come immagine
        this.immagine.src = './images/ball.png';        
        this.immagine.style.position = 'absolute';        

        document.body.appendChild(this.immagine);
    },

    sposta(limiti) {
        // controllo posizione
        if (this.posizione.left <= 0 || this.posizione.left >= limiti.innerWidth - this.dimensione.width) {
            this.spostamento.orizzontale = -1 * this.spostamento.orizzontale;
        }

        if (this.posizione.top <= 0 || this.posizione.top >= limiti.innerHeight - this.dimensione.height) {
            this.spostamento.verticale *= -1;
        }
        this.posizione.left += this.spostamento.orizzontale;
        this.posizione.top += this.spostamento.verticale;
        
        this.immagine.style.left = this.posizione.getLeft();
        this.immagine.style.top = this.posizione.getTop();
    }
}

var pallina2 = {  
    dimensione: {
        width: 20,
        height: 20
    },  
    posizione: {
        top: 400,
        left: 400,
        getTop()  {
            return this.top + 'px';
        },
        getLeft() {
            return this.left + 'px'
        }
    },
    spostamento: {
        orizzontale: Math.random() < 0.5 ? 1 + Math.floor(Math.random() * 10): -1 * (1 + Math.floor(Math.random() * 10)),
        verticale: Math.random() < 0.5 ? 1 + Math.floor(Math.random() * 10): -1 * (1 + Math.floor(Math.random() * 10))
    },
    immagine: new Image(20, 20),

    inizializza() {
        // Impostare il file da visualizzare come immagine
        this.immagine.src = './images/ball.png';        
        this.immagine.style.position = 'absolute';        

        document.body.appendChild(this.immagine);
    },

    sposta(limiti) {
        // controllo posizione
        if (this.posizione.left <= 0 || this.posizione.left >= limiti.innerWidth - this.dimensione.width) {
            this.spostamento.orizzontale = -1 * this.spostamento.orizzontale;
        }

        if (this.posizione.top <= 0 || this.posizione.top >= limiti.innerHeight - this.dimensione.height) {
            this.spostamento.verticale *= -1;
        }
        this.posizione.left += this.spostamento.orizzontale;
        this.posizione.top += this.spostamento.verticale;
        
        this.immagine.style.left = this.posizione.getLeft();
        this.immagine.style.top = this.posizione.getTop();
    }
}

pallina.inizializza();
pallina2.inizializza();

setInterval(() => {
    pallina.sposta(window);
    pallina2.sposta(window);
}, 15);