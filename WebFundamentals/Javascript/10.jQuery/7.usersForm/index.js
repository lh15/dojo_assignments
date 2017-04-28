function addUser(){

}


$(document).ready(function(){

    
     $("form").submit(function(){
        return false;
     });

    $( "button" )
  .click(function() {
    var fnvalue = $( "#firstname" ).val();
    var lnvalue = $( "#lastname" ).val();
    var emailvalue = $( "#email" ).val();
    var phonevalue = $( "#phone" ).val();
    $( "table" ).append( "<tr id='row'> <td>" + fnvalue + "</td> <td>" + lnvalue + "</td> <td>" + emailvalue + "</td> <td>" + phonevalue + "</td> </tr>"  );
  });

});