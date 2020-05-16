$(document).ready(function(){

    var appID = "18e8d96494d93797eebb6e49b5194ab5";
    
    var queryTerm = "";
    
    
    var queryURLBase = "https://api.openweathermap.org/data/2.5/forecast?appID=" + appID;
    


    function runQuery (numForecast, queryURL) {
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .done(function(forecastData){
            // console.log( "queryURL",queryURL);
            // console.log("forecastData", forecastData);
            // console.log("numForecast", numForecast)
        })
    }




    $(".btn").on("click", function(){
        event.preventDefault()

        queryTerm = $("#cityName").val().toLowerCase().trim();

        // console.log("queryTerm", queryTerm);

        var newURL = queryURLBase + "&q=" + queryTerm
        // console.log("newURL", newURL);

        runQuery(5, newURL);

        


    })


    // var cityInput = //source the city name from the result of the ajax query


    // var cities = []




    









})