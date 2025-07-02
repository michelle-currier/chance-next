import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { TransitionButton } from "@/components/TransitionButton";
import { quicksand, cherryBombOne, luckiestGuy } from "@/app/utils/fonts";
import Image from "next/image";

import snoball from "@/images/snoball.png";
import logo from "@/images/LOGO-CHANCEINHELL-color.jpg";
export default function Hero() {
  return (
    <section className="hero">
      <div className=" flex flex-wrap mx-auto max-w-7xl px-8">
        <div className="grow-1 w-1/3">
          <Image
            src={snoball}
            alt="Chance in Hell Snoballs"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        <div className="mx-auto p-8 flex flex-col w-2/3">
          <Image
            src={logo}
            alt="Chance in Hell Snoballs Logo"
            className="h-64 object-contain rounded-xl"
            loading="eager"
          />
          <h4
            className={` ${cherryBombOne} text-3xl font-bold my-4 text-teal-400 drop-shadow-sm`}
          >
            805 Louisa St. Suite 102, New Orleans, LA 70117
          </h4>

          <div className="flex flex-row flex-wrap">
            <TransitionButton href="/contact">
              <button className="mt-8 mr-8 bg-gradient-to-r from-pink-500 to-pink-400  text-white font-semibold py-2 px-4 rounded-full inline-flex items-center">
                Get in Touch
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
            </TransitionButton>
            <TransitionButton href="/about">
              <button className="mt-8 bg-gradient-to-r from-teal-700 to-teal-400  text-white font-semibold py-2 px-4 rounded-full inline-flex items-center">
                Check out our Merch
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
            </TransitionButton>
          </div>
        </div>
      </div>
    </section>
  );
}
