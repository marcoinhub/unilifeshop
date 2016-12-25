/*!
 * =====================================================
 * Mui v3.3.0 (http://dev.dcloud.net.cn/mui)
 * =====================================================
 */
$(function() {
        $(".bounced").click(function(){
            $(".bounced").animate({bottom: '60px'}, 1000);

        })
        setTimeout(function(){
            $(".bounced").click();
            setTimeout(function(){
                $(".bounced").animate({bottom: '-100%'}, 600);
            },2000)
        },3500);

})