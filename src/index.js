import '../node_modules/choices.js/public/assets/styles/choices.min.css';
import "./font/stylesheet.css";
import './index.scss';

import Glide from '@glidejs/glide';

new Glide('.glide', {
    perView: 5,
    gap: 43,
    perTouch: 1,
    breakpoints: {
        1126: {
            perView: 4
        },
        960: {
            perView: 3
        },
        710: {
            perView: 2
        },
        460: {
            perView: 1
        }
    }
}).mount();




import Choices from 'choices.js';

document.querySelectorAll("select").forEach(function(select){
    let choices = new Choices(select, {
        itemSelectText: '',
    });
});

const hamburger = document.querySelector(".hamburger");
const mobileMenuCont = document.querySelector(".mobile-menu-cont");
const searchBtn = document.querySelector(".mobile-search-btn");
const searchMobileCont = document.querySelector(".mobile-search");

hamburger.addEventListener("click", function(e){
    e.preventDefault();
    hamburger.classList.toggle("is-active");
    mobileMenuCont.classList.toggle("is-active");
});


searchBtn.addEventListener("click", function(e){
    e.preventDefault();
    searchBtn.classList.toggle("is-active");
    searchMobileCont.classList.toggle("is-active");
});

document.addEventListener("click", function(e){
    let menuClose = 1;
    let searchClose = 1;
    e.path.forEach(function(item){
        if(item && item.classList){
            if(item.classList.contains("hamburger") || item.classList.contains("mobile-menu-cont")){
                menuClose = 0;
            }
            if(item.classList.contains("mobile-search") || item.classList.contains("mobile-search-btn")){
                searchClose = 0;
            }
        }
    });
    if(menuClose == 1){
        hamburger.classList.remove("is-active");
        mobileMenuCont.classList.remove("is-active");
    }
    if(searchClose == 1){
        searchBtn.classList.remove("is-active");
        searchMobileCont.classList.remove("is-active");
    }
});



document.querySelectorAll(".menu-ul-in > a").forEach(function(a){
    a.addEventListener("click", function(e){
        e.preventDefault();
        a.parentElement.classList.toggle("is-active");
        a.nextElementSibling.classList.toggle("is-active");
    });
});


const showFilterBtn = document.querySelector(".show-filter-btn");
const chooseFilterCont = document.querySelector(".choose-filter-cont");

showFilterBtn.addEventListener("click", function(e){
    e.preventDefault();
    showFilterBtn.classList.toggle("is-active");
    chooseFilterCont.classList.toggle("is-active");
    if(showFilterBtn.classList.contains("is-active")){
        showFilterBtn.innerHTML = "Hide";
    }else{
        showFilterBtn.innerHTML = "Show";
    }
});