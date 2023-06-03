// theme button

let $container = $("div.container");
let $themeButtons = $('.theme-button');

    $themeButtons.on('click', function(){
        $container.toggleClass('dark-theme');
    })     

// up button

let $upButton = $('button.up')

window.onscroll = function(){
    if(window.pageYOffset > 1200){
        $upButton.addClass('shown')
    }

    else{
        $upButton.removeClass('shown')
    }
}

$upButton.on('click', function(){
    window.scrollTo(0, 0);
})