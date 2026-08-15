import { useRef, useState } from "react";
import { Plus, Minus, ArrowUpRight, Check } from "lucide-react";
import { gsap } from "../../lib/gsap";
import { constructionPackages } from "../../data/packages";

export default function Packages() {
  const [openItems, setOpenItems] = useState({});
  const sectionRef = useRef(null);

  const openWhatsApp = (message) => {
    const phone = "917339693861";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const toggleItem = (packageIndex, sectionTitle) => {
    const key = `${packageIndex}-${sectionTitle}`;
    const isCurrentlyOpen = openItems[key];

    setOpenItems((prev) => {
      const next = { ...prev };

      Object.keys(next).forEach((item) => {
        if (item.startsWith(`${packageIndex}-`)) delete next[item];
      });

      if (!isCurrentlyOpen) next[key] = true;

      return next;
    });
  };

  return (
    <section
      ref={sectionRef}
      id="packages"
      className="relative overflow-hidden bg-[#f5f4ee] px-5 py-24 sm:px-8 lg:px-16 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#176f5b]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#155f86]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#176f5b]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#155f86]">
                04 / Construction Packages
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[.95] tracking-tighter text-[#10232d] sm:text-5xl lg:text-7xl">
              Built with clarity.
              <span className="block text-[#176f5b]">
                Specified with confidence.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-xl text-sm leading-7 text-[#647781] sm:text-base">
              Every BuldContx construction package clearly defines the
              materials, finishes and specifications that go into your home — so
              you know exactly what you are paying for before construction
              begins.
            </p>
          </div>
        </div>

        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-y border-[#10232d]/10 py-5">
          <div className="flex items-center gap-3">
            <span className="grid size-8 place-items-center rounded-full bg-[#176f5b] text-white">
              <Check size={15} />
            </span>
            <span className="text-sm font-medium text-[#10232d]">
              Transparent material specifications
            </span>
          </div>

          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#647781]">
            Choose what fits your build
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {constructionPackages.map((pkg, index) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              packageIndex={index}
              openItems={openItems}
              toggleItem={toggleItem}
              openWhatsApp={openWhatsApp}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-[1.75rem] border border-[#10232d]/10 bg-white/70 p-6 backdrop-blur-sm sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#176f5b]">
              Not sure which package?
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-[#10232d] sm:text-2xl">
              Let's find the right build for your home.
            </h3>
          </div>

          <div className="flex shrink-0 flex-col items-center">
            <button
              onClick={() =>
                openWhatsApp(
                  "Hi BuldContx, I would like to talk to your construction expert. I would like some guidance in choosing the right construction package for my home.",
                )
              }
              className="group inline-flex items-center gap-3 rounded-full bg-[#155f86] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#10232d]"
            >
              Talk To Our Expert
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>

            <p className="mt-2 text-[10px] font-medium tracking-wide text-[#8a9499]">
              Chat on WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PackageCard({
  pkg,
  packageIndex,
  openItems,
  toggleItem,
  openWhatsApp,
}) {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, { y: -6, duration: 0.45, ease: "power3.out" });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, { y: 0, duration: 0.45, ease: "power3.out" });
  };

  const isClassic = pkg.id === "classic";

  return (
    <article
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-4xl border bg-white shadow-[0_20px_70px_rgba(16,35,45,0.06)] ${isClassic ? "border-[#176f5b]/30" : "border-[#10232d]/10"}`}
    >
      {isClassic && (
        <div className="absolute inset-x-0 top-0 h-1 bg-[#176f5b]" />
      )}

      <div
        className={`relative overflow-hidden px-7 pb-7 pt-8 ${isClassic ? "bg-[#176f5b]" : "bg-[#155f86]"}`}
      >
        <div className="absolute -right-14 -top-14 size-40 rounded-full border border-white/10" />
        <div className="absolute -right-5 -top-5 size-20 rounded-full border border-white/10" />

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/60">
              BuldContx / Build Package
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
              {pkg.name}
            </h3>
          </div>

          {pkg.badge && (
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
              {pkg.badge}
            </span>
          )}
        </div>

        <div className="relative mt-8 flex items-end gap-2">
          <span className="text-3xl font-semibold tracking-[-0.04em] text-white">
            {pkg.price}
          </span>
          <span className="mb-1 text-sm text-white/55">{pkg.unit}</span>
        </div>

        <p className="relative mt-4 max-w-sm text-sm leading-6 text-white/70">
          {pkg.description}
        </p>
      </div>

      <div className="px-6">
        {pkg.sections.map((section) => {
          const key = `${packageIndex}-${section.title}`;
          return (
            <PackageAccordion
              key={section.title}
              title={section.title}
              items={section.items}
              isOpen={!!openItems[key]}
              onClick={() => toggleItem(packageIndex, section.title)}
            />
          );
        })}
      </div>

      <div className="border-t border-[#10232d]/10 p-6">
        <button
          onClick={() =>
            openWhatsApp(
              `Hi BuldContx, I am interested in the ${pkg.name} construction package. Please share more details about the package, materials, specifications and pricing.`,
            )
          }
          className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#10232d] px-5 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#176f5b]"
        >
          Discuss This Package
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </button>

        <p className="mt-2 text-center text-[10px] font-medium tracking-wide text-[#8a9499]">
          Chat on WhatsApp
        </p>
      </div>
    </article>
  );
}

function PackageAccordion({ title, items, isOpen, onClick }) {
  const contentRef = useRef(null);
  const innerRef = useRef(null);

  const handleClick = () => {
    const content = contentRef.current;
    const inner = innerRef.current;

    if (!content || !inner) return;

    if (isOpen) {
      gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power3.inOut",
      });

      gsap.to(inner.children, {
        y: -8,
        opacity: 0,
        duration: 0.2,
        stagger: 0.025,
        ease: "power2.in",
      });
    } else {
      gsap.set(content, { height: 0, opacity: 0 });

      gsap.to(content, {
        height: inner.offsetHeight,
        opacity: 1,
        duration: 0.45,
        ease: "power3.out",
      });

      gsap.fromTo(
        inner.children,
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          stagger: 0.045,
          delay: 0.08,
          ease: "power3.out",
        },
      );
    }

    onClick();
  };

  return (
    <div className="border-b border-[#10232d]/10 last:border-b-0">
      <button
        onClick={handleClick}
        className="group flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span
          className={`text-sm font-semibold transition-colors duration-300 ${isOpen ? "text-[#176f5b]" : "text-[#10232d] group-hover:text-[#155f86]"}`}
        >
          {title}
        </span>

        <span
          className={`grid size-7 shrink-0 place-items-center rounded-full border transition-all duration-300 ${isOpen ? "rotate-0 border-[#176f5b] bg-[#176f5b] text-white" : "border-[#10232d]/15 text-[#10232d] group-hover:border-[#155f86] group-hover:text-[#155f86]"}`}
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <div ref={contentRef} className="h-0 overflow-hidden opacity-0">
        <div ref={innerRef} className="pb-5 pr-3">
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li
                key={`${item}-${index}`}
                className="flex gap-3 text-sm leading-6 text-[#71818a]"
              >
                <span className="mt-2.25 size-1.5 shrink-0 rounded-full bg-[#2aa886]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
