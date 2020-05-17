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
            console.log("forecastData", forecastData);


            var iconurl = "http://openweathermap.org/img/w/" + forecastData.list[0].weather[0].icon + ".png";
            

            $("#city").text(queryTerm);
            $("#icon").attr("src", iconurl)
            $("#temp").text("Temperature: " + parseInt((forecastData.list[0].main.temp - 273.15) * 1.80 + 32)+"°F");
            $("#humidity").text("Humidity: " + forecastData.list[0].main.humidity + "%")
            $("#windspeed").text("Windspeed: " + forecastData.list[0].wind.speed + " MPH");



            for (var i=0; i<40; i+=8) {
                
                var iconurl = "http://openweathermap.org/img/w/" + forecastData.list[i].weather[0].icon + ".png";
            
                var card = $("<div>").addClass("card text-white bg-info");
                var cardTitle = $("<div>").addClass("card-title").text(forecastData.list[i].dt_txt);
                var cardIcon = $("<img>").attr("src", iconurl);
                var cardBody = $("<div>").addClass("card-body");
                var temp = $("<p>").text("Temp: " + parseInt((forecastData.list[i].main.temp - 273.15) * 1.80 + 32)+"°F");
                var humidity = $("<p>").text("Humidity: " + forecastData.list[i].main.humidity + "%")
                
                cardBody.append(cardIcon, temp, humidity)
                card.append(cardTitle, cardBody)
                $("#forecast").append(card)

            }

        })
    }

    function addCities() {
        var searches = JSON.parse(localStorage.getItem("cities")) || [];
        $("#cityList").empty();
        for (var i = 0; i < searches.length; i++) {
            var element = searches[i];
            var cityDiv = $("<div>").text(element).addClass("well").attr("data-city", element)

            $("#cityList").append(cityDiv)
            
        }
    }


    $("#search").on("click", function(){
        event.preventDefault();
        $("#forecast").empty();
        queryTerm = $("#cityName").val().toLowerCase().trim();
        var searches = JSON.parse(localStorage.getItem("cities")) || [];
        searches.push(queryTerm)
        localStorage.setItem("cities", JSON.stringify(searches))
        var newURL = queryURLBase + "&q=" + queryTerm

        runQuery(newURL);
        addCities();

    })

    

addCities();
    


//@2px.png



})