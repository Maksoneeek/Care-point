
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__block,.header__logo').toggleClass('active');
        $('body').toggleClass('lock')
    });
});



$(document).ready(function () {
    $('.block-work-spoilers__title').click(function (event) {
        if ($('block-work__item').hasClass('one')) {
            $('.block-work-spoilers__title').not($(this)).removeClass('active');
            $('.block-work-spoilers__text').not($(this).next()).slideUp(300)
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});