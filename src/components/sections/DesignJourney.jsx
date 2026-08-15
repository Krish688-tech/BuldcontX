import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "../../lib/gsap";

const slides = [
  {
    number: "01",
    label: "THE IDEA",
    title: "It starts with a drawing.",
    description:
      "Every home begins with a carefully considered plan. Spaces, proportions, movement and possibilities come together before a single brick is laid.",
    image: "/images/2d-floor-plan.png",
    tag: "2D FLOOR PLAN",
    alt : "2D house floor plan by BuldContx"
  },
  {
    number: "02",
    label: "THE VISION",
    title: "Then the plan comes alive.",
    description:
      "Our 3D visualization lets you experience the spaces before construction begins — from proportions and materials to light and atmosphere.",
    image: "/images/3d-house-plan.png",
    tag: "3D VISUALIZATION",
    alt : "3D residential house visualization by BuldContx"
  },
  {
    number: "03",
    label: "THE REALITY",
    title: "And finally, we build it.",
    description:
      "The approved vision becomes a real home through disciplined execution, quality workmanship and attention to every detail.",
    image: "/images/completed-house.jpeg",
    tag: "CONSTRUCTION",
    alt : "We Successfully give structure to your dreams Buildcontx Builds Your Dream Homes for You"
  },
];

export default function DesignJourney() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".journey-panel");

      const horizontalTween = gsap.to(track, {
        x: () => -(panels.length - 1) * window.innerWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${window.innerHeight * (panels.length - 1)}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          snap: {
            snapTo: 1 / (panels.length - 1),
            duration: { min: 0.25, max: 0.7 },
            delay: 0.05,
            ease: "power2.inOut",
          },
          onUpdate: (self) => {
            const progress = self.progress;

            if (progressRef.current) {
              gsap.set(progressRef.current, { scaleX: progress });
            }

            if (counterRef.current) {
              const index = Math.min(
                panels.length - 1,
                Math.round(progress * (panels.length - 1)),
              );

              counterRef.current.textContent = `0${index + 1}`;
            }
          },
        },
      });

      panels.forEach((panel) => {
        const image = panel.querySelector(".journey-image");
        if (!image) return;

        gsap.fromTo(
          image,
          { scale: 1.12 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: horizontalTween,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          },
        );
      });

      panels.forEach((panel) => {
        const content = panel.querySelector(".journey-content");

        if (!content) return;

        gsap.fromTo(
          content,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: horizontalTween,
              start: "left 75%",
              end: "left 35%",
              scrub: true,
            },
          },
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative mt-16 h-screen w-full overflow-hidden bg-[#f7f7f2] sm:mt-0"
    >
      {/* TOP UI */}

      <div className="pointer-events-none absolute left-0 right-0 top-0 z-30 px-4 pt-5 sm:px-8 sm:pt-8 lg:px-14 lg:pt-10">
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-2 font-mono text-[8px] uppercase tracking-[0.18em] text-[#155f86] sm:gap-3 sm:text-[10px] sm:tracking-[0.25em]">
            <span className="h-px w-5 shrink-0 bg-[#43a58b] sm:w-8" />
            <span className="truncate">03 / From plan to reality</span>
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <span
              ref={counterRef}
              className="font-[Space_Grotesk] text-xs font-medium text-[#10232d] sm:text-sm"
            >
              01
            </span>

            <span className="font-mono text-[8px] tracking-[0.15em] text-[#526875] sm:text-[9px] sm:tracking-[0.2em]">
              / 03
            </span>
          </div>
        </div>
      </div>

      {/* HORIZONTAL TRACK */}

      <div ref={trackRef} className="flex h-full w-max">
        {slides.map((slide, index) => (
          <article key={slide.number} className="journey-panel relative flex h-screen w-screen shrink-0 items-center px-4 pt-32 pb-20 sm:px-8 sm:pt-20 sm:pb-20 lg:px-16">
            {/* BACKGROUND NUMBER */}

            <div className="pointer-events-none absolute bottom-[-4%] left-[-4%] select-none font-[Space_Grotesk] text-[45vw] font-semibold leading-none tracking-[-0.08em] text-[#155f86]/[0.035] sm:bottom-[-10%] sm:left-[-2%] sm:text-[35vw]">
              {slide.number}
            </div>

            {/* MAIN GRID */}

            <div className="relative z-10 mx-auto grid h-full w-full max-w-375 min-w-0 grid-rows-[35vh_1fr] items-center gap-5 sm:grid-rows-[48vh_1fr] sm:gap-6 lg:h-auto lg:grid-cols-[0.72fr_1.28fr] lg:grid-rows-none lg:gap-16"> 
              {/* IMAGE */}

              <div className="relative order-1 h-[42vh] min-h-0 w-full min-w-0 overflow-hidden rounded-2xl border border-[#155f86]/10 bg-white shadow-[0_20px_60px_rgba(16,35,45,0.10)] sm:h-[48vh] sm:rounded-3xl lg:order-2 lg:h-[68vh] lg:rounded-4xl">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="journey-image absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute left-3 right-3 top-3 z-10 flex items-center justify-between gap-2 sm:left-5 sm:right-5 sm:top-5">
                  <span className="rounded-full border border-white/30 bg-black/20 px-2.5 py-1.5 font-mono text-[7px] uppercase tracking-[0.15em] text-white backdrop-blur-md sm:px-3 sm:py-2 sm:text-[9px] sm:tracking-[0.2em]">
                    BuildContx
                  </span>

                  <span className="rounded-full bg-white/80 px-2.5 py-1.5 font-mono text-[7px] tracking-[0.12em] text-[#155f86] backdrop-blur-md sm:px-3 sm:py-2 sm:text-[9px] sm:tracking-[0.15em]">
                    {slide.number} / 03
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 z-10 bg-linear-to-t from-black/55 to-transparent px-4 pb-4 pt-14 sm:px-5 sm:pb-5 sm:pt-20">
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/80 sm:text-[9px] sm:tracking-[0.25em]">
                    {slide.tag}
                  </span>
                </div>
              </div>

              {/* TEXT */}

              <div className="journey-content order-2 min-w-0 w-full max-w-full lg:order-1">
                <div className="mb-2.5 flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.2em] text-[#176f5b] sm:mb-6 sm:gap-3 sm:text-[10px] sm:tracking-[0.28em]">
                  <span>{slide.number}</span>
                  <span className="h-px w-5 bg-[#176f5b]/40 sm:w-8" />
                  <span>{slide.label}</span>
                </div>

                <h2 className="max-w-xl font-[Space_Grotesk] text-[2rem] font-semibold leading-[0.95] tracking-[-0.055em] text-[#10232d] sm:text-4xl md:text-5xl lg:text-[5.2rem]">
                  {slide.title}
                </h2>

                <p className="mt-3 max-w-lg text-[11px] leading-5 text-[#60737d] sm:mt-5 sm:text-sm sm:leading-6 md:text-base md:leading-7">
                  {slide.description}
                </p>

                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#155f86]/15 bg-white/70 px-3 py-1.5 backdrop-blur sm:mt-8 sm:gap-3 sm:px-4 sm:py-2.5">
                  <span className="size-1.5 shrink-0 rounded-full bg-[#43a58b] sm:size-2" />

                  <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-[#155f86] sm:text-[9px] sm:tracking-[0.2em]">
                    {slide.tag}
                  </span>
                </div>

                {index === 0 && (
                  <button className="mt-4 flex items-center gap-2 text-[11px] font-medium text-[#155f86] sm:mt-8 sm:gap-3 sm:text-sm">
                    Explore our drawings
                    <ArrowRight size={15} />
                  </button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* BOTTOM PROGRESS */}

      <div className="absolute bottom-4 left-1/2 z-30 w-36 -translate-x-1/2 sm:bottom-8 sm:w-65">
        <div className="h-px w-full overflow-hidden bg-[#10232d]/15">
          <div
            ref={progressRef}
            className="h-full w-full origin-left scale-x-0 bg-[#176f5b]"
          />
        </div>

        <div className="mt-2 flex items-center justify-center gap-1.5 font-mono text-[7px] uppercase tracking-[0.2em] text-[#526875] sm:mt-3 sm:gap-2 sm:text-[8px] sm:tracking-[0.25em]">
          <span>Scroll</span>
          <ArrowRight size={10} />
        </div>
      </div>
    </section>
  );
}
