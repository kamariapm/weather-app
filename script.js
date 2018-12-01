
console.log("ready")
$("#weatherPic").hide()
$("#outputBackground").hide()

const showWeather = (data) =>{
    console.log(data)
    const current_weather = data.current.temp_f
    const condition = data.current.condition.text
    const locationCity =  data.location.name
    const locationRegion = data.location.region
    const locationCountry = data.location.country


    const weatherImage = data.current.condition.icon
    $("#weatherPic").attr('src', weatherImage)
    
    $("#weather-value").html(current_weather + "℉")
    $("#condition").html(condition)
    $("#locationCity").html(locationCity)
    $("#locationRegion").html(", " + locationRegion)
    $("#locationCountry").html(locationCountry)


}
const getWeather = (apiKey, city) =>{
    const weatherURL = "https://api.apixu.com/v1/current.json?key=" + apiKey + "&q=" + city 
   
    $.ajax({
        url: weatherURL,
        success: showWeather
    })
}

$( document ).ready(function() {
    const apiKey = "e46b26a480614314bcb150316181311"
    $("#get-weather").on("click", function(){
        let city = $("#city").val()
        getWeather(apiKey, city)
        M.toast({html: 'Have a great day!'})
        $("#weatherPic").show()
        $("#outputBackground").show()


    })

 
});

