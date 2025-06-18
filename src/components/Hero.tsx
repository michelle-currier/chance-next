import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { TransitionButton } from "@/components/TransitionButton";
import { luckiestGuy } from "@/app/utils/fonts";
import Image from "next/image";

import snoball from "./../images/snoball.png";
export default function Hero() {
  return (
    <section className="hero flex">
      <div className="grow-1">
        <Image
          src={snoball}
          alt="Chance in Hell Snoballs"
          className="w-full h-100 object-cover"
          loading="eager"
        />
      </div>

      <div className="max-w-5xl mx-auto p-16 flex flex-col">
        <h1
          className={` ${luckiestGuy} text-5xl font-bold drop-shadow-sm text-white`}
        >
          Chance in Hell Snoballs
        </h1>
        <h2 className="text-3xl font-bold my-4 text-teal-800">
          805 Louisa St. Suite 102, New Orleans, LA 70117
        </h2>

        <div className="flex flex-row">
          <TransitionButton href="/contact">
            <button className="mt-8 bg-gradient-to-r from-pink-500 to-pink-400  text-white font-semibold py-2 px-4 rounded-full inline-flex items-center">
              Get in Touch
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
          </TransitionButton>
          <TransitionButton href="/about">
            <button className="mt-8 ml-8 bg-gradient-to-r from-teal-700 to-teal-400  text-white font-semibold py-2 px-4 rounded-full inline-flex items-center">
              Check out our Merch
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
          </TransitionButton>
        </div>
      </div>
    </section>
  );
}
