"use client";
import PageHeader from "@/components/pageheader";
import { Indie_Flower } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const indieFlower = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <PageHeader />
      <div className={indieFlower.className}>
        <div className="mainpage body">
          <div className="introduction">
            <p className="hello-text"> Hello! I am:</p>
            <p className="name-text"> Kotaro Yoshizawa</p>
            <p className="job-text">Web Developer / Digital Composer</p>
            <Button color="blue" asChild>
              <Link href="/pages/contactpage"> Contact Me </Link>
            </Button>
          </div>
          <div className="develop">I develop.</div>
          <div className="compose">I compose.</div>
          <div className="create">I create.</div>
        </div>
      </div>
    </>
  );
}
