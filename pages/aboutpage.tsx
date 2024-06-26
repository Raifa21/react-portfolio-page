"use client";

import PageHeader from "@/components/pageheader";
import Link from "next/link";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";

export default function Home() {
  return (
    <>
      <PageHeader />
      <h1 className="font-bold text-left mt-5">About</h1>
      <div className="snslinks">
        <Link href="https://github.com/Raifa21" legacyBehavior passHref>
          <a className="navlogos">
            <UseAnimations animation={github} size={30} strokeColor="black" />
          </a>
        </Link>
        <Link
          href="https://www.linkedin.com/in/kotaro-yoshizawa"
          legacyBehavior
          passHref
        >
          <a className="navlogos">
            <UseAnimations animation={linkedin} size={30} strokeColor="black" />
          </a>
        </Link>
      </div>
    </>
  );
}
