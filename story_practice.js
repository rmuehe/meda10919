

// console.log("Hello, JS working");

// $(document).ready(function () {
//     console.log("Hello, jQuery working");
// });



// We have 2 divs, one is #choices and one #story
$(document).ready(function () {
   console.log("ready");

    $("#story").append("<p>Eduardo woke up.</p>");
    
    $("#choices").append("<button id='raining'>It is raining.</button>");

    $("#choices").append("<button id='sunny'>It is sunny</button>");

    $("#raining").click(function () {
       // console.log("click");

        $("#story").append("<p>Unfortunately it is pouring outside.</p>");

        // otherwise, the buttons won't disappear after clicked.
        $("#raining").remove();
        $("#sunny").remove();

        // Only makes the buttons appear after the others are removed

        $("#choices").append("<button id='umbrella'>Find the umbrella</button>");
    
        $("#choices").append("<button id='forget'>Forget about the umbrella</button>");

        $("#umbrella").click(function() {

            $("#story").append("<p>Eduardo took the umbrella. GG.</p>");

            // otherwise, the buttons won't disappear after clicked.
            $("#umbrella").remove();
            $("#forget").remove();

        });

        $("#forget").click(function() {

            $("#story").append("<p>Eduardo got wet. Wet-detecting aliens selected him for immortality through transubstantiation. GG.</p>");

            // otherwise, the buttons won't disappear after clicked.
            $("#umbrella").remove();
            $("#forget").remove();

        });
    });
});
 




