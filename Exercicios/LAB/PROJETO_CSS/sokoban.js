// let x=3;
// let y=4;



const player = new Player(0, 0);
const celulas = document.querySelectorAll('.celula');
const playerElement = document.querySelector('.jogador');

window.addEventListener("keydown", function (event) {

   const next = player.nextPosition(event.code);

   if (verifyPosition(next)) {

      let k = next.x * 8 + next.y;
      console.log(next);
      // const { x, y } = next;
      // const k = x * 8 + y;
   

      player.moveTo(next, playerElement, celulas[k]);
   }
})

function Player(posx, posy) {

   this.x = posx;
   this.y = posy;

   this.nextPosition = function (keycode) {
      console.log(keycode);


      let { x, y } = this;
      if (keycode == "ArrowUp") x--;
      if (keycode == "ArrowDown") x++;
      if (keycode == "ArrowLeft") y--;
      if (keycode == "ArrowRight") y++;


      return { x, y };

   }

   this.moveTo = function (position, element, parent) {

      this.x = position.x;
      this.y = position.y;
      parent.append(element);

   }
}

function verifyPosition(position) {
   let { x, y } = position;

   return x >= 0 && x < 8 && y >= 0 && y < 8;
}

