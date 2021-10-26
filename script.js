function toggleMenu(event) {
    //console.log(event.target.classList);
    //console.log(event.target);

    
    //event.target.classList.toggle("clicked");
    const randomText="Ezt vajon kiloggolja-e?";

    const fastLogResult=fastLog("Ezt a szöveget szeretném kiloggoltatni!");
    fastLog(randomText);
    console.log(fastLogResult);
    document.getElementById("about").classList.add("clicked-too");
}

function loadEvent() {
    //console.log('the page has loaded');

    document.getElementById("menu-btn").addEventListener("click", toggleMenu);
    //console.log(document.getElementById("menu-btn"));
}

function fastLog(text){
    console.log(text);
    return "muhahaha";
}

window.addEventListener("load", loadEvent);