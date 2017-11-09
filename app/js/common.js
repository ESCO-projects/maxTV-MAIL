$(function() {

    $('.par_ax').click(function () {
       $(this).slideToggle(500);
    });

    /*animate header form*/
    $('.head__form').addClass('translate_tariff');

    /*show & hide fixed nav menu*/
    $(window).scroll(function(){
        var winTop = $(window).scrollTop();
        if(winTop >= 200){
            $(".fix").addClass('menu_in animated fadeInDown').removeClass('fadeOutUp');
        }else{
            $(".fix").removeClass('fadeInDown').addClass('fadeOutUp');
        }
    });

    /*scale pictures in world company section*/
    $('.office__one').hover(function () {
        $('.world__img_slider').toggleClass('scale_slider');
        $('.img_office').toggleClass('scale_world');
        $('.world__img_arr').toggleClass('hov_img_arr_1');
    });
    $('.office__two').hover(function () {
        $('.world__img_slider').toggleClass('scale_slider');
        $('.img_call').toggleClass('scale_world');
        $('.world__img_arr').toggleClass('hov_img_arr_2');
    });
    $('.office__three').hover(function () {
        $('.world__img_slider').toggleClass('scale_slider');
        $('.img_doc').toggleClass('scale_world');
        $('.world__img_arr').toggleClass('hov_img_arr_3');
    });

    /*form tel number mask*/
    $('.js_mask').mask('000-0000000');
    $('.js_mask_card').mask('0000-0000-0000-0000');
    $('.js_zeut_mask').mask('000000000');
    $('.js_cvv_mask').mask('000');

    /*push in modal button value*/
    $('a.js_value').click(function () {
        $('.form_id').val($(this).data("form"));
    });

    /*start & init parallax elements*/
    $(window).bind('scroll',function(e){
        parallaxScroll();
    });
    function parallaxScroll(){
        var scrolled = $(window).scrollTop();

        $('.pr_01').css('bottom',(40-(scrolled*.02))+'%');
        $('.pr_02').css('top',(10-(scrolled*.05))+'%');
        $('.pr_03').css('top',(25-(scrolled*.03))+'%');
        $('.pr_04').css('top',(80-(scrolled*.03))+'%');
        $('.pr_05').css('top',(80-(scrolled*.04))+'%');
        $('.pr_06').css('top',(95-(scrolled*.04))+'%');
        $('.pr_07').css('bottom',(50-(scrolled*.02))+'%');
        $('.pr_08').css('bottom',(25-(scrolled*.03))+'%');
        $('.pr_09').css('bottom',(85-(scrolled*.05))+'%');
        $('.pr_10').css('top',(40-(scrolled*.05))+'%');
        $('.pr_11').css('bottom',(38-(scrolled*.03))+'%');
        $('.pr_12').css('bottom',(15-(scrolled*.02))+'%');
        $('.world__circle__one').css('top',(500-(scrolled*.09))+'px');
        $('.world__circle__three').css('top',(650-(scrolled*.15))+'px');
        $('.world__circle__two').css('bottom',(800-(scrolled*.15))+'px');
    };
    /*end & init parallax elements*/

    /*START MOBILE BUTTONS AND MENU OPENS*/
    $('.mob_btn-def').click(function () {
        $('.btn_line').toggleClass('btn_open');
        $('.dt_mnu').slideToggle("fast");
    });
    $('.fix__mob-btn').click(function () {
        $('.btn_line').toggleClass('btn_open');
        $('.fix_mnu').slideToggle("fast");
    });
    /*END MOBILE BUTTONS AND MENU OPENS*/

    $('.dt_mnu a').click(function () {
        $('.dt_mnu').slideToggle('200');
        $('.btn_line').toggleClass('btn_open');
    });
    $('.fix_mnu a').click(function () {
        $('.fix_mnu').slideToggle('200');
        $('.btn_line').toggleClass('btn_open');
    });

    /*START FUNCTION TO ADD PROGRESS LINE TO NAVIGATION*/
    function scrollProgressLine() {
        var body = document.body;
        var html = document.documentElement;
        var viewportHeight = window.innerHeight;
        var documentHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        var scrollTopValue = function () {
            return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        };
        window.addEventListener('scroll', function () {
            var scroll = scrollTopValue();
            var progress = (scroll / (documentHeight - viewportHeight))*100;
            var valueToSet = progress.toFixed(0);
            $('.fix__progress').width(valueToSet + '%');
        });
    };scrollProgressLine();
    /*END FUNCTION TO ADD PROGRESS LINE TO NAVIGATION*/
    $('input.js_hide_form').on( "click", function() {
        $('.js_hide_input').hide();
    });
    $('input.js_show_fields').on( "click", function() {
        $('.js_hide_input').show();
    });



});//END WINDOW FUNCTION
/*$('.footer__contacts h5').css('color','#fff');*/
