let pk = {
  toeng: function(n){
    if(n>=1 && n<=25) return String.fromCharCode(n+64)
    else return undefined
  },
  tonum: function(c){
    let n = c.charCodeAt()
    if(n>=65 && n<=90) return n-64
    else return undefined
  },
  topos: function(n){
    if(n>=1 && n<=26){
      let num = n
      if(num > 13) num--
      let x = num%5
      let y = Math.ceil(num/5)
      if(!x) x=5
      return [x,y]
    }
    else return undefined
  },
  mov: function(x,y){
    let chr =  document.querySelector('#chr')
    chr.style.setProperty('--x', x.toString())
    chr.style.setProperty('--y', y.toString())
  },
}
document.addEventListener('keydown', e => {
  key = e.key.toUpperCase()
  console.log(key)
  if(key.length==1 && pk.tonum(key)){
    [x,y]=pk.topos(pk.tonum(key))
    pk.mov(x,y)
  }
})