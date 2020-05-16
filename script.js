$(document).ready(function(){

    var appID = "18e8d96494d93797eebb6e49b5194ab5";
    var queryTerm = "";
    var queryURLBase = "https://api.openweathermap.org/data/2.5/forecast?appID=" + appID;
    

    function runQuery (queryURL) {
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(forecastData){
            // console.log( "queryURL",queryURL);
            // console.log("forecastData", forecastData);
            // console.log("numForecast", numForecast)


            for (var i=0; i<6; i++) {
                
                console.log(parseInt((forecastData.list[i].main.temp - 273.15) * 1.80 + 32));

                $("#day1").find(".card-title").text(forecastData.list[1].dt_txt)
            }

            //var currentTempF = parseInt((forecastData.list[0].main.temp - 273.15) * 1.80 + 32);

            //console.log("temp", currentTempF)
        })
    }




    $("#search").on("click", function(){
        event.preventDefault()

        queryTerm = $("#cityName").val().toLowerCase().trim();

        var newURL = queryURLBase + "&q=" + queryTerm

        runQuery(newURL);

        


    })


    // var cityInput = //source the city name from the result of the ajax query


    // var cities = []




    









})