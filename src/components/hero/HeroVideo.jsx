import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { gsap } from "../../lib/gsap";
import TypewriterHeading from "./TypewriterHeading";
import { scrollToSection } from "../../lib/scroll";

export default function HeroVideo() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      intro
        .fromTo(
          ".hero-eyebrow",
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
        )
        .fromTo(
          ".hero-description",
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.25",
        )
        .fromTo(
          ".hero-actions",
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.45",
        )
        .fromTo(
          ".hero-scroll",
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.35",
        );

      gsap.to(video, {
        scale: window.innerWidth < 768 ? 1.02 : 1.06,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-content", {
        y: -100,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "top+=500 top",
          scrub: true,
        },
      });

      gsap.to(".hero-scroll-icon", {
        y: 5,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollNext = () => {
    scrollToSection("why-buldcontx");
  };

  const goToContact = () => {
    scrollToSection("contact");
  };

  const goToProjects = () => {
    scrollToSection("projects");
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-svh w-full overflow-hidden bg-[#0b1821]"
    >
      {/* VIDEO */}

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/buldcontx-hero-poster.webp"
        aria-label="BuldContx home construction planning and building process"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/buldcontx-hero.webm" type="video/webm" />
        <source src="/videos/buldcontx-hero.mp4" type="video/mp4" />
      </video>

      {/* HERO CONTENT */}

      <div className="hero-content absolute inset-0 z-20 flex items-center">
        <div className="mx-auto w-full max-w-350 px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            {/* EYEBROW */}

            <div className="hero-eyebrow mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#43a58b]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white">
                Planning • Design • Construction
              </span>
            </div>

            {/* TYPEWRITER HEADING */}

            <TypewriterHeading />

            {/* DESCRIPTION */}

            <p className="hero-description mt-7 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
              From residential homes to institutional and infrastructure
              projects, BuldContx brings decades of construction experience to
              every project.
            </p>

            {/* ACTION BUTTONS */}

            <div className="hero-actions mt-9 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={goToContact}
                className="group inline-flex items-center gap-3 rounded-full bg-[#155f86] px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-[#155f86]/20 transition-all duration-300 hover:bg-[#104d6d] hover:shadow-xl hover:shadow-[#155f86]/30"
              >
                <span>Start Your Project</span>
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>

              <button
                type="button"
                onClick={goToProjects}
                className="group inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/70 hover:bg-white/15"
              >
                <span>Explore Our Work</span>
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}

      <div className="hero-scroll absolute bottom-7 left-1/2 z-30 -translate-x-1/2">
        <button
          type="button"
          onClick={scrollNext}
          className="group flex flex-col items-center gap-3"
          aria-label="Scroll to explore"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/70 transition-colors duration-300 group-hover:text-white">
            Scroll to explore
          </span>

          <span className="hero-scroll-icon grid size-10 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-white/60 group-hover:bg-white/20">
            <ArrowDown size={15} strokeWidth={1.8} />
          </span>
        </button>
      </div>

      {/* BRAND MARK */}

      <div className="pointer-events-none absolute bottom-8 right-8 z-20 hidden lg:block">
        <div className="flex items-center gap-3 text-white/50">
          <span className="h-px w-8 bg-white/30" />
          <span className="font-mono text-[9px] uppercase tracking-[0.25em]">
            buldcontx
          </span>
        </div>
      </div>
    </section>
  );
}
