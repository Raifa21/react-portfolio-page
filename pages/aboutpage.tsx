"use client";

import { Indie_Flower } from "next/font/google";
import PageHeader from "@/components/pageheader";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import Link from "next/link";
import "/styles/globals.css";

const indieFlower = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <PageHeader />
      <div className={`mainpage body ${indieFlower.className}`}>
        <div className="snslinks">
          <Link href="https://github.com/Raifa21" legacyBehavior passHref>
            <a className="navlogos">
              <UseAnimations
                animation={github}
                size={30}
                strokeColor="black"
                fillColor="blue"
              />
            </a>
          </Link>
          <Link
            href="https://www.linkedin.com/in/kotaro-yoshizawa"
            legacyBehavior
            passHref
          >
            <a className="navlogos">
              <UseAnimations
                animation={linkedin}
                size={30}
                strokeColor="black"
              />
            </a>
          </Link>
        </div>
        <div className="footer">
          <p>Design. Create. Repeat.</p>
        </div>
      </div>
    </>
  );
}
