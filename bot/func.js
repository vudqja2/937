const scriptName = "937";
/**
 * (string) room
 * (string) sender
 * (void) replier.reply(massage)
 * (boolean) replier.reply(room, message, hideErrorToast = false) //전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBae64()
 * (string) packageName
*/
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName){
  replier.reply(msg)
}
