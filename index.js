
let chance = "O";
let total_turn=0;
let winner=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];
let board_array = new Array(9).fill('E');
function checkwinner(){
    for (let [index0,index1,index2]  of winner) {
        if(board_array[index0]!="E"&&board_array[index0]===board_array[index1]&&board_array[index1]===board_array[index2])
        {
            return 1;
        }
    
    }
    return 0;
}
let playerx=document.getElementById("playerX");
let playerO=document.getElementById("playerO");
const gamelogic = (event)=>{
    if(board_array[event.target.id]==="E")
    {
    total_turn++
     if(chance=="O")
      {
      event.target.textContent=chance;
      board_array[event.target.id]="O";
       if(checkwinner())
       {
           document.getElementById("result").innerText="Winner is O"
           board.removeEventListener('click',gamelogic);
           playerO.classList.add("animate")
           playerx.classList.remove("animate");
             return
        }
        
        playerO.classList.add("animate")
        playerx.classList.remove("animate");
       chance="X"
      }
      else
      {
          event.target.textContent=chance;
          board_array[event.target.id]="X";
          if(checkwinner())
          {
              document.getElementById("result").innerText="Winner is X"
              board.removeEventListener('click',gamelogic);
              playerO.classList.add("animate")
              playerx.classList.remove("animate");
              return
            }
        playerx.classList.add("animate");
        playerO.classList.remove("animate");
          chance="O";
      }
      if(total_turn===9)
      {
        document.getElementById("result").innerText="Game is Draw"
      }
    }
}

let board = document.querySelector('.board');
let box = document.querySelector(".box");
board.addEventListener('click',gamelogic);

const playagainbtn = document.getElementById("btn");
playagainbtn.addEventListener('click',()=>{
    let cell = document.getElementsByClassName("box");
    Array.from(cell).forEach((value)=>{
        value.innerText="";
    })
    chance="O";
    total_turn=0;
    board_array = new Array(9).fill('E');
    document.getElementById("result").innerText=""   
    board.addEventListener('click',gamelogic);
    playerx.classList.remove('animate')
    playerO.classList.remove('animate')
});