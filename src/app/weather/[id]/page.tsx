import axios from "axios";
import Image from "next/image";

async function getWeather(context) {
  const { id } = context; 
  const querySearch = context

  const NEXT_PUBLIC_OPENWEATHERMAP_API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + querySearch + "&appid=" + NEXT_PUBLIC_OPENWEATHERMAP_API_KEY + "&units=metric"

  const res = await fetch(url)
  const data = await res.json()
 
  return { props: { data } }
}


export default async function Home({params}) {
    const weather = await getWeather(params.id)
  return (
    <>
      <div className="bg-blue-300">
        {
          weather.props.data.main ? <p>{weather.props.data.main.temp}</p> : <p>Bye</p>
        } 
      </div>
    </>
  );
}

