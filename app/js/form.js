$(function() {
    //E-mail Ajax Send
    $(".js_send_form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $.magnificPopup.close();
            $('.quest').removeClass('quest__scaler');
            $('body').removeClass('body_stop');
            setTimeout(function() {
                th.trigger("reset");
                $('.quest').hide();
                window.location.replace("http://maxtv.co.il/thanks.html");
            }, 50);
        });
        return false;
    });
    
    $('.quest__yellow-bg').click(function () {
        $('.quest').animate({
            scrollTop: $(".js-quest").offset().top
        }, 500);
        $('.js-quest').focus();
    });
    /*END FOCUS IN FORM ON CLICK*/

});
