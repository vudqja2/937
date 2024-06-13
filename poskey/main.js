let pk = {
  toeng: function(n){
    if(n>=1 && n<=13) return String.fromCharCode(n+64)
    else if(n<=26) return String.fromCharCode(n+65)
    else return undefined
  },
  tonum: function(c){
    let n = c.charCodeAt()
    if(n>=65 && n<=90) return n-64
    else return undefined
  },
  addc: function(key){
    document.querySelector('#'+(key=='N'?'M':key)).classList.add('active')
  },
  delc: function(key){
    document.querySelector('#'+(key=='N'?'M':key)).classList.remove('active')
  }
}
document.addEventListener('keydown', e => {
  key = e.key.toUpperCase()
  if(key.length==1 && pk.tonum(key)){
    pk.addc(key)
  }
})
document.addEventListener('keyup', e => {
  key = e.key.toUpperCase()
  if(key.length==1 && pk.tonum(key)){
    pk.delc(key)
  }
})
