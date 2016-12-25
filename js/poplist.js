/**
 * Created by youy on 2016/9/1.
 */
 var poplist =function(url){
    this.dom=document.createElement('div');
    this.li=document.createElement('li');
    this.ul=document.createElement('ul');
    this.Nav=document.createElement('div');
    this.back=document.createElement('span');
    this.data={province:'',city:'',county:''};
    this.init=function(callback) {
        var self = this;
        var screenH =$(window).height();
        var boardH=screenH-44;
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if(isiOS){
            self.ul.setAttribute('style', 'height:' + boardH + 'px;' + 'width:100%;background:#ffffff;overflow:auto;padding-bottom:44px');
        }else if(isAndroid){
            self.ul.setAttribute('style','position: fixed;left: 0;right: 0;top: 44px;bottom: 0;width: 100%;background: #ffffff;overflow: auto;padding-bottom: 44px;');
        }else {
            self.ul.setAttribute('style','position: fixed;left: 0;right: 0;top: 44px;bottom: 0;width: 100%;background: #ffffff;overflow: auto;padding-bottom: 44px;');
        }
        self.dom.setAttribute('style', 'width:100%;position:fixed;left:0;top:0px;z-index:255');
        self.Nav.setAttribute('style', 'background: rgb(245, 245, 245);border-bottom: 1px solid rgb(221, 221, 221);height:44px');
        self.back.setAttribute('style', 'display: block;left:0;top:0;text-align:center;font-size: 24px;height: 40px;line-height: 40px;width: 50px;color: #666;transform: scaleY(1.5);font-stretch: ultra-condensed');
        self.Nav.appendChild(self.back);

        self.li.setAttribute('style', 'padding: 10px 25px;border-bottom: 1px solid #ccc;text-align:left');
        self.dom.appendChild(self.Nav);
        self.dom.appendChild(self.ul);
		self.back.innerHTML="<";
        document.body.appendChild(self.dom);
        self.back.addEventListener('click', function () {
            var main=document.querySelector('.main');
            if(main && main.style.display=='none'){
                main.style.display='block';
            }
            if (!self.data.provice && !self.city && !self.county) {
                document.body.removeChild(self.dom);
            }

        })
        var setData = function () {
            var lengthp=self.data.province.length;
            var lengthc=self.data.city.length;
            if (lengthp==0) {
                self.data.province = this.innerHTML;
                getData();
            };
            if(lengthp>0&&lengthc==0){
                self.data.city=this.innerHTML;
                getData();
            }
            if(lengthp>0&&lengthc>0){
                self.data.county=this.innerHTML;
                if(callback&&typeof callback == 'function'){
                    callback(self.data);
                }
                document.body.removeChild(self.dom);
            }
        }
        var getData = function () {
            Post(url, self.data, function (data) {
                while (self.ul.hasChildNodes())
                {
                    self.ul.removeChild(self.ul.firstChild);
                }
                data.forEach(function (data) {
                    var neli = self.li.cloneNode(true);
                    neli.innerHTML = data;
                    neli.addEventListener('click', setData);
                    self.ul.appendChild(neli);
                })
            }, function (error) {
                console.log(error);
            })
        }
        getData();
    }
}


