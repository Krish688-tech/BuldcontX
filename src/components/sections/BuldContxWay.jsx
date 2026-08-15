import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Check, Ruler, Layers3, Calculator, HardHat, KeyRound } from "lucide-react";
import { gsap, ScrollTrigger } from "../../lib/gsap";

const stages = [
  {
    number: "01",
    title: "Understand",
    short: "IDEA",
    description: "Every home starts with a conversation. We understand your site, lifestyle, requirements and vision before anything is drawn.",
    icon: Check,
  },
  {
    number: "02",
    title: "Plan",
    short: "PLAN",
    description: "Your requirements become a practical architectural plan designed around space, movement, functionality and the site.",
    icon: Ruler,
  },
  {
    number: "03",
    title: "Design",
    short: "DESIGN",
    description: "2D drawings and 3D visualization bring your future home into focus before construction begins.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Estimate",
    short: "COST",
    description: "Materials, quantities and construction requirements are considered so you can move forward with greater clarity.",
    icon: Calculator,
  },
  {
    number: "05",
    title: "Build",
    short: "BUILD",
    description: "The drawings move to the site. Construction progresses through coordinated workmanship, materials and supervision.",
    icon: HardHat,
  },
  {
    number: "06",
    title: "Handover",
    short: "HOME",
    description: "The final stage is more than completing a structure. It is handing over a place ready to become your home.",
    icon: KeyRound,
  },
];

export default function BuldContxWay() {
  const sectionRef = useRef(null);
  const visualRef = useRef(null);
  const buildingRef = useRef(null);
  const floorRef = useRef(null);
  const structureRef = useRef(null);
  const glassRef = useRef(null);
  const roofRef = useRef(null);
  const glowRef = useRef(null);
  const progressRef = useRef(null);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".way-eyebrow", { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 75%" } });

      gsap.fromTo(".way-heading", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 70%" } });

      gsap.fromTo(".way-intro", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.1, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 68%" } });

      gsap.fromTo(".way-stage", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ".way-stages", start: "top 80%" } });

      gsap.to(progressRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".way-stages",
          start: "top 35%",
          end: "bottom 65%",
          scrub: true,
        },
      });

      const stageTriggers = gsap.utils.toArray(".way-stage");

      stageTriggers.forEach((stage, index) => {
        ScrollTrigger.create({
          trigger: stage,
          start: "top 55%",
          end: "bottom 55%",
          onEnter: () => setActiveStage(index),
          onEnterBack: () => setActiveStage(index),
        });
      });

      ScrollTrigger.create({
        trigger: ".way-visual-wrap",
        start: "top 15%",
        end: "bottom 85%",
        pin: visualRef.current,
        pinSpacing: false,
      });

      gsap.to(".way-bg-grid", {
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

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const progress = activeStage / (stages.length - 1);

    const tl = gsap.timeline({
      defaults: {
        duration: 0.8,
        ease: "power3.out",
      },
    });

    tl.to(floorRef.current, {
      y: progress * 18,
      opacity: Math.max(0.35, progress),
    }, 0);

    tl.to(structureRef.current, {
      scaleY: 0.25 + progress * 0.75,
      transformOrigin: "bottom center",
      opacity: 0.2 + progress * 0.8,
    }, 0);

    tl.to(glassRef.current, {
      opacity: Math.max(0.05, progress * 0.7),
      scale: 0.9 + progress * 0.1,
    }, 0);

    tl.to(roofRef.current, {
      y: (1 - progress) * 35,
      opacity: Math.max(0, (progress - 0.45) * 1.8),
      rotateX: (1 - progress) * 18,
    }, 0);

    tl.to(buildingRef.current, {
      y: -progress * 12,
      scale: 0.92 + progress * 0.08,
    }, 0);

    tl.to(glowRef.current, {
      opacity: progress * 0.75,
      scale: 0.8 + progress * 0.4,
    }, 0);

  }, [activeStage]);

  return (
    <section ref={sectionRef} id="buldcontx-way" className="relative overflow-hidden bg-[#f5f4ee] px-5 py-28 text-[#10232d] sm:px-8 lg:px-16 lg:py-40">
      <div className="way-bg-grid pointer-events-none absolute inset-0 opacity-[0.35] bg-[linear-gradient(rgba(21,95,134,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(21,95,134,.05)_1px,transparent_1px)] bg-size-[70px_70px]" />

      <div className="pointer-events-none absolute -right-40 top-20 size-96 rounded-full bg-[#176f5b]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <div className="way-eyebrow mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#176f5b]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#155f86]">08 / The BuldContx Way</span>
            </div>

            <h2 className="way-heading max-w-5xl text-5xl font-semibold leading-[.9] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              From the first line
              <span className="block text-[#176f5b]">to the final key.</span>
            </h2>
          </div>

          <p className="way-intro max-w-xl text-base leading-7 text-[#647781] sm:text-lg">
            One connected journey from understanding your idea to delivering the finished home. Every stage has a purpose, and every detail moves the project forward.
          </p>
        </div>

        <div className="way-content mt-20 grid lg:grid-cols-[.9fr_1.1fr]">
          <div className="way-stages relative pb-20 lg:pb-40">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-[#10232d]/10 sm:block">
              <div ref={progressRef} className="absolute left-0 top-0 h-0 w-px bg-[#176f5b]" />
            </div>

            <div className="space-y-4 sm:space-y-0">
              {stages.map((stage, index) => (
                <StageCard key={stage.number} stage={stage} index={index} active={activeStage === index} onClick={() => setActiveStage(index)} />
              ))}
            </div>
          </div>

          <div className="way-visual-wrap relative min-h-162.5 lg:min-h-0">
            <div ref={visualRef} className="relative flex h-155 items-center justify-center lg:h-175">
              <BuildingVisual buildingRef={buildingRef} floorRef={floorRef} structureRef={structureRef} glassRef={glassRef} roofRef={roofRef} glowRef={glowRef} activeStage={activeStage} />

              <div className="absolute bottom-10 left-1/2 w-[85%] -translate-x-1/2 text-center">
                <div className="mb-4 flex items-center justify-center gap-3">
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#647781]">{stages[activeStage].number}</span>
                  <span className="h-px w-8 bg-[#176f5b]" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#176f5b]">{stages[activeStage].short}</span>
                </div>

                <p className="font-[Space_Grotesk] text-2xl font-semibold tracking-[-0.04em] text-[#10232d] sm:text-3xl">{stages[activeStage].title}</p>
              </div>

              <div className="absolute right-4 top-10 hidden font-mono text-[8px] uppercase tracking-[0.25em] text-[#647781]/50 sm:block">
                BULD CONTX / PROCESS SYSTEM
              </div>

              <div className="absolute bottom-16 left-4 hidden font-mono text-[8px] uppercase tracking-[0.25em] text-[#647781]/50 sm:block">
                SCROLL / BUILD
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#10232d]/10 pt-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#176f5b]">The result</p>
              <p className="mt-2 text-lg font-medium tracking-[-0.02em] text-[#10232d]">A clearer journey from idea to home.</p>
            </div>

            <a href="#packages" className="group inline-flex items-center gap-3 text-sm font-semibold text-[#155f86]">
              Explore construction packages
              <span className="grid size-9 place-items-center rounded-full border border-[#155f86]/20 transition-all duration-300 group-hover:bg-[#155f86] group-hover:text-white">
                <ArrowUpRight size={15} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function StageCard({ stage, index, active, onClick }) {
  const Icon = stage.icon;

  return (
    <button onClick={onClick} className={`way-stage group relative w-full text-left sm:min-h-37.5 sm:pl-14 ${active ? "opacity-100" : "opacity-45 hover:opacity-80"}`}>
      <div className={`absolute left-0 top-6 hidden size-9 place-items-center rounded-full border transition-all duration-500 sm:grid ${active ? "border-[#176f5b] bg-[#176f5b] text-white shadow-[0_0_0_7px_rgba(23,111,91,.08)]" : "border-[#10232d]/15 bg-[#f5f4ee] text-[#647781]"}`}>
        <Icon size={15} strokeWidth={1.7} />
      </div>

      <div className={`rounded-3xl border p-6 transition-all duration-500 sm:border-0 sm:p-0 ${active ? "border-[#176f5b]/15 bg-white shadow-[0_15px_50px_rgba(16,35,45,.06)] sm:bg-transparent sm:shadow-none" : "border-[#10232d]/10 bg-white/40 sm:bg-transparent"}`}>
        <div className="flex items-start justify-between gap-5">
          <div>
            <span className={`font-mono text-[9px] uppercase tracking-[0.25em] ${active ? "text-[#176f5b]" : "text-[#647781]"}`}>{stage.number} / {stage.short}</span>
            <h3 className={`mt-3 font-[Space_Grotesk] text-2xl font-semibold tracking-[-0.04em] transition-colors ${active ? "text-[#10232d]" : "text-[#60717a]"}`}>{stage.title}</h3>
          </div>

          <ArrowDown size={17} className={`mt-1 transition-all duration-300 ${active ? "-rotate-45 text-[#176f5b]" : "text-[#647781]/40"}`} />
        </div>

        <p className={`mt-4 max-w-md text-sm leading-6 transition-all duration-500 ${active ? "text-[#647781]" : "text-[#647781]/70"}`}>{stage.description}</p>
      </div>
    </button>
  );
}

function BuildingVisual({ buildingRef, floorRef, structureRef, glassRef, roofRef, glowRef, activeStage }) {
  const progress = activeStage / (stages.length - 1);

  return (
    <div ref={buildingRef} className="relative h-117.5 w-[90%] max-w-150 transition-transform">
      <div ref={glowRef} className="absolute left-1/2 top-[48%] size-70 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#39a989]/20 opacity-0 blur-[80px]" />

      <div ref={floorRef} className="absolute bottom-17.5 left-1/2 h-6 w-[78%] -translate-x-1/2 -skew-x-12 rounded-sm border border-[#155f86]/30 bg-[#155f86]/10 shadow-[0_25px_60px_rgba(21,95,134,.12)]" />

      <div ref={structureRef} className="absolute bottom-22 left-1/2 h-57.5 w-[68%] -translate-x-1/2 origin-bottom">
        <div className="absolute inset-x-0 bottom-0 h-full border-x-2 border-t-2 border-[#155f86]/45 bg-[#155f86]/[0.035]" />
        <div className="absolute bottom-0 left-[18%] h-full w-2 bg-[#176f5b]/70" />
        <div className="absolute bottom-0 right-[18%] h-full w-2 bg-[#176f5b]/70" />
        <div className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 bg-[#176f5b]/50" />
        <div className="absolute left-0 top-[38%] h-2 w-full bg-[#155f86]/45" />
      </div>

      <div ref={glassRef} className="absolute bottom-25 left-1/2 h-36.25 w-[62%] -translate-x-1/2 border border-[#155f86]/30 bg-[#6da6c2]/10">
        <div className="absolute inset-y-0 left-[25%] w-px bg-[#155f86]/25" />
        <div className="absolute inset-y-0 left-[50%] w-px bg-[#155f86]/25" />
        <div className="absolute inset-y-0 left-[75%] w-px bg-[#155f86]/25" />
        <div className="absolute inset-x-0 top-[50%] h-px bg-[#155f86]/20" />
      </div>

      <div ref={roofRef} className="absolute left-1/2 top-28.75 h-23.75 w-[72%] -translate-x-1/2 opacity-0">
        <div className="absolute bottom-0 left-1/2 h-3 w-full -translate-x-1/2 -skew-x-12 border border-[#10232d]/30 bg-[#10232d]/10" />
        <div className="absolute bottom-3 left-[10%] h-20 w-2 rotate-58 bg-[#10232d]/50" />
        <div className="absolute bottom-3 right-[10%] h-20 w-2 rotate-[-58deg] bg-[#10232d]/50" />
        <div className="absolute bottom-14.5 left-1/2 h-2 w-[70%] -translate-x-1/2 rotate-0 bg-[#10232d]/35" />
      </div>

      <div className="absolute bottom-9.5 left-1/2 h-px w-[92%] -translate-x-1/2 bg-[#10232d]/10" />

      <div className="absolute bottom-5 left-[8%] font-mono text-[8px] uppercase tracking-[0.25em] text-[#647781]/50">01 / Foundation</div>
      <div className="absolute right-[8%] top-13.75 font-mono text-[8px] uppercase tracking-[0.25em] text-[#647781]/50">BULD / {String(activeStage + 1).padStart(2, "0")}</div>
    </div>
  );
}