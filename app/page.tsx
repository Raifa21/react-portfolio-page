"use client";
import PageHeader from "@/components/pageheader";

export default function Home() {
  return (
    <>
      <PageHeader />
      <div className="body">
        <div className="mainpage">
          <p className="hello-text"> Hello! </p> <br />
          I&apos;m an aspiring software engineer, currently studying for
          university.
          <br />I make stuff in my free time, and I&apos;m always looking for
          new things to learn.
        </div>
      </div>
    </>
  );
}
