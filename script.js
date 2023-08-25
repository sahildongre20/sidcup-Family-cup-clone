var cursor = document.querySelector("#cursor");
var cursorblur= document.querySelector("#cursor-blur") 
document.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x+30+"px"
    cursor.style.top = dets.y+"px"
    cursorblur.style.left = dets.x -200+"px"
    cursorblur.style.top = dets.y -200+"px"

})


var navh4 = document.querySelectorAll("#nav h4")
navh4.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        cursor.style.scale=3
        cursor.style.border = "1px solid white"
        cursor.style.backgroundColor = "transparent"
        
    })
    elem.addEventListener("mouseleave",function(){
        cursor.style.scale=1
        cursor.style.border = "0px solid #95C11E"
        cursor.style.backgroundColor = "#95C11E"  
    })
})

gsap.to("#nav",{
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -12",
        scrub:1
        
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -20%",
        end:"top -70%",
        scrub: 2
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller: "body",
        start: "top 70%",
        end: "65%",
        scrub:1
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller: "body",
        // markers:true,
        start: "top 90%",
        end: "15%",
        scrub:1
    }
})

gsap.from("#colon1",{
    x:-70,
    y:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller: "body",
        // markers:true,
        start: "top 55%",
        end: "45%",
        scrub:3
    }
})
gsap.from("#colon2",{
    x:70,
    y:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller: "body",
        // markers:true,
        start: "top 55%",
        end: "45%",
        scrub:3
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller: "body",
        // markers:true,
        start: "top 85%",
        end: " 70%",
        scrub:1
    }
})



