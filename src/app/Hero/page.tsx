"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export default function page() {
  return (
    <div className="h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#4f46e5] flex items-center justify-center">
      <div className="text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm{" "}
          <span className="text-slate-300 font-serif font-semibold hover:text-green-700 cursor-pointer">
            <Typewriter
              words={["Owais"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
            />
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          A passionate{" "}
          <span className="text-green-400">Front-End Developer</span> crafting
          beautiful and functional web experiences.
        </p>
        <div className="flex justify-center gap-4">
          <Link href={"/About"}>
            <button className="px-6 py-2 bg-green-500 hover:bg-green-700 text-white rounded shadow-md transition duration-300">
              About Me
            </button>
          </Link>
          <Link href={"/Contact"}>
            <button className="px-6 py-2 border border-green-500 hover:bg-green-500 hover:text-white text-green-500 rounded shadow-md transition duration-300">
              Contact Me
            </button>
          </Link>
        </div>
        <div className="mt-8 flex justify-center gap-6">
          <Link
            href={
              "https://www.linkedin.com/in/muhammad-owais-902976322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            }
            className="text-gray-300 hover:text-white transition duration-300 text-2xl"
          >
            <ImLinkedin />
          </Link>
          <Link
            href={"https://github.com/Owaisi123"}
            className="text-gray-300 hover:text-white transition duration-300 text-2xl"
          >
            <FaGithub />
          </Link>
          <Link
            href={"https://x.com/M_Owaisi18"}
            className="text-gray-300 hover:text-white transition duration-300 text-2xl"
          >
            <FaXTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
}
