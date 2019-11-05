// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
import tippy from 'tippy.js/dist/tippy-bundle.cjs';
require("@rails/activestorage").start()
require("channels")
require('jquery')
import 'bootstrap'
import './bootstrap_custom.js';
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
require("trix")
require("@rails/actiontext")
// require("@fortawesome/fontawesome-free/js/all")
import 'trix';
import 'trix/dist/trix.js';
require("tippy.js/dist/tippy-bundle.iife.min.js");
require("tippy.js/node_modules/popper.js/dist/popper.min.js")

import axios from 'axios';
require('axios');

// https://www.aktuar-hoffmann.de/_durchschnittsentgelt_rentenversicherung.html
axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
    console.log(res)
})

// import "tippy.js/dist/tippy-bundle.iife.min.js";
//
// import { Trix } from "trix";
// require("@rails/actiontext")

// tippy.tippy("h2", { content: "testen"});
require.context('../images', true);

let works;
// require('../javascript/javascript.js.erb');
require('../javascript/questions.js');
require('../javascript/tool.js');
require('../javascript/javascript.js');
require('../packs/rechner.js');



// import * as tool from '../javascript/tool.js';
// console.log(tool)
require('../images/images.js.erb');


import '../stylesheets/application.scss';

document.addEventListener("turbolinks:load", () => {
    console.log('Hello World from Webpacker');

    // this is the eventlistener for the slider rente_estimate
    document.querySelector("#slider_r_estimate").addEventListener("input", function() {document.querySelector("#rente_estimate_input").value = document.querySelector("#slider_r_estimate").value})
    // this is the eventlistener for the checkboxes
    document.querySelectorAll(".checkbox__label").forEach(function(element) { element.addEventListener("click", function() {console.log(this.children[0].checked= "true")}); })


    document.querySelector(".nav_container").setAttribute("show", "true");
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value; // Display the default slider value
    
    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
      output.innerHTML = this.value;
    }
});