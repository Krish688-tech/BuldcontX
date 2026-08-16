import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowUpRight, Construction } from "lucide-react";
import { gsap } from "../lib/gsap";

export default function NotFound() {
  const pageRef = useRef(null);
  const drawingRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;

    if (!page) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        ".notfound-eyebrow",
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
        },
      )
        .fromTo(
          ".notfound-number",
          {
            y: 80,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
          },
          "-=0.35",
        )
        .fromTo(
          ".notfound-heading",
          {
            y: 35,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          "-=0.5",
        )
        .fromTo(
          ".notfound-description",
          {
            y: 25,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          },
          "-=0.45",
        )
        .fromTo(
          ".notfound-action",
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          },
          "-=0.35",
        );

      gsap.fromTo(
        ".blueprint-line",
        {
          strokeDashoffset: 1000,
        },
        {
          strokeDashoffset: 0,
          duration: 2.5,
          ease: "power2.inOut",
          delay: 0.3,
        },
      );

      gsap.to(drawingRef.current, {
        rotate: 1.5,
        yoyo: true,
        repeat: -1,
        duration: 3,
        ease: "sine.inOut",
        transformOrigin: "center",
      });

      gsap.to(".floating-dot", {
        y: -10,
        opacity: 0.5,
        yoyo: true,
        repeat: -1,
        duration: 2,
        stagger: 0.4,
        ease: "sine.inOut",
      });
    }, page);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-paper px-5 py-20 text-[#10232d] sm:px-8 lg:px-16"
    >
      {/* ARCHITECTURAL GRID */}

      <div className="pointer-events-none absolute inset-0 opacity-50 bg-[linear-gradient(rgba(21,95,134,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(21,95,134,.055)_1px,transparent_1px)] bg-size-[70px_70px]" />

      {/* AMBIENT GLOW */}

      <div className="pointer-events-none absolute -left-40 top-1/4 size-112.5 rounded-full bg-[#176f5b]/5 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 size-125 rounded-full bg-[#155f86]/5 blur-[130px]" />

      {/* CONTENT */}

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-[1fr_.8fr] lg:items-center">
        {/* LEFT */}

        <div>
          <div className="notfound-eyebrow mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-[#176f5b]" />

            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#155f86]">
              BuldContx / Site Notice
            </span>
          </div>

          <div className="overflow-hidden">
            <p className="notfound-number font-[Space_Grotesk] text-[clamp(8rem,22vw,18rem)] font-semibold leading-[0.7] -tracking-widest text-[#10232d]">
              404
            </p>
          </div>

          <h1 className="notfound-heading mt-12 max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
            Looks like this space
            <span className="block text-[#176f5b]">
              hasn't been built yet.
            </span>
          </h1>

          <p className="notfound-description mt-7 max-w-xl text-sm leading-7 text-[#647781] sm:text-base">
            The page you're looking for doesn't exist or may have moved.
            Don't worry — every good project starts with finding the right
            plan.
          </p>

          <div className="notfound-action mt-9 flex flex-wrap gap-3">
            <a
              href="/"
              className="group inline-flex items-center gap-3 rounded-full bg-[#155f86] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#176f5b]"
            >
              <ArrowLeft
                size={16}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />

              Back to Home
            </a>

            <a
              href="/#contact"
              className="group inline-flex items-center gap-3 rounded-full border border-[#10232d]/15 bg-white/50 px-6 py-3.5 text-sm font-medium text-[#10232d] backdrop-blur-sm transition-all duration-300 hover:border-[#176f5b]/40 hover:bg-white"
            >
              Start a Project

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* RIGHT — BLUEPRINT */}

        <div
          ref={drawingRef}
          className="relative mx-auto aspect-square w-full max-w-130"
        >
          {/* CORNER LABELS */}

          <span className="absolute left-0 top-0 font-mono text-[8px] uppercase tracking-[0.25em] text-[#647781]/50">
            UNDEFINED / SPACE
          </span>

          <span className="absolute right-0 top-0 font-mono text-[8px] uppercase tracking-[0.25em] text-[#647781]/50">
            SCALE 1:100
          </span>

          {/* BLUEPRINT */}

          <svg
            viewBox="0 0 500 500"
            className="absolute inset-0 h-full w-full"
            fill="none"
          >
            {/* Outer building */}

            <rect
              x="75"
              y="95"
              width="350"
              height="300"
              rx="2"
              stroke="#155f86"
              strokeWidth="1"
              strokeDasharray="1000"
              className="blueprint-line"
            />

            {/* Rooms */}

            <path
              d="M75 250 H235 V395"
              stroke="#155f86"
              strokeWidth="1"
              strokeDasharray="1000"
              className="blueprint-line"
            />

            <path
              d="M235 95 V250 H425"
              stroke="#155f86"
              strokeWidth="1"
              strokeDasharray="1000"
              className="blueprint-line"
            />

            <path
              d="M330 250 V395"
              stroke="#155f86"
              strokeWidth="1"
              strokeDasharray="1000"
              className="blueprint-line"
            />

            {/* Door */}

            <path
              d="M235 395 A65 65 0 0 1 300 330"
              stroke="#176f5b"
              strokeWidth="1"
              strokeDasharray="1000"
              className="blueprint-line"
            />

            {/* Dimension lines */}

            <path
              d="M75 65 H425"
              stroke="#647781"
              strokeWidth=".7"
              strokeDasharray="1000"
              className="blueprint-line"
            />

            <path
              d="M75 58 V72 M425 58 V72"
              stroke="#647781"
              strokeWidth=".7"
            />

            <path
              d="M55 95 V395"
              stroke="#647781"
              strokeWidth=".7"
              strokeDasharray="1000"
              className="blueprint-line"
            />

            <path
              d="M48 95 H62 M48 395 H62"
              stroke="#647781"
              strokeWidth=".7"
            />

            {/* Center lines */}

            <path
              d="M250 55 V445"
              stroke="#176f5b"
              strokeWidth=".6"
              strokeDasharray="5 7"
              opacity=".5"
            />

            <path
              d="M45 245 H455"
              stroke="#176f5b"
              strokeWidth=".6"
              strokeDasharray="5 7"
              opacity=".5"
            />

            {/* Measurement marks */}

            <text
              x="245"
              y="55"
              fill="#647781"
              fontSize="8"
              fontFamily="monospace"
              textAnchor="middle"
            >
              UNAVAILABLE
            </text>

            <text
              x="38"
              y="250"
              fill="#647781"
              fontSize="8"
              fontFamily="monospace"
              transform="rotate(-90 38 250)"
              textAnchor="middle"
            >
              NOT FOUND
            </text>
          </svg>

          {/* CONSTRUCTION MARKER */}

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-3 rounded-full border border-[#10232d]/10 bg-white/70 px-4 py-2.5 shadow-sm backdrop-blur-md">
              <Construction
                size={14}
                className="text-[#176f5b]"
              />

              <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#647781]">
                Page under construction
              </span>
            </div>
          </div>

          {/* FLOATING POINTS */}

          <span className="floating-dot absolute left-[15%] top-[35%] size-1.5 rounded-full bg-[#176f5b]" />

          <span className="floating-dot absolute right-[17%] top-[28%] size-1.5 rounded-full bg-[#155f86]" />

          <span className="floating-dot absolute bottom-[25%] left-[30%] size-1 rounded-full bg-[#176f5b]" />
        </div>
      </div>

      {/* FOOTER MARK */}

      <div className="absolute bottom-6 left-5 right-5 flex items-center justify-between sm:left-8 sm:right-8 lg:left-16 lg:right-16">
        <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#647781]/50">
          BuldContx · Since 1991
        </span>

        <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#647781]/50">
          Planning · Design · Construction
        </span>
      </div>
    </main>
  );
}