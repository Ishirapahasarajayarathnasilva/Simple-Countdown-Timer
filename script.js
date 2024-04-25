const dayEl = document.getElementById('day');
const hourEl = document.getElementById('hour');
const minEl = document.getElementById('min');
const secEl = document.getElementById('sec');



const newYears  = '01 Jan 2025';

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate =  new Date();

    const totalSeconds= (newYearsDate - currentDate)/ 1000;
    
    const days    = Math.floor (totalSeconds/3600/24);
    const hours   = Math.floor (totalSeconds/3600) % 24;
    const mins = Math.floor (totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    dayEl.innerHTML = days;
    hourEl.innerHTML = hours;
    minEl.innerHTML =  mins;
    secEl.innerHTML = seconds;
}



countdown();

setInterval(countdown, 1000)

const snowflakes = document.querySelectorAll('.snowflake');

snowflakes.forEach((snowflake, index) => {
    const maxLeftOffset = 100;
    const minLeftOffset = -100;
    const leftOffset = Math.floor(Math.random() * (maxLeftOffset - minLeftOffset + 1)) + minLeftOffset;
    snowflake.style.setProperty('--left-offset', `${leftOffset}%`);
});
