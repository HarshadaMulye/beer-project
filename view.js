const mainElement=document.querySelector('main')
const searchPattern=new URLSearchParams(window.location.search)
console.log(searchPattern)
const id=searchPattern.get('name')
console.log(id)
const api='https://api.punkapi.com/v2/beers'
const url=`${api}/${id}`
let ingred=[];
let food_pair=[];
function getData(url,callback)
{
    fetch(url)
    .then(res=>res.json())
    .then(data=>{

    callback(data)
})
.catch(error=>console.log(error))
}
function render(data)
{
    console.log(data)
    const beer=data[0];
    console.log(beer)
    const name=beer.name;
    const brewers_tips=beer.brewers_tips
    const description=beer.description
    const volume=Object.values(beer.volume)
    const boil_volume=Object.values(beer.boil_volume)
    const hTag=document.createElement('h1');
    const pTag=document.createElement('p')
    const pDescTag=document.createElement('p')
    const pVolumeTag=document.createElement('p')
    const pBoil_volume=document.createElement('p')
    console.log(Object.values(beer.volume))
    hTag.textContent=`Name:${name}`;
    pTag.textContent=`Brewers_tips:${brewers_tips}`
    pDescTag.textContent=`Description:${description}`
    pVolumeTag.textContent=`Volume:${volume}`
    pBoil_volume.textContent=`Boil_Volume:${boil_volume}`
    const img = document.createElement("img");
    img.setAttribute("src", beer.image_url);
      if(data[0].image_url == null){
        img.src = 'punk_ipa.png';
      }
    img.setAttribute('width',40)
    ingred=beer.ingredients.hops
    
   
 
  
    const pIngreTag=document.createElement('p')
    pIngreTag.textContent="Ingredients: "
 
    mainElement.appendChild(img);
    mainElement.appendChild(hTag)
    mainElement.appendChild(pTag)
    mainElement.appendChild(pDescTag)
    mainElement.appendChild(pVolumeTag)
    mainElement.appendChild(pBoil_volume)
    ingred.forEach(element => {
     
        pIngreTag.textContent+=''+element.name+''
       
        mainElement.appendChild(pIngreTag)
     });
     const hops=beer.ingredients.hops
     console.log(hops)
     console.log(hops.length)
     const pHopsTag=document.createElement('p')
     pHopsTag.textContent="hops: "
   
     hops.forEach(element=>{

       //  pHopsTag.textContent="Hops :"
         const amount=Object.values(element.amount)
         console.log(element)
         
         pHopsTag.textContent+=`Hops:Name:${element.name} Amount:${amount} Add:${element.add} Attribute:${element.attribute}`
         mainElement.appendChild(pHopsTag)
     })
     food_pair=beer.food_pairing;
     console.log(food_pair)
     const pFoodpairTag=document.createElement('p')
     pFoodpairTag.textContent="Food Pair:" 
     food_pair.forEach(element=>{
        pFoodpairTag.textContent+=element 
        mainElement.appendChild(pFoodpairTag) 
      })
     }
getData(url,render)