// const days = {
//     sunday: 0,
//     monday: 1,
//     tuesday: 2,
//     wednesday: 3,
//     thursday: 4,
//     friday: 5,
//     saturday: 6
// }

// function CountDown(id, date) {
//     var countDownDate = new Date().setHours(12, 0, 0, 0)
//     var today = new Date();

//     var diff = date - today.getDay()

//     if (diff > 0) {
//         // Jun 25, 2022 12:00:00
//         // countDownDate = new Date(`tuesday 12:00:00`)
//         countDownDate = today.setDate(today.getDate() + diff)
//             // countDownDate = today + new Date(`tuesday 12:00:00`)
//     } else {
//         countDownDate = today.setDate(today.getDate() + diff + 7)
//     }
//     console.log(countDownDate);

//     // Update the count down every 1 second
//     var x = setInterval(function() {
//         // Get today's date and time
//         var now = new Date().getTime();

//         // Find the distance between now and the count down date
//         var distance = countDownDate - now;

//         // Time calculations for days, hours, minutes and seconds
//         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//         // Display the result in the element with id="demo"
//         document.getElementById(id).innerHTML = days + "<span class='c-name'> <strong>DAYS</strong></span> " + hours + "<span class='c-name'> <strong>HOURS</strong></span> " +
//             minutes + "<span class='c-name'> <strong>MINUTES</strong></span> " + seconds + "<span class='c-name'> <strong>SECONDS</strong></span> ";

//         // If the count down is finished, write some text
//         if (distance < 0) {
//             clearInterval(x);
//             document.getElementById(id).innerHTML = "EXPIRED";
//         }
//     }, 1000);
// }



function CountDown(id, day, time) {

    function update() {

        // Get current date and time
        var today = new Date();

        // Get number of days to Friday
        var dayNum = today.getDay();
        var daysToFri = day - (dayNum < day ? dayNum : dayNum - 7);

        // Get milliseconds to noon friday
        var fridayNoon = new Date(+today);
        fridayNoon.setDate(fridayNoon.getDate() + daysToFri);
        fridayNoon.setHours(
            time.split(':')[0],
            time.split(':')[1],
            time.split(':')[2],
            time.split(':')[3]
        );
        // Round up ms remaining so seconds remaining matches clock
        var ms = Math.ceil((fridayNoon - today) / 1000) * 1000;
        var d = ms / 8.64e7 | 0;
        var h = (ms % 8.64e7) / 3.6e6 | 0;
        var m = (ms % 3.6e6) / 6e4 | 0;
        var s = (ms % 6e4) / 1e3 | 0;

        // Display the result in the element with id="demo"
        document.getElementById(id).innerHTML = d + "<span class='c-name'> <strong>DAYS</strong></span> " + h + "<span class='c-name'> <strong>HOURS</strong></span> " +
            m + "<span class='c-name'> <strong>MINUTES</strong></span> " + s + "<span class='c-name'> <strong>SECONDS</strong></span> ";

    }

    // Run update just after next full second
    function runUpdate() {
        update();
        setTimeout(runUpdate, 1020 - (Date.now() % 1000));
    }

    runUpdate();

}