const b = [
    [1, "black", [[0]]],
    [4, "skyblue", [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ]],
    [2, "yellow", [
        [1, 1],
        [1, 1],
    ]],
    [3, "red", [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0],
    ]],
    [3, "green", [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0],
    ]],
    [3, "blue", [
        [1, 0, 0],
        [1, 1, 1], 
        [0, 0, 0],
    ]],
    [3, "orange", [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0],
    ]],
    [3, "purple", [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0],
    ]],
];
const board = {
    g : [],
    obj : document.querySelector("#board"),
    pos : (x, y) => document.querySelector(`#board :nth-child(${x+1+10*y})`),
    set : () => {
        for(let y=0; y<=21; y++) for(let x=1; x<=10; x++){
            
        }
        document.querySelector("#score").innertext = game.score;
    }
}
let game = {
    x : 0,
    y : 0,
    boardb : 0,
    holdb : 0,
    nextb : 0,
    score : 0,
    fillside : (n, side) => {
        let obj = [];
        for(let i=1; i<=4; i++){
            obj[i] = document.querySelector(`#${side?"next":"hold"} :nth-child(${i})`);
            obj[i].style.backgroundColor = b[n][1];
        }
        let ct = side?"+":"-";
        let i=1;
        for(let y=0; y<b[n][0]; y++) for(let x=0; x<b[n][0]; x++) if(b[n][2][y][x]){
            obj[i].style.left = `calc(10vmin - 20vmin/12*(${b[n][0] - 2*x}))`;
            obj[i].style.top  = `calc(10vmin - 20vmin/12*(${(b[n][0]==4?3:2) - 2*y}))`;
            i++;
        }
    }
}

function start(){
    if(document.body.classList.contains("playing")) return;
    board.g = [
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];
    game.score = 0;
    board.set();
    document.querySelector("#playbtn").innerHTML = "REPLAY";
    document.body.classList.add("playing");
}
document.querySelector("#playbtn").addEventListener("click", start);
document.addEventListener("keypress", e =>{if(e.code=="Enter" || e.code=="Space") start();})
