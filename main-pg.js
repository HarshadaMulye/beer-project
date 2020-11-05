const formElement=document.querySelector('form')
const mainElement=document.querySelector('main')
const nextBtnElement=document.querySelector(".next")
const prevBtnElement=document.querySelector(".prev")
const api='https://api.punkapi.com/v2/beers'

//const page='&page=1&per_page=10'
const page='&page='
let page_num=1;
const per_page='&per_page=10';
//const api='https://api.punkapi.com/v2/beers?beer_name=A&page=1&per_page=10'
//https://api.punkapi.com/v2/beers?page=2&per_page=80
//const api='https://api.punkapi.com/v2/beers?beer_name={beerName}&page=1&per_page=10'
formElement.addEventListener('submit',onSubmit)
const ulElement=document.createElement('ul')
function removeAllChildNodes(parent)
{
    while(parent.firstChild)
    {
        parent.removeChild(parent.firstChild)
    }
}
function onSubmit(evt)
{
    const search=evt.target[0].value
    console.log(search);
   
     //const url=`${api}?beer_name=${search}${page}`
     const url=`${api}?beer_name=${search}${page}${page_num}${per_page}`
     console.log(url);
     getData(url,render);
     evt.preventDefault();
    // https://api.punkapi.com/v2/beers
}
function getData(url,callback)
{
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      
       removeAllChildNodes(ulElement)
    callback(data)
})
}
function render(data)
{
 
 ulElement.addEventListener('click',onUlclick)
 
 for (let index = 0; index < data.length; index++) {
    
     const beer=data[index]
     const liElement=document.createElement('li')
   
     liElement.setAttribute('name',beer.id)
     liElement.textContent=beer.name;
     ulElement.appendChild(liElement)
    
 }
 mainElement.appendChild(ulElement)

}
nextBtnElement.addEventListener('click',nextBtnclick);
prevBtnElement.addEventListener('click',prevBtnclick)
function nextBtnclick(evt)
{
page_num++;
const search1=document.querySelector('.text')
search11=search1.value;
//const search=evt.target[0].value
    console.log(search1);
   
     //const url=`${api}?beer_name=${search}${page}`
     const url=`${api}?beer_name=${search11}${page}${page_num}${per_page}`
     console.log(url);
     getData(url,render);

     evt.preventDefault();


}
function prevBtnclick(evt)
{ if(page_num==1)
    {
        return;
    }
    page_num--;
    const search1=document.querySelector('.text')
search11=search1.value;

  //const search=evt.target[0].value
    console.log(search1);
   
     //const url=`${api}?beer_name=${search}${page}`
     const url=`${api}?beer_name=${search11}${page}${page_num}${per_page}`
     console.log(url);
     getData(url,render);

     evt.preventDefault();
}

function onUlclick(evt)
{
    const id=evt.target.getAttribute('name')
    console.log(id)
    const url=`./myview.html?name=${id}`
    document.location.href=url;

}