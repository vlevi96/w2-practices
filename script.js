function toggleClicked(event) {
    document.getElementById("bodyID").classList.toggle("clicked");
}

function loadEvent() {
    console.log('the page has loaded');

    document.getElementById("menu-btn").addEventListener("click", toggleClicked); 
}
window.addEventListener("load", loadEvent);