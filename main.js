(function ($) {
    "use strict"
// the only piece of Javascript I used was for the menu, I tried making more stuff with it but It ended up in terrible failure so I gave up trying to make it work haha
    $(window).scroll(function (){
        if ($(this).scrollTop() > 200){
            $('.navbar').fadeIn('slow').css('display','flex');
        }else{
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    })
})