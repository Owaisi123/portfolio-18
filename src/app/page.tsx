import React from "react";
import Home from "@/app/Home/page";
import AboutMe1 from "@/app/AboutMe1/page";
import Contact1 from "@/app/Contact1/page";
import Projects1 from "@/app/Projects1/page";

export default function page() {
  return (
    <div>
      <Home />
      <AboutMe1 />
      <Projects1 />
      <Contact1 />
    </div>
  );
}
