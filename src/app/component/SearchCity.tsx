'use client'

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchCity() {
  const [city, setCity] = useState("")

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const preventDefault = f => e => {
    e.preventDefault()
    f(e)
  }
  const handleSubmit = preventDefault(() => {
    router.push("weather/" + city,)
  })


  return (
    <>
        <div className="bg-white text-center m-5 p-5 rounded-lg w-100 h-100">
        <form onSubmit={handleSubmit}>
            <div>
                <label className="block mb-2 text-lg text-gray-900">Search City</label>
                <input type="text" id="default-input" className="
                    bg-white border border-gray-300 text-gray-900 
                    focus:ring-pink-200 focus:border-pink-200
                    rounded-lg block w-full p-2.5 m-3"
                    onChange={(e) => setCity(e.target.value)}
                    placeholder='City Name'
                    value= {city}
                />
            </div>
            <Link  href={`/weather/${city}`} className="
                text-white bg-gradient-to-br from-pink-500 to-orange-400 
                hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
                focus:ring-pink-200 dark:focus:ring-pink-800 
                rounded-lg text-sm px-7 py-2.5 text-center m-2 text-md"
            >
                Search
            </Link>
        </form>
      </div>
    </>
  );
}
