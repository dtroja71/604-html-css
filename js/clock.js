function updateClock() {
    const clockContainer = document.querySelector('.clock');
    clockContainer.innerHTML = '<b>' + new Date().toLocaleTimeString('uk') + '</b>';
}

setInterval(updateClock, 1000);

// Self-destruct
// const delaySecs = 10;
// const startTime = new Date();

// function updateSelfDestruct() {
//     const selfDestructContainer = document.querySelector('.self-destruct');
//     const currentTime = new Date();
//     const elapsedTimeSecs = Math.round((currentTime - startTime) / 1000);
//     const leftSecs = delaySecs - elapsedTimeSecs;
//     selfDestructContainer.innerText = leftSecs;
//     if (leftSecs < 1) {
//         document.querySelector('body').innerHTML = '';
//     }
// }

// setInterval(updateSelfDestruct, 1000);
