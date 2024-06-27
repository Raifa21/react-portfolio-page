"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import HeaderMenu from "./menu";
import { Indie_Flower } from "next/font/google";

const indieFlower = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
});

const PageHeader: React.FC = () => {
  const [isCompact, setIsCompact] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCompact(window.innerWidth < 606);
    };

    // Initial call to set the initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this effect only runs once on mount
  return (
    <header className="header">
      <div className="headerlogo">
        <div>
          <Link href="/" legacyBehavior passHref>
            <div className={indieFlower.className}>
              <a className="biglogo">K.Yoshi</a>
            </div>
          </Link>
        </div>
      </div>
      <div>
        {isCompact ? (
          <HeaderMenu />
        ) : (
          <div className={`headerpagelinks ${indieFlower.className}`}>
            <Link href="@pages/aboutpage" legacyBehavior passHref>
              <a className="navcomponents">About Me</a>
            </Link>
            <Link href="@pages/workspage" legacyBehavior passHref>
              <a className="navcomponents">Works</a>
            </Link>
            <Link href="@pages/contactpage" legacyBehavior passHref>
              <a className="navcomponents">Contact</a>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default PageHeader;
