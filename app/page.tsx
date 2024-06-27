"use client";
import PageHeader from "@/components/pageheader";
import { Indie_Flower } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "/styles/globals.css";

const indieFlower = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
});

const Home = () => {
  return (
    <>
      <PageHeader />
      <div className={`mainpage body ${indieFlower.className}`}>
        <div className="introduction">
          <p className="hello-text"> Hello! I am:</p>
          <p className="name-text"> Kotaro Yoshizawa</p>
          <p className="job-text">Digital Composer / Web Developer</p>

          <Button asChild className="contact-button">
            <Link href="/contactpage"> Contact Me </Link>
          </Button>

          <div className="footer">
            <p>Design. Create. Repeat.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
