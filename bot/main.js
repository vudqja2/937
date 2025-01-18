const chatroom = document.getElementById("chatroom");
const sender = document.getElementById("sender");
const msg = document.getElementById("msg");
chatroom.value = "chatroom";
sender.value = "sender";
msg.focus();
document.addEventListener('keypress', e=>{
  if(e.code == 'Enter'){
    e.preventDefault();
    msngr.send(msg.value);
    response(chatroom.value, msg.value, sender.value, false, msngr, "imageDBvalue", "com.kakao.talk");
    msg.value = "";
    window.scrollTo(0, document.body.scrollHeight);
    msg.focus();
  }
});
document.form.addEventListener('submit', e => {return false;})
const msngr = {
  n: 1,
  send: text => {
    var newdiv = document.createElement('div');
    newdiv.style.cssText = `--i: ${msngr.n++};`;
    newdiv.innerText = text;
    document.body.appendChild(newdiv);
    msngr.check();
  },
  reply: text => {
    var newdiv = document.createElement('span');
    newdiv.style.cssText = `--i: ${msngr.n++};`;
    newdiv.innerText = text;
    document.body.appendChild(newdiv);
    msngr.check();
  },
  check: () => {
    if(msngr.n>15) document.body.style.cssText = `height: calc(${msngr.n*6+10}vh)`
  },
}
