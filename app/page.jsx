import { ListEdit } from "./components/ListEdit";
import { ServerList } from "./components/ServersList";
import '@/styles/globals.scss'

export default function Home() {
  return (
    <main className="w-full h-screen flex">
      <section className="w-[40%]">
        <ServerList />
      </section>
      <section className="w-full bg-gray-200">
        <ListEdit />
      </section>
    </main>
  );
}
