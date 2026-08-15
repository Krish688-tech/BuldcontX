import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { gsap, ScrollTrigger } from "../../lib/gsap";
import { projectHistory, projectRegions } from "../../data/projects";

export default function Projects() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const progressRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".project-history-item");

      gsap.fromTo(
        ".projects-intro > *",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        timelineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );

      gsap.to(progressRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      items.forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative bg-[#10232d] text-[#f5f4ee]">
      
      {/* INTRO */}
      <div className="projects-intro relative mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-8 lg:px-16 lg:pb-28 lg:pt-40">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#39a989]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#6da6c2]">
                05 / Project Legacy
              </span>
            </div>

            <h2 className="max-w-5xl text-5xl font-semibold leading-[.9] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              36 years.
              <span className="mt-4 block text-[#39a989]">Built to last.</span>
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-base leading-7 text-white/55 sm:text-lg">
              From Tamil Nadu to international projects, BuldContx carries decades of construction experience into every new build.
            </p>
          </div>

        </div>
      </div>

      {/* TIMELINE */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">

        <div className="absolute left-8 top-0 hidden h-full w-px bg-white/10 lg:left-16 lg:block">
          <div
            ref={timelineRef}
            className="absolute inset-x-0 top-0 h-full origin-top bg-[#39a989]"
          />

          <div
            ref={progressRef}
            className="absolute -left-0.5 top-0 h-0 w-1.25 rounded-full bg-[#39a989]"
          />
        </div>

        <div className="grid lg:grid-cols-[.65fr_1.35fr]">

          {/* JOURNEY MARKERS */}
          <div className="hidden lg:block">
            <div className="sticky top-32 flex h-[70vh] items-center pl-24">

              <div className="relative w-full max-w-xs">

                <div className="mb-8 font-mono text-[10px] uppercase tracking-[0.3em] text-white/35">
                  Our Journey
                </div>

                <div className="space-y-5">
                  {projectRegions.map((region, index) => (
                    <RegionMarker
                      key={region.id}
                      region={region}
                      index={index}
                      activeIndex={activeIndex}
                    />
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* PROJECTS */}
          <div className="relative">

            {projectHistory.map((project, index) => (
              <ProjectHistoryItem
                key={project.id}
                project={project}
                index={index}
                activeIndex={activeIndex}
              />
            ))}

          </div>
        </div>
      </div>

      {/* FINAL BRAND STATEMENT */}
      <div className="relative overflow-hidden border-t border-white/10">

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-16 lg:py-32">

          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#39a989]">
                Built on experience
              </p>

              <h3 className="mt-5 text-4xl font-semibold leading-[.95] tracking-tighter sm:text-5xl lg:text-6xl">
                One journey.
                <span className="block text-white/45">
                  Countless structures.
                </span>
              </h3>
            </div>

            <div>

              <p className="max-w-2xl text-lg leading-8 text-white/60">
                Every project adds another chapter to the BuldContx story —
                from public infrastructure and institutional projects to
                residential construction.
              </p>

              <div className="mt-10 flex items-center gap-4">

                <div className="grid size-14 place-items-center rounded-full border border-[#39a989]/40 bg-[#39a989]/10">
                  <ArrowUpRight size={20} className="text-[#39a989]" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Mr. Palani Ganesan
                  </p>

                  <p className="mt-1 text-xs text-white/40">
                    Founder & Owner · BuldContx
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  );
}


/* ============================================================
   PROJECT ITEM
============================================================ */

function ProjectHistoryItem({ project, index, activeIndex }) {

  const itemRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const tagsRef = useRef(null);

  const isActive = index === activeIndex;

  useEffect(() => {

    if (!isActive) return;

    const ctx = gsap.context(() => {

      gsap.fromTo(
        [
          titleRef.current,
          descriptionRef.current,
          tagsRef.current,
        ],
        {
          y: 18,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.08,
          ease: "power3.out",
        }
      );

    }, itemRef);

    return () => ctx.revert();

  }, [isActive]);

  return (
    <article
      ref={itemRef}
      className="project-history-item relative min-h-[70vh] border-b border-white/10 py-20 lg:min-h-[82vh] lg:py-28"
    >

      <div
        ref={contentRef}
        className={`transition-all duration-700 ${
          isActive
            ? "translate-x-0 opacity-100"
            : "translate-x-3 opacity-30"
        }`}
      >

        {/* TOP META */}
        <div className="mb-8 flex items-center justify-between gap-6">

          <div className="flex items-center gap-3">

            <span
              className={`grid size-8 place-items-center rounded-full border text-[10px] font-mono transition-all duration-500 ${
                isActive
                  ? "border-[#39a989] bg-[#39a989] text-[#10232d]"
                  : "border-white/20 text-white/40"
              }`}
            >
              {project.id}
            </span>

            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/35">
              {project.year === "—" ? "PROJECT" : project.year}
            </span>

          </div>

          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">
            {project.country}
          </span>

        </div>


        {/* PROJECT VISUAL */}
        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-[#172f3b]">

          <div className="relative aspect-video overflow-hidden">
            <ProjectVisual project={project} index={index} />
          </div>

          <div className="absolute inset-0 bg-linear-to-t from-[#10232d] via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">

            <div className="flex items-end justify-between gap-6">

              <div>

                <div className="mb-3 flex items-center gap-2">

                  <MapPin size={13} className="text-[#39a989]" />

                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/55">
                    {project.region}
                  </span>

                </div>

                <h3
                  ref={titleRef}
                  className="max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl"
                >
                  {project.title}
                </h3>

              </div>

              <span className="hidden size-12 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md sm:grid">
                <ArrowDownRight size={18} />
              </span>

            </div>
          </div>
        </div>


        {/* DESCRIPTION */}
        <div className="mt-8 grid gap-8 sm:grid-cols-[.7fr_1.3fr]">

          <div>

            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#39a989]">
              {project.region} / {project.country}
            </span>

          </div>

          <div>

            <p
              ref={descriptionRef}
              className="max-w-xl text-sm leading-7 text-white/55 sm:text-base"
            >
              {project.description}
            </p>

            <div
              ref={tagsRef}
              className="mt-6 flex flex-wrap gap-2"
            >
              {project.projects.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/65"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>
        </div>

      </div>

    </article>
  );
}


/* ============================================================
   REGION MARKER
============================================================ */

function RegionMarker({ region, index, activeIndex }) {

  const regionIndexes = projectHistory.reduce(
    (acc, project, i) => {
      if (project.region === region.name) {
        acc.push(i);
      }

      return acc;
    },
    []
  );

  const isActive = regionIndexes.includes(activeIndex);

  return (
    <div
      className={`flex items-center gap-4 transition-all duration-500 ${
        isActive
          ? "translate-x-2 opacity-100"
          : "opacity-30"
      }`}
    >

      <span
        className={`size-2 rounded-full transition-all duration-500 ${
          isActive
            ? "scale-150 bg-[#39a989] shadow-[0_0_20px_rgba(57,169,137,.7)]"
            : "bg-white/30"
        }`}
      />

      <div>

        <p
          className={`text-sm font-medium ${
            isActive
              ? "text-white"
              : "text-white/50"
          }`}
        >
          {region.name}
        </p>

        <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
          {region.country}
        </p>

      </div>

    </div>
  );
}


/* ============================================================
   PROJECT VISUAL
============================================================ */

function ProjectVisual({ project, index }) {

  const patterns = [
    "bg-[radial-gradient(circle_at_30%_30%,rgba(57,169,137,.3),transparent_30%),linear-gradient(135deg,#1d4650,#10232d)]",

    "bg-[radial-gradient(circle_at_70%_20%,rgba(109,166,194,.35),transparent_30%),linear-gradient(135deg,#17394b,#10232d)]",

    "bg-[radial-gradient(circle_at_40%_70%,rgba(57,169,137,.25),transparent_30%),linear-gradient(135deg,#203b43,#10232d)]",

    "bg-[radial-gradient(circle_at_70%_70%,rgba(109,166,194,.3),transparent_30%),linear-gradient(135deg,#173343,#10232d)]",
  ];

  return (
    <div className={`absolute inset-0 ${patterns[index % patterns.length]}`}>

      <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] bg-size-[55px_55px]" />

      <div className="absolute left-[15%] top-[22%] h-px w-[70%] rotate-[-8deg] bg-[#39a989]/30" />

      <div className="absolute left-[25%] top-[42%] h-px w-[55%] rotate-12 bg-[#6da6c2]/30" />

      <div className="absolute left-1/2 top-1/2 size-45 -translate-x-1/2 -translate-y-1/2 rotate-12 border border-white/10 sm:size-65" />

      <div className="absolute left-1/2 top-1/2 size-30 -translate-x-1/2 -translate-y-1/2 -rotate-6 border border-[#39a989]/20 sm:size-45" />

      <div className="absolute bottom-8 left-8">
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">
          BuldContx / {project.id}
        </span>
      </div>

      <div className="absolute right-8 top-8 text-right">
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">
          {project.region}
        </span>
      </div>

      <div className="absolute inset-0">
      <img
        src={project.image}
        alt={project.alt}
        className="h-full w-full object-cover"
      />
    </div>

    </div>
  );
}