import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import Link from "next/link";

export default function page() {
  return (
    <div className="h-[40px] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex justify-around">
      <div className="flex gap-7 py-3 pl-12">
        <h3 className="text-slate-200 hover:text-blue-500 cursor-pointer transition duration-300">
          <Link
            href={
              "https://www.linkedin.com/in/muhammad-owais-902976322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            }
          >
            <ImLinkedin />
          </Link>
        </h3>
        <h3 className="text-slate-200 hover:text-blue-500 cursor-pointer transition duration-300">
          <Link href={"https://github.com/Owaisi123"}>
            <FaGithub />
          </Link>
        </h3>
        <h3 className="text-slate-200 hover:text-sky-500 cursor-pointer transition duration-300">
          <Link href={"https://x.com/M_Owaisi18"}>
            <FaXTwitter />
          </Link>
        </h3>
      </div>

      <div className="text-white text-sm">
        <Link href={"https://x.com/M_Owaisi18"}>
          <button className="mt-2 px-2 py-1 bg-green-500 hover:bg-green-600 text-slate-200 rounded text-xs">
            Let's Connect
          </button>
        </Link>
      </div>
    </div>
  );
}
