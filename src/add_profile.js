import '../node_modules/choices.js/public/assets/styles/choices.min.css';
import '../node_modules/suneditor/src/assets/css/suneditor.css';
import '../node_modules/suneditor/src/assets/css/suneditor-contents.css';
import "./font/stylesheet.css";
import './add_profile.scss';


import Choices from 'choices.js';
import { all } from './js/common.js';
import suneditor from 'suneditor';
import {align, horizontalRule} from 'suneditor/src/plugins';


all(document);

document.querySelectorAll("select").forEach(function(select){
    let choices = new Choices(select, {
        itemSelectText: '',
    });
});







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