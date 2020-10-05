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


import { all } from './js/common.js';
all(document);