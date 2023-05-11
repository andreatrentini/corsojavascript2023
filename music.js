function getDataFromSpotify() {
    fetch('https://api.spotify.com/v1/search?q=artist%3Aimagine%20dragon&type=album',{
        headers: {
            Authorization: 'Bearer ' + getTokenBearer(),
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

async function getTokenBearer() {
    let client_id = '12fb82f98a9e401c90ae1f30022a6d79';
    let client_secret = 'ef7866f187a74b42b171fab9d39016f5';

    await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials&client_id=12fb82f98a9e401c90ae1f30022a6d79&client_secret=ef7866f187a74b42b171fab9d39016f5'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        return data.acces_token;
    })
}

getDataFromSpotify();
