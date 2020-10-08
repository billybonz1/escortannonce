import '../node_modules/choices.js/public/assets/styles/choices.min.css';
import "./font/stylesheet.css";
import './support.scss';

import { all } from './js/common.js';
all(document);

import Choices from 'choices.js';

document.querySelectorAll("select").forEach(function(select){
    let choices = new Choices(select, {
        itemSelectText: '',
    });
});


import MicroModal from 'micromodal';

MicroModal.init();