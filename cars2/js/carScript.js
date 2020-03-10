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
    $("#1").html("<h3>Car has semi-autonomous abilities that allow it to drive without control on highways and can park without control.</h3>");
}
function Exit2() {
    $("#2").css("background-color", "rgb(165, 165, 165)");
    $("#2").html("<h2>Tier 2</h2>");
}

function Enter2() {
    $("#2").css("background-color", "white");
    $("#2").html("<h3>Solar charging abilities. There is a solar panel that is attached to the roof of the car. On a sunny day, this solar panel can increase the range by up to 300 miles.</h3>");
}
function Exit3() {
    $("#3").css("background-color", "rgb(165, 165, 165)");
    $("#3").html("<h2>Tier 3</h2>");
}

function Enter3() {
    $("#3").css("background-color", "white");
    $("#3").html("<h3>A 2nd motor is put into the car to increase the top speed to 300 mph and the acceleration allows the car to go from 0 mph to 60 mph in 3.9 seconds.</h3>");
}

