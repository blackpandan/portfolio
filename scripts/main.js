gsap.registerPlugin(ScrollTrigger)

gsap.from("#me", {duration:1, y: 70, opacity: 0.4})
gsap.from("#header", {duration:1, y: 70, opacity: 0.4})
gsap.from("#full", {duration: 0.5, x: 70, opacity: 0, delay: 1.5})
gsap.from("#name", {duration: 0.5, x: 50, opacity: 0, delay: 1.5})
gsap.from("#head", {duration: 0.5, x: -100, opacity: 0, delay: 1.5})
gsap.from("#scroll", {duration:1, y: -70, opacity: 0.4})

gsap.from("#contentBox", {duration: 1, skewZ: 20, skewY: -10, rotateX: 70, ease: 'rough'})
gsap.from("#scroll", {duration:1, y: -70, opacity: 0.4})

