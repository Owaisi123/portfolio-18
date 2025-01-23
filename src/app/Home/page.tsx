import Link from "next/link";
import React from "react";
import Header from "@/app/Header/page";
import Hero from "@/app/Hero/page";
import TopHeader from "@/app/TopHeader/page";

export default function page() {
  return (
    <div>
      <Header />
      <TopHeader />
      <Hero />
    </div>
  );
}
