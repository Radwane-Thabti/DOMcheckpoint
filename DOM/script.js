
//coded by RADWANE THABTI  : GOMYCODE STUDENT & REACT LOVER 

function calculprix (click , arg){

const article1 =document.getElementById('artc1');
const artc1value = parseInt(article1.innerText)+ click;

const article2 =document.getElementById('artc2');
const artc2value = parseInt(article2.innerText)+ click;

const article3 =document.getElementById('artc3');
const artc3value = parseInt(article3.innerText) + click;


const total =document.getElementById('total');

if(arg == 'artc1'){
article1.innerText = artc1value;

total.innerText =  parseInt(total.innerText) + (click *100);

}



if(arg == 'artc2'){
    article2.innerText = artc2value;
  
    total.innerText =  parseInt(total.innerText) + (click *20);
   
    }
   
    
    if(arg == 'artc3'){
        article3.innerText = artc3value;
        total.innerText =  parseInt(total.innerText) + (click *50);
      
        }

} 


function removearticle (prod){

var el =document.getElementById(prod);

el.style.display ='none';


}

function favoris (fav){

    var el =document.getElementById(fav);
    
    el.style.color ='#e3596ecf';
    
    
    }
    
