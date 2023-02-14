let weather = {
    "apiKey" : "d0cdedf311595e6787a701b38eb9b472",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        + "&unit=metric&sappid=" 
        + this.apiKey)
        .then((response) => response.json()).then((data)=>console.log(data);)
    }
    displayWeather: function(data){
        const { name } = data;
        

    }
}