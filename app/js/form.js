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
    
    $('.js_focus_form').click(function () {
        $('.quest').animate({
            scrollTop: $(".js_focus_in").offset().top
        }, 500);
        $('.js_focus_in').focus();
    });
    /*END FOCUS IN FORM ON CLICK*/

});
