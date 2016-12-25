function noProcess($url) {
    return $url;
}
var encoder = noProcess;

var PROXY_HOST = "localhost";
var ENV_MOBILE = {
    //HOST: "http://fangzhen.unilifemedia.com:8100/service/app/v1/",
    //HOST:"http://192.168.2.124:8080/umobile/service/app/v1/",
    // HOST:"http://192.168.2.136:8080/umobile/service/app/v1/",
    //HOST:"http://192.168.2.100:8100/umobile/service/app/v1/",
    //HOST:"http://192.168.2.251:8080/
    //  umobile/service/app/v1/",
    //HOST: "http://192.168.2.85:8100/service/app/v1/",
    //HOST: "http://mobile.unilifemedia.com/service/app/v1/",
    HOST: "http://develop.unilifemedia.com/service/app/v1/"
    //HOST: "http://test.unilifemedia.com/service/app/v1/"
};
var ENV = ENV_MOBILE;
function getImageUrl($oriUrl) {
    return $oriUrl;
}

function switch_chrome() {
    encoder = encodeURIComponent;
    var ENV_CHROME = {
        HOST: "http://" + PROXY_HOST + "/xinfei_server/index.php?url=" + encoder(ENV_MOBILE.HOST),
    }
    ENV = ENV_CHROME;
}
function switch_img_proxy() {
    getImageUrl = function ($oriUrl) {
        return "http://" + PROXY_HOST + "/xinfei_server/index.php/Home/Index/showImage?url=" + encodeURIComponent($oriUrl);
    }
}
function switch_douguo_img_address() {
    getImageUrl = function ($oriUrl) {
        if ($oriUrl) {
            return $oriUrl.replace("www.douguo.com", "cp1.douguo.net")
        }
        return $oriUrl;
    }
}
var Global = {}
// 切换到浏览器模式

switch_chrome();//部署时注释
// 切换图片代理
//switch_img_proxy();

//switch_douguo_img_address();
var ACCESS_TOKEN = "98dd30d195d568c47945f2c5d5c08c0a";
//var ACCESS_TOKEN = "8638bab4fd86297b37a07d8801ab35a1";
function resetToken($newToken) {
    ACCESS_TOKEN = $newToken;
    URLS = {
        DO_REGISTER:ENV.HOST+encoder('account/doRegister?access_token='+ACCESS_TOKEN),//用户注册
        DO_LOGIN:ENV.HOST + encoder('account/doLogin?access_token='+ACCESS_TOKEN),//登录验证
        DO_USERACTIVE:ENV.HOST+encoder('account/userActive?access_token='+ACCESS_TOKEN),//0元购激活
        GET_ACCOUNT_INFO:ENV.HOST + encoder('account/getAccountInfo?access_token='+ACCESS_TOKEN),//获取用户信息
        GET_ACCOUNT_REMANENT:ENV.HOST+encoder('points/remanent?access_token='+ACCESS_TOKEN),//获取账户余额
        DO_FORGET:ENV.HOST + encoder('account/doForget?access_token='+ACCESS_TOKEN),//忘记密码
        DO_UPDATEPWD:ENV.HOST + encoder('account/doUpdatePwd?access_token='+ACCESS_TOKEN),//修改密码
        GET_MOBILE_CODE:ENV.HOST + encoder('account/getMobileCode?access_token='+ACCESS_TOKEN),//获取验证码
        GET_ORDER_LIST:ENV.HOST + encoder('order/getOrderList?access_token='+ACCESS_TOKEN),//订单列表
        GET_ORDER_INFO:ENV.HOST + encoder('order/getOrderInfo?access_token='+ACCESS_TOKEN),//订单详情
        GET_ORDER_LOGISTICS:ENV.HOST + encoder('logistics/getLogistics?access_token='+ACCESS_TOKEN),//查看物流
        GET_ADDRESS_LIST:ENV.HOST + encoder('account/address?access_token='+ACCESS_TOKEN),//地址列表
        GET_ADDRESS_INFO:ENV.HOST + encoder('account/address?access_token='+ACCESS_TOKEN),//地址详细
        DO_ADDRESS_DETAULT:ENV.HOST + encoder('account/defaultAddress?access_token='+ACCESS_TOKEN),//设置默认地址
        DO_ADDRESS_DEFAULT:ENV.HOST + encoder('account/defaultAddress?access_token='+ACCESS_TOKEN),//设置默认地址
        DO_DELETE_ADDRESS:ENV.HOST+encoder('account/deletedAddress?access_token='+ACCESS_TOKEN),//删除地址
        DO_NEW_ADDRESS:ENV.HOST+encoder('account/newAddress?access_token='+ACCESS_TOKEN),//新增地址
        DO_SAVE_ADDRESS:ENV.HOST+encoder('account/savedAddress?access_token='+ACCESS_TOKEN),//保存地址
        GET_ADDRESS_AREA:ENV.HOST + encoder('account/addressArea?access_token='+ACCESS_TOKEN),//查询省市县联动
        // 发票
        GET_MYINVOICE:ENV.HOST+encoder('invoice/getMyInvoice?access_token='+ACCESS_TOKEN),//我的发票
        GET_MYINVOICE_HISTORY:ENV.HOST+encoder('invoice/checkHistory?access_token='+ACCESS_TOKEN),//开票历史
        DO_SAVE_INVOICE:ENV.HOST+encoder('invoice/saveInvoice?access_token='+ACCESS_TOKEN),//提交发票信息
        //套餐
        GET_USERKID:ENV.HOST+encoder('account/getUserKidList?access_token='+ACCESS_TOKEN),
        DO_USERKID_SUB:ENV.HOST+encoder('order/submitOrder?access_token='+ACCESS_TOKEN),//套餐-订单提交
        // 主页   --->
        MAIN_PAGE_SHUFF:ENV.HOST + encoder('index/getShuff?access_token='+ACCESS_TOKEN),
        MAIN_PAGE_CHANNELS:ENV.HOST + encoder('index/getProject?access_token='+ACCESS_TOKEN),
        // 主页   <---
        GET_GOOGS_BY_QUERY:ENV.HOST + encoder('goods/getProductList?access_token='+ACCESS_TOKEN),
        // 产品   <---
        GET_CATEGORY_LIST:ENV.HOST + encoder('goods/getCatalog?access_token='+ACCESS_TOKEN),
        GET_PRODUCT_LIST:ENV.HOST + encoder('goods/getProductList?access_token='+ACCESS_TOKEN),
        GET_GOODS_DETAIL:ENV.HOST + encoder('goods/getGoods?access_token='+ACCESS_TOKEN),
        // 搜索   <---
        GET_HOT_QUERY:ENV.HOST + encoder('goods/getHotQuery?access_token='+ACCESS_TOKEN),
        GOODS_SEARCH:ENV.HOST + encoder('goods/search?access_token='+ACCESS_TOKEN),

        // 购物车 开始
        SHOPPINGCART_ADD:ENV.HOST + encoder('shoppingcart/add?access_token=' + ACCESS_TOKEN),
        SHOPPINGCART_LIST:ENV.HOST + encoder('shoppingcart/list?access_token=' + ACCESS_TOKEN),
        SHOPPINGCART_SYNC:ENV.HOST + encoder('shoppingcart/sync?access_token=' + ACCESS_TOKEN),
        SHOPPINGCART_DELETE:ENV.HOST + encoder('shoppingcart/delete?access_token=' + ACCESS_TOKEN),
        //订单
        ORDER_SUBMITORDER:ENV.HOST + encoder('order/submitOrder?access_token=' + ACCESS_TOKEN),
        ORDER_CHECKORDER:ENV.HOST + encoder('order/checkOrder?access_token=' + ACCESS_TOKEN),
        ORDER_PREPAY:ENV.HOST + encoder('order/prePay?access_token=' + ACCESS_TOKEN),
        ORDER_CONFIRMPAY:ENV.HOST + encoder('order/confirmPay?access_token=' + ACCESS_TOKEN),
        ORDER_CANCEL:ENV.HOST+encoder('order/cancel?access_token='+ACCESS_TOKEN),//取消订单
        ORDER_CONFIRMRECEIPT:ENV.HOST+encoder('order/confirmReceipt?access_token='+ACCESS_TOKEN),//确认收货
        GOOD_GETOODSORICEANDSTOCK:ENV.HOST+encoder('goods/getGoodsPriceAndStock?access_token='+ACCESS_TOKEN),//库存
        ORDER_PAYED_RESULT:ENV.HOST + encoder('order/appPayedNotify?access_token='+ACCESS_TOKEN),

        WEIXIN_AUTHIZED_URL:ENV.HOST + encoder('wx/getAuthizedUrl?access_token='+ACCESS_TOKEN),//微信获取openId
        WEIXIN_TOKEN_URL:ENV.HOST + encoder('account/access?access_token='+ACCESS_TOKEN), // 微信获取TOKEN
        
        GET_MAIN_PAGE_ADVERTISE:ENV.HOST + encoder('index/getMainPageAdvertise?access_token='+ACCESS_TOKEN),

        GET_COUPONLIST:ENV.HOST + encoder('coupon/couponList/?access_token='+ACCESS_TOKEN),//优惠券
        GET_AVAILABLE:ENV.HOST + encoder('coupon/availableCouponList?access_token='+ACCESS_TOKEN),//订单优惠券

        GET_ADVERTISE_GETMAINPAGEADVERTISE:ENV.HOST + encoder('advertise/getMainPageAdvertise?access_token='+ACCESS_TOKEN),//广告
        GET_BYIDLIST_LIST:ENV.HOST + encoder('goods/getListByIdList?access_token='+ACCESS_TOKEN), //列表查列表
        GET_SINGLEKIDDETAIL_LIST:ENV.HOST + encoder('goods/getSingleKidDetail?access_token='+ACCESS_TOKEN), //列表查列表
        GET_SUPPLIERBYCATA_LIST:ENV.HOST + encoder('goods/getSupplierByCatalogId?access_token='+ACCESS_TOKEN),//获取分类下品牌列表

        GET_ENTERPRISEREMANENT:ENV.HOST + encoder('points/enterpriseRemanent?access_token='+ACCESS_TOKEN),//品牌列表
        GET_DISCOUNTINFO:ENV.HOST + encoder('discount/getDiscountInfo/?access_token='+ACCESS_TOKEN),//优惠信息

        GET_SUPPLIER:ENV.HOST + encoder('goods/getSupplier/?access_token='+ACCESS_TOKEN),//根据目录获取商品列表
        GET_PROJECT_BY_ID:ENV.HOST + encoder('index/getProjectById/?access_token='+ACCESS_TOKEN),//获取首页专题
        GET_PROJECT_BY_IDS:ENV.HOST + encoder('index/getProjectByIds/?access_token='+ACCESS_TOKEN),//获取首页专题列表
        
        GET_WEIXIN_JS_SDK:ENV.HOST + encoder("/wx/getJsConfigParams"),//获取微信js-sdk的初始化参数
    }
}

resetToken('');

var deviceInfo = {
    brand:'unilife',
    deviceModel:'unilife',

}

var mainPageAdvParam = {
    placeGroupKey:["APP_01_HO01F00_"]
}

var mainPageChannel = {
    placeGroupKey:["APP_01_EC01F021_","APP_01_EC01F022_","APP_01_EC01F023_","APP_01_EC01F024_"]
}