// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.


require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

require('jquery')
require("gsap")

require("../javascripts/gasp.js")


// require ('swiper/swiper-bundle.js')
// // require ('swiper/swiper-bundle.min.js')

// import Swiper from 'swiper'
// window.Swiper = Swiper
// // require ('swiper.js')
// // require('../packs/swiper/swiper.js')

//  require ('../javascripts/spr.js')

import "cocoon";
require('../javascripts/homes.js')
require('../javascripts/scroll.js')
require('../javascripts/navi.js')

// require('pagepiling.js')
// require('pagepiling.js/dist/jquery.pagepiling.css')

// require("cocoon")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

const images = require.context('../images', true)
const imagePath = (name) => images(name, true)



import '@fortawesome/fontawesome-free/js/all'


import '../stylesheets/application.scss'


require("trix")
require("@rails/actiontext")

require('../javascripts/hover.js')

// require ('swiper/swiper-bundle.js')
// require ('swiper/swiper-bundle.min.js')