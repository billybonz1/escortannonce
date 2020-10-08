import '../node_modules/choices.js/public/assets/styles/choices.min.css';
import "./font/stylesheet.css";
import './add_profile.scss';

import Choices from 'choices.js';

document.querySelectorAll("select").forEach(function(select){
    let choices = new Choices(select, {
        itemSelectText: '',
    });
});


import { all } from './js/common.js';
all(document);


import '../node_modules/suneditor/dist/css/suneditor.min.css';
import suneditor from 'suneditor';

import {align, horizontalRule} from 'suneditor/src/plugins';

// all plugins
const initEditor = suneditor.init({
    height: 200,
    buttonList: [
        ['undo', 'redo', 'removeFormat', 'bold', 'underline', 'italic', 'strike'],
        [align, horizontalRule, 'preview'],
    ]
});

initEditor.create("editor1");
initEditor.create("editor2");


document.querySelectorAll(".profile-input-btn").forEach(function(item){
	item.addEventListener("click", function(e){
		e.preventDefault();
		item.parentElement.querySelectorAll(".profile-input-btn").forEach(function(item1){
			item1.classList.remove("checked");
		});
		item.classList.add("checked");
	});
});