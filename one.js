const bck=document.querySelector(`body`);
const apply=document.querySelectorAll(`.button`);

apply.forEach(function(button){
    button.addEventListener(`click`,function(event){
        if(event.target.id==="grey"){
            bck.style.backgroundColor="grey";
        }
        if(event.target.id==="white"){
            bck.style.backgroundColor="white";
        }
        if(event.target.id==="yellow"){
            bck.style.backgroundColor="yellow";
        }
        if(event.target.id==="green"){
            bck.style.backgroundColor="green";
        }
    })
})