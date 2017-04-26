$(document).ready(function(){

    // $("#hide").click(function() {
    //     $(".hidden").hide( "slow", function() {
    //     });
    //     $( "#hide" ).text( "Now click to show" );
    // });

    //  $("#hide").click(function() {
    //     $(".hidden").show( "slow", function() {
    //         alert( "Animation complete." );
    //     });
    // });

    $(".hide").click(function(){
        $(".hidden").toggle();
        var hidden = true;
        if (hidden === true) {
            $( ".hide" ).html( "<p>show all</p>" );
            hidden = false;
        } else {
            $( ".hide" ).html( "<p>hide all</p>" );
            hidden = true;
        }
        
    });

    $( "#toggle" ).click(function() {
        $( ".toggle" ).toggle( "fast", function() {

        });
    });

    $( "#slideUp" ).click(function() {
        $( ".hidden" ).slideUp( "slow", function() {
            // Animation complete.
        });
    });
    // $(".show").click(function(){
    //     $(".hidden").show();
    // });

}); 