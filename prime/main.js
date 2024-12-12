let p=[2];
let n=1;
document.addEventListener('keydown', f);
document.addEventListener('click', f);
function f(){
    let a=true;
    for(let i=p[n-1]+1; i>1; i++){
        a=true;
        for(let j=0; j<n; j++) a&&=i%p[j];
        if(a){
            p[n]=i;
            document.querySelector("h1").innerText = p[n];
            n++;
            break;
        }
    }
}
