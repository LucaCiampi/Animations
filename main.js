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
                // observer.unobserve(entry.target)
            }
            else {
                entry.target.classList.remove('reveal--visible')
            }
        })
    }

    // document.documentElement.classList.add('reveal-loaded')
    const observer = new IntersectionObserver(handleIntersect, options)
    const targets = document.querySelectorAll('[class*="reveal-"]')
    targets.forEach(function (target) {
        observer.observe(target)
    })

})