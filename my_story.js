

// console.log("Hello, JS working");

// $(document).ready(function () {
//     console.log("Hello, jQuery working");
// });



// We have 2 divs, one is #choices and one #story


$(document).ready(function () {
   console.log("ready");

   $("body").css({
       "width": "300",
       "background-color": "black",
       "color": "white",
    });
    $("#story").append("<p>You woke up. Another day. Is it? Are you the same person as yesterday? Who knows? Let's give up thinking. I'm hungry, etc." + 
    " Anyway, what kind of day are you having? while I nom nom nom. </p>");
    $("#choices").append("<button id='raining'>It is raining.</button>");
    $("#choices").append("<button id='sunny'>It is sunny</button>");
    
    $("#raining").click(function () {
       // console.log("click");
        $("#story").append("<p>While it isn't a hurricane, I hear rain in LA is a big deal. Somebody is going to die today. Because of 1mm of water on the ground. Hillarious." + 
        " So... what's the downsides to umbrellas anyway? They break all the time! So easy to lose! </p>");
        // otherwise, the buttons won't disappear after clicked.
        $("#raining").remove();
        $("#sunny").remove();
        // Only makes the buttons appear after the others are removed
        $("#choices").append("<button id='umbrella'>Take the umbrella</button>");
        $("#choices").append("<button id='forget'>Forget about the umbrella</button>");
        
        $("#umbrella").click(function() {
            $("#story").append("<p>You took the umbrella. Hydrochloric Acid intended for another target slides right off the umbrella onto an adjacent POI. You're tried for treason in an underground kangaroo court. Umbrellas have so many downsides!.</p>");
            // otherwise, the buttons won't disappear after clicked.
            $("#umbrella").remove();
            $("#forget").remove();
             // Only makes the buttons appear after the others are removed
             $("#choices").append("<button id='suicide'>Attempt Suicide</button>");
             $("#choices").append("<button id='stoic'>Become Stoic</button>");
  
             $("#suicide").click(function() {
                 $("#story").append("<p>Suicide is wrong. You no longer have this choice. Try thinking instead? Or counting if words are too complicated. You can count the days! The hours!</p>");
                 // otherwise, the buttons won't disappear after clicked.
                 $("#suicide").remove();
                 $("#stoic").remove();
             });
             
             $("#stoic").click(function() {
                $("#story").append("<p>Your stoicism gets so advanced that your out-of-body-experience has its own out-of-body-experience. Call it enlightenment. It ain't normal.</p>");
                // otherwise, the buttons won't disappear after clicked.
                $("#suicide").remove();
                $("#stoic").remove();
            });    

        });

        $("#forget").click(function() {
            $("#story").append("<p>You got wet. Wet-detecting aliens selected you for immortality through transubstantiation.</p>");
            // otherwise, the buttons won't disappear after clicked.
            $("#umbrella").remove();
            $("#forget").remove();
             // Only makes the buttons appear after the others are removed
             $("#choices").append("<button id='newverse'>Start a New Universe</button>");
             $("#choices").append("<button id='nineties'>Simulate the 90's</button>");
             
             $("#newverse").click(function() {
                 $("#story").append("<p>After a small infinity, this time/space universe is all-too predictable. The new universe inverts the inherence relation between objects and properties. Chaos ensues! Exciting!</p>");
                 // otherwise, the buttons won't disappear after clicked.
                 $("#newverse").remove();
                 $("#nineties").remove();
            });  
    
            $("#nineties").click(function() {
                $("#story").append("<p>Remember Seinfeld? Let's just put them in simulations indefinitely. Humans, haha.</p>");
                    // otherwise, the buttons won't disappear after clicked.
                $("#newverse").remove();
                $("#nineties").remove();
                

             });


        });
    });



    $("#sunny").click(function () {
        // console.log("click");
         $("#story").append("<p>The sun blazes.</p>");
         // otherwise, the buttons won't disappear after clicked.
         $("#raining").remove();
         $("#sunny").remove();
         // Only makes the buttons appear after the others are removed
         $("#choices").append("<button id='burqa'>Don a burqa</button>");
         $("#choices").append("<button id='sunscreen'>Slather Sunscreen</button>");
 
         $("#burqa").click(function() {
             $("#story").append("<p>You put on the burqa. No one laughs.</p>");
             // otherwise, the buttons won't disappear after clicked.
             $("#burqa").remove();
             $("#sunscreen").remove();
             // Only makes the buttons appear after the others are removed
            $("#choices").append("<button id='rob'>Rob a Bank</button>");
            $("#choices").append("<button id='govt'>Run for Govt</button>");
 
            $("#rob").click(function() {
                $("#story").append("<p>Passing the teller threatening post-it notes nets you 50k.</p>");
                // otherwise, the buttons won't disappear after clicked.
                $("#rob").remove();
                $("#govt").remove();
            });
           
           $("#govt").click(function() {
              $("#story").append("<p>You run on a campaign for the right to privacy. You lose all your free time by winning over everyone. Half the world wears burqas now, like em or not.</p>");
              // otherwise, the buttons won't disappear after clicked.
              $("#rob").remove();
              $("#govt").remove();
            }); 
         });
 
         $("#sunscreen").click(function() {
             $("#story").append("<p>This time the sunscreen accelerates cell senescence exponentially and magnifies the sun. Very unexpected result. Never happened before. What are the odds? ... Tempt fate and go outside?</p>");
             // otherwise, the buttons won't disappear after clicked.
             $("#burqa").remove();
             $("#sunscreen").remove();
                      // Only makes the buttons appear after the others are removed
            $("#choices").append("<button id='tempt'>Tempt Fate</button>");
            $("#choices").append("<button id='dont'>Don't</button>");
 
            $("#tempt").click(function() {
                $("#story").append("<p>You melt into a puddle at the doorstep. It happens so fast that there's no time for your life to flash before your eyes.</p>");
                // otherwise, the buttons won't disappear after clicked.
                $("#tempt").remove();
                $("#dont").remove();
            });
 
            $("#dont").click(function() {
                $("#story").append("<p>While paranoia saved You here, accounting for all the possibilities in every decision compounds into infinities of unsolveable problems. Not doing anything is a decision! You make friends with endless panic. </p>");
                // otherwise, the buttons won't disappear after clicked.
                $("#tempt").remove();
                $("#dont").remove();
            });

         });
     });
 

});
 




