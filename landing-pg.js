const cardElement = document.querySelector('.random-beer-card');
const randomBeerBtn = document.querySelector('.random-beer-btn');

const url = "https://api.punkapi.com/v2/beers/random";

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function moreInfoOnclick(evt) {

    const id = evt.target.getAttribute('name')
    console.log(id)
    const url = `./myview.html?name=${id}`
    document.location.href = url;

}

const getRandomBeer = async() => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    removeAllChildNodes(cardElement);
    
    const beerImg = document.createElement('img');
    const beerName = document.createElement('h2');
    const infoLink = document.createElement('p');

    beerImg.src = data[0].image_url;
    if(data[0].image_url == null){
        beerImg.src = 'punk_ipa.png';
    }
    beerName.textContent = data[0].name;
    infoLink.setAttribute('name',data[0].id)
    infoLink.innerHTML = 'See more';
    
    cardElement.appendChild(beerImg);
    cardElement.appendChild(beerName);
    cardElement.appendChild(infoLink);
   
    infoLink.addEventListener('click', moreInfoOnclick);
}

getRandomBeer(url);
randomBeerBtn.addEventListener('click', getRandomBeer);