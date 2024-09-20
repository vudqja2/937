const c = ['white', 'red', 'blue', 'green', 'black'];
let part = [];
let color = [];
let edge = [
    [],[],[],[],[],[],[],[],[],[],
    [],[],[],[],[],[],[],[],[],[],
    [],[],[],[],[],[],[],[],[],[],
    [],[],[],[],[],[],[],[],[],[],
    [],[],[],[],[],[],[],[],[],[],
    [],[],[],[],[],[],[],[],[],[],
    [],[],[],[],[],[],[],[],[],[],
    [],[],[],[],[],[],[],[],[],[],
    [],[],[],[],[],[],[],[],[],[],
    [],[],[],[],[],[],[],[],[],[]
];
let b = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
let key = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
]
let block = 0;
let making = true;
let check = {' ': 100}
let pos = num => [num%10, (num-(num%10))/10];
let num = (x, y) => x+y*10;
function set(){
    for(let y=0; y<10; y++) for(let x=0; x<10; x++){
        let a = document.querySelectorAll(".part")[num(x, y)];
        a.innerText = key[y][x];
        a.style.backgroundColor = c[b[y][x]];
    }
}
function reset(){
    part = [];
    color = [];
    edge = [
        [],[],[],[],[],[],[],[],[],[],
        [],[],[],[],[],[],[],[],[],[],
        [],[],[],[],[],[],[],[],[],[],
        [],[],[],[],[],[],[],[],[],[],
        [],[],[],[],[],[],[],[],[],[],
        [],[],[],[],[],[],[],[],[],[],
        [],[],[],[],[],[],[],[],[],[],
        [],[],[],[],[],[],[],[],[],[],
        [],[],[],[],[],[],[],[],[],[],
        [],[],[],[],[],[],[],[],[],[]
    ];
    b = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    key = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ]
    check = {' ': 100};
    document.querySelector('#board').classList.remove("act");
    set();
    making = true;
}
function act(){
    making = false;
    for([ky, vl] of Object.entries(check)){
        if(vl>0){
            if(ky == ' ') part.unshift(ky);
            else part.push(ky);
            color.push(4);
        }
    }
    for(let y=0; y<10; y++) for(let x=0; x<10; x++){
        let i = part.indexOf(key[y][x]);
        if(y>0 && key[y][x] != key[y-1][x] && !edge[i].includes(part.indexOf(key[y-1][x]))) edge[i].push(part.indexOf(key[y-1][x]));
        if(x<9 && key[y][x] != key[y][x+1] && !edge[i].includes(part.indexOf(key[y][x+1]))) edge[i].push(part.indexOf(key[y][x+1]));
        if(y<9 && key[y][x] != key[y+1][x] && !edge[i].includes(part.indexOf(key[y+1][x]))) edge[i].push(part.indexOf(key[y+1][x]));
        if(x>0 && key[y][x] != key[y][x-1] && !edge[i].includes(part.indexOf(key[y][x-1]))) edge[i].push(part.indexOf(key[y][x-1]));
    }
    //color할당
    for(let y=0; y<10; y++) for(let x=0; x<10; x++){
        b[y][x] = color[part.indexOf(key[y][x])];
    }
    document.querySelector('#board').classList.add("act");
    set();
}
for(let y=0; y<10; y++) for(let x=0; x<10; x++){
    document.querySelectorAll(".part")[num(x, y)].addEventListener('mouseover', ()=>{
        block = num(x, y);
    });
}
document.addEventListener('keydown', e=>{
    let [px, py] = pos(block);
    let bool = false;
    let l = px>0 ?key[py][px-1] :false;
    let r = px<9 ?key[py][px+1] :false;
    let u = py>0 ?key[py-1][px] :false;
    let d = py<9 ?key[py+1][px] :false;
    bool ||= !check[e.key] || l===e.key || r===e.key || u===e.key || d===e.key;
    bool &&= e.key.length == 1;
    bool &&= making;
    if(bool){
        check[key[py][px]]--;
        if(!check[e.key]) check[e.key] = 0;
        check[e.key]++;
        key[py][px] = e.key;
        set();
    }
    if(e.key == 'Enter') act();
    if(e.key == 'Backspace') reset();
})