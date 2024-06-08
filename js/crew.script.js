function changeContent(crewMember) {
    const desRol = document.getElementById("des-rol");
    const nameElement = document.getElementById("name");
    const descriptionElement = document.getElementById("description");
    const imageElement = document.getElementById("image");
  
    if (crewMember === "douglas") {
      desRol.textContent = `COMMANDER`;
      nameElement.textContent = "DOUGLAS HURLEY";
      descriptionElement.textContent =
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
      imageElement.src = "./crewImges/image-douglas-hurley.png";
    } else if (crewMember === "other1") {
      desRol.textContent = "MISSION SPECIALIST";
      nameElement.textContent = "MARK SHUTTLEWORTH";
      descriptionElement.textContent =
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
      imageElement.src = "./crewImges/image-mark-shuttleworth.png";
    } else if (crewMember === "other2") {
      desRol.textContent = "PILOT";
      nameElement.textContent = "VICTOR GLOVER";
      descriptionElement.textContent =
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
      imageElement.src = "./crewImges/image-victor-glover.png";
    } else if (crewMember === "other3") {
      desRol.textContent = "FLIGHT ENGINEER";
      nameElement.textContent = "ANOUSHEH ANSARI";
      descriptionElement.textContent =
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
      imageElement.src = "./crewImges/image-anousheh-ansari.png";
    }
  }
  