'use client'

import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className={`${pathname === "/" ? "bg-seagull-500" : "bg-seagull-50"}`}>
      <Image src={Logo} alt="logo" width={150} height={50} />
    </nav>
  );
}
