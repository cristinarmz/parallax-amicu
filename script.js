window.addEventListener('scroll', function() {
    const layers = document.querySelectorAll('.layer');
    const scrollTop = window.pageYOffset;

    layers.forEach(layer => {
        const depth = layer.getAttribute('data-depth');
        const movement = -(scrollTop * depth);
        const translate3d = `translate3d(0, ${movement}px, 0)`;

        layer.style.transform = translate3d;
    });
});
