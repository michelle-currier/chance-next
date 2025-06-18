// import Link from "next/link";
import { TransitionLink } from "@/components/TransitionLink";
import { Luckiest_Guy } from "@next/font/google";
import Image from "next/image";

import logo from "./../images/LOGO-CHANCEINHELL-color.jpg";
import { luckiestGuy } from "@/app/utils/fonts";
export default function Navbar() {
  return (
    <div className="flex mx-auto justify-between max-w-7xl w-full border-pink-400 border-t-8 nav-bar">
      <div className={` ${luckiestGuy} nav-header p-6`}>
        <TransitionLink href="/">
          {/* <Image
            src={logo}
            alt="Chance in Hell Snoballs"
            className="w-full h-10 object-cover"
            loading="eager"
          /> */}
          CHANCE IN HELL SNOBALLS
        </TransitionLink>
      </div>
      <nav className="flex justify-end">
        <ul className="flex space-x-8 m-6">
          <li>
            <TransitionLink href="/">Home</TransitionLink>
          </li>
          <li>
            <TransitionLink href="#about">About</TransitionLink>
          </li>
          <li>
            <TransitionLink href="#contact">Contact</TransitionLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
