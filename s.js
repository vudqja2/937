new Promise((res, rej) => {document.body.innerHTML = '';})
.catch(e => console.log("This site doesn't allow you to remove elements."));
let n = 1;
setInterval(()=>{document.body.style.backgroundColor = (n*=-1)==1?'#000':'#fff';},20)
