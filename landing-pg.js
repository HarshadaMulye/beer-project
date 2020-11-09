const cardElement = document.querySelector('.random-beer-card');
const randomBeerBtn = document.querySelector('.random-beer-btn');
const infoLink = document.createElement('p');

const url = "https://api.punkapi.com/v2/beers/random";

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}




const getRandomBeer = async() => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    removeAllChildNodes(cardElement);
    
    const beerImg = document.createElement('img');
    const beerName = document.createElement('h2');
  

    beerImg.src = data[0].image_url;
    if(data[0].image_url == null){
        beerImg.src = 'punk_ipa.png';
    }
    beerName.textContent = data[0].name;
    infoLink.innerHTML = 'See more';
    
    cardElement.appendChild(beerImg);
    cardElement.appendChild(beerName);
    cardElement.appendChild(infoLink);
   seeMore(data);
}

getRandomBeer(url);
randomBeerBtn.addEventListener('click', getRandomBeer);

function seeMore(beer) {
 

    infoLink.addEventListener('click', onseeClicked);
    infoLink.setAttribute('name', beer[0].id);
}

function onseeClicked(evt) {
    
    const id = evt.target.getAttribute('name');
    const url = `myview.html?name=${id}`;
    document.location.href = url;

}