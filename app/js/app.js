// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')
import {
  Swiper,
  Parallax,
  Mousewheel,
  Controller,
  Pagination,
  Scrollbar,
  Navigation,
} from "swiper";
Swiper.use([
  Parallax,
  Mousewheel,
  Controller,
  Pagination,
  Scrollbar,
  Navigation,
]);
import { gsap, Power2 } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  // Custom JS

  const swiperImg = new Swiper(".slider-img", {
    loop: false,
    speed: 2400,
    parallax: true,
		pagination: {
			el: ".slider-pagination-count .total",
			type: 'custom',
			renderCustom: function(swiper, current, total) {
				return `0${total}`
			}
		}
  });

  const swipreText = new Swiper(".slider-text", {
    loop: false,
    speed: 2400,
    mousewheel: {
      invert: false, // это нужно для того что бы при скроле колёсика мышки в низ у нас менялся слайд
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  swiperImg.controller.control = swipreText;
  swipreText.controller.control = swiperImg;

  // Gear

  let gear = document.querySelector(".slider-gear");
  swipreText.on("slideNextTransitionStart", function () {
    gsap.to(gear, 2.8, {
      rotation: "+=40",
      ease: Power2.easeOut,
    });
  });

  swipreText.on("slidePrevTransitionStart", function () {
    gsap.to(gear, 2.8, {
      rotation: "-=40",
      ease: Power2.easeOut,
    });
  });

	//Slider Change

	const curnum = document.querySelector('.slider-pagination-count .current'),
				pegcur = document.querySelector('.slider-pagination-current__num')


	swipreText.on('slideChange', function() {
		const ind = swipreText.realIndex + 1
		gsap.to(curnum, .2, {
			force3D: true,
			y: -10,
			opacity: 0,
			ease: Power2.easeInOut,
			onComplete: function() {
				gsap.to(curnum, .1, {
					force3D: true,
					y: 10
				})
				curnum.innerHTML = `0${ind}`
				pegcur.innerHTML = `0${ind}`
			}
		})
		gsap.to(curnum, .2, {
			force3D: true,
			y: 0,
			opacity: 1,
			ease: Power2.easeInOut,
			delay: .3
		})
	})			



});
