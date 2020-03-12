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
        Enter2();

    }, function () {
        // out
        Exit2();
    }
    );
});

function Exit1() {
    $("#1").css("background-color", "rgba(128, 128, 128, 0.377)");
    $("#1").css("color", "white");
    $("#1").html("<h2>Super Charger</h2>");
}

function Enter1() {
    $("#1").css("background-color", "white");
    $("#1").css("color", "black");
    $("#1").html("<p style='text-align: left'><ul><li>Charger costs $800 (minus tax).</li><li>Can charge all three Omnix models in 67 minutes.</li><li>Comes with a seperate expandable solar panel to allow for emergency charging while on the road.</li><li>Can be set up at any home or place of work, as long as two free outlets are available.</li><li>Once you purchase a super charger, a network of chargers all across the world will become accessible to you.</li></ul></p>");
}
function Exit2() {
    $("#2").css("background-color", "rgba(128, 128, 128, 0.377)");
    $("#2").css("color", "white");
    $("#2").html("<h2>Solar Panel</h2>");
}

function Enter2() {
    $("#2").css("background-color", "white");
    $("#2").css("color", "black");
    $("#2").html("<p style='text-align: left'><ul> <li>Solar panels cost $400 each (minus tax).</li><li>The solar panel can be mounted on any Omnix car. All Omnix cars come with pre existing mounts just for the solar panels.</li><li>Up to 3 solar panels can be placed on any car.</li><li>Each solar panel provides 9 extra hours of driving time.</li><li>Solar panels come with a lifetime warranty that is separate from the car itself.</li></ul></p>");
}
