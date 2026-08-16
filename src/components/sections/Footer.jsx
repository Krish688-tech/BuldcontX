import { useEffect, useRef } from "react";
import { ArrowUpRight, Instagram, Facebook, Linkedin, Youtube, ArrowUp } from "lucide-react";
import { gsap } from "../../lib/gsap";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#why-buldcontx" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/buldcontx/", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61593479906247", icon: Facebook },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/palani-ganesan-b27a903a/", icon: Linkedin },
  { label: "X", href: "https://x.com/buldcontx", icon: "x" },
  { label: "YouTube", href: "", icon: Youtube },
];

export default function Footer() {
  const footerRef = useRef(null);
  const gridRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-eyebrow",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        logoRef.current,
        { y: 60, opacity: 0, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".footer-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left center",
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: footer,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        ".footer-item",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".footer-navigation",
            start: "top 85%",
          },
        }
      );

      gsap.to(gridRef.current, {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: footer,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, footer);

    return () => ctx.revert();
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer ref={footerRef} className="relative overflow-hidden bg-[#0b1820] px-5 pb-6 pt-24 text-white sm:px-8 lg:px-16 lg:pt-32">
      {/* ARCHITECTURAL GRID */}

      <div ref={gridRef} className="pointer-events-none absolute inset-0 opacity-[0.07] bg-[linear-gradient(rgba(109,166,194,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(109,166,194,.7)_1px,transparent_1px)] bg-size-[65px_65px]" />

      <div className="pointer-events-none absolute left-1/2 top-0 size-150 -translate-x-1/2 rounded-full bg-[#176f5b]/8 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* TOP STATEMENT */}

        <div className="footer-eyebrow mb-8 flex items-center gap-3">
          <span className="h-px w-10 bg-[#39a989]" />

          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#6da6c2]">
            BuldContx / Since 1991
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_.7fr] lg:items-end">
          <div>
            <div ref={logoRef}>
              <h2 className="font-[Space_Grotesk] text-6xl font-semibold leading-[.8] tracking-[-0.075em] sm:text-7xl lg:text-[10rem]">
                Buld
                <span className="text-[#39a989]">Contx</span>
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/45 sm:text-xl">
                Built on experience.
                <br />
                Designed for what lasts.
              </p>
            </div>
          </div>

          <div>
            <p className="max-w-md text-sm leading-7 text-white/45">
              From planning and 2D drawings to 3D visualization and complete
              construction — BuldContx brings the journey together.
            </p>

            <a
              href="#contact"
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#176f5b] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#39a989] hover:text-[#0b1820]"
            >
              Start Your Project

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* DIVIDER */}

        <div className="footer-line mt-20 h-px w-full bg-white/10" />

        {/* NAVIGATION */}

        <div className="footer-navigation grid gap-12 py-12 sm:grid-cols-2 lg:grid-cols-[1fr_.6fr_.6fr]">
          <div className="footer-item">
            <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#39a989]">
              Navigate
            </p>

            <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4">
              {footerLinks.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </div>
          </div>

          <div className="footer-item">
            <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#39a989]">
              What We Do
            </p>

            <div className="mt-6 space-y-3">
              <p className="text-sm text-white/50">Home Construction</p>
              <p className="text-sm text-white/50">2D Planning</p>
              <p className="text-sm text-white/50">3D Visualization</p>
              <p className="text-sm text-white/50">Material Estimation</p>
              <p className="text-sm text-white/50">Construction Packages</p>
            </div>
          </div>

          <div className="footer-item">
            <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#39a989]">
              Connect
            </p>

            <div className="mt-6 space-y-3">
              <a href="tel:+917339693861" className="block text-sm text-white/50 transition-colors hover:text-white">
                +91 7339693861
              </a>

              <a href="mailto:hello@buldcontx.com" className="block text-sm text-white/50 transition-colors hover:text-white">
                buldcontx@gmail.com
              </a>

              <p className="text-sm text-white/50">
                Tamil Nadu, India
              </p>
            </div>

            <div className="mt-6 flex gap-2">
              {socialLinks.map((social) => (
                <SocialButton key={social.label} {...social} />
              ))}
            </div>
          </div>
        </div>

        {/* ARCHITECTURAL SIGNATURE */}

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/2.5 p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/25">
                Construction / Planning / Design
              </p>

              <p className="mt-3 text-sm text-white/50">
                One vision. One team. One complete journey.
              </p>
            </div>

            <button
              onClick={scrollTop}
              className="group flex items-center gap-3 text-sm text-white/50 transition-colors hover:text-white"
            >
              Back to top

              <span className="grid size-9 place-items-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-[#39a989] group-hover:bg-[#39a989] group-hover:text-[#0b1820]">
                <ArrowUp size={15} />
              </span>
            </button>
          </div>
        </div>

        {/* COPYRIGHT */}

        <div className="flex flex-col justify-between gap-3 py-7 sm:flex-row sm:items-center">
          <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/25">
            © {new Date().getFullYear()} BuldContx. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25 transition-colors hover:text-white/60">
              Privacy
            </a>

            <a href="#" className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25 transition-colors hover:text-white/60">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ label, href }) {
  return (
    <a href={href} className="group flex items-center gap-2 text-sm text-white/50 transition-colors duration-300 hover:text-white">
      <span className="h-px w-0 bg-[#39a989] transition-all duration-300 group-hover:w-4" />
      {label}
    </a>
  );
}

function SocialButton({ label, href, icon: Icon }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="grid size-9 place-items-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-[#39a989]/50 hover:bg-[#39a989] hover:text-[#0b1820]"
    >
      {Icon === "x" ? (
        <svg viewBox="0 0 24 24" className="size-3.5 fill-current" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.963 6.817H1.684l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
        </svg>
      ) : (
        <Icon size={15} />
      )}
    </a>
  );
}