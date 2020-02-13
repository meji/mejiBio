$( document ).ready(function() {
    var text = $("#split");

    var split = new SplitText(text);

    function random(min, max){
        return (Math.random() * (max - min)) + min;
    }

    $(split.chars).each(function(i){
        TweenMax.from($(this), 2.5, {
            opacity: 0,
            x: random(-500, 500),
            y: random(-500, 500),
            z: random(-500, 500),
            scale: .2,
            delay: i * .01,
            yoyo: true,
            repeat: -1,
            repeatDelay: 10
        });
    });
});

