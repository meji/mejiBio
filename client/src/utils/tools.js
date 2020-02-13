import anime from 'animejs'

export const scrollAnchors = (e, respond = null) => {
    console.log("ejectuando");
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

export const splitTextAnimation = (e) =>{
    // let textWrapper = window.document.querySelector('#split');
    // textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    // anime.timeline({loop: true})
    //     .add({
    //         targets: '.split .letter',
    //         translateY: [100,0],
    //         translateZ: 0,
    //         opacity: [0,1],
    //         easing: "easeOutExpo",
    //         duration: 1400,
    //         delay: (el, i) => 300 + 30 * i
    //     }).add({
    //     targets: '.split .letter',
    //     translateY: [0,-100],
    //     opacity: [1,0],
    //     easing: "easeInExpo",
    //     duration: 1200,
    //     delay: (el, i) => 100 + 30 * i
    // });
    window.document.querySelector('#meji').style.display = 'none';
    var split = {};
    split.opacityIn = [0,1];
    split.scaleIn = [0.2, 1];
    split.scaleOut = 3;
    split.durationIn = 800;
    split.durationOut = 600;
    split.delay = 500;

    anime.timeline({loop: true})
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
    }).add({
        targets: '.split',
        opacity: 0,
        duration: 500,
        delay: 500
    });
}

