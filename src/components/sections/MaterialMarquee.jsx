import { useLayoutEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "../../lib/gsap";

const statements = [
  "DON'T WORRY ABOUT MATERIAL PRICES",
  "WE HAVE THE SUPPLY COVERED",
  "AUTHORIZED DEALERSHIP",
  "OWN COMMERCIAL MATERIAL SOURCING",
  "RELIABLE SUPPLY",
  "BETTER COST CONTROL",
  "ULTRATECH",
  "RAMCO",
  "DALMIA",
  "JSW",
  "CHETTINAD",
  "PRIYA CEMENT",
  "TATA STEEL",
  "KAVERI",
  "BRICKS & SOLID BLOCKS",
  "CEMENT • STEEL • AGGREGATES",
];

export default function MaterialMarquee() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 38,
        ease: "none",
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-y border-[#155f86]/10 bg-[#f7f7f2] py-6">
      <div ref={trackRef} className="flex w-max items-center">
        {[...statements, ...statements].map((text, index) => (
          <div key={index} className="flex shrink-0 items-center gap-8 px-8">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#155f86] sm:text-[11px]">
              {text}
            </span>

            <ArrowRight size={15} strokeWidth={1.5} className="text-[#176f5b]" />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-[#f7f7f2] to-transparent" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-[#f7f7f2] to-transparent" />
    </section>
  );
}