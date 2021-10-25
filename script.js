function loadEvent() {
    console.log('the page has loaded');

    document.getElementById("menu-btn").addEventListener("click", clicked
    );
}

window.addEventListener("load", loadEvent);
function clicked(event) {
    console.log(event.target);
    event.target.classList.toggle("clicked");
}