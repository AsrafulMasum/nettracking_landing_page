// components/StepTimeline.tsx

import Image from "next/image";
import { FC } from "react";
import img from "@/assets/card.svg";

type Step = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const steps: Step[] = [
  {
    id: "01",
    title: "Add Website",
    description:
      "Nettracking gives you an innovative web-based tool that manages, filters and reports on your website's",
    image: img,
  },
  {
    id: "02",
    title: "Get Tracking Code",
    description:
      "Filters and reports on your website's search engine ranking results. In short, nettracking gives you the information.",
    image: img,
  },
  {
    id: "03",
    title: "Start Tracking",
    description:
      "In your website's ranking position and accurately track organic (or natural) search engine movement over time.",
    image: img,
  },
];

const StepTimeline: FC = () => {
  return (
    <div>
      <h2 className="text-5xl font-bold leading-12 tracking-[-1.05px] text-center mb-20">
        {" "}
        How it works
      </h2>

      <div className="relative bg-[#1e1e2f] py-12 px-4 sm:px-8 md:px-16 mb-20 rounded-2xl">
        {/* central vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-500/30 -translate-x-1/2 z-0" />

        <div className="relative z-10 space-y-24">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 relative"
            >
              {/* Step number in the center */}
              <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-10 h-10 bg-[#2a2a3e] text-white border border-gray-400 rounded-full flex items-center justify-center font-semibold shadow-md">
                  {step.id}
                </div>
              </div>

              {/* Image */}
              <div
                className={`flex justify-center ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>

              {/* Content */}
              <div
                className={`text-white p-10 ${
                  index % 2 === 1 ? "text-right" : ""
                }`}
              >
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepTimeline;
