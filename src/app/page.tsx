'use client'

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState({});

  const NEXT_PUBLIC_OPENWEATHERMAP_API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + NEXT_PUBLIC_OPENWEATHERMAP_API_KEY + "&units=metric"

  const fetchWeather = (e) => {
    e.preventDefault();
    axios.get(url).then((response) => {
      setWeather(response.data);
      console.log(response.data);
    }).catch((error) => {
      setWeather("");
      console.log("Error")
    });
    setCity('');
  };

  return (
    <>
      <h1>{url}</h1>
      <form onSubmit={fetchWeather}>
        <div>
          <input
            onChange={(e) => setCity(e.target.value)}
            className='' type='text' placeholder='city name'
            value= {city}
          />
        </div>
        <button onClick={fetchWeather} className="bg-blue-300">
          search
        </button>
      </form>
        {
            weather.main ? <p>Hi</p> : <p>Bye</p>
        } 

      <Link href='/ssr'>
          ssr
      </Link>
    </>
  );
}
