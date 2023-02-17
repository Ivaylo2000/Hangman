const getWord = document.querySelector('.btn');
let strong = document.querySelector("strong");
let wordarray=["javascript","university","programming","software","array","string"];
let buttons = document.querySelectorAll(".letter")
const healthBar = document.querySelector(".health");
let rplc="";
let duma = "";
let loop=true;

 getWord.addEventListener('click', ()=>{
    for(let i=0;i<buttons.length;i++){
        buttons[i].removeAttribute('disabled')
      }
 health=9;
 healthBar.textContent="Health: "+health;
        document.querySelector(".line1").style['display']='none';
        document.querySelector(".line2").style['display']='none';
        document.querySelector(".line3").style['display']='none';
        document.querySelector(".head").style['display']='none';
        document.querySelector(".manbody").style['display']='none';
        document.querySelector(".lefthand").style['display']='none';
        document.querySelector(".righthand").style['display']='none';
        document.querySelector(".leftleg").style['display']='none';
        document.querySelector(".rightleg").style['display']='none';

    
    const word = Math.floor(Math.random(0,2)*6);

    duma = wordarray[word];

    rplc = duma.replaceAll(/\D/g,"_").split("");

    strong.textContent= rplc.join("");
    console.log(duma)

 });



buttons.forEach((letter)=>{

  letter.addEventListener('click',(e)=>{

        letter.setAttribute('disabled','')

      let target = e.currentTarget.value;
      let bukva = target.toLowerCase();

      if(duma.includes(bukva)){
        for(let i=0;i<duma.length;i++){
          if(duma[i] === bukva){
            rplc[i]=bukva;
             strong.textContent=rplc.join("");

}}
}
else{
   health=health-1;
    healthBar.textContent="Health: "+health;
   if(health===8){
        document.querySelector(".line1").style['display']='block';
    }
    else if(health===7){
        document.querySelector(".line2").style['display']='block';
    }
    else if(health==6){
        document.querySelector(".line3").style['display']='block';
    }
    else if(health===5){
        document.querySelector(".head").style['display']='block';
    }
    else if(health===4){
        document.querySelector(".manbody").style['display']='block';
    }
    else if(health===3){
        document.querySelector(".lefthand").style['display']='block';
    }
    else if(health===2){
        document.querySelector(".righthand").style['display']='block';
    }
    else if(health===1){
        document.querySelector(".leftleg").style['display']='block';
    }
    else if(health===0 || health<0){
        document.querySelector(".rightleg").style['display']='block';
        healthBar.textContent="Health: 0"
        strong.textContent="You lost"
        for(let i=0;i<buttons.length;i++){
            buttons[i].setAttribute('disabled','')}
    }


    
 } 

 if(!rplc.includes("_")){
    strong.textContent="You win"
    for(let i=0;i<buttons.length;i++){
        buttons[i].setAttribute('disabled','')
      }
 }

});
});





