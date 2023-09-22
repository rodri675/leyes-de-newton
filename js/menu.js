$(document).ready(function () {
    $('#desplegable').click(function () {
        $('.menu').slideToggle();

        var icono = $('#barra');

        icono.css({ transform: 'rotate(360deg)', transition: 'transform 300ms ease-in-out' });

        setTimeout(function () {
            if (icono.attr('src') === 'img/mas.webp') {
                icono.attr('src', 'img/menos.webp');
            } else {
                icono.attr('src', 'img/mas.webp');
            }
        }, 150);

        setTimeout(function () {
            icono.css({ transform: 'rotate(0deg)', transition: 'transform 0ms' });
        }, 300);
    });
});
