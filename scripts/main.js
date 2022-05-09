let nav = document.getElementById("mobNav");
let loader = document.getElementById("loader");
//gsap.registerPlugin(ScrollTrigger)


window.onresize = () => {
    console.log(window.innerWidth);

    if(window.innerWidth > 786) nav.style.display = "" ;
};

window.onload = () => {
    setTimeout(()=>{
        loader.parentNode.removeChild(loader);
        console.log("loader finished");
    }, 3000);
};



function handleNav() {
    // nav.style.display = "flex";
    nav.style.display != "" && nav.style.display !="none" ? nav.style.display = "" : nav.style.display = "flex";
}


// ANIMATIONS

gsap.from(["#head", "#me"], {delay: 3, duration: 1.2,opacity: 0, y: -150})
gsap.from(["#header", "#full", "#buttonWorks"], {delay: 3, duration: 1.2,opacity: 0, y: 150})



setTimeout(()=>{VANTA.BIRDS({
  el: "#body",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0x311847,
  color1: 0xff00d4,
  color2: 0xff0096,
  birdSize: 0.30,
  wingSpan: 3.00,
  speedLimit: 2.00,
  separation: 84.00,
  alignment: 92.00,
  cohesion: 55.00
})}, 3000)

// gsap.from("#me", {duration: 0.5, y: 70, opacity: 0.4})
// gsap.from("#header", {duration: 0.5, y: 70, opacity: 0.4})
// gsap.from("#full", {duration:  0.5, x: 70, opacity: 0, delay:  0.5})
// gsap.from("#name", {duration:  0.5, x: 50, opacity: 0, delay:  0.5})
// gsap.from("#head", {duration:  0.5, x: -100, opacity: 0, delay:  0.5})
// gsap.from("#scroll", {duration: 0.5, y: -70, opacity: 0.4})

// gsap.from("#contentBox", {scrollTrigger: {trigger: "#about", toggleActions: "restart none none none", start: "top 10%"},duration: 2, skewY: 20, skewY: -10, rotateX: 110, rotateY: 90, opacity: 0,ease: 'rough'})
// gsap.from("#aboutHeader", {scrollTrigger: {trigger: "#about", toggleActions: "restart none none none", start: "top 10%" },duration:2, x: 70, opacity: 0, rotateY: 90})


/*
    title
    desctiption
    langs
    url => live, code
*/

let works = [
    {
        title: "skar strokes",
        description: "",
        langs: ["scss", "Vue.js", "Nuxt"],
        url: {
            live: "https://skarstrokes.com",
            code: ""
        }

    }    
]