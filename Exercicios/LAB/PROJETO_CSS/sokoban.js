let x=3;
let y=4;


const vazio = document.querySelector('.vazio');
console.log(vazio);

vazio.addEventListener("click" , function() {
    alert("clicou no jogador");
})

window.addEventListener("keydown", function(event){
    // this.window.alert("pressionou tecla");
    nextPosition(event.code);

    console.log(event);
    console.log(event.code);


   
       
     
 })
 function nextPosition(keycode) {
    if(keycode == "ArrowUp") x--;
    if (keycode== "ArrowDown") x++;
     if(keycode == "ArrowLeft") y++;
     if(keycode == "ArrowrRight") y--;

     console.log(keycode, x, y);

 }


 

