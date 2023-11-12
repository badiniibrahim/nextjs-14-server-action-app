import Image from "next/image";
import CreateTodo from "./components/CreateTodo";
import { getTodos } from "@/lib/todos";
import TotoItemList from "./components/TotoItemList";

export default async function Home() {
  const { todos } = await getTodos();
  return (
    <main className="flex min-h-screen flex-col   p-24">
      <CreateTodo />
      <div className="mt-5 flex flex-col">
        <TotoItemList todos={todos!} />
      </div>
    </main>
  );
}
