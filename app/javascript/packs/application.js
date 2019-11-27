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

import axios from 'axios';
require('axios');

// https://www.aktuar-hoffmann.de/_durchschnittsentgelt_rentenversicherung.html
// axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
//     console.log(res)
// })

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


import '../stylesheets/application.scss';
import { string } from 'postcss-selector-parser';

document.addEventListener("turbolinks:load", () => {
  console.log('Hello World from Webpacker');

  function classname_toggler(active_name, inactive_element) {
    // Inactive Element using: 'this'
    let inactive_name = inactive_element.getAttribute("class");
    console.log("Active_Name: " + active_name);
    console.log("Inactive_Name: " + inactive_name);
    let active_name_fix = "." + active_name.replace(" ", ".");
    console.log("Active_Name_Fix: " + active_name_fix);

    console.log(document.querySelector(active_name_fix));
    document.querySelector(active_name_fix).setAttribute("class", inactive_name);
    inactive_element.setAttribute("class", active_name);
  }

  for (let x=0;x<document.querySelectorAll(".nav-slide__item").length;x++) {
    document.querySelectorAll(".nav-slide__item")[x].addEventListener("click", function() {console.log("MouseOverStart -->");console.log(this); classname_toggler("nav-slide__item active", this)})
  }

  console.log("testing")
});
