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
            console.log("forecastData", forecastData);
            // console.log("numForecast", numForecast)


            // var iconurl = "http://openweathermap.org/img/w/" + forecastData.list[0].weather[0].icon + ".png";
            
            // var card = $("<div>").addClass("card")
            // var cardTitle = $("<div>").addClass("card-title").text(forecastData.list[0].dt_txt)
            // var cardIcon = $("<img>").attr("src", iconurl)
            // var cardBody = $("<div>").addClass("card-body")
            // cardBody.append(cardIcon)
            // card.append(cardTitle, cardBody)
            // $("#jumbotron").append(card)



            for (var i=0; i<40; i+=8) {
                
                //console.log(parseInt((forecastData.list[i].main.temp - 273.15) * 1.80 + 32));

                var iconurl = "http://openweathermap.org/img/w/" + forecastData.list[i].weather[0].icon + ".png";
            


                var card = $("<div>").addClass("card")
                var cardTitle = $("<div>").addClass("card-title").text(forecastData.list[i].dt_txt)
                var cardIcon = $("<img>").attr("src", iconurl)
                var cardBody = $("<div>").addClass("card-body")
                cardBody.append(cardIcon)
                card.append(cardTitle, cardBody)
                $("#forecast").append(card)



                // $("#day1").find(".card-title").text(forecastData.list[1].dt_txt)
                // $("#day1").find(".card-title").text(forecastData.list[1].dt_txt)
                // $("#day1").find(".card-title").text(forecastData.list[1].dt_txt)

            }

            //var currentTempF = parseInt((forecastData.list[0].main.temp - 273.15) * 1.80 + 32);

            //console.log("temp", currentTempF)
        })
    }


    $("#search").on("click", function(){
        event.preventDefault()
        $("#forecast").empty();
        queryTerm = $("#cityName").val().toLowerCase().trim();
        var searches = JSON.parse(localStorage.getItem("cities")) || [];
        searches.push(queryTerm)
        localStorage.setItem("cities", JSON.stringify(searches))
        var newURL = queryURLBase + "&q=" + queryTerm


        addCities();

        runQuery(newURL);


    })

    function addCities() {
        var searches = JSON.parse(localStorage.getItem("cities")) || [];
        $("#cityList").empty();
        for (var i = 0; i < searches.length; i++) {
            var element = searches[i];
            var cityDiv = $("<div>").text(element).addClass("well").attr("data-city", element)

            $("#cityList").append(cityDiv)
            
        }
    }

addCities();
    // var cityInput = //source the city name from the result of the ajax query


    // var cities = []


//@2px.png

    









})