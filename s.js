document.body.innerHTML = '';
let n = 1;
setInterval(()=>{
    document.body.style.backgroundColor = (n*=-1)==1?'#000':'#fff';
},20)
