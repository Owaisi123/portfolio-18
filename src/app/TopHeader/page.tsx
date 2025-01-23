import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="h-[70px] bg-black text-white flex justify-around items-center">
      <Link href={"/"}>
        <h1 className="text-3xl font-semibold font-serif text-slate-300">
          Owais
        </h1>
      </Link>
      <ul className="flex space-x-10">
        <Link className="text-slate-400 font-sans " href={"/"}>
          Home
        </Link>
        <Link className="text-slate-400 font-sans" href={"/About"}>
          About
        </Link>
        <Link className="text-slate-400 font-sans" href={"/Contact"}>
          Contact
        </Link>
        <Link className="text-slate-400 font-sans" href={"/Projects"}>
          Projects
        </Link>
      </ul>
      <Link href={"https://x.com/M_Owaisi18"}>
        <button className="border-2 border-green-200 py-1 px-3 text-slate-300 font-sans rounded-lg font-semibold">
          Follow me
        </button>{" "}
      </Link>
    </div>
  );
}
