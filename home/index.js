$(document).ready(function () {
    $("#1").hover(function () {
        // over
        Enter1();
    }, function () {
        // out
        Exit1();
    }
    );
    $("#2").hover(function () {
        // over
        Enter1();
        Enter2();

    }, function () {
        // out
        Exit1();
        Exit2();
    }
    );
});

function Exit1() {
    $("#1").css("background-color", "rgb(165, 165, 165)");
    $("#1").html("<h2>Tier 1</h2>");
}

function Enter1() {
    $("#1").css("background-color", "white");
    $("#1").html("<h3>Car has autonomous abilities only on highways where roads do not have sharp turns. Parking autonomous ability not available in Omnix S tier one upgrade.</h3>");
}
function Exit2() {
    $("#2").css("background-color", "rgb(165, 165, 165)");
    $("#2").html("<h2>Tier 2</h2>");
}

function Enter2() {
    $("#2").css("background-color", "white");
    $("#2").html("<h3>Parking autonomous ability is incorporated. Also, pre existing solar panels come with the Omnix A in order to provide an extra source of power to the Omnix A vehicle.</h3>");
}
function Exit3() {
    $("#3").css("background-color", "rgb(165, 165, 165)");
    $("#3").html("<h2>Tier 3</h2>");
}

function Enter3() {
    $("#3").css("background-color", "white");
    $("#3").html("<h3>Full autonomous abilities available in the Tier Three upgrade. Also, a second (smaller) electric motor is put in to increase the top speed to 330 mph.</h3>");
}

