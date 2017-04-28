$(document).ready(function(){

    

    $( ".box" ).click(function() {
        $( this ).css('background', 'lightskyblue');

    });

    $( "button" ).click(function() {
        $( ".box" ).css('background', 'url("https://cdn0.iconfinder.com/data/icons/crime-protection-people/110/Ninja-512.png")');
        $( ".box" ).css('background-size', '200px 200px');
    });

}); 