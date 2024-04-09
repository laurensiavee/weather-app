'use client'

import axios from "axios";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { redirect, usePathname, useRouter, useSearchParams } from "next/navigation";
import router from "next/router";
import { useState } from "react";
// import { useState } from "react";

// export async function getServerSideProps() {
//   const querySearch = "jakarta";

//   const NEXT_PUBLIC_OPENWEATHERMAP_API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY
//   const url = "https://api.openweathermap.org/data/2.5/weather?q=" + querySearch + "&appid=" + NEXT_PUBLIC_OPENWEATHERMAP_API_KEY + "&units=metric"

//   // Fetch data from external API
//   const res = await fetch(url)
//   const data = await res.json()
 
//   return { props: { data } }
// }


export default function Home() {
  const [city, setCity] = useState("")

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const preventDefault = f => e => {
    e.preventDefault()
    f(e)
  }
  const handleSubmit = preventDefault(() => {
    router.push({
      pathname: "weather/" + city,
    })
  })

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            onChange={(e) => setCity(e.target.value)}
            className='' type='text' placeholder='city name'
            value= {city}
          />
        </div>
        <Link  href={`/weather/${city}`}>
          search
        </Link>
      </form>
    </>
  );
}

