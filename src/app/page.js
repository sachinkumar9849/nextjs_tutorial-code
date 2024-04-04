"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ImgMain from '../../public/imageMain.jpg'
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight:"100",
  subsets:['latin']
})

const About = () => {
  const router = useRouter();
  return (
    <div>
      <main>
        <h1 className={roboto.className}>Event function and stage</h1>
        <button onClick={() => router.push("/about")}>about</button>
        <Link href="/productlist">Go to product list</Link>
       
        <Image className="img_full" src={ImgMain} alt="Main Image" wiidth={800} height={800}/>
      </main>
    </div>
  );
};

export default About;
