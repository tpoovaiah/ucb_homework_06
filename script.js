$(document).ready(function(){

    var appID = "18e8d96494d93797eebb6e49b5194ab5";
    var queryTerm = "";
    var queryURLBase = "https://api.openweathermap.org/data/2.5/forecast?appID=" + appID;
    

    function runQuery (numForecast, queryURL) {
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(forecastData){
            // console.log( "queryURL",queryURL);
            // console.log("forecastData", forecastData);
            // console.log("numForecast", numForecast)

            var tempF = parseInt((forecastData.list[0].main.temp - 273.15) * 1.80 + 32);

            console.log("temp", tempF)
        })
    }




    $(".btn").on("click", function(){
        event.preventDefault()

        queryTerm = $("#cityName").val().toLowerCase().trim();

        var newURL = queryURLBase + "&q=" + queryTerm

        runQuery(5, newURL);

        


    })


    // var cityInput = //source the city name from the result of the ajax query


    // var cities = []




    









})