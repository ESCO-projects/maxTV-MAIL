function scrollCanalAnimation() {
    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
    $(".number_count").each(function() {
        var tcount = $(this).data("count");
        $(this).animateNumber({ number: tcount,
                easing: 'linear',
                numberStep: comma_separator_number_step},
            1500);
    });
};

$('.box_tv_img').waypoint(function(direction) {
    $('.wrap_box').toggleClass('active_box');
}, {
    offset: '60%'
});

$('.plans').waypoint(function(direction) {
    $('.plans').toggleClass('translate_tariff');
}, {
    offset: '70%'
});

$('.step_inner').waypoint(function(direction) {
    $('.step_inner').addClass('step_scale');
}, {
    offset: '88%'
});

$('.competitor').waypoint(function(direction) {
    $('.competitor').toggleClass('dif_scale');
}, {
    offset: '90%'
});

$('.ours').waypoint(function(direction) {
    $('.ours').toggleClass('dif_scale');
}, {
    offset: '90%'
});
$('.plans__circle').waypoint(function(direction) {
    scrollCanalAnimation();
}, {
    offset: '90%'
});

$('.come__grid').waypoint(function(direction) {
    $('.js_cube').addClass('js_anim_platform');
    $('.js_shadows').addClass('js_anim_shadow');
    new Vivus('path', {
        type: 'oneByOne',
        duration: 230,
        start: 'autostart',
        selfDestroy: true
    });
}, {
    offset: '90%'
});


function checkPosition() {
    if (window.matchMedia('(min-width: 1024px)').matches) {
        $('.js_one').waypoint(function(direction) {
            $(this.element).toggleClass('animated').toggleClass('fadeInUp');
        }, {
            offset: '97%'
        });

        $('.js_two').waypoint(function(direction) {
            $(this.element).toggleClass('animated').toggleClass('fadeInUp');
        }, {
            offset: '95%'
        });

        $('.js_tree').waypoint(function(direction) {
            $(this.element).toggleClass('animated').toggleClass('fadeInUp');
        }, {
            offset: '93%'
        });

        $('.js_four').waypoint(function(direction) {
            $(this.element).toggleClass('animated').toggleClass('fadeInUp');
        }, {
            offset: '80%'
        });
    }
};
checkPosition();

