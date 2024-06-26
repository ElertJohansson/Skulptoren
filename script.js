/* Javascript Nedraknare */

/*Skriv javascriptkod för en nedräknare som räknar ned från dagens datum till 1 april 2024. Nedräkningen ska skrivas ut i elementet med id "nedraknare". Texten som skrivs ut ska vara "Skulptören", 
följt av xxx dagar, xxx timmar, xxx minuter, xxx sekunder. */

const nedraknareElement = document.getElementById("nedraknare-dagar");

// Datum för 21 juni 2024
const targetDate = new Date("2024-06-21T00:00:00");

// Funktion för att uppdatera nedräkningen
function updateCountdown() {
    const now = new Date();
    const timeDifference = targetDate - now;

    // Beräkna antal dagar, timmar, minuter och sekunder
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Skapa textsträngen för nedräkningen
    document.getElementById("nedraknare-dagar").textContent = days;
    document.getElementById("nedraknare-timmar").textContent = hours;
    document.getElementById("nedraknare-minuter").textContent = minutes;
    document.getElementById("nedraknare-sekunder").textContent = seconds;
    
}
if(nedraknareElement != null){
    // Uppdatera nedräkningen varje sekund
    setInterval(updateCountdown, 1000);
}


/* Javascript Nav */
const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDown_Menu = document.querySelector('.dropdown-menu')
if(toggleBtn != null){
    toggleBtn.onclick = function () {
    dropDown_Menu.classList.toggle('open')
    const isOpen = dropDown_Menu.classList.contains('open')

    toggleBtnIcon.classList = isOpen 
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
};
}


/* Java Biljetter */
const container = document.querySelector('.containerseats');
const seats = document.querySelectorAll('.row .seat:not(.occupied');
const count = document.getElementById('count');

//update total
function updateSelectedCount() {
    const selectedSeat = document.querySelectorAll('.row .seat.selected'); 
    
    const selectedSeatCount = selectedSeat.length;
    
    count.innerText = selectedSeatCount;
}
if(container != null){
    container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
    }
    updateSelectedCount();
});}


/* Java för scrolldown */
function scrollDown() {
    //window.scrollTo(0, 2500);
    location.href = "#";
    location.href = "#trailer";
}

