
let hour = 23;
let minute = 59;
let second = 55;
let zone = '';

function startTime() {

    // let date = new Date();

    // let militaryHour = date.getHours();
    // let hour = formatHour(militaryHour);
    // let minute = date.getMinutes();
    // let second = date.getSeconds();

    // minute = checkTime(minute);
    // second = checkTime(second);

    // let time = hour + ":" + minute + ":" + second;

    //----------------------------------

    incrementTime();
    evaluateTime();
    formatHour();

    let modifiedMinute = checkTime(minute);
    let modifiedSecond = checkTime(second);
    let time = hour + ':' + modifiedMinute + ':' + modifiedSecond + ' ' + zone;

    //------------------------------------

    document.getElementById('digitalClock').innerHTML = time;

    setTimeout(startTime, 1000);
}

function checkTime(number) {

    if (number < 10) { number = "0" + number };
    return number;
}

function formatHour() {

    if (hour > 13) {
        hour = hour - 12;
        zone = 'PM'
    } else if (hour == 13) {
        hour = 1;
        zone = 'PM';
    }
}

function incrementTime() {

    if (second < 60) {
        second = second + 1;
    }
}

function evaluateTime() {

    if (second == 60) {
        second = 0;
        minute = minute + 1;
    }

    if (minute == 60) {
        minute = 0;
        hour = hour + 1;
    }
}