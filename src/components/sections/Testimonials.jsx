import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quote, MapPin } from "lucide-react";
import { gsap } from "../../lib/gsap";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);
  const metaRef = useRef(null);
  const numberRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const active = testimonials[activeIndex];

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonial-eyebrow",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
          },
        },
      );

      gsap.fromTo(
        ".testimonial-heading",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
          },
        },
      );

      gsap.fromTo(
        ".testimonial-stage",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 65%",
          },
        },
      );

      gsap.fromTo(
        ".memory-item",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".memory-grid",
            start: "top 80%",
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isHovered) return;

    const autoplay = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(autoplay);
  }, [isHovered]);

  useEffect(() => {
    const distance = direction > 0 ? 45 : -45;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to([quoteRef.current, metaRef.current, numberRef.current], {
        x: -distance,
        opacity: 0,
        duration: 0.22,
        ease: "power2.in",
      });

      tl.set([quoteRef.current, metaRef.current, numberRef.current], {
        x: distance,
      });

      tl.to([quoteRef.current, metaRef.current, numberRef.current], {
        x: 0,
        opacity: 1,
        duration: 0.55,
        stagger: 0.05,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeIndex, direction]);

  const changeTestimonial = (nextIndex) => {
    if (nextIndex === activeIndex) return;

    setDirection(nextIndex > activeIndex ? 1 : -1);
    setActiveIndex(nextIndex);
  };

  const next = () => {
    changeTestimonial((activeIndex + 1) % testimonials.length);
  };

  const previous = () => {
    changeTestimonial(
      (activeIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative overflow-hidden bg-[#10232d] px-5 py-28 text-[#f5f4ee] sm:px-8 lg:px-16 lg:py-40"
    >
      {/* ARCHITECTURAL GRID */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(109,166,194,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(109,166,194,.5)_1px,transparent_1px)] bg-size-[70px_70px]" />

      <div className="pointer-events-none absolute -left-40 top-40 size-125 rounded-full bg-[#176f5b]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 size-112.5 rounded-full bg-[#155f86]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}

        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <div className="testimonial-eyebrow mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#39a989]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#6da6c2]">
                06 / Client Stories
              </span>
            </div>

            <h2 className="testimonial-heading max-w-4xl text-5xl font-semibold leading-[.9] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              The projects change.
              <span className="block text-[#39a989]">The trust stays.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-white/50 sm:text-lg">
            Every project is different. Every client has a different vision.
            What remains constant is the importance of trust, communication and
            quality throughout the journey.
          </p>
        </div>

        {/* TESTIMONIAL STAGE */}

        <div
          className="testimonial-stage relative mt-20 overflow-hidden rounded-4xl border border-white/10 bg-white/[0.035] backdrop-blur-sm"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute inset-0 bg-linear-to-br from-white/4 to-transparent" />

          {/* TOP TECHNICAL BAR */}

          <div className="relative flex items-center justify-between border-b border-white/10 px-6 py-4 sm:px-8">
            <div className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-[#39a989] shadow-[0_0_15px_rgba(57,169,137,.7)]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/35">
                BuldContx / Client Voice
              </span>
            </div>

            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/25">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>

          {/* QUOTE */}

          <div className="relative grid min-h-130 items-center px-7 py-16 sm:px-12 lg:grid-cols-[1fr_.35fr] lg:px-20 lg:py-24">
            <div className="pointer-events-none absolute left-8 top-10 text-[#39a989]/10 sm:left-12">
              <Quote size={100} strokeWidth={1} />
            </div>

            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#39a989]">
                What they remember
              </span>

              <blockquote
                ref={quoteRef}
                className="mt-7 max-w-4xl text-3xl font-medium leading-[1.15] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl"
              >
                “{active.quote}”
              </blockquote>

              <div
                ref={metaRef}
                className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
              >
                <div>
                  <p className="text-sm font-semibold text-white">
                    {active.name}
                  </p>

                  <p className="mt-1 text-xs text-white/40">{active.role}</p>
                </div>

                <span className="hidden h-8 w-px bg-white/10 sm:block" />

                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-[#39a989]" />

                  <span className="text-xs text-white/45">
                    {active.location}
                  </span>
                </div>

                <span className="hidden h-8 w-px bg-white/10 sm:block" />

                <span className="text-xs text-white/45">{active.project}</span>
              </div>
            </div>

            {/* LARGE NUMBER */}

            <div className="mt-12 flex items-end justify-start lg:mt-0 lg:justify-end">
              <span
                ref={numberRef}
                className="font-[Space_Grotesk] text-[8rem] font-semibold leading-[.7] -tracking-widest text-white/6 sm:text-[11rem] lg:text-[13rem]"
              >
                {active.id}
              </span>
            </div>
          </div>

          {/* CONTROLS */}

          <div className="relative flex flex-col gap-6 border-t border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div className="flex gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => changeTestimonial(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    activeIndex === index
                      ? "w-12 bg-[#39a989]"
                      : "w-5 bg-white/15 hover:bg-white/30"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={previous}
                aria-label="Previous testimonial"
                className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/3 text-white/60 transition-all duration-300 hover:border-[#39a989]/50 hover:bg-[#39a989] hover:text-[#10232d]"
              >
                <ArrowLeft size={16} />
              </button>

              <button
                onClick={next}
                aria-label="Next testimonial"
                className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/3 text-white/60 transition-all duration-300 hover:border-[#39a989]/50 hover:bg-[#39a989] hover:text-[#10232d]"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* WHAT CLIENTS REMEMBER */}

        <div className="memory-grid mt-8 grid gap-px overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          <MemoryItem number="01" title="Clear Communication" />

          <MemoryItem number="02" title="Quality Materials" />

          <MemoryItem number="03" title="Site Supervision" />

          <MemoryItem number="04" title="Transparent Estimation" />
        </div>

        {/* BOTTOM STATEMENT */}

        <div className="mt-20 border-t border-white/10 pt-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#39a989]">
                Built through trust
              </p>

              <p className="mt-2 max-w-xl text-sm leading-6 text-white/45">
                The strongest projects are built on a relationship that lasts
                beyond the handover.
              </p>
            </div>

            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/25">
              BULD CONTX / 1991 — PRESENT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function MemoryItem({ number, title }) {
  return (
    <div className="memory-item group bg-[#10232d] p-6 transition-colors duration-300 hover:bg-[#16313d] sm:p-7">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[9px] tracking-[0.25em] text-white/25">
          {number}
        </span>

        <span className="size-1.5 rounded-full bg-[#39a989] opacity-40 transition-all duration-300 group-hover:scale-150 group-hover:opacity-100" />
      </div>

      <p className="mt-10 text-sm font-medium text-white/70 transition-colors group-hover:text-white">
        {title}
      </p>

      <div className="mt-5 h-px w-7 bg-[#39a989] transition-all duration-500 group-hover:w-full" />
    </div>
  );
}
