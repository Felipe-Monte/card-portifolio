
const btn = document.querySelector('.track');
const image = document.querySelector('#img-logo');

btn.addEventListener('click', function () {
    const body = document.body;

    body.classList.toggle('light');

    if (body.classList.contains('light')) {
        /* imagem 1*/ 
        image.setAttribute('src', "https://scontent.fnat2-1.fna.fbcdn.net/v/t1.6435-9/162941783_3846891952066251_5382214883082144678_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=iHDLT6UXY48AX-Iqid3&_nc_ht=scontent.fnat2-1.fna&oh=00_AfCf7RWZcckNurcs7eZOg2aOoAH4fsNhTiaZox6h9C7sIw&oe=63EFD651")
    } else {
        /* imagem 2*/
        image.setAttribute('src' , "https://scontent.fnat2-1.fna.fbcdn.net/v/t39.30808-6/288996109_5254744871280945_4167998911190783763_n.jpg?stp=dst-jpg_s851x315&_nc_cat=108&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeHi1y7i-3-Pfl_281Vhz2QaAiOKmK0AhusCI4qYrQCG635MFF6ApOLfSRXzqjQ87g17bi8QldkS4dxWmbIqbIuN&_nc_ohc=-zYICBsigpwAX9Qj1wK&_nc_ht=scontent.fnat2-1.fna&oh=00_AfBj7N7NY2XRjjYzF7nfUCuAUc9ebMviUg-M6BivCCgHMw&oe=63C77627")
    }
});