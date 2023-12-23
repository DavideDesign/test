
window.addEventListener('mouseup', function (event) {
    var pol = document.getElementById('pol');
    if (event.target != pol && event.target.parentNode != pol) {
        pol.style.display = 'none';
    }
});



// PORTFOLIO GRID
let lazyImages = [...document.querySelectorAll(".lazy-image")];
let inAdvance = 300;

function lazyLoad() {
    lazyImages.forEach((image) => {
        if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
            image.src = image.dataset.src;
            image.onload = () => image.classList.add("loaded");
        }
    });

    // if all loaded removeEventListener
}

lazyLoad();

window.addEventListener("scroll", _.throttle(lazyLoad, 16));
window.addEventListener("resize", _.throttle(lazyLoad, 16));





// STUDI
let timelineInterval;
let currentEventIndex = 0;
let isOverlayOpen = false;

function changeEvent(direction) {
    if (!isOverlayOpen) {
        const eventsContainer = document.querySelector('.events');
        const eventWidth = document.querySelector('.event').offsetWidth;
        const events = document.querySelectorAll('.event');
        const eventsCount = events.length;

        currentEventIndex = (currentEventIndex + direction + eventsCount) % eventsCount;

        eventsContainer.style.transform = `translateX(${-currentEventIndex * (eventWidth + 20)}px)`;
    }
}

function startTimeline() {
    timelineInterval = setInterval(() => changeEvent(1), 7000);
}

function stopTimeline() {
    clearInterval(timelineInterval);
}

function openImage(event) {
    const overlay = document.querySelector('.overlay');
    const overlayImage = document.getElementById('overlay-image');
    const imageUrl = event.querySelector('img').src;

    overlayImage.src = imageUrl;
    overlay.style.display = 'flex';

    // Ferma la timeline quando si apre l'immagine
    stopTimeline();
    isOverlayOpen = true;
}

function closeImage() {
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'none';

    // Riprendi la timeline quando si chiude l'immagine
    startTimeline();
    isOverlayOpen = false;
}

// Inizia la timeline automaticamente all'avvio
startTimeline();










