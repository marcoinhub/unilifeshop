/**
 * Created by youy on 2016/8/31.
 */
window.onload=function(){
    var selected=document.querySelectorAll("input[type='radio']");
    selected.forEach(function (radio) {
        radio.nextElementSibling.innerHTML='设为默认'
        var state=radio.getAttribute('yy-checked');
        console.log(state);
        if(state=='true'){
            radio.setAttribute('checked','checked')
            radio.nextElementSibling.innerHTML='默认地址'
        }
        radio.addEventListener('click',function(){
                var self=this;
               selected.forEach(function(all){
                   all.nextElementSibling.innerHTML='设为默认';
               })
               self.nextElementSibling.innerHTML='默认地址';
       })
    })
}
function deleteAD(self){
    var event=window.event;
    var target=event.target;
    var com=new confirm;
    var li=target.parentNode.parentNode;
    com.init({title:'消息框',info:'确认删除该收货地址吗',sure:'确认',cancle:'取消'},function(result){
        if(result==true){
           var ul = document.querySelector('.address');
            ul.removeChild(li);
        }else if(result==false){
        }
    });
}
function addAddress(){
    window.location.href='myNewAdd.html';
}

function editAD(){
    window.location.href='myEdit.html';
}