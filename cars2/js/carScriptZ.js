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
    $("#3").hover(function () {
        // over
        Enter1();
        Enter2();
        Enter3();

    }, function () {
        // out
        Exit1();
        Exit2();
        Exit3();
    }
    );
});

function Exit1() {
    $("#1").css("background-color", "rgb(165, 165, 165)");
    $("#1").html("<h2>Tier 1</h2>");
}

function Enter1() {
    $("#1").css("background-color", "white");
    $("#1").html("<h3>Payload increase to 3500 pounds with a towing capacity increase to 11,000 pounds. This is accomplished by putting a 2nd high octane motor within the chassis of the truck.</h3>");
}
function Exit2() {
    $("#2").css("background-color", "rgb(165, 165, 165)");
    $("#2").html("<h2>Tier 2</h2>");
}

function Enter2() {
    $("#2").css("background-color", "white");
    $("#2").html("<h3>Acceleration improves with the truck able to go 0 mph to 60 mph in 5 seconds with the use of carbon fiber steel in the chassis.</h3>");
}
function Exit3() {
    $("#3").css("background-color", "rgb(165, 165, 165)");
    $("#3").html("<h2>Tier 3</h2>");
}

function Enter3() {
    $("#3").css("background-color", "white");
    $("#3").html("<h3>Truck has semi-autonomous abilities that allow it to drive without control on highways and can park without control.</h3>");
}

