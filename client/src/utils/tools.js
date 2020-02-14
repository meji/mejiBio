import anime from 'animejs'

export const scrollAnchors = (e, respond = null) => {
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
    e.preventDefault();
    var targetID = e.target.getAttribute('data-href');
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);
    window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
    const checkIfDone = setInterval(function() {
        const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
            targetAnchor.tabIndex = '-1';
            targetAnchor.focus();
            window.history.pushState('', '', targetID);
            clearInterval(checkIfDone);
        }
    }, 500);
}

const split = {};
split.opacityIn = [0, 1];
split.opacityOut = [0, 1];
split.scaleIn = [0.2, 1];
split.scaleOut = 3;
split.durationIn = 800;
split.durationOut = 600;
split.delay = 500;
const animatione = anime.timeline({ //Removed {loop: true} inside
});

export const animateText = () => {
    animatione.add({
        targets: '.split .meji',
        opacity: 0,
        scale: split.scaleOut,
        duration: split.durationOut,
        easing: "easeInExpo",
        delay: 1000
    })
        .add({
            targets: '.split .letters-1',
            opacity: split.opacityIn,
            scale: split.scaleIn,
            duration: split.durationIn
        }).add({
        targets: '.split .letters-1',
        opacity: 0,
        scale: split.scaleOut,
        duration: split.durationOut,
        easing: "easeInExpo",
        delay: split.delay
    }).add({
        targets: '.split .letters-2',
        opacity: split.opacityIn,
        scale: split.scaleIn,
        duration: split.durationIn
    }).add({
        targets: '.split .letters-2',
        opacity: 0,
        scale: split.scaleOut,
        duration: split.durationOut,
        easing: "easeInExpo",
        delay: split.delay
    }).add({
        targets: '.split .letters-3',
        opacity: split.opacityIn,
        scale: split.scaleIn,
        duration: split.durationIn
    }).add({
        targets: '.split .letters-3',
        opacity: 0,
        scale: split.scaleOut,
        duration: split.durationOut,
        easing: "easeInExpo",
        delay: split.delay
    })
        .add({
            targets: '.split .meji',
            opacity: split.opacityIn,
            scale: split.scaleIn,
            duration: split.durationIn
        })
}






