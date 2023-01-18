
const btn = document.querySelector('.track');
const image = document.querySelector('#img-logo');

btn.addEventListener('click', function () {
    const body = document.body;

    body.classList.toggle('light');

    if (body.classList.contains('light')) {
        /* imagem 1*/
        image.setAttribute('src', "assets/img/imagem-noite.jpg")
    } else {
        /* imagem 2*/
        image.setAttribute('src', "assets/img/imagem-dia.jpg")
    }
});