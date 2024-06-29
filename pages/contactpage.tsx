"use client";

import PageHeader from "@/components/pageheader";
import ProfileForm from "@/components/form";
import { Indie_Flower } from "next/font/google";
import "/styles/globals.css";
import "./contactpage.css";

const indieFlower = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
});

const ContactPage = () => {
  return (
    <>
      <PageHeader />
      <div className={`mainpage body ${indieFlower.className}`}>
        <div className="title">Get in touch with me!</div>
        <div className="contact">
          <div className="left">
            <div className="left-1"></div>
          </div>
          <div className="right">
            <ProfileForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
