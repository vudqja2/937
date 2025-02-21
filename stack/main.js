let a = [8, 5, 6, 1, 4, 2, 3, 7, 10, 9];
let s = [0, 0, 0, 0, 0, 0, 0, 0,  0, 0];
let b = [0, 0, 0, 0, 0, 0, 0, 0,  0, 0];
let canrmv = true;
let btn = [
  document.querySelector("span#psh"),
  document.querySelector("span#pop"),
  document.querySelector("span#rmv"),
  document.querySelector("span#rst")
]

btn[0].addEventListener('click', ()=>{psh();set();})
btn[1].addEventListener('click', ()=>{pop();set();})
btn[2].addEventListener('click', ()=>{rmv();set();})
btn[3].addEventListener('click', ()=>{rst();set();})
document.addEventListener('keypress', e=>{
       if(e.code=="KeyF")  psh();
  else if(e.code=="KeyJ")  pop();
  else if(e.code=="Space") rmv();
  else if(e.code=="KeyR")  rst();
  set();
})
function act(n){
  btn[n].classList.add('act');
  setTimeout(()=>{
    btn[n].classList.remove('act')
  }, 100)

}
function set(){
  for(let i=0; i<10; i++){
    document.querySelectorAll('#A>div')[i].innerText = a[i]!=0?a[i]:'';
    document.querySelectorAll('#S>div')[i].innerText = s[i]!=0?s[i]:'';
    document.querySelectorAll('#B>div')[i].innerText = b[i]!=0?b[i]:'';
  }
}
function psh(){
  for(let i=0; i<10; i++) if(a[i]!=0){
    for(let j=9; j>=0; j--) if(s[j]==0){
      s[j]=a[i];
      a[i]=0;
    }
    break;
  }
  act(0);
}
function pop(){
  for(let i=0; i<10; i++) if(s[i]!=0){
    for(let j=0; j<10; j++) if(b[j]==0){
      b[j]=s[i];
      s[i]=0;
      break;
    }
    break;
    act(1);
  }
}
function rmv(){
  if(canrmv){
    canrmv = false;
    for(let i=0; i<10; i++) if(a[i]!=0){
      a[i]=0;
      break;
    }
  }
  act(2);
}
function rst(){
  a = [8, 5, 6, 1, 4, 2, 3, 7, 10, 9];
  s = [0, 0, 0, 0, 0, 0, 0, 0,  0, 0];
  b = [0, 0, 0, 0, 0, 0, 0, 0,  0, 0];
  canrmv=true;
  act(3);
}