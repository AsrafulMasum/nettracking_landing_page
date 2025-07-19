import Banner from "@/components/Banner";
import Features from "@/components/Features";
import StepTimeline from "@/components/StepTimeline";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <main>
      <Banner />
      <Features />
      <StepTimeline />
    </main>
  );
}
