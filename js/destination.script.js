function showContent(destination) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(destination).classList.add('active');

    const imageSrc = {
        moon: './destinationImges/image-moon.png',
        mars: './destinationImges/image-mars.png',
        europa: './destinationImges/image-europa.png',
        titan: './destinationImges/image-titan.png'
    };
    document.getElementById('spaceImage').src = imageSrc[destination];
}