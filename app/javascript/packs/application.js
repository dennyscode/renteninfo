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
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/dist/backdrop.css';
import axios from 'axios';
import chartjs from 'chart.js/dist/Chart.bundle';
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
require('../javascript/questions.js');
require('../javascript/tool.js');
require('../javascript/javascript.js');
require('../packs/rechner.js');
// require('../javascript/vendors/tippy');



// import * as tool from '../javascript/tool.js';
// console.log(tool)


import '../stylesheets/application.scss';
import { string } from 'postcss-selector-parser';

document.addEventListener("turbolinks:load", () => {
  tippy('#singleElement', {
    content: 'Tooltip',
  });
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



    // ChartJS

    var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
});
