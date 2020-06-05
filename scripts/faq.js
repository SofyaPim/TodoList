$('.answer').hide();

$('.quest').on('click', function () {
    
        $(this).next().slideToggle(); 
})
