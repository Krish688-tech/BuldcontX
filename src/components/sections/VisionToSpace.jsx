import { motion } from "framer-motion";
import { ArrowDownRight, Ruler, Layers3, Box, Hammer } from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Planning",
    description: "We begin with your requirements, site dimensions, lifestyle and vision.",
    icon: Ruler,
  },
  {
    number: "02",
    title: "2D Drawings",
    description: "Precise floor plans, elevations and technical drawings turn ideas into structure.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "3D Visualization",
    description: "See your future home before construction begins with detailed 3D views.",
    icon: Box,
  },
  {
    number: "04",
    title: "Construction",
    description: "From foundation to finishing, we turn the approved design into reality.",
    icon: Hammer,
  },
];

export default function VisionToSpace() {
  return (
    <section id="services" className="relative w-full max-w-full overflow-hidden bg-[#f7f7f2] px-4 py-20 sm:px-6 sm:py-24 md:px-8 lg:px-12 lg:py-32 xl:px-16 xl:py-40">
      {/* BACKGROUND GRID */}

      <div className="pointer-events-none absolute inset-0 max-w-full opacity-[0.28] bg-[linear-gradient(rgba(21,95,134,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(21,95,134,0.06)_1px,transparent_1px)] bg-size-[50px_50px] sm:bg-size-[70px_70px]" />

      {/* MAIN CONTENT */}

      <div className="relative z-10 mx-auto w-full max-w-7xl min-w-0">
        <div className="grid min-w-0 gap-12 md:gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* LEFT CONTENT */}

          <div className="min-w-0">
            <div className="mb-6 flex min-w-0 items-center gap-2.5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#155f86] sm:mb-7 sm:gap-3 sm:text-[10px] sm:tracking-[0.28em]">
              <span className="h-px w-7 shrink-0 bg-[#43a58b] sm:w-10" />
              <span className="min-w-0">02 / From idea to space</span>
            </div>

            <h2 className="max-w-full wrap-break-word font-[Space_Grotesk] text-[3rem] font-semibold leading-[0.94] tracking-[-0.055em] text-[#10232d] sm:text-5xl md:text-6xl lg:max-w-3xl lg:text-[5.5rem]">
              A house doesn't
              <span className="block text-[#176f5b]">begin with walls.</span>
            </h2>

            <p className="mt-6 max-w-full text-[15px] leading-6 text-[#526875] sm:mt-8 sm:max-w-xl sm:text-base sm:leading-7 md:text-lg">
              It begins with an idea. We turn that idea into a carefully planned space through drawings, visualization and construction.
            </p>

            <motion.button
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-flex max-w-full items-center justify-center gap-2.5 rounded-full border border-[#155f86]/20 bg-white px-5 py-3 text-xs font-medium text-[#155f86] shadow-[0_10px_35px_rgba(16,35,45,0.06)] sm:mt-9 sm:gap-3 sm:px-6 sm:py-3.5 sm:text-sm"
            >
              <span>Discover our process</span>
              <ArrowDownRight size={17} className="shrink-0" />
            </motion.button>
          </div>

          {/* PROCESS STAGES */}

          <div className="min-w-0">
            <div className="grid w-full min-w-0 grid-cols-1 gap-x-6 gap-y-6 border-t border-[#10232d]/10 pt-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8 sm:pt-7">
              {stages.map((stage) => {
                const Icon = stage.icon;

                return (
                  <motion.div
                    key={stage.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: Number(stage.number) * 0.08 }}
                    className="group min-w-0 border-b border-[#10232d]/10 pb-6 sm:pb-7"
                  >
                    <div className="mb-4 flex items-center justify-between sm:mb-5">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-[#43a58b] sm:text-[11px]">
                        {stage.number}
                      </span>

                      <Icon size={18} strokeWidth={1.5} className="shrink-0 text-[#155f86] transition-transform duration-300 group-hover:rotate-12" />
                    </div>

                    <h3 className="wrap-break-word font-[Space_Grotesk] text-lg font-semibold text-[#10232d] sm:text-xl">
                      {stage.title}
                    </h3>

                    <p className="mt-2.5 max-w-full wrap-break-word text-[13px] leading-5 text-[#647984] sm:mt-3 sm:text-sm sm:leading-6">
                      {stage.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}