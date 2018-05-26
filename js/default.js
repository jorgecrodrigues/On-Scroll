(function (window, j) {
    if (!j) {
        window.console.error("O jquery é necessário!");
    }

    // Scroll Reveal Options
    var options = {
        // 'bottom', 'left', 'top', 'right'
        origin: 'bottom',

        // Can be any valid CSS distance, e.g. '5rem', '10%', '20vw', etc.
        distance: '20px',

        // Time in milliseconds.
        duration: 0,
        delay: 0,

        // Starting angles in degrees, will transition from these values to 0 in all axes.
        rotate: {x: 0, y: 0, z: 0},

        // Starting opacity value, before transitioning to the computed opacity.
        opacity: 1,

        // Starting scale value, will transition from this value to 1
        scale: 1,

        // Accepts any valid CSS easing, e.g. 'ease', 'ease-in-out', 'linear', etc.
        easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',

        // `<html>` is the default reveal container. You can pass either:
        // DOM Node, e.g. document.querySelector('.fooContainer')
        // Selector, e.g. '.fooContainer'
        container: window.document.documentElement,

        // true/false to control reveal animations on mobile.
        mobile: true,

        // true:  reveals occur every time elements become visible
        // false: reveals occur once as elements become visible
        reset: true,

        // 'always' — delay for all reveal animations
        // 'once'   — delay only the first time reveals occur
        // 'onload' - delay only for animations triggered by first load
        useDelay: 'always',

        // Change when an element is considered in the viewport. The default value
        // of 0.20 means 20% of an element must be visible for its reveal to occur.
        viewFactor: 0.2,

        // Pixel values that alter the container boundaries.
        // e.g. Set `{ top: 48 }`, if you have a 48px tall fixed toolbar.
        // --
        // Visual Aid: https://scrollrevealjs.org/assets/viewoffset.png
        viewOffset: {top: 0, right: 0, bottom: 0, left: 0},

        // Callbacks that fire for each triggered element reveal, and reset.
        beforeReveal: function (domEl) {
            // j(domEl).addClass('on').removeClass('off');
        },
        beforeReset: function (domEl) {
            // j(domEl).addClass('off').removeClass('on');
        },

        // Callbacks that fire for each completed element reveal, and reset.
        afterReveal: function (domEl) {
            j(domEl).addClass('on').removeClass('off');

        },
        afterReset: function (domEl) {
            j(domEl).addClass('off').removeClass('on');
        }
    };

    // Scroll Reveal
    window.sr = ScrollReveal(options);

    j(window).on('load', function () {
        window.sr.reveal('.one');
        window.sr.reveal('.two');
        window.sr.reveal('.three');
        window.sr.reveal('.four');
    });

}(this, this.$ || this.jQuery || false));