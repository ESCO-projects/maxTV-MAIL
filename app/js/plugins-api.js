$(function() {

    /*START TIMER*/
    /*set end date in countdown function and it will calculate time*/
    $('.time_go').countdown('2017/12/31 00:00:00', function(event) {
        $('.cou_hours').html(event.strftime('%H'));
        $('.cou_min').html(event.strftime('%M'));
        $('.cou_sec').html(event.strftime('%S'));
    });
    /*END TIMER*/

    /*start modal slider*/
    $('.js_mod_slider').on('afterChange', function(event, slick, currentSlide) {
        if (slick.$slides.length-1 == currentSlide) {
            $('.mod__next').hide();
            $('.mod_send').show();
        } else {
            $('.mod__next').show();
            $('.mod_send').hide();
        }
    });
    /*end modal slider*/

    /*START FADE TEXT SLIDER IN EQUIPMENT SECTION*/
    $('.js_text_sl').slick({
        dots: true,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        dotsClass: 'dots_slider',
        pauseOnHover: true
    });
    /*END FADE TEXT SLIDER IN EQUIPMENT SECTION*/

    $('.js_world_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: false,
        adaptiveHeight: true
    });

    var timerClear;
    var closerClearTimer;
    var firstTimer;
    firstTimer = setTimeout(function(){
        $('.quest').addClass('quest__scaler').css('bottom','0');
        $('body').addClass('body_stop');
    }, 50000);

    $('.quest__closer').click(function () {
        $('.quest').removeClass('quest__scaler');
        $('body').removeClass('body_stop');
        clearTimeout(timerClear);
        closerClearTimer = setTimeout(function(){
            $('body').addClass('body_stop');
            $('.quest').addClass('quest__scaler');
        }, 180000);
    });
    $('.js_mod_slider').slick({
        dots: true,
        infinite: false,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        swipe: false,
        adaptiveHeight: true,
        dotsClass: 'mod__dots',
        prevArrow: $('.mod__prev'),
        nextArrow: $('.mod__next')
    });
    /*START POPUP MODAL FORM*/
    $('.popup_modal').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        closeBtnInside: false,
        showCloseBtn: false,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom',
        callbacks: {
            beforeOpen: function() {
                $('.quest').css('bottom','-110vh');
                clearTimeout(timerClear);
                clearTimeout(firstTimer);
                $('.js_mod_slider').slick('slickGoTo', 2);
                setTimeout(function () {
                    $('.js_mod_slider').slick('slickGoTo', 0);
                },300);
            },
            close: function() {
                $('.main-all-wrapper').removeClass('body_stop');
                $('.quest').removeClass('quest__scaler');
                clearTimeout(closerClearTimer);
               timerClear = setTimeout(function () {
                    $('.quest').css('bottom','0').addClass('quest__scaler');
                    $('body').addClass('body_stop');
                },50000);
            }
        }
    });
    //custom button closer
    $('.js_close_modal').on( "click", function() {
        $.magnificPopup.close();
    });
    /*END POPUP MODAL FORM*/

/*    $( "#this_form" ).submit(function( event ) {
        if ( $('.mod__first-step input').val() === '') {
            $('.js_mod_slider').slick('slickGoTo', 0);
            $('.mod__first-step input').prop('required',true);
            return;
        }
        event.preventDefault();
    });*/

    $('.mod__btn').click(function() {
        $('.mod__step').find('input').each(function(){
           if ( $(this).val() === '') {
               $(this).prop('required',true);
               var slidenum = $(this).data('slide');
               $('.js_mod_slider').slick('slickGoTo', slidenum);
               /*$('.js_mod_slider').slick('slickGoTo', 0);*/
           }
        });
    });


});