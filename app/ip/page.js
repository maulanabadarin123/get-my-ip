import React from "react";
import { fetchIpAddress } from "@/utils";

export default async function page() {
  const searchIp = await fetchIpAddress();

  return (
    <section className="mx-auto flex items-center justify-center h-screen">
      <div className="border-4 p-4 border-slate-900">
        <h1 className="text-4xl text-red-700">My IP : {searchIp.ip}</h1>
      </div>
    </section>
  );
}
