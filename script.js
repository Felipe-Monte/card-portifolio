
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
        image.setAttribute('src', "https://scontent.fnat2-1.fna.fbcdn.net/v/t1.6435-9/117169999_3217272918361494_3574846271905472293_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=84a396&_nc_ohc=Gfi9uOppTw8AX8Eigeb&_nc_ht=scontent.fnat2-1.fna&oh=00_AfAQyojPHeXj87AteG8t8HguQ-C2k7K2lb8YlkAYZU_-QQ&oe=63EFF446")
    }
});