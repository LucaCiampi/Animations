document.addEventListener('DOMContentLoaded', function () {
    const ratio = 0.9
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: ratio
    }

    const handleIntersect = function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio > ratio) {
                entry.target.classList.add('reveal--visible')
                entry.target.classList.add('animation--active')
                // observer.unobserve(entry.target)
            }
            else {
                entry.target.classList.remove('reveal--visible')
                entry.target.classList.remove('animation--active')
            }
        })
    }

    // document.documentElement.classList.add('reveal-loaded')
    const observer = new IntersectionObserver(handleIntersect, options)
    const targets = document.querySelectorAll('[class*="reveal-"]')
    targets.forEach(function (target) {
        observer.observe(target)
    })
    const targetsWordUp = document.querySelectorAll('.textWrapper')
    targetsWordUp.forEach(function (target) {
        observer.observe(target)
    })

    // GSAP SCALE DOWN
    gsap.set(".scaleDown", { xPercent: -50, yPercent: -50 });
    gsap.to(".scaleDown", {
        scale: 0.2,
        scrollTrigger: {
            trigger: ".container",
            pin: ".container",
            // pin: true,
            scrub: true
        }
    });

    // ISA -------
    // Ex 1
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    gsap.utils.toArray(".isa-panel-1").forEach((panel, i) => {
        ScrollTrigger.create({
            trigger: panel,
            start: "top top",
            // end: "bottom center",
            pin: true,
            pinSpacing: false
        });
    });

    // const container1 = document.querySelector('.container-1')
    // ScrollTrigger.create({
    //     trigger: container1,
    //     snap: 1 / 4 // snap whole page to the closest section!
    // });

    // Ex 2
    let sections2 = gsap.utils.toArray(".isa-panel-2");

    gsap.to(sections2, {
        xPercent: -80 * (sections2.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".container-2",
            pin: true,
            scrub: true,
            // snap: 1 / (sections2.length - 1),
            // base vertical scrolling on how wide the container is so it feels more natural.
            end: "+=3500",
        }
    });

    // Ex 3
    ScrollTrigger.create({
        trigger: ".container-3",
        scoller: ".container-3",
        snap: ".container-3",
        pin: true
    })

    // Timeline
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    gsap.defaults({ ease: "none" });

    const pulses = gsap.timeline({
        defaults: {
            duration: 0.05,
            autoAlpha: 1,
            scale: 2,
            transformOrigin: 'center',
            ease: "elastic(2.5, 1)"
        }
    })
        .to(".ball02, .text01", {}, 0.2)
        .to(".ball03, .text02", {}, 0.33)
        .to(".ball04, .text03", {}, 0.46)

    const main = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
            trigger: "#svg",
            scrub: true,
            start: "top center",
            end: "bottom+=1000px"
        }
    })
        .to(".ball01", { duration: 0.01, autoAlpha: 1 })
        .from(".theLine", { drawSVG: 0 }, 0)
        .to(".ball01", {
            motionPath: {
                path: ".theLine",
                align: ".theLine",
                alignOrigin: [0.5, 0.5],
            }
        }, 0)
        .add(pulses, 0);


})