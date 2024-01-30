import { getServerList } from "@/apis";
import { Modal } from "./components/EditingModal";
import { ServerList } from "./components/ServersList";
import '@/styles/globals.scss'

export default async function Home() {
  const listOfServers = await getServerList();

  return (
    <main className="w-full h-screen flex">
      <section className="w-[40%]">
        <ServerList listOfServers = {listOfServers}/>
      </section>
      <section className="w-full bg-gray-200">
        <Modal />
      </section>
    </main>
  );
}
