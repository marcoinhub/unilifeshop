/**
 * Created by youy on 2016/8/31.
 */
window.onload=function(){
toast('123');
toast('12321312');
}
function selectArea() {
    var pol=new poplist();
    pol.init(function(data){
        var address=document.querySelector("input[name='address']");
        address.setAttribute('value',data.province+data.city+data.county);

    });
}