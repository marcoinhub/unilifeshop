/*!
 * =====================================================
 * Mui v3.3.0 (http://dev.dcloud.net.cn/mui)
 * =====================================================
 */
$(function() {
    $(".youhuishuoming_uot").click(function () {
        //  $(".a_ptimumcfen").hide();
        $(".favorable").animate({bottom: '0%'}, 400);
    })
    $(".affirm").click(function () {
        //  $(".a_ptimumcfen").hide();
        $(".favorable").animate({bottom: '-100%'}, 400);
    })
    $(".favorable_c").click(function () {
        //  $(".a_ptimumcfen").hide();
        $(".favorable").animate({bottom: '-100%'}, 400);
    })
    $(".hassub").click(function () {
        //  $(".a_ptimumcfen").hide();
        $(".a_address").animate({bottom: '0%'}, 400);
    })

    $(".address_ha").click(function () {
        //  $(".a_ptimumcfen").hide();
        $(".a_address").animate({bottom: '-100%'}, 400);
    })
    $(".myShipping").click(function () {
        //  $(".a_ptimumcfen").hide();
        $(".a_address").animate({bottom: '-100%'}, 400);
    })
    $(".favorable_a").click(function () {
        //  $(".a_ptimumcfen").hide();
        $(".a_explain").show(400);
    })

    $(".cancel").click(function () {
        //  $(".a_ptimumcfen").hide();
        $(".a_explain").hide(400);
    })
	
	
	
	
	
})