$(document).ready(function(){

    
     $("form").submit(function(){
        return false;
     });

    

    $(document).on( "click", "#addUser", function() {
          
        var fnvalue = $( "#firstname" ).val();
        var lnvalue = $( "#lastname" ).val();
        var fullName = fnvalue + " " + lnvalue;
        var dvalue = $( "#description" ).val();
        $( "#cards" ).append( "<div class='card'><h2 class='front'>" + fullName + "</h2><p class='front'>Click for Description</p><p class= 'back hidden'>" + dvalue + "</p><p class= 'back hidden'>Click for Name</p></div>" );
           
    });

     $(document).on( "click", ".card", function() {
        var fullName = $(this).children("h2").text();
        var dvalue = $(this).children("p:nth(1)").text();
        if($(this).children("p:nth(1)").hasClass( "back hidden" )){
            $(this).html("<h2 class='front hidden'>" + fullName + "</h2><p class='front hidden'>Click for Description</p><p class= 'back'>" + dvalue + "</p><p class= 'back'>Click for Name</p>")
        }else if($(this).children("h2").hasClass( "front hidden")){
            $(this).html("<h2 class='front'>" + fullName + "</h2><p class='front'>Click for Description</p><p class= 'back hidden'>" + dvalue + "</p><p class= 'back hidden'>Click for Name</p>")
        }
           
    });
   

});