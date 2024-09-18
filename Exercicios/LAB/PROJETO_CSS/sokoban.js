let x=3;
let y=4;


const vazio = document.querySelector('.vazio');
console.log(vazio);

vazio.addEventListener("click" , function() {
    alert("clicou no jogador");
})

window.addEventListener("keydown", function(event){
    // this.window.alert("pressionou tecla");

    console.log(event);
    console.log(event.code);


    if(event.code == "ArrowUp") x--;
    if(event.code == "ArrowDown") x++;
     if(event.code == "ArrowLeft") y++;
     if(event.code == "ArrowrRight") y--;
       
     
 })
