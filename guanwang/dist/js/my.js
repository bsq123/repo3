$(function(){
    console.log($('#more').siblings())
    $('#more').on('click',function(){
        $("html,body").animate({scrollTop: $("#moreTX").offset().top-70}, 1000);
        $('#more').addClass('active').siblings().removeClass('active')



    })
    $('#guanzhu').on('click',function(){
        $("html,body").animate({scrollTop: $(".gzour").offset().top-70}, 1000);
        $('#guanzhu').addClass('active').siblings().removeClass('active')

    })
    // $('.cp').on('click',function(){
    //     $("html,body").animate({scrollTop: $("#chanpin").offset().top-70}, 1000);
    //     $('.cp').addClass('active')
    // })
   /* $("#more").click(function(){
        $('header').attr('height','0px')
    })*/
   /* $window = $(window)
    $window.on('scroll',function () {
        var scrollTop = $window.scrollTop()
        // console.log($('#featured').offset().top)
        if(scrollTop >= $('#moreTX').offset().top-70){
            $('#more').addClass('active')
        }else{
            $('#more').removeClass('active')
        }
        if(scrollTop >= $('.gzour').offset().top-250){

            $('#guanzhu').addClass('active')
            $('#guanzhu').siblings().removeClass('active')
        }else{
            $('#guanzhu').removeClass('active')
        }
    })*/
    // $(window).resize(function(){
    //     console.log($(window).width())
    //
    // })
    console.log($(window).width())
    var src = $('.show-img').attr
    if($(window).width() <= 768){

        $('.show-img').addClass('hide')
        $('.show2-img').removeClass('hide')
        return false

    }


})
