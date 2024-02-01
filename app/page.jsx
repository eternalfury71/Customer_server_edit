import { getServerList } from "@/apis";
import { ServerList } from "./components/ServersList";
import '@/styles/globals.scss'

export default async function Home() {
  const listOfServers = await getServerList();
  console.log(listOfServers);

  return (
    <main className="w-full h-screen flex">
      <section className="w-[40%]">
        <ServerList listOfServers = {listOfServers}/>
      </section>
      <section className="w-full bg-gray-200 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-gray-400">Click on server to edit</h1>
      </section>
    </main>
  );
}
