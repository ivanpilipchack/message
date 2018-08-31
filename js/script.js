$(document).ready(function() {
    $('.menu').on('click', function() {
        $('.nav-menu').slideDown('slow')

    });
    $('.nav-menu').on('mouseleave', function() {
        $(this).fadeOut(500);
    });
    $('.btn').on('click', function(event) {
        $(event.currentTarget).addClass('btn-hover')
            .on('mouseleave', function(event) {
                $(event.currentTarget).removeClass('btn-hover')
            });
    });
    $('.postText').on('keyup', function(event) {
        let post = $(event.currentTarget).val();
        let remaining = 140 - post.length;
        if (remaining <= 0) {
            $('.wordcount').addClass('red');
        } else {
            $('.wordcount').removeClass('red');
        }
        $('.characters').html(remaining);
    });

    $('.postText').focus();
});