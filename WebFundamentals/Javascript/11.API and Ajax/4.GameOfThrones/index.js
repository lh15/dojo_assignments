$(document).ready(function () {

    // Get the modal
    var modal = document.getElementById('myModal');
    
    // On img click, display modal, requst data form api, display data in modal
    $(document).on("click", "img", function () {

        modal.style.display = "block";

        var idNum = $(this).attr("id");

        $.get("https://anapioficeandfire.com/api/houses/" + idNum, function (res) {
            var html_str = "";
            html_str += "<h2>" + res.name + "</h2>";
            html_str += "<p class ='underline'>Words:</p>";
            html_str += "<p>" + res.words + "</p>";
            html_str += "<p class ='underline'>Titles:</p>";
            console.log(res);

            for(var i = 0; i < res.titles.length; i++) {
                            html_str += "<p>" + res.titles[i] + "</p>";
                        }

            $(".modal-content p").html(html_str);
        }, "json");
    });

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

});

