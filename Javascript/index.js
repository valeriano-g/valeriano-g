document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
	const NavListLink = document.querySelector(".nav-list-link-responsive")

    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("show");
		
    });
});

//header
new TypeIt("#writing", { 
    lifeLike: false, 
    speed: 0 
})
	.type("I")
	.pause(264)
	.type("'")
	.pause(309)
	.type("M")
	.pause(185)
	.type(" ")
	.pause(145)
	.type("V")
	.pause(151)
	.type("A")
	.pause(159)
	.type("L")
	.pause(92)
	.type("E")
	.pause(174)
	.type("R")
	.pause(136)
	.type("I")
	.pause(193)
	.type("A")
	.pause(438)
	.type("N")
	.pause(162)
	.type("O")
	.pause(265)
	.delete(1)
	.pause(191)
	.delete(1)
	.pause(144)
	.delete(1)
	.pause(106)
	.delete(1)
	.pause(118)
	.delete(1)
	.pause(137)
	.delete(1)
	.pause(145)
	.delete(1)
	.pause(127)
	.delete(1)
	.pause(153)
	.delete(1)
	.pause(375)
	.type("W")
	.pause(167)
	.type("E")
	.pause(191)
	.type("B")
	.pause(1579)
	.type("_")
	.pause(1049)
	.type("D")
	.pause(126)
	.type("E")
	.pause(110)
	.type("V")
	.pause(144)
	.type("E")
	.pause(304)
	.type("L")
	.pause(194)
	.type("O")
	.pause(295)
	.type("P")
	.pause(90)
	.type("E")
	.pause(162)
	.type("R")
	.pause(998)
	.delete(1)
	.pause(191)
	.delete(1)
	.pause(150)
	.delete(1)
	.pause(155)
	.delete(1)
	.pause(359)
	.delete(1)
	.pause(120)
	.delete(1)
	.pause(163)
	.delete(1)
	.pause(150)
	.delete(1)
	.pause(161)
	.delete(1)
	.pause(151)
	.delete(1)
	.pause(446)
	.delete(1)
	.pause(155)
	.delete(1)
	.pause(285)
	.delete(1)
	.pause(656)
	.type("W")
	.pause(138)
	.type("E")
	.pause(200)
	.type("B")
	.pause(740)
	.type("_")
	.pause(341)
	.type("D")
	.pause(167)
	.type("E")
	.pause(250)
	.type("S")
	.pause(229)
	.type("I")
	.pause(217)
	.type("G")
	.pause(248)
	.type("N")
	.pause(88)
	.type("E")
	.pause(161)
	.type("R")
	.pause(551)
	.delete(1)
	.pause(127)
	.delete(1)
	.pause(171)
	.delete(1)
	.pause(83)
	.delete(1)
	.pause(132)
	.delete(1)
	.pause(143)
	.delete(1)
	.pause(129)
	.delete(1)
	.pause(127)
	.delete(1)
	.pause(161)
	.delete(1)
	.pause(168)
	.delete(1)
	.pause(680)
	.delete(1)
	.pause(349)
	.delete(1)
	.pause(98)
	.type("F")
	.pause(439)
	.type("R")
	.pause(143)
	.type("O")
	.pause(482)
	.type("N")
	.pause(113)
	.type("T")
	.pause(816)
	.type("_")
	.pause(927)
	.type("E")
	.pause(225)
	.type("D")
	.pause(719)
	.delete(1)
	.pause(199)
	.type("N")
	.pause(104)
	.type("D")
	.pause(1570)
	.type("_")
	.pause(317)
	.type("D")
	.pause(483)
	.type("E")
	.pause(87)
	.type("V")
	.pause(600)
	.type("E")
	.pause(88)
	.type("L")
	.pause(231)
	.type("O")
	.pause(211)
	.type("P")
	.pause(39)
	.type("E")
	.pause(169)
	.type("R")
	.pause(297)
	.delete(1)
	.pause(510)
	.delete(1)
	.pause(30)
	.delete(1)
	.pause(31)
	.delete(1)
	.pause(32)
	.delete(1)
	.pause(30)
	.delete(1)
	.pause(30)
	.delete(1)
	.pause(33)
	.delete(1)
	.pause(45)
	.delete(1)
	.pause(32)
	.delete(1)
	.pause(31)
	.delete(1)
	.pause(29)
	.delete(1)
	.pause(31)
	.delete(1)
	.pause(31)
	.delete(1)
	.pause(46)
	.delete(1)
	.pause(29)
	.delete(1)
	.pause(154)
	.delete(1)
	.pause(192)
	.delete(1)
	.pause(513)
	.delete(1)
	.pause(815)
	.type("V")
	.pause(87)
	.type("A")
	.pause(188)
	.type("L")
	.pause(127)
	.type("E")
	.pause(144)
	.type("R")
	.pause(122)
	.type("I")
	.pause(110)
	.type("A")
	.pause(168)
	.type("N")
	.pause(322)
	.type("O")
	.go();
//NAV

function cambiarColorNav() {
	const nav = document.querySelector("#nav-container");
	const section2 = document.querySelector("#about-me");
  
	window.addEventListener("scroll", () => {
	  let positionGeneral = window.scrollY;
	  let positionSec2 = section2.offsetTop;
  
	  if (positionGeneral >= positionSec2) {
		nav.classList.add("nav-div-2");
		
	  } else {
		nav.classList.remove("nav-div-2");
		nav.classList.remove("nav-li-2");
	  }
	});
  }
  
  cambiarColorNav();
  


  function Appearinfo() {
	const info = document.querySelectorAll(".text-display");
	const btns_info = document.querySelectorAll(".certification-btn");
  
	btns_info.forEach((btn_info, index) => {
	  btn_info.addEventListener("click", () => {
		info[index].style.display = "block";
		btn_info.classList.add("btn-display");

setTimeout(()=>{
info[index].style.display = "none";
btn_info.classList.remove("btn-display")

},120000)

	  });
	});
  }
  
  Appearinfo();

//switch language


const botonlanguage = document.querySelector("#switch")
botonlanguage.addEventListener("click",()=>{
	console.log(botonlanguage.checked)
	let id = botonlanguage.checked
if(id == true){
location.href="es/index.html"
	}
	else{
		location.href="/HTML/index.html"
	}
})
//

//video projects 
const project_video = document.querySelector("#video-project1")
const project_video2 = document.querySelector("#video-project2")

project_video.addEventListener("click",()=>{

	location.href = "https://valeriano-g.github.io/inteligencias-artificiales-blog/inteligencias%20artificiales.html#home-section"
})


project_video2.addEventListener("click",()=>{
	location.href = "https://valeriano-g.github.io/calculadora-javascript/HTML/index.html"
})
