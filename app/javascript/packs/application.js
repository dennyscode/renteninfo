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
import 'trix';
import 'trix/dist/trix.js';
import "trix/dist/trix.css";
// import { Trix } from "trix";
// require("@rails/actiontext")

require.context('../images', true);


let works;
require('../javascript/javascript.js.erb');
require('../javascript/questions.js');
require('../javascript/tool.js');
// import * as tool from '../javascript/tool.js';
// console.log(tool)
require('../images/images.js.erb');


import '../stylesheets/application.scss';

document.addEventListener("turbolinks:load", () => {
    console.log('Hello World from Webpacker');
});