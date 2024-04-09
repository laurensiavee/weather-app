import axios from "axios";
import Image from "next/image";
// import { useState } from "react";

export async function getServerSideProps() {
  const querySearch = "jakarta";

  const NEXT_PUBLIC_OPENWEATHERMAP_API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + querySearch + "&appid=" + NEXT_PUBLIC_OPENWEATHERMAP_API_KEY + "&units=metric"

  // Fetch data from external API
  const res = await fetch(url)
  const data = await res.json()
 
  return { props: { data } }
}


export default function Home({data}) {
  return (
    <>
      <h1>{data.main.temp}</h1>
    </>
  );
}

