/**
 * Created by youy on 2016/9/2.
 *param(message) string 必填提示信息
 */

var toast=function(message){
    var msl=message.length;
    if(msl.length==0||typeof  message != 'string'){
        return;
    }
    var board=document.createElement('div');
    var ele=document.createElement('label');
    var boardCSS="position:fixed;width:100%;text-align:center;bottom:20%";
    board.setAttribute('style',boardCSS);
    board.appendChild(ele);
    var eleCSS='width:8em;display:inline-block;font-size:1em;line-height:1.5em;padding:0.5em;border-radius:1em;background:rgba(0,0,0,0.8);color:#ffffff;word-wrap: break-word;transition:fade 1s linear;transition: width 2s;-moz-transition: width 2s;-webkit-transition: width 2s;';
    ele.setAttribute('style',eleCSS);
     ele.innerHTML=message;
    var wid=ele.clientWidth;
    document.body.appendChild(board);
    setTimeout(function(){
        document.body.removeChild(board)
    },1500);
}