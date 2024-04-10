import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
const { id } = context.params; 
  const querySearch = {id}.id;

  const NEXT_PUBLIC_OPENWEATHERMAP_API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + querySearch + "&appid=" + NEXT_PUBLIC_OPENWEATHERMAP_API_KEY + "&units=metric"

  // Fetch data from external API
  const res = await fetch(url)
  const data = await res.json()
 
  return { props: { data } }
}


export default function Home({data}) {
    const router = useRouter() 
    const {id} = router.query

  return (
    <>
      <div className="bg-blue-900">
        <h1>{id}</h1>
        <h1>jakarta</h1>
        
        {
            data.main ? <p>{data.main.temp}</p> : <p>Bye</p>
        } 
      </div>
    </>
  );
}

