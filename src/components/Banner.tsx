import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Banner = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5">
      <h2 className="text-5xl font-bold leading-12 tracking-[-1.05px] text-center">
        {" "}
        Content marketing solution & <br /> idea of your business
      </h2>
      <p className="text-xl text-center text-secondary dark:text-[#87888D]">
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
    </div>
  );
};

export default Banner;
