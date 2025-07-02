import { useRef } from "react";
import { TransitionLink } from "@/components/TransitionLink";
import { Luckiest_Guy } from "@next/font/google";
import Image from "next/image";

import logo from "./../images/LOGO-CHANCEINHELL-color.jpg";
import { luckiestGuy } from "@/app/utils/fonts";
import { motion, useScroll, useTransform } from "framer-motion";
const scrollToSection = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth", // Enables smooth scrolling
      block: "start", // Scrolls to the top of the element
    });
  }
};

export default function Navbar() {
  return (
    <div className="w-full border-pink-400 border-t-8 nav-bar">
      <div className="max-w-7xl w-full flex justify-between mx-auto px-8">
        <div className={` ${luckiestGuy} nav-header py-6`}>
          <TransitionLink href="/">CHANCE IN HELL SNOBALLS</TransitionLink>
        </div>
        <nav className="flex justify-end">
          <ul className="flex space-x-8 m-6">
            <li>
              <TransitionLink href="#about">About</TransitionLink>
            </li>
            <li>
              <TransitionLink href="#contact">Contact</TransitionLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
