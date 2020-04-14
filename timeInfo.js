let body = "abbreviation: BST" + "\n" +
    "client_ip: 24.192.130.202" + "\n" +
    "datetime: 2020/04/14T00:04:48.085177+01:00" + "\n" +
    "day_of_week: 2" + "\n" +
    "day_of_year: 104" + "\n" +
    "dst: true" + "\n" +
    "dst_from: 2020-03-29T01:00:00+00:00" + "\n" +
    "dst_offset: 3600" + "\n" +
    "dst_until: 2020-10-25T01:00:00+00:00" + "\n" +
    "raw_offset: 0" + "\n" +
    "timezone: Europe/London" + "\n" +
    "unixtime: 1586819088" + "\n" +
    "utc_datetime: 2020-04-13T23:04:48.085177+00:00" + "\n" +
    "utc_offset: +01:00" + "\n" +
    "week_number: 16" + "\n";

// -----------------------------------

let lines = body.split('\n');
let datetime = lines[2];


// -----------------------------------
// APPROACH 3

let dateTimeValue = datetime.substring(datetime.indexOf(" ") + 1, datetime.indexOf('+'));
let date = new Date(dateTimeValue);
let hour3 = date.getHours();
let minutes3 = date.getMinutes();
let seconds3 = date.getSeconds();


// -----------------------------------
// APPROACH 2

let startIndex = datetime.indexOf('T') + 1;
let endIndex = datetime.indexOf('.');
let time = datetime.substring(startIndex, endIndex);
let timeValues = time.split(':');
let hour2 = timeValues[0];
let minutes2 = timeValues[1];
let seconds2 = timeValues[2];


// // // -----------------------------------
// // APPROACH 1

let characters = datetime.split('');
let hour1 = characters[21] + characters[22];
let minutes1 = characters[24] + characters[25];
let seconds1 = characters[27] + characters[28];
