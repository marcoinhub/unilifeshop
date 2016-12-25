/*!
 * =====================================================
 * Mui v3.3.0 (http://dev.dcloud.net.cn/mui)
 * =====================================================
 */
$(function() {

    $("body").on("scroll", function() {
        var scrollT =$(document).scrollTop();
        var scrollT = parseInt(scrollT);
        if (scrollT > 100) {
            console.log(scrollT);
           $(".search_a").addClass('a_search_1');
        }else{
            $(".search_a").removeClass('a_search_1');
        }
    });

    //var scroll = mui('body').scroll();
    //document.querySelector('body' ).addEventListener('scroll', function (e ) {
    //    console.log(scroll.y);
    //})
})