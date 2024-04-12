import axios from "axios";
import Image from "next/image";

async function getWeather(context) {
  const { id } = context; 
  const querySearch = context

  const NEXT_PUBLIC_OPENWEATHERMAP_API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + querySearch + "&appid=" + NEXT_PUBLIC_OPENWEATHERMAP_API_KEY + "&units=metric"

  try {
    const res = await fetch(url)
    const data = await res.json()

    const main = data.main
    const icon = data.weather[0].icon

    console.log(data)
    // console.log(iconUrl)
    return { message: 'Success', props: main, icon: icon, name: data.name };
  } catch (error) {
    return { message: 'Error' };
  }
}


export default async function Home({params}) {
  const weather = await getWeather(params.id)
  let iconUrl = ""
  if (weather.message == 'Success'){
    iconUrl = "https://openweathermap.org/img/wn/" + weather.icon + "@2x.png"
  }
  
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[80%]">
          <div className="bg-white text-center content-center m-5 p-5 rounded-lg w-100 h-100 bg-opacity-20 border border-white">
            <div className="text-white text-4xl font-bold">
              {weather.name ? <p>{weather.name}</p> : <p>{params.id}</p>} 
            </div>
          </div>
        </div>
      </div>

      <div className="w-[20%]">
        <div className="bg-white text-center content-center m-5 p-5 rounded-lg w-100 h-100 bg-opacity-20 border border-white">
          <div className="flex justify-center">
            {weather.icon ? <img src={iconUrl} className="items-center"></img>: <p></p>} 
          </div>
          <div className="text-white text-4xl font-bold">
            {weather.props ? <p>{weather.props.temp} °C</p> : <p>Data Not Found</p>} 
          </div>
        </div>
      </div>

      <div className="w-[30%]">
        <div className="bg-white m-5 p-5 rounded-lg w-100 h-100 bg-opacity-20 border border-white">
          <div className="text-white text-xl">
            {weather.props ? 
              <div>
                <p>Temperature: {weather.props.temp} °C</p>
                <p>Feels Like: {weather.props.feels_like} °C</p>
                <p>Min Temperature: {weather.props.temp_min} °C</p>
                <p>Max Temperature: {weather.props.temp_max} °C</p>
                <p>Pressure: {weather.props.pressure}</p>
                <p>Humidity: {weather.props.humidity}</p>
              </div> 
              : <p></p>} 
          </div>
        </div>
      </div>
      
    </>
  );
}

