document.addEventListener('DOMContentLoaded', () => {
    
    var condition="";
    var icon="";
    var country="";
    var temp="";

    var city_country=document.getElementById("city-country")
    var temp_=document.getElementById("temp")
    var condition_=document.getElementById("condition")
    

    const searchBtn = document.getElementById('search');

    searchBtn.addEventListener('click', function() {
        searchWeather(); 
    });
    
    function searchWeather(){
        var city=document.getElementById("city").value

        fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}`)
        .then(
            response=>response.json()
        )
        .then(data=>{
            condition=data.current.condition.text;
            icon=data.current.condition.icon;
            country=data.location.country;
            city=data.location.name;
            temp=data.current.temp_c;

            console.log(icon)

            city_country.innerText=`${city},${country}`;
            temp_.innerText=`${temp}°C`;
            condition_.innerHTML=`<p>${condition}</p><img alt="icon" src=${icon} />`;
        })
        .catch((e)=>{throw e})
    }
});