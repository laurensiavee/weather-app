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
