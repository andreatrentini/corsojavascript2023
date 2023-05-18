function getDataFromSpotify(artistName) {
    fetch('https://api.spotify.com/v1/search?q=artist%3A' + artistName + '&type=album',{
        headers: {
            Authorization: 'Bearer ' + token_bearer,
        }
    })
    .then(risposta => risposta.json())
    .then(dati => {
        console.log(dati);
        let div = document.getElementById('main');
        dati.albums.items.forEach(album => {
            let riga = document.createElement('p');
            riga.innerText = album.name;
            let image = document.createElement('img');
            image.src = album.images[1].url;
            riga.appendChild(image);
            div.appendChild(riga);
        })
    })
}

function getTokenBearer() {
    let client_id = '12fb82f98a9e401c90ae1f30022a6d79';
    let client_secret = 'ef7866f187a74b42b171fab9d39016f5';

    fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret
    })
    .then(response => response.json())
    .then(data => {
        token_bearer = data.access_token;
        console.log(token_bearer);
        let search = document.getElementById('search');
        search.style = 'visibility: visible';
    });    
}

function searchAlbum() {
    let artist = document.getElementById('searchInput').value;
    console.log(artist);
    getDataFromSpotify(artist);
}

var token_bearer;

getTokenBearer();

setInterval(() => {
    getTokenBearer();
}, 3500000);


//getDataFromSpotify();
