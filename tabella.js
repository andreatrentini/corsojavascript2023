function getData() {
    // Invio una richiesta al web server che dispone dei dati che mi servono
    fetch('./airports.json')
    .then(dati => dati.json())
    .then(dati => {
        // I dati sono già stati convertiti in formato javascript
        // Creare la tabella ed inserirla nella pagina web

        let principale = document.getElementById('principale');
        principale.appendChild(createTable(dati));
    })
}

// Restituisce una riga di una tabella HTML con i dati di un aeroporto ricevuto come parametro in ingresso 
function createRow(airport) {
    let riga = document.createElement('tr');
    let cella = document.createElement('td');
    cella.innerText = airport.id;
    riga.appendChild(cella);
    cella = document.createElement('td');
    cella.innerText = airport.code;
    riga.appendChild(cella);
    cella = document.createElement('td');
    cella.innerText = airport.country_code;
    riga.appendChild(cella);
    cella = document.createElement('td');
    cella.innerText = airport.municipality;
    riga.appendChild(cella);
    cella = document.createElement('td');
    cella.innerText = airport.name;
    riga.appendChild(cella);
    return riga;
}

// Restituisce una riga di una tabella HTML con l'intestazione 
function createHeader() {
    let intestazione = document.createElement('tr');
    intestazione.innerHTML = '<th>ID</th><th>Code</th><th>Country code</th><th>Municipality</th><th>Name</th>';
    return intestazione;
}

// Restituisce l'intera tabella HTML con i dati di tutti gli aeroporti
function createTable(airports) {
    let tabella = document.createElement('table');
    tabella.appendChild(createHeader());
    airports.forEach(airport => {
        tabella.appendChild(createRow(airport));
    });
    return tabella;
}

// Eseguo la funzione che:
// - ottiene i dati dalla rete
// - crea la tabella
// - aggiunge la tabella alla pagina HTML
getData();