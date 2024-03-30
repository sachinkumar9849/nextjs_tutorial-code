"use client";
import React from "react";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <div>
      <main>
        <h1>Event function and stage</h1>
        <button onClick={() => router.push("/about")}>about</button>
      </main>
    </div>
  );
};

export default About;
