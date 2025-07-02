import React from "react";
import Image from "next/image";

import logoRed from "@/images/logoRed.png";

const Footer = () => (
  <>
    <div className="footer mx-auto w-full">
      <div className="mx-auto max-w-7xl flex justify-between items-center px-6 py-4">
        <div className="w-1/2">
          <ul className="text-sm">
            <li>805 Louisa St. Suite 102, New Orleans, LA 70117</li>
            <li>
              <a
                href="https://www.instagram.com/chanceinhell_snoballs/"
                target="_blank"
                title="Instagram for Chance in Hell Snoballs"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              Built by{" "}
              <a
                href="https://design.mcurrier.com"
                target="_blank"
                className="text-teal-300 border-teal-500 border-b "
              >
                m.currier designs
              </a>
            </li>
            <li>©CHANCE IN HELL SNOBALLS 2025</li>
          </ul>
        </div>
        <div className="ml-auto items-end">
          <Image
            src={logoRed}
            alt="Chance in Hell Snoballs Logo"
            className="w-full h-20 object-contain"
            loading="eager"
          />
        </div>
      </div>
    </div>
  </>
);

export default Footer;
