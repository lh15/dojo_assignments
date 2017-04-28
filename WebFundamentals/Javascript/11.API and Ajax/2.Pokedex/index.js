 $(document).ready(function(){

                for (var i = 1; i <= 151; i++) {
                    $("#container").append("<img id='" + i + "' src='http://pokeapi.co/media/img/" + i + ".png'>");  
                }


                 $(document).on("click", "img" ,function(){

                    var idNum = $(this).attr("id");

                    $.get("http://pokeapi.co/api/v1/pokemon/" + idNum + "/", function(res) {
                        var html_str = "";
                        html_str += "<h2>" + res.name + "</h2>";
                        html_str += "<img src='http://pokeapi.co/media/img/" + idNum + ".png'>";
                        html_str += "<h4>Types</h4>";
                        
                        for(var i = 0; i < res.types.length; i++) {
                            html_str += "<p>" + res.types[i].name + "</p>";
                        }
                        
                        html_str += "<h4>Height</h4>";
                        
                            html_str += "<p>" + res.height + "</p>";
                        
                        html_str += "<h4>Weight</h4>";
                        
                            html_str += "<p>" + res.weight + "</p>";
                        
                        $("#info" ).html(html_str);
                    }, "json");


                    });
                
            });

