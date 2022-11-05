export async function fetchWeather(location,units){
    try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c9b9a296288028414c376b1a6900c51b&units=${units}`,{mode:"cors"})
    const weather = await response.json()
    return weather
    }catch(e){
        console.log('Error: City not Found')
    }
    
   
}


export async function getWeather(){
    const weather = await fetchWeather()
    console.log(weather);
    
}


