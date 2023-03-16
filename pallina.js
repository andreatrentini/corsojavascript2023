var pallinaHTML = document.getElementById('pallina');

var pallina = {  
    dimensione: {
        width: 20,
        height: 20
    },  
    posizione: {
        top: 1,
        left: 1,
        getTop()  {
            return this.top + 'px';
        },
        getLeft() {
            return this.left + 'px'
        }
    },
    spostamento: {
        orizzontale: 1,
        verticale: 1
    },
    immagine: pallinaHTML,

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

setInterval(() => {
    pallina.sposta(window);
}, 15);