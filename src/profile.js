import "./font/stylesheet.css";
import './profile.scss';


import Glide from '@glidejs/glide';

new Glide('.glide', {
    perView: 5,
  	focusAt: 'center',
    type: 'carousel',
    gap: 0,
    perTouch: 1,
    breakpoints: {
        // 1126: {
        //     perView: 4
        // },
        // 960: {
        //     perView: 3
        // },
        // 710: {
        //     perView: 2
        // },
        // 460: {
        //     perView: 1
        // }
    }
}).mount();




import { all } from './js/common.js';
all(document);