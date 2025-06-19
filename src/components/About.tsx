import React from "react";
import { quicksand, cherryBombOne, luckiestGuy } from "@/app/utils/fonts";
import Image from "next/image";

import kitLou from "./../images/kitten&lou.png";
import porch from "./../images/kittenLouPorch.png";
import giveBack from "./../images/giveback.png";

export default function About() {
  return (
    <section className="m-8">
      <h2 className={`${luckiestGuy} text-4xl`}>
        Behind the scenes with Kitten and Lou
      </h2>

      <div className="grid grid-cols-3 gap-8">
        <div>
          <h3>When we're not slingin dat snow for y'all...</h3>
          <Image
            src={kitLou}
            alt="Kitten and Lou in drag/burlesque attire on stage"
            className="w-full h-100 object-cover"
            loading="eager"
          />
          <h3>...we're full time touring drag/burlesque performers</h3>
        </div>
        <div>
          <h3 className="content-subhead">
            Once miss Rona came onto the scene...
          </h3>
          <p>
            We found ourselves with no work or income the foreseeable future...
          </p>
          <p>
            So we kicked our asses into gear, channeled our love for our
            neighborhood and yummy all-natural treats, and our lil porch pop up
            was birthed.
          </p>
          <Image
            src={porch}
            className="w-full h-100 object-cover"
            loading="eager"
            alt="Kitten and Lou on their old front porch"
          />
        </div>
        <div>
          <h3>We believe and insist that:</h3>
          <h3>Black, Trans, + Black Trans Lives Matter</h3>
          <p>
            We believe in giving back to our community and causes that matter to
            us every week. We believe in the magic of this city and it's beloved
            traditions! (like porches and snoballs!)
          </p>
          <h3>
            ... and chihuahuas! <i className="fa fa-dog"></i>
          </h3>
          <Image
            src={giveBack}
            className="w-full h-100 object-cover"
            alt="a tip jar showcasing where the cause they are supporting weekly"
          />
        </div>
      </div>
    </section>
  );
}
