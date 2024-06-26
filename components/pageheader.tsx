"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import HeaderMenu from "./menu";
import { Shadows_Into_Light } from "next/font/google";

const shadowsIntoLight = Shadows_Into_Light({
  weight: "400",
  subsets: ["latin"],
});

const PageHeader: React.FC = () => {
  const [isCompact, setIsCompact] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCompact(window.innerWidth < 600); // Change 768 to your desired width threshold
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
            <div className={shadowsIntoLight.className}>
              <a className="biglogo">K.Yoshi</a>
            </div>
          </Link>
        </div>
      </div>
      <div>
        {isCompact ? (
          <HeaderMenu />
        ) : (
          <div className="headerpagelinks">
            <Link href="/pages/about" legacyBehavior passHref>
              <a className="navcomponents">About Me</a>
            </Link>
            <Link href="/pages/works" legacyBehavior passHref>
              <a className="navcomponents">Works</a>
            </Link>
            <Link href="/pages/contact" legacyBehavior passHref>
              <a className="navcomponents">Contact</a>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default PageHeader;
