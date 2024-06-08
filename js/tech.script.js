function showContent(buttonNumber) {
    const textContent = document.getElementById('text-content');
    const mainImage = document.getElementById('main-image');

    switch (buttonNumber) {
        case 1:
            textContent.innerHTML = `
                <span>LAUNCH VEHICLE</span>
                <h1>LAUNCH VEHICLE</h1>
                <p>
                    A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
                </p>
            `;
            mainImage.src = './techImges/image-launch-vehicle-portrait.jpg';
            mainImage.alt = 'Launch Vehicle';
            break;
        case 2:
            textContent.innerHTML = `
                <span>SPACEPORT</span>
                <h1>SPACEPORT</h1>
                <p>
                A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.
                </p>
            `;
            mainImage.src = './techImges/image-spaceport-portrait.jpg';
            mainImage.alt = 'Spaceport Img';
            break;
        case 3:
            textContent.innerHTML = `
                <span>SPACE CAPSULE</span>
                <h1>SPACE CAPSULE</h1>
                <p>
                    A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.
                </p>
            `;
            mainImage.src = './techImges/image-space-capsule-portrait.jpg';
            mainImage.alt = 'Space Capsule Img';
            break;
    }
}
