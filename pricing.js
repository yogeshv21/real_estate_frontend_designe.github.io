window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if(top>210){
        document.querySelector("#nav").style.top = "-100%"
        document.querySelector("#nav2").style.top = "0%"
        document.querySelector("#menudiv").style.display = "none"
    }
    else{
        document.querySelector("#nav").style.top = "0%"
        document.querySelector("#nav2").style.top = "-100%"
    }
}

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

document.querySelector("#topsec").addEventListener("click", function(){
    document.querySelector("#dropdown2").style.opacity = "0"
    document.querySelector("#dropdown").style.opacity = "0"
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
  var anim = gsap.fromTo(box, {autoAlpha: 0, y: 100, opacity: 0}, {duration: 1.5, autoAlpha: 1, y: 0});
  ScrollTrigger.create({
    trigger: box,
    animation: anim,
    toggleActions: 'play none none none',
    once: true,
  });
});

var flag = 0;
document.querySelector("#menu").addEventListener("click", function(){
    if(flag === 0){
        document.querySelector("#menudiv").style.display = "initial"
        flag = 1;
        gsap.from("#menudiv", {
            width: 0,
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
