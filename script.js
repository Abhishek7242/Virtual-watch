setInterval(() => {


    let newDate = new Date()
    let hour = newDate.getHours()
    let hourForAMPM = newDate.getHours()
    let date = newDate.getDate()
    let month = newDate.getMonth()

    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let futureDayName = daysOfWeek[newDate.getDay()];

    document.getElementById('day').innerHTML = futureDayName

    if (date < 10) {
        document.getElementById('date').innerHTML = '0' + date + '/'

    }
    else {

        document.getElementById('date').innerHTML = date + '/'
    }
    let monthname = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'OCt', 'Nov', 'Dec']
    document.getElementById('month').innerHTML = monthname[month]

if (hour == 13 || hour > 24) {
    hour = 1

    document.getElementById('hour').innerHTML = '0' + hour + ':'

}
if (hour < 10) {
    document.getElementById('hour').innerHTML = '0' + hour + ':'

}
else {
    document.getElementById('hour').innerHTML = hour + ':'

}

if (hourForAMPM >= 12) {
    document.getElementById('am-pm').innerHTML = 'PM'
}
else {
    document.getElementById('am-pm').innerHTML = 'AM'

}
let min = newDate.getMinutes()

if (min < 10) {

    document.getElementById('min').innerHTML = '0' + min + ':'

}
else {
    document.getElementById('min').innerHTML = min + ':'

}
let sec = newDate.getSeconds()

if (sec < 10) {

    document.getElementById('sec').innerHTML = '0' + sec
}
else {
    document.getElementById('sec').innerHTML = sec

}
}, 100)


