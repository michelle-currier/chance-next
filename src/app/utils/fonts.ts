// import localFont from "next/font/local";
import { Quicksand, Luckiest_Guy, Cherry_Bomb_One } from "@next/font/google";

const quicksandFont = Quicksand({
    weight: ["400", "700"],
    style: ["normal"],
    subsets: ["latin"],
    display: "swap",
  });
  const luckiestGuyFont = Luckiest_Guy({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"],
    display: "swap",
  });
const cherryBombOneFont = Cherry_Bomb_One({
  weight:["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
})

  export const quicksand = quicksandFont.className;
  export const luckiestGuy = luckiestGuyFont.className;
  export const cherryBombOne = cherryBombOneFont.className;
