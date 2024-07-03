"use client";

import { useRouter } from "next/navigation";
import State from "./State";

export default function Home() {
  const router = useRouter();

  // const fun = () => {
  //   alert("As Salamu Alaikum");
  // };

  return (
    <main className="container mx-auto">
      {/* <h1 className="text-center text-5xl font-bold">Hablu Programmers</h1>
      <div className="flex justify-center mt-10">
        <button
          onClick={fun}
          className="btn bg-black text-white p-2 rounded-xl font-bold"
        >
          Click Here
        </button>
      </div> */}
      <State></State>
      <div className="flex justify-center mt-10 font-bold">
        <button
          type="button"
          className="bg-black text-white p-2 rounded-xl"
          onClick={() => router.push("/userList")}
        >
          User List Page
        </button>
      </div>
    </main>
  );
}
