"use client";

import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Banner = () => {
  useGSAP(() => {
    const headingSplit = new SplitText(".heading", { type: "chars, words" });
    const textSplit = new SplitText(".text", { type: "chars, words" });
    gsap.from(headingSplit.chars, {
      y: 100,
      duration: 1,
      ease: "power4.out",
      stagger: 0.02,
    });

    gsap.from(textSplit.chars, {
      y: 50,
      duration: 1,
      ease: "power4.out",
      stagger: 0.01,
    });
  });
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5 relative">
      <h2 className="text-5xl font-bold leading-12 tracking-[-1.05px] text-center overflow-hidden heading">
        {" "}
        Content marketing solution & <br /> idea of your business
      </h2>
      <p className="text-xl text-center text-secondary dark:text-[#87888D] overflow-hidden text">
        Nettracking is a content marketing solution that <br /> tracks the
        effectiveness of your blog,
      </p>
      <div className="flex justify-center items-center gap-4 mt-4">
        <Button size="lg">
          Explore Platform
          <ArrowRight />
        </Button>
        <Button variant="secondary" size="lg">
          Learn More
        </Button>
      </div>
      <div className="w-[366px] h-[366px] absolute bottom-2 left-[300px] rounded-full blur-[250px] bg-[#FF1B0033]"></div>
    </div>
  );
};

export default Banner;
