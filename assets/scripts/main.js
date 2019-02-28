$('#burger-menu').click(function(event) {
    event.preventDefault();
    
    // add class
    $('nav').toggleClass('menu-responsive');

    var classExist = $('nav').hasClass('menu-responsive');

    // move container
    if(classExist){
            $('.container').css('transform', 'translateY(160px)');
    } else {
        $('.container').css('transform', 'translateY(0px)');
    }
    
    // resize
    $( window ).resize(function() {
        // delete class if not closed
        $('nav').removeClass('menu-responsive');
        // reset the place of the container
        $('.container').css('transform', 'translateY(0px)');
    });
    
});


