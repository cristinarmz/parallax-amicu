window.addEventListener('scroll', function() {
    const layers = document.querySelectorAll('.layer');
    const word = document.getElementById('word');
    const scrollTop = window.pageYOffset;

    layers.forEach(layer => {
        const depth = layer.getAttribute('data-depth');
        const movement = -(scrollTop * depth);
        const translate3d = `translate3d(0, ${movement}px, 0)`;

        layer.style.transform = translate3d;
    });

    // Zoom effect for the word
    const wordMovement = scrollTop * 0.5; // Adjust movement speed as needed
    const wordScale = 1 + scrollTop / 1000; // Adjust the scaling factor as needed
    word.style.transform = `translate3d(0, ${wordMovement}px, 0) scale(${wordScale})`;
});
