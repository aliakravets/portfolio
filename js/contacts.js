let emailBlock = document.querySelector('.email');
let emailText = document.querySelector('.email-text');
let emailLink = document.querySelector('.email-link');

emailBlock.onmouseover = function(){
    emailLink.classList.add('shown')
    emailText.classList.add('hide')
}

emailBlock.onmouseout = function(){
    emailLink.classList.remove('shown');
    emailText.classList.remove('hide')
}

let telegramBlock = document.querySelector('.telegram-box');
let telegramText = document.querySelector('.telegram-text');
let telegramLink = document.querySelector('.telegram-link');

telegramBlock.onmouseover = function(){
    telegramLink.classList.add('shown')
    telegramText.classList.add('hide')
}

telegramBlock.onmouseout = function(){
    telegramLink.classList.remove('shown');
    telegramText.classList.remove('hide')
}

let instagramBlock = document.querySelector('.instagram-box');
let instagramText = document.querySelector('.instagram-text');
let instagramLink = document.querySelector('.instagram-link');

instagramBlock.onmouseover = function(){
    instagramLink.classList.add('shown')
    instagramText.classList.add('hide')
}

instagramBlock.onmouseout = function(){
    instagramLink.classList.remove('shown');
    instagramText.classList.remove('hide')
}

// theme button

let container = document.querySelector('.container');
let themeButtons = document.querySelectorAll('.theme-button');

for(let themeButton of themeButtons){
    themeButton.onclick = function(){
        container.classList.toggle('dark-theme');
    }
}