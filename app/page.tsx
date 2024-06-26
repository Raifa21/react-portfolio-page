"use client";
import PageHeader from "@/components/pageheader";

export default function Home() {
  return (
    <>
      <PageHeader />
      <div className="body">
        <div className="mainpage">
          <p className="hello-text"> Hello! I am:</p>
          <p className="name-text"> Kotaro Yoshizawa</p>
          <p className="job-text">Web Developer / Digital Composer</p>
        </div>
      </div>
    </>
  );
}
