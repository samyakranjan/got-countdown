// Set the date we're counting down to
var countDownDate = new Date(Date.UTC(2019, 03, 15, 03)).getTime();
var elementIDToUpdate = "countdownElement";

// Update the count down every 1 second
var x = setInterval(function() {

    var now = new Date().getTime();                 // Get todays date and time

    var distance = countDownDate - now;             // Find the distance between now and the count down date

    if (distance > 0)
    {
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById(elementIDToUpdate).innerHTML =
            days + "d\t" +
            hours + "h\t" +
            minutes + "m\t" +
            seconds + "s\t";
    }
    else
    {
        clearInterval(x);
        document.getElementById(elementIDToUpdate).innerHTML = "Now showing!";
    }

}, 1000);
