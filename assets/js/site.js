$(function () {
    $.localScroll({ filter: '.smoothScroll' });
    $('#goTop').goTop({
        "src": "fas fa-chevron-up"
    });

    $(window).scroll(function () {
        var collapse = $('#navbarCollapseContent');
        if (!collapse.hasClass('show')) {
            var avatar = $('.avatar');
            var mainNav = $('#main-nav');

            if (mainNav.offset().top > 50) {
                mainNav.addClass("short");
                avatar.addClass('avatar-hidden');
            } else {
                mainNav.removeClass("short");
                avatar.removeClass('avatar-hidden');
            }
        }
    });

    var mainNav = $('#main-nav');
    mainNav.on('show.bs.collapse', function () {
        $('.avatar').addClass('avatar-hidden');
    });

    mainNav.on('hide.bs.collapse', function () {
        $('.avatar').removeClass('avatar-hidden');
    });
});
