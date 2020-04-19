
let request = require('request');
let hour = 23;
let minute = 59;
let second = 55;
let zone = '';
let setTimer = null;

function getCities() {

    let url = 'http://worldtimeapi.org/api/timezone';

    request(url, function (error, response, body) {

        let cities = JSON.parse(body);
        let dropdown = document.getElementById('citiesDropdown');

        for (let city of cities) {

            let option = document.createElement('option');
            option.innerHTML = city;
            dropdown.appendChild(option);
        }
    });
}

function startTime() {

    incrementTime();
    evaluateTime();
    // formatHour();

    // let modifiedMinute = checkTime(minute);
    // let modifiedSecond = checkTime(second);
    let time = hour + ':' + minute + ':' + second;

    //------------------------------------

    document.getElementById('digitalClock').innerHTML = time;
    
    if (setTimer != null) {
        clearTimeout(setTimer);
    }

    setTimer = setTimeout(startTime, 1000);
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

//--------------------------------------------

function getCity() {

    let dropdown = document.getElementById('citiesDropdown');
    let city = dropdown.options[dropdown.selectedIndex].innerHTML;

    let url = 'http://worldtimeapi.org/api/timezone/' + city + '.txt';
    console.log(url);

    request(url, function (error, response, body) {

        let lines = body.split('\n');
        let datetime = lines[2];

        let startIndex = datetime.indexOf('T') + 1;
        let endIndex = datetime.indexOf('.');

        let time = datetime.slice(startIndex, endIndex).split(':');
        hour = Number(time[0]);
        minute = Number(time[1]);
        second = Number(time[2]);

        startTime();
    });
}