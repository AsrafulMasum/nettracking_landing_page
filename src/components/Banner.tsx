import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Banner = () => {
  return (
    <div>
      <h2> Content marketing solution & idea of your business</h2>
      <p>
        Nettracking is a content marketing solution that tracks the
        effectiveness of your blog,
      </p>
      <div className="flex justify-center items-center gap-4 mt-4">
        <Button>
          Explore Platform
          <ArrowRight />
        </Button>
        <Button variant="secondary">Learn More</Button>
      </div>
    </div>
  );
};

export default Banner;
