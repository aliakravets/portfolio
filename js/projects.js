// Game

let color = document.querySelector(".color");
let pixels = document.querySelectorAll(".pixel");
let eraser = document.querySelector(".eraser")

for(let pixel of pixels){
    pixel.addEventListener('click', function(){
        if(eraser.checked){
            pixel.style.backgroundColor = "white";
        }

        else{
            pixel.style.backgroundColor = `${color.value}`;
        }
    })
}

var imgs=[
    'img/apple.PNG',
    'img/cherry.png',
    'img/grub.png',
    'img/heart.png',
    'img/orange.png',
    'img/rainbow.png',
    'img/small-rainbow.png'
]

image=document.getElementById('image');
button=document.getElementById('button');

button.onclick=function(){
    image.src=imgs[Math.floor(Math.random()*imgs.length)];
}

// theme button

let $container = $('div.container');
let $themeButtons = $('.theme-button');

    $themeButtons.on('click', function(){
        $container.toggleClass('dark-theme');
    })

// Up button

let $upButton =$('button.up')

window.onscroll = function(){
    if(window.pageYOffset > 3500){
        $upButton.addClass('shown')
    }

    else{
        $upButton.removeClass('shown')
    }
}

$upButton.on('click', function(){
    window.scrollTo(0, 0);
})

// view buttons

let projectsBlock = $('.projects');
let rowButton = $('.row-view');
let tileButton = $('.tile-view');

rowButton.on('click', function(){
    projectsBlock.removeClass('tile');
    rowButton.addClass('active-button');
    tileButton.removeClass('active-button');
})

tileButton.on('click', function(){
    projectsBlock.addClass('tile');
    rowButton.removeClass('active-button');
    tileButton.addClass('active-button');
})