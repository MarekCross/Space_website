const navbutton = document.querySelector('button.navbutton');
const nav = document.querySelector("nav");
const button = document.querySelector("i");

navbutton.addEventListener('click', function(){
    nav.classList.toggle('ukryj');
} ) 
navbutton.addEventListener('click', function(){
    button.classList.toggle('opacity05');
} ) 