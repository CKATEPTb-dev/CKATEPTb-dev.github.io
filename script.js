(function () {
    // initializing particles
    window.onload = function() {
        Particles.init({
            selector: '.background',
            color: '#FFFFFF',
            minDistance: 120,
            maxParticles: 100
        } );
    };

    document.querySelector("#bg-music").volume = 0.1; // Changing bg music sound so it will do not scare people
})();