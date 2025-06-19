import React from "react";

const Footer = () => (
  <>
    <div className="footer mx-auto justify-between w-full">
      <div className="mx-auto max-w-7xl flex justify-between items-end px-6 py-4">
        <div className="w-1/2">
          <ul className="text-sm">
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
            <li>
              <a
                href="https://www.instagram.com/chanceinhell_snoballs/"
                target="_blank"
                title="Instagram for Chance in Hell Snoballs"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li></li>
          </ul>
        </div>
        <div className="w-1/2 text-right">
          <p className="text-sm">©CHANCE IN HELL SNOBALLS 2025</p>
        </div>
      </div>
    </div>
  </>
);

export default Footer;
