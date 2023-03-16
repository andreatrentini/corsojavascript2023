var pallina = document.getElementById('pallina');
var posizione = {
    top: 0,
    left: 0,
    getTop()  {
        return this.top + 'px';
    },
    getLeft() {
        return this.left + 'px'
    }
}

setInterval(() => {
    console.log(posizione.getLeft());
    // Codice da eseguire alla scadena di ogni intervallo di tempo
    posizione.left++;
    posizione.top++;
    pallina.style.top = posizione.getTop();
    pallina.style.left = posizione.getLeft();
}, 15);