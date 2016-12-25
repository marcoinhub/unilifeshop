/**
 * Created by youy on 2016/9/1.
 */
 var ygPoplist =function(url){
    this.dom=document.createElement('div');
    this.li=document.createElement('li');
    this.ul=document.createElement('ul');
    this.Nav=document.createElement('div');
    this.back=document.createElement('span');
    this.data=[{city:'上海市',counties:['黄浦区','普陀区','静安区','长宁区','徐汇区','杨浦区','虹口区','闸北区','闵行区','宝山区','嘉定区','浦东新区','金山区','松江区','青浦区','南汇区','川沙区','奉贤区']},
		{city:'广州市',counties:['天河区','白云区','越秀区','荔湾区','海珠区','番禺区','黄埔区']},{city:'深圳市',counties:['福田区','南山区','宝安区','罗湖区']}];
    this.init=function(city,callback){
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
			for(item in self.data){
				console.log(1);
				var cityObj=self.data[item];
				if(cityObj.city.match(city)){
					for(item in cityObj.counties){
						var li=self.li.cloneNode(true);
						li.innerHTML=cityObj.counties[item];
						self.ul.appendChild(li);
						li.addEventListener('click',function(){
							if(callback&&typeof callback == 'function'){
								var address={};
								address.city=city;
								address.country=this.innerHTML;
								callback(address);
							}
							document.body.removeChild(self.dom);
						})

					}
				}
				
			}
        }
		setData();
        

    }
}


