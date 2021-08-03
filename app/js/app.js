// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')
import {Swiper, Parallax, Mousewheel, Controller} from 'swiper'
Swiper.use([Parallax, Mousewheel, Controller])

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

	const swiperImg = new Swiper('.slider-img', {
		loop: false,
		speed: 2400,
		parallax: true		
	})
	
	const swipreText = new Swiper('.slider-text', {
		loop: false,
		speed: 2400,
		mousewheel: {
    	invert: false, // это нужно для того что бы при скроле колёсика мышки в низ у нас менялся слайд 
  	}
	})

	swiperImg.controller.control = swipreText
	swipreText.controller.control = swiperImg


})
