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
        scale: 0.4,
        scrollTrigger: {
            trigger: ".container",
            pin: ".container",
            // pin: true,
            scrub: true
        }
    });

})