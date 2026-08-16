import { useEffect, useState } from "react";
import { Menu, ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "../../data/navigation";
import { scrollToSection } from "../../lib/scroll";

export default function Navbar() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 90);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <motion.header
        animate={{
          backgroundColor: compact
            ? "rgba(247, 247, 242, 0.38)"
            : "rgba(247, 247, 242, 0)",
          backdropFilter: compact ? "blur(16px)" : "blur(0px)",
          WebkitBackdropFilter: compact ? "blur(16px)" : "blur(0px)",
          borderColor: compact
            ? "rgba(16, 35, 45, 0.08)"
            : "rgba(255,255,255,0)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 w-full border-b"
      >
        <div className="flex h-16 w-full items-center justify-between px-4 sm:h-17 sm:px-8 lg:px-12 xl:px-16">
          {/* LOGO */}

          <button
            onClick={() => go("home")}
            className="flex shrink-0 items-center gap-2.5 text-left sm:gap-3"
          >
            <img
              src="/apple-touch-icon.png"
              alt="BuldContX"
              className="size-8 rounded-full object-cover sm:size-9"
            />

            <span className="font-display text-base font-bold tracking-tight text-ink sm:text-lg">
              buldcontx
            </span>
          </button>

          {/* DESKTOP NAVIGATION */}

          {!compact && (
            <nav className="ml-12 hidden items-center gap-7 lg:flex xl:ml-20 xl:gap-8">
              {NAV_ITEMS.slice(1, -1).map((item) => (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  className="whitespace-nowrap text-xs font-semibold text-ink/60 transition hover:text-blue"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}

          {/* DESKTOP CTA */}

          {!compact && (
            <button
              onClick={() => go("contact")}
              className="ml-auto mr-3 hidden items-center gap-2 rounded-full bg-blue px-5 py-2.5 text-xs font-bold text-white transition hover:bg-blue-dark lg:flex"
            >
              Start a Project
              <ArrowUpRight size={14} />
            </button>
          )}

          {/* HAMBURGER
              Mobile: always visible
              Desktop: visible after scroll
          */}

          <button
            onClick={() => setOpen(true)}
            className={`${compact ? "flex" : "lg:hidden flex"} size-9 shrink-0 items-center justify-center rounded-full bg-ink text-white shadow-md sm:size-10`}
            aria-label="Open menu"
          >
            <Menu size={18} strokeWidth={2} />
          </button>
        </div>
      </motion.header>

      {/* FULL SCREEN MENU */}

      {/* FULL SCREEN MENU */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 94% 7%)" }}
            animate={{ clipPath: "circle(150% at 94% 7%)" }}
            exit={{ clipPath: "circle(0% at 94% 7%)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-60 overflow-hidden bg-[#10232d] text-white"
          >
            <div className="mx-auto flex min-h-full max-w-7xl flex-col px-6 py-5 sm:px-10 sm:py-7 lg:px-16 lg:py-8">
              {/* MENU HEADER */}

              <div className="flex items-center justify-between">
                <motion.button
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  onClick={() => go("home")}
                  className="font-display text-xl font-bold sm:text-2xl"
                >
                  buld<span className="text-[#5EC8BE]">contx</span>
                </motion.button>

                <motion.button
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  onClick={() => setOpen(false)}
                  className="grid size-10 place-items-center rounded-full border border-white/15 transition hover:border-white/40 hover:bg-white/10 sm:size-11"
                  aria-label="Close menu"
                >
                  <X size={21} />
                </motion.button>
              </div>

              {/* MENU ITEMS */}

              <nav className="my-auto grid gap-3 py-10 sm:gap-4 sm:py-16 lg:gap-3 lg:py-12">
                {NAV_ITEMS.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 45 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{
                      delay: 0.22 + index * 0.07,
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onClick={() => go(item.id)}
                    className="group relative flex w-full items-baseline gap-3 pb-3 text-left sm:gap-5 sm:pb-4"
                  >
                    {/* NUMBER */}

                    <span className="mono w-5 shrink-0 text-[8px] text-[#5EC8BE] sm:w-6 sm:text-[9px]">
                      0{index + 1}
                    </span>

                    {/* LABEL + ARROW */}

                    <span className="relative flex items-center">
                      <span className="font-display text-[clamp(2.2rem,7vw,5rem)] font-semibold leading-[0.9] tracking-[-0.055em] transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:scale-[1.035] group-hover:text-[#5EC8BE] sm:text-[clamp(2.8rem,7vw,5.5rem)] lg:text-[clamp(2.8rem,5vw,5rem)]">
                        {item.label}
                      </span>

                      {/* ARROW */}

                      <span className="ml-3 -translate-x-2 text-[#5EC8BE] opacity-0 transition-all duration-300 ease-out group-hover:translate-x-2 group-hover:opacity-100 sm:ml-4">
                        <ArrowUpRight
                          size={26}
                          strokeWidth={1.5}
                          className="sm:size-7"
                        />
                      </span>
                    </span>

                    {/* FULL WIDTH UNDERLINE */}

                    <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[#5EC8BE] transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
                  </motion.button>
                ))}
              </nav>
              {/* MENU FOOTER */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex flex-col gap-2 border-t border-white/10 py-5 text-[9px] text-white/40 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:text-xs"
              >
                <span>COMPLETE HOME CONSTRUCTION</span>
                <span>PLAN · DESIGN · BUILD · HANDOVER</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
