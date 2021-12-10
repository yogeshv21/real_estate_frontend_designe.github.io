gsap.from("#sec1 #lft #contact #line", {
    y: 700,
    duration: 1,
    opacity: 0,
    height: 0,
    stagger: .1
})

gsap.from("#sec1 #lft #contact i", {
    y: 70,
    duration: 1,
    opacity: 0,
    stagger: .1,
    delay: .2
})

var rgtbtn = document.querySelector("#r").addEventListener("click", function(){
    document.querySelector("#rgt").style.backgroundImage = `url("2.jpg")`
})

var lftbtn = document.querySelector("#l").addEventListener("click", function(){
    document.querySelector("#rgt").style.backgroundImage = `url("1.jpg")`
})

var flag = 0;
document.querySelector("#blog").addEventListener("click", function(){
    if(flag === 0){
        document.querySelector("#dropdown").style.opacity = "1"
        document.querySelector("#dropdown2").style.opacity = "0"
        gsap.from("#dropdown",  {
            y: -50,
            opacity: 0,
            duration: .3,
        })
        flag = 1;
    }
    else{
        document.querySelector("#dropdown").style.opacity = "0"
        flag = 0;
    }
})

var flag = 0;
document.querySelector("#pages").addEventListener("click", function(){
    if(flag === 0){
        document.querySelector("#dropdown2").style.opacity = "1"
        document.querySelector("#dropdown").style.opacity = "0"
        gsap.from("#dropdown2",  {
            y: -50,
            opacity: 0,
            duration: .3,
        })
        flag = 1;
    }
    else{
        flag = 0;
        document.querySelector("#dropdown2").style.opacity = "0"
    }
})

var show1 = document.querySelector("#rgtbtn")
var show2 = document.querySelector("#lftbtn")

show1.addEventListener("click", function(){
    document.querySelector("#show2").style.left = "0%"
    document.querySelector("#show1").style.left = "-100%"
    document.querySelector("#rgtbtn").style.width = "25px"
    document.querySelector("#rgtbtn").style.backgroundColor = "#B09677"
    document.querySelector("#lftbtn").style.width = "10px"
    document.querySelector("#lftbtn").style.backgroundColor = " transparent"
})

show2.addEventListener("click", function(){
    document.querySelector("#show2").style.left = "100%"
    document.querySelector("#show1").style.left = "0%"
    document.querySelector("#lftbtn").style.width = "25px"
    document.querySelector("#lftbtn").style.backgroundColor = "#B09677"
    document.querySelector("#rgtbtn").style.width = "10px"
    document.querySelector("#rgtbtn").style.backgroundColor = " transparent"
})

var show1 = document.querySelector("#rgtbtn2")
var show2 = document.querySelector("#lftbtn2")

show1.addEventListener("click", function(){
    document.querySelector("#show4").style.left = "0%"
    document.querySelector("#show3").style.left = "-100%"
    document.querySelector("#rgtbtn2").style.width = "25px"
    document.querySelector("#rgtbtn2").style.backgroundColor = "#B09677"
    document.querySelector("#lftbtn2").style.width = "10px"
    document.querySelector("#lftbtn2").style.backgroundColor = " transparent"
})

show2.addEventListener("click", function(){
    document.querySelector("#show4").style.left = "100%"
    document.querySelector("#show3").style.left = "0%"
    document.querySelector("#lftbtn2").style.width = "25px"
    document.querySelector("#lftbtn2").style.backgroundColor = "#B09677"
    document.querySelector("#rgtbtn2").style.width = "10px"
    document.querySelector("#rgtbtn2").style.backgroundColor = " transparent"
})

var card1 =  document.querySelector("#b1")
var card2 =  document.querySelector("#b2")
var card3 =  document.querySelector("#b3")

card2.addEventListener("click", function(){
    document.querySelector("#r1").style.left = "-100%"
    document.querySelector("#r2").style.left = "0"
    document.querySelector("#r3").style.left = "100%"
    document.querySelector("#b2").style.backgroundColor = "#B09677"
    document.querySelector("#b3").style.backgroundColor = "transparent"
    document.querySelector("#b1").style.backgroundColor = "transparent"
    document.querySelector("#b2").style.borderColor = "transparent"
    document.querySelector("#b3").style.borderColor = "rgba(255, 255, 255, 0.733)"
    document.querySelector("#b1").style.borderColor = "rgba(255, 255, 255, 0.733)"
})

card3.addEventListener("click", function(){
    document.querySelector("#r2").style.left = "-100%"
    document.querySelector("#r3").style.left = "0"
    document.querySelector("#r1").style.left = "-200%"
    document.querySelector("#b2").style.backgroundColor = "transparent"
    document.querySelector("#b3").style.backgroundColor = "#B09677"
    document.querySelector("#b1").style.backgroundColor = "transparent"
    document.querySelector("#b3").style.borderColor = "transparent"
    document.querySelector("#b2").style.borderColor = "rgba(255, 255, 255, 0.733)"
    document.querySelector("#b1").style.borderColor = "rgba(255, 255, 255, 0.733)"
})

card1.addEventListener("click", function(){
    document.querySelector("#r1").style.left = "0"
    document.querySelector("#r2").style.left = "100%"
    document.querySelector("#r3").style.left = "200%"
    document.querySelector("#b2").style.backgroundColor = "transparent"
    document.querySelector("#b3").style.backgroundColor = "transparent"
    document.querySelector("#b1").style.backgroundColor = "#B09677"
    document.querySelector("#b1").style.borderColor = "transparent"
    document.querySelector("#b3").style.borderColor = "rgba(255, 255, 255, 0.733)"
    document.querySelector("#b2").style.borderColor = "rgba(255, 255, 255, 0.733)"
    
})

const boxes = gsap.utils.toArray('.fadin');

boxes.forEach((box, i) => {
  var anim = gsap.fromTo(box, {autoAlpha: 0, y: 200, opacity: 0}, {duration: 1.5, autoAlpha: 1, y: 0});
  ScrollTrigger.create({
    trigger: box,
    animation: anim,
    toggleActions: 'play none none none',
    once: true,
  });
});

// Redponsive part

var flag = 0;
document.querySelector("#menu").addEventListener("click", function(){
    if(flag === 0){
        document.querySelector("#menudiv").style.display = "initial"
        flag = 1;
        gsap.from("#menudiv", {
            height: 0,
            duration: .5
            
        })
        gsap.from("#menudiv a", {
            opacity: 0,
            stagger: .05
        })
    }
    else{
        document.querySelector("#menudiv").style.display = "none"
        flag = 0;
    }
})

window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if(top>210){
        document.querySelector("#nav").style.top = "-100%"
        document.querySelector("#nav2").style.top = "0%"
    }
    else{
        document.querySelector("#nav").style.top = "0%"
        document.querySelector("#nav2").style.top = "-100%"
    }
}
