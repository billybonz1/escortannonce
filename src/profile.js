import "./font/stylesheet.css";
import './profile.scss';


import Glide from '@glidejs/glide';

new Glide('.glide', {
    perView: 5,
    type: 'carousel',
    gap: 0,
    perTouch: 1,
    animationDuration: 150,
    breakpoints: {
        1200: {
            perView: 3,
        },
        // 960: {
        //     perView: 3
        // },
        600: {
            perView: 2
        },
        476: {
            perView: 1
        }
    }
}).mount();




import { all } from './js/common.js';
all(document);


function scrollToTop (duration) {
    // cancel if already on top
    if (document.scrollingElement.scrollTop === 0) return;

    const totalScrollDistance = document.scrollingElement.scrollTop;
    let scrollY = totalScrollDistance, oldTimestamp = null;

    function step (newTimestamp) {
        if (oldTimestamp !== null) {
            // if duration is 0 scrollY will be -Infinity
            scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / duration;
            if (scrollY <= 0) return document.scrollingElement.scrollTop = 0;
            document.scrollingElement.scrollTop = scrollY;
        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}

document.querySelector(".up-btn").addEventListener("click", function (e) {
	e.stopPropagation();
   	scrollToTop(800);   
});