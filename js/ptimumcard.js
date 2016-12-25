/*!
 * =====================================================
 * Mui v3.3.0 (http://dev.dcloud.net.cn/mui)
 * =====================================================
 */
$(function() {
    $(".a_fenleis").click(function () {
        //  $(".a_ptimumcfen").hide();
        $(".a_ptimumcfen").animate({top: '100%'}, 400);
        $(".a_fenleis").animate({top: '100%'}, 400);
    })
    $(".fenlei_a").click(function () {
        $(".a_fenleis").animate({top: '122px'}, 400);
        $(".a_ptimumcfen").animate({top: '0%'}, 400);
    })
    $(".a_prie").click(function () {
        $(".a_fenleis_a").animate({top: '44px'}, 400);
        $(".a_ptimumcfen_a").animate({top: '0%'}, 400);
    })
    $(".a_fenleis_a").click(function () {
        $(".a_fenleis_a").animate({top: '100%'}, 400);
        $(".a_ptimumcfen_a").animate({top: '100%'}, 400);
    })
    //$('.pt_screening span').click(function(){
    //    alert(111);
    //    $('html, body').animate({scrollTop:0}, 100);
    //});

})