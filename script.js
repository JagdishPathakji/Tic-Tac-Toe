let turn = "O"
let totalturn = 0;

const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")

if(totalturn%2 == 0) {
    img1.className = "trans"
    img2.classList.remove("trans")
}
else {
    img1.classList.remove("trans")
    img2.className = "trans"
}

let winner = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8], // diagonal
    [2,4,6], // diagonal
    [0,3,6], 
    [1,4,7],
    [2,5,8]
]

let arr = new Array(9).fill("E")
function checkwinner() {
    
    for(let [index0,index1,index2] of winner) {
        if(arr[index0] != "E" && arr[index1] != "E" && arr[index2] != "E" && arr[index0] === arr[index1] && arr[index1] === arr[index2]) {
            return 1;
        }
    }
    
    return 0;
}

const res = document.getElementById("winning-msg")
res.style.fontWeight = "bolder"
res.style.fontSize = "25px"

const game = (event) => {
    const element  = event.target
    element.style.color = "black"
    element.style.fontSize = "45px"
    if(arr[element.id] === "E") { 
        if(element.className === 'cell') {
            totalturn++;
            if(totalturn%2 == 0) {
                img1.className = "trans"
                img2.classList.remove("trans")
            }
            else {
                img1.classList.remove("trans")
                img2.className = "trans"
            }
            if(turn == "O") {
                element.innerHTML = "O" 
                arr[element.id] = "O"
                if(checkwinner()) {
                    res.innerHTML = "Winner is O"
                    board.removeEventListener("click",game);
                    img2.classList.remove("trans")
                    return;
                }
                turn = "X";
            }
            else {
                element.innerHTML = "X"
                arr[element.id] = "X"
                if(checkwinner()) {
                    res.innerHTML = "Winner is X"
                    board.removeEventListener("click",game);
                    img2.classList.remove("trans")
                    return;
                }
                turn = "O";
            }
            if(totalturn === 9) {
                res.innerHTML = "Match is Draw"
                board.removeEventListener("click",game)
            }
        }
    }
}

const board = document.getElementById("board")
board.addEventListener("click",game)


const restart = document.getElementById("restart")
restart.addEventListener("click",()=> {

    [...document.getElementsByClassName("cell")].forEach((value)=> {
        value.innerHTML = "";
    })

    turn = "O"
    totalturn = 0
    arr = new Array(9).fill("E")
    res.innerHTML = "";
    board.addEventListener("click",game)

    if(totalturn%2 == 0) {
    img1.className = "trans"
    img2.classList.remove("trans")
    }
    else {
        img1.classList.remove("trans")
        img2.className = "trans"
    }

})