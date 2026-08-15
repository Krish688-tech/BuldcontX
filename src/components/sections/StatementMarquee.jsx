import { useLayoutEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "../../lib/gsap";

const statements = ["SINCE 1991", "36+ YEARS OF EXPERIENCE", "YOUR VISION. OUR CRAFT.", "FROM PLAN TO HOME", "PRECISION IN EVERY LINE", "QUALITY IN EVERY DETAIL", "WE PLAN. WE BUILD. WE DELIVER.", "TRUST BUILT INTO EVERY PROJECT"];

export default function StatementMarquee() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 28,
        ease: "none",
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-y border-[#155f86]/10 bg-[#f7f7f2] py-5">
      <div ref={trackRef} className="flex w-max items-center">
        {[...statements, ...statements].map((text, index) => (
          <div key={index} className="flex shrink-0 items-center gap-8 px-8">
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-[#155f86] sm:text-[11px]">
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