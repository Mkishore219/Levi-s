
function lenisScroll() {

    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

}
lenisScroll()




function cursorMove() {

    var body = document.querySelector("body");
    var cursor = document.querySelector("#cursor");

    body.addEventListener("mousemove", function (e) {
        gsap.to(cursor, {
            x: e.x,
            y: e.y,
            duration: 1,
            ease: "back.out"
        })
    })

}
cursorMove()



function pageLoad() {

    const tl1 = gsap.timeline();
    tl1.from(" header .logo", {
        y:-40,
        duration: 1,
        stagger:0.3,
        opacity:0,
        ease: "power1.out"
    });
    tl1.from(" header li", {
        y:-20,
        duration: 0.5,
        stagger:0.3,
        opacity:0,
        ease: "power1.out"
    });
    tl1.from(" header .header-contact-btn", {
        y:-40,
        duration: 0.5,
        stagger:0.3,
        opacity:0,
        ease: "power1.out"
    });


    tl1.from(" #hero .hero-txt h2", {
        y:40,
        duration: 0.5,
        opacity:0
    },"0.9");
    tl1.from(" #hero .kinfe", {
        x:-40,
        duration: 0.5,
        opacity:0
    },"0.9");

    tl1.from(" #hero .knife-content h6", {
        x:40,
        duration: 0.5,
        opacity:0
    },"0.9");


}
// pageLoad()





