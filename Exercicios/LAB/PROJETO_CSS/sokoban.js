// let x=3;
// let y=4;

function Player (posx,posy) {

    this.x = posx;
    this.y= posy;
   
}
   
const player = new Player(0, 0);   
   
console.log(player);  

const vazio = document.querySelector('.vazio');
console.log(vazio);

// vazio.addEventListener("click" , function() {
//     alert("clicou no jogador");
// })


 window.addEventListener("keydown", function(event){
    // this.window.alert("pressionou tecla");
    nextPosition(event.code);

    // console.log(event);
    // console.log(event.code);

 })
 const celulas = document.querySelectorAll('.celula');
  console.log(celulas);
 function nextPosition(keycode) {
    if(keycode == "ArrowUp") player.x--;
    if (keycode== "ArrowDown") player.x++;
     if(keycode == "ArrowLeft") player.y++;
     if(keycode == "ArrowrRight") player.y--;

     console.log(keycode, player);

     const k = player.x * 8 + player.y;

celulas[k].append(vazio);
 }

 
