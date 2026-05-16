const mode = {
  en: {
    tostr: function(n){
      if(n>=1 && n<=26) return String.fromCharCode(n+64);
      else return undefined
    },
    tonum: function(c){
      let n = c.charCodeAt()
      if(n>=65 && n<=90) return n-64
      else return undefined
    },
    addc: function(key){
      document.querySelector('#'+(key=='N'?'M':key)).classList.add('active');
    },
    delc: function(key){
      document.querySelector('#'+(key=='N'?'M':key)).classList.remove('active');
    },
    act: function(key, lr, ud){
      let n=this.tonum(key);
      if(n>=14) n--;
      let x=(n-1)%5+1;
      let y=(n-x+5)/5;
      if(lr==0 || lr==1) document.querySelector(`body > span > div#left > span:nth-child(${y})`).classList.add('active');
      if(lr==0 || lr==2) document.querySelector(`body > span > div#right > span:nth-child(${y})`).classList.add('active');
      if(ud==0 || ud==1) document.querySelector(`body > span > div#up > span:nth-child(${x})`).classList.add('active');
      if(ud==0 || ud==2) document.querySelector(`body > span > div#down > span:nth-child(${x})`).classList.add('active');
    },
    dct: function(key, lr, ud){
      let n=this.tonum(key);
      if(n>=14) n--;
      let x=(n-1)%5+1;
      let y=(n-x+5)/5;
      if(lr==0 || lr==1) document.querySelector(`body > span > div#left > span:nth-child(${y})`).classList.remove('active');
      if(lr==0 || lr==2) document.querySelector(`body > span > div#right > span:nth-child(${y})`).classList.remove('active');
      if(ud==0 || ud==1) document.querySelector(`body > span > div#up > span:nth-child(${x})`).classList.remove('active');
      if(ud==0 || ud==2) document.querySelector(`body > span > div#down > span:nth-child(${x})`).classList.remove('active');
    },
    kact: function(key){
      this.addc(key);
      this.act(key,0,0);
    },
    kdct: function(key){
      this.delc(key);
      this.dct(key,0,0);
    },
  }
}
let pk = mode.en;
let md = false;
document.addEventListener('keydown', e => {
  let key = e.key.toUpperCase();
  if(key.length==1 && pk.tonum(key)) pk.kact(key);
})
document.addEventListener('keyup', e => {
  let key = e.key.toUpperCase()
  if(key.length==1 && pk.tonum(key)) pk.kdct(key);
})
document.body.addEventListener('contextmenu', e=>{e.preventDefault()});
for(let i=1; i<=26; i++){
  if(i!=14){
    let key=pk.tostr(i);
    console.log(key)
    document.getElementById(key).addEventListener('mousedown', e=>{md=true;  pk.kact(key)})
    document.getElementById(key).addEventListener('mouseup',   e=>{md=false; pk.kdct(key)})
    document.getElementById(key).addEventListener('mouseenter', e=>{if(md)    pk.kact(key)})
    document.getElementById(key).addEventListener('mouseleave', e=>{if(md)    pk.kdct(key)})
  }
}
