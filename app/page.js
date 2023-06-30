import { fetchIpAddress } from "@/utils"
import Link from "next/link";

export default async function Home() {
  const searchIp = await fetchIpAddress();



  return (
    <main className='mx-auto flex items-center justify-center h-screen'>
        <div className="border-2 p-4 border-slate-900">
             <h1 className="text-4xl text-red-700">IP Address : {searchIp.ip}</h1>
             <p className="text-3xl text-red-700 mb-5">Location : {searchIp.country}</p>
             <Link href="/ip" className="border-4 bg-cyan-500 text-white p-2 mt-3 flex justify-center text-xl">Get Your IP Address</Link>
        </div>
    </main>
  )
}
