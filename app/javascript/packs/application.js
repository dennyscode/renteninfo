import "core-js/stable";
import "regenerator-runtime/runtime";
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
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
import axios from 'axios';
import chartjs from 'chart.js/dist/Chart.bundle';
import chartjspluginannotation from '../javascript/vendors/chartjs-plugin-annotation';
// import aironnecalendar from 'aironne-calendar';
// require('./calendar')
// import './calendar'
require('axios');

console.log("JQuery Test");
console.log($("body"));

// https://www.aktuar-hoffmann.de/_durchschnittsentgelt_rentenversicherung.html
// axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
//     console.log(res)
// })

//
// import { Trix } from "trix";
// require("@rails/actiontext")

require.context('../images', true);
let works;
// require('../javascript/javascript.js.erb');
import '../javascript/questions';
import '../javascript/tool';
import '../javascript/javascript';
import '../packs/rechner';
import '../packs/direct_upload';
// import '../javascript/vendors/tippy';
import '../javascript/active_tooltips';
import '../packs/quizresults';



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
    document.querySelectorAll(".nav-slide__item")[x].addEventListener("click", function() {classname_toggler("nav-slide__item active", this)})
  }






    // Working on a function to set the footer (WIP)
    // let screen_check = function() {
    //   console.log("HAHA screen_check")
    //   let main_func = function() {
    //     let win = window,
    //       doc = document,
    //       body = document.body,
    //       html = document.documentElement,
    //       docElem = doc.documentElement,
    //       body_tag = doc.getElementsByTagName('body')[0],
    //       view_height = win.innerHeight|| docElem.clientHeight|| body_tag.clientHeight,
    //       body_height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight )
    //     console.log("View Height: " + view_height + "(" + window.innerHeight + " - " + docElem.clientHeight + " - " + body_tag.clientHeight + ")");
    //     console.log("document.body.clientHeight: " + document.body.clientHeight);
    //     console.log("window.innerHeight: " + window.innerHeight);
    //   };
    //   // main_func();
    //   if ( window.innerHeight > document.body.clientHeight ) {
    //     console.log("doesnt fit");
    //     document.querySelector("footer").style.position = "absolute"; //sticky
    //     document.querySelector("footer").style.bottom = "0";
    //   }
    //   else {
    //     console.log("footer is down anyways")
    //     document.querySelector("footer").style.position = "static";
    //   }
    // }
    // var x = window.matchMedia("(min-height: " + document.body.clientHeight + "px)");
    // screen_check();
    // x.addListener(screen_check) // Attach listener function on state changes
});
