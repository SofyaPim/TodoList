$('.answer').hide();

$('.quest').on('click', function () {
    $(this).next().animate({ transition: '1s'})
        $(this).next().slideToggle(); 
})