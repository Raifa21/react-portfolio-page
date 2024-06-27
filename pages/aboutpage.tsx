"use client";

import { Indie_Flower } from "next/font/google";
import PageHeader from "@/components/pageheader";
import Image from "next/image";
import "./aboutpage.css";
import "/styles/globals.css";

import styles from "./IconGrid.module.css";

const indieFlower = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <PageHeader />
      <div className={`mainpage body ${indieFlower.className}`}>
        <div className="about-text">
          <h1 className="title-text">About Me</h1>
          <p className="content-text">
            Hello! I am a Year 13 student with a deep passion for computer
            science and engineering.
            <br />
            As a dedicated programmer, I excel in problem-solving and
            continuously strive to enhance my skills. I am currently learning
            web development, and I am excited to see where this journey takes
            me.
            <br /> With a strong foundation in programming and a keen interest
            in innovation, I aim to create impactful solutions and provide
            exceptional experiences.
          </p>
        </div>
        <div className="skills-text">
          <h1 className="title-text">Skills</h1>
          <div className={styles.grid}>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
              alt="TypeScript Icon"
              width={64}
              height={64}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              alt="React Icon"
              width={64}
              height={64}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg"
              alt="Next.js Icon"
              width={64}
              height={64}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg"
              alt="HTML5 Icon"
              width={64}
              height={64}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg"
              alt="CSS3 Icon"
              width={64}
              height={64}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-plain.svg"
              alt="C++ Icon"
              width={64}
              height={64}
            />
          </div>
        </div>
        <div className="footer">
          <p>Design. Create. Repeat.</p>
        </div>
      </div>
    </>
  );
}
