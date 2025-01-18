const chatroom = document.getElementById("chatroom");
const sender = document.getElementById("sender");
const msg = document.getElementById("msg");
const btn = document.getElementById("btn");
chatroom.value = "chatroom";
sender.value = "sender";
msg.focus();
const send = ()=>{
  msngr.send(msg.value);
  response(chatroom.value, msg.value, sender.value, false, msngr, "imageDBvalue", "com.kakao.talk");
  msg.value = "";
  window.scrollTo(0, document.body.scrollHeight);
  msg.focus();
};
msg.addEventListener('keypress', e=>{if(e.code=='Enter')send()});
btn.addEventListener('click', e=>{send()});
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
