import { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Ruler,
  ShieldCheck,
  Globe2,
  HardHat,
} from "lucide-react";

import { gsap, ScrollTrigger } from "../../lib/gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const trustPoints = [
  {
    number: "01",
    title: "Experience",
    description:
      "36+ years of construction experience, beginning in 1991 and continuing through residential, institutional and international projects.",
    icon: HardHat,
  },
  {
    number: "02",
    title: "End-to-End Construction",
    description:
      "From the first conversation and planning stage to construction, finishing and final handover — every stage is connected.",
    icon: Ruler,
  },
  {
    number: "03",
    title: "Transparency",
    description:
      "Clear construction packages and material specifications help you understand what goes into your home before the work begins.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "International Experience",
    description:
      "A project history spanning Tamil Nadu and international construction work across Dubai, Quotar and Mascat.",
    icon: Globe2,
  },
];

export default function WhyBuldContx() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const lineRef = useRef(null);
  const numberRef = useRef(null);
  const yearsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;

    if (!section || !heading) return;

    let splitHeading = null;

    const ctx = gsap.context(() => {
      /*
       * ------------------------------------------------------------
       * EYEBROW
       * ------------------------------------------------------------
       */

      gsap.fromTo(
        ".why-eyebrow",
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );

      /*
       * ------------------------------------------------------------
       * SPLIT TEXT MASKING
       * ------------------------------------------------------------
       *
       * Each line is wrapped in a mask.
       * The text then moves upward from behind the mask.
       */
      splitHeading = SplitText.create(heading, {
        type: "lines",
        mask: "lines",
        linesClass: "why-line++",
        autoSplit: true,
        onSplit: (self) => {
          gsap.set(self.masks, {
            paddingTop: "0.08em",
            paddingBottom: "0.12em",
          });

          return gsap.from(self.lines, {
            yPercent: 105,
            duration: 1.15,
            stagger: 0.12,
            ease: "power4.out",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          });
        },
      });

      /*
       * ------------------------------------------------------------
       * DESCRIPTION
       * ------------------------------------------------------------
       */

      gsap.fromTo(
        ".why-description",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 68%",
            toggleActions: "play none none reverse",
          },
        },
      );

      /*
       * ------------------------------------------------------------
       * EXPERIENCE TIMELINE LINE
       * ------------------------------------------------------------
       */

      gsap.fromTo(
        lineRef.current,
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          transformOrigin: "left center",
          duration: 1.4,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".experience-block",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );

      /*
       * ------------------------------------------------------------
       * YEARS NUMBER
       * ------------------------------------------------------------
       */

      gsap.fromTo(
        numberRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".experience-block",
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        },
      );

      /*
       * ------------------------------------------------------------
       * YEARS LABEL
       * ------------------------------------------------------------
       */

      gsap.fromTo(
        yearsRef.current,
        {
          scale: 0.7,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".experience-block",
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        },
      );

      /*
       * ------------------------------------------------------------
       * TRUST CARDS
       * ------------------------------------------------------------
       */

      gsap.fromTo(
        ".trust-card",
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".trust-grid",
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        },
      );

      /*
       * ------------------------------------------------------------
       * BACKGROUND GRID PARALLAX
       * ------------------------------------------------------------
       */

      gsap.to(".why-grid-bg", {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, section);

    /*
     * ------------------------------------------------------------
     * CLEANUP
     * ------------------------------------------------------------
     */

    return () => {
      if (splitHeading) {
        splitHeading.revert();
      }

      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-buldcontx"
      className="relative overflow-hidden bg-[#f6f5ef] px-5 py-28 text-[#10232d] sm:px-8 lg:px-16 lg:py-40"
    >
      {/* Background Grid */}
      <div className="why-grid-bg pointer-events-none absolute inset-0 opacity-[0.35] bg-[linear-gradient(rgba(21,95,134,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(21,95,134,.055)_1px,transparent_1px)] bg-size-[70px_70px]" />

      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -right-40 top-20 size-96 rounded-full bg-[#176f5b]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ========================================================
            HEADER
        ========================================================= */}

        <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          {/* Heading */}
          <div>
            {/* Eyebrow */}
            <div className="why-eyebrow mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#176f5b]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#155f86]">
                01 / Why BuldContx
              </span>
            </div>

            {/* SplitText Heading */}
            <h2
              ref={headingRef}
              className="why-heading max-w-5xl font-semibold leading-[0.98] tracking-[-0.055em]"
            >
              <span className="block text-6xl sm:text-7xl lg:text-8xl">
                Built on experience.
              </span>

              <span className="block text-4xl text-[#176f5b] sm:text-5xl lg:text-6xl">
                Designed for what lasts.
              </span>
            </h2>
          </div>

          {/* Description */}
          <div>
            <p className="why-description max-w-xl text-base leading-7 text-[#647781] sm:text-lg">
              Since 1991, construction has been more than a business for
              BuldContx. It has been a craft built through decades of projects,
              people and experience.
            </p>
          </div>
        </div>

        {/* ========================================================
            EXPERIENCE BLOCK
        ========================================================= */}

        <div className="experience-block relative mt-24 overflow-hidden rounded-4xl border border-[#10232d]/10 bg-white p-7 shadow-[0_30px_80px_rgba(16,35,45,.06)] sm:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
            {/* Foundation */}
            <div className="relative">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#176f5b]">
                Our foundation
              </p>

              <div className="mt-5 flex items-end gap-2">
                <span
                  ref={numberRef}
                  className="font-[Space_Grotesk] text-[8rem] font-semibold leading-[.75] tracking-[-0.09em] text-[#10232d] sm:text-[10rem] lg:text-[12rem]"
                >
                  36
                </span>

                <span
                  ref={yearsRef}
                  className="mb-2 font-[Space_Grotesk] text-xl font-medium text-[#176f5b] sm:text-2xl"
                >
                  YEARS+
                </span>
              </div>

              <p className="mt-8 max-w-sm text-sm leading-7 text-[#647781]">
                From 1991 to today, every project has added another layer to the
                BuldContx construction legacy.
              </p>
            </div>

            {/* Timeline */}
            <div>
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#647781]">
                  1991
                </span>

                <span className="mx-5 h-px flex-1 bg-[#10232d]/10" />

                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#647781]">
                  TODAY
                </span>
              </div>

              <div className="relative">
                {/* Base Line */}
                <div className="h-px w-full bg-[#10232d]/10" />

                {/* Animated Line */}
                <div
                  ref={lineRef}
                  className="absolute left-0 top-0 h-px w-full origin-left bg-[#176f5b]"
                />

                {/* Start Dot */}
                <div className="absolute left-0 top-1/2 size-3 -translate-y-1/2 rounded-full bg-[#176f5b] shadow-[0_0_0_6px_rgba(23,111,91,.08)]" />

                {/* End Dot */}
                <div className="absolute right-0 top-1/2 size-3 -translate-y-1/2 rounded-full border-2 border-[#176f5b] bg-white" />
              </div>

              {/* Metrics */}
              <div className="mt-10 grid grid-cols-3 gap-4">
                <Metric value="1991" label="Construction begins" />

                <Metric value="36+" label="Years of experience" />

                <Metric value="4" label="Project regions" />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            TRUST CARDS
        ========================================================= */}

        <div className="trust-grid mt-8 grid gap-4 sm:grid-cols-2">
          {trustPoints.map((point) => (
            <TrustCard key={point.number} point={point} />
          ))}
        </div>

        {/* ========================================================
            PRINCIPLE
        ========================================================= */}

        <div className="mt-8 overflow-hidden rounded-4xl bg-[#10232d] p-7 text-white sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            {/* Principle Text */}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#39a989]">
                The BuldContx principle
              </p>

              <h3 className="mt-5 max-w-3xl text-3xl font-semibold leading-none tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                Good construction isn't just about what you build. It's about
                how you build it.
              </h3>
            </div>

            {/* Founder */}
            <div className="flex items-center gap-4">
              <div className="grid size-14 place-items-center rounded-full border border-[#39a989]/30 bg-[#39a989]/10">
                <ArrowUpRight size={20} className="text-[#39a989]" />
              </div>

              <div>
                <p className="text-sm font-semibold">Mr. Palani Ganesan</p>

                <p className="mt-1 text-xs text-white/40">
                  Founder & Owner · BuldContx
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   METRIC
================================================================ */

function Metric({ value, label }) {
  return (
    <div>
      <p className="font-[Space_Grotesk] text-2xl font-semibold tracking-[-0.04em] text-[#10232d] sm:text-3xl">
        {value}
      </p>

      <p className="mt-1 max-w-24 text-[10px] leading-4 text-[#647781]">
        {label}
      </p>
    </div>
  );
}

/* ================================================================
   TRUST CARD
================================================================ */

function TrustCard({ point }) {
  const Icon = point.icon;
  const cardRef = useRef(null);

  const handleEnter = () => {
    gsap.to(cardRef.current, {
      y: -5,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  return (
    <article
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="trust-card group rounded-[1.75rem] border border-[#10232d]/10 bg-white p-7 transition-shadow duration-300 hover:shadow-[0_25px_60px_rgba(16,35,45,.08)] sm:p-8"
    >
      {/* Top */}
      <div className="flex items-start justify-between">
        <span className="font-mono text-[10px] tracking-[0.25em] text-[#647781]">
          {point.number}
        </span>

        <div className="grid size-11 place-items-center rounded-full bg-[#eef5f2] text-[#176f5b] transition-colors duration-300 group-hover:bg-[#176f5b] group-hover:text-white">
          <Icon size={19} strokeWidth={1.6} />
        </div>
      </div>

      {/* Title */}
      <h3 className="mt-12 font-[Space_Grotesk] text-2xl font-semibold tracking-[-0.04em] text-[#10232d]">
        {point.title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-sm leading-7 text-[#647781]">
        {point.description}
      </p>

      {/* Bottom Accent */}
      <div className="mt-7 h-px w-10 bg-[#176f5b] transition-all duration-500 group-hover:w-full" />
    </article>
  );
}
