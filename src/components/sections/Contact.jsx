import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";
import { gsap } from "../../lib/gsap";

const projectTypes = [
  "New Home Construction",
  "Home Planning & 2D Drawing",
  "3D House Visualization",
  "Renovation / Extension",
  "Commercial Construction",
  "Other",
];

export default function Contact() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const [projectOpen, setProjectOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    type: "",
    location: "",
    message: "",
  });

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-eyebrow",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
          },
        },
      );

      gsap.fromTo(
        ".contact-heading",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
          },
        },
      );

      gsap.fromTo(
        ".contact-copy",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 68%",
          },
        },
      );

      gsap.fromTo(
        ".contact-form",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 65%",
          },
        },
      );

      gsap.fromTo(
        ".contact-info-item",
        { x: -25, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-info",
            start: "top 80%",
          },
        },
      );

      gsap.to(gridRef.current, {
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

  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const phone = "917339693861";

    const message = `Hi BuldContx,

I'd like to discuss my construction project.

Name: ${form.name}
Phone / WhatsApp: ${form.phone}
Project Type: ${form.type}
Site Location: ${form.location}

Project Details:
${form.message}

Please contact me regarding my project.

Thank you.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-[#f5f4ee] px-5 py-28 text-[#10232d] sm:px-8 lg:px-16 lg:py-40"
    >
      {/* ARCHITECTURAL BACKGROUND */}

      <div
        ref={gridRef}
        className="pointer-events-none absolute inset-0 opacity-[0.4] bg-[linear-gradient(rgba(21,95,134,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(21,95,134,.05)_1px,transparent_1px)] bg-size-[70px_70px]"
      />

      <div className="pointer-events-none absolute -left-40 bottom-0 size-125 rounded-full bg-[#176f5b]/5 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-20 size-125 rounded-full bg-[#155f86]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}

        <div className="grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <div>
            <div className="contact-eyebrow mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#176f5b]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#155f86]">
                07 / Start Your Project
              </span>
            </div>

            <h2 className="contact-heading max-w-5xl text-5xl font-semibold leading-[.88] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              Let's build
              <span className="block text-[#176f5b]">what's next.</span>
            </h2>
          </div>

          <p className="contact-copy max-w-xl text-base leading-7 text-[#647781] sm:text-lg">
            Have a plot, a plan or simply an idea? Tell us what you're
            imagining. We'll help you understand the next step.
          </p>
        </div>

        {/* MAIN CONTACT AREA */}

        <div className="mt-20 grid gap-8 lg:grid-cols-[.65fr_1.35fr] lg:items-start">
          {/* LEFT */}

          <div className="contact-info lg:sticky lg:top-32">
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#647781]">
              From planning and 2D drawings to 3D visualization and complete
              construction, BuldContx can help move your project forward.
            </p>

            <div className="mt-10 space-y-5">
              <ContactInfo
                icon={Phone}
                label="Phone / WhatsApp"
                value="+91 7339693861"
              />

              <ContactInfo
                icon={Mail}
                label="Email"
                value="BuldContX@gmail.com"
              />

              <ContactInfo
                icon={MapPin}
                label="Location"
                value="Tamil Nadu, India"
              />
            </div>

            <div className="mt-12 rounded-3xl border border-[#10232d]/10 bg-white p-6">
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#647781]">
                What we can discuss
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Planning",
                  "2D Drawings",
                  "3D Design",
                  "Estimation",
                  "Construction",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#10232d]/10 bg-[#f5f4ee] px-3 py-2 text-[10px] text-[#647781]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* FORM */}

          <form
            onSubmit={handleSubmit}
            className="contact-form rounded-4xl border border-[#10232d]/10 bg-white p-6 shadow-[0_30px_80px_rgba(16,35,45,.07)] sm:p-8 lg:p-10"
          >
            <>
              <div className="mb-10 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#176f5b]">
                    Project enquiry
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#10232d]">
                    Tell us about your project.
                  </h3>
                </div>

                <span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-[#647781]/50 sm:block">
                  BULD / 10
                </span>
              </div>

              <div className="grid gap-7 sm:grid-cols-2">
                <Field
                  label="Your Name"
                  value={form.name}
                  onChange={(value) => updateField("name", value)}
                  placeholder="Enter your name"
                />

                <Field
                  label="Phone / WhatsApp"
                  value={form.phone}
                  onChange={(value) => updateField("phone", value)}
                  placeholder="Enter your number"
                  type="tel"
                />

                <div className="sm:col-span-2">
                  <label className="mb-3 block font-mono text-[9px] uppercase tracking-[0.22em] text-[#647781]">
                    Project Type
                  </label>

                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setProjectOpen((prev) => !prev)}
                      className={`flex w-full items-center justify-between border-b py-4 text-left transition-all duration-300 ${
                        projectOpen ? "border-[#176f5b]" : "border-[#10232d]/10"
                      }`}
                    >
                      <span
                        className={
                          form.type
                            ? "text-base text-[#10232d]"
                            : "text-base text-[#aeb9be]"
                        }
                      >
                        {form.type || "Select your project type"}
                      </span>

                      <ChevronDown
                        size={18}
                        strokeWidth={1.7}
                        className={`shrink-0 text-[#155f86] transition-transform duration-300 ${
                          projectOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {projectOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8, scaleY: 0.96 }}
                          animate={{ opacity: 1, y: 0, scaleY: 1 }}
                          exit={{ opacity: 0, y: -8, scaleY: 0.96 }}
                          transition={{
                            duration: 0.22,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          style={{ transformOrigin: "top" }}
                          className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-2xl border border-[#10232d]/10 bg-white/95 p-2 shadow-[0_20px_60px_rgba(16,35,45,0.14)] backdrop-blur-xl"
                        >
                          {projectTypes.map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => {
                                setForm((prev) => ({
                                  ...prev,
                                  type,
                                }));
                                setProjectOpen(false);
                              }}
                              className={`group flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition-all duration-200 ${
                                form.type === type
                                  ? "bg-[#176f5b]/10 text-[#176f5b]"
                                  : "text-[#526875] hover:bg-[#f5f4ee] hover:text-[#155f86]"
                              }`}
                            >
                              <span>{type}</span>

                              {form.type === type && (
                                <Check
                                  size={16}
                                  strokeWidth={2}
                                  className="text-[#176f5b]"
                                />
                              )}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <Field
                  label="Site Location"
                  value={form.location}
                  onChange={(value) => updateField("location", value)}
                  placeholder="City / District"
                />

                <div className="hidden sm:block" />

                <div className="sm:col-span-2">
                  <label className="mb-3 block font-mono text-[9px] uppercase tracking-[0.22em] text-[#647781]">
                    Tell us about your project
                  </label>

                  <textarea
                    value={form.message}
                    onChange={(event) =>
                      updateField("message", event.target.value)
                    }
                    placeholder="Tell us about your plot, area, requirements or anything you already have in mind..."
                    rows={5}
                    className="w-full resize-none border-b border-[#10232d]/15 bg-transparent py-3 text-sm leading-7 text-[#10232d] outline-none transition-colors placeholder:text-[#647781]/45 focus:border-[#176f5b]"
                  />
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-5 border-t border-[#10232d]/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xs text-[10px] leading-5 text-[#647781]">
                  Your project details help us understand how to guide you
                  through the next step.
                </p>

                <div className="flex flex-col items-center">
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#155f86] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#176f5b]"
                  >
                    Start A Conversation
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </button>

                  <p className="mt-2 text-[10px] font-medium tracking-wide text-[#8a9499]">
                    Continue on WhatsApp
                  </p>
                </div>
              </div>
            </>
          </form>
        </div>

        {/* FINAL LINE */}

        <div className="mt-16 border-t border-[#10232d]/10 pt-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#647781]">
              Planning · Design · Construction
            </p>

            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#647781]/60">
              BULD CONTX · SINCE 1991
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, placeholder, type = "text" }) {
  return (
    <div>
      <label className="mb-3 block font-mono text-[9px] uppercase tracking-[0.22em] text-[#647781]">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required
        className="w-full border-b border-[#10232d]/15 bg-transparent py-3 text-sm text-[#10232d] outline-none transition-colors placeholder:text-[#647781]/45 focus:border-[#176f5b]"
      />
    </div>
  );
}

function ContactInfo({ icon: Icon, label, value }) {
  return (
    <div className="contact-info-item flex items-center gap-4">
      <div className="grid size-11 shrink-0 place-items-center rounded-full border border-[#10232d]/10 bg-white text-[#176f5b]">
        <Icon size={17} strokeWidth={1.6} />
      </div>

      <div>
        <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#647781]">
          {label}
        </p>

        <p className="mt-1 text-sm font-medium text-[#10232d]">{value}</p>
      </div>
    </div>
  );
}

function SuccessState() {
  return (
    <div className="flex min-h-130 flex-col items-center justify-center text-center">
      <div className="grid size-20 place-items-center rounded-full bg-[#176f5b] text-white shadow-[0_20px_50px_rgba(23,111,91,.2)]">
        <Check size={30} />
      </div>

      <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-[#176f5b]">
        Message received
      </p>

      <h3 className="mt-4 max-w-lg text-4xl font-semibold leading-[.95] tracking-tighter text-[#10232d]">
        Your project just took its first step.
      </h3>

      <p className="mt-5 max-w-md text-sm leading-7 text-[#647781]">
        Thank you for reaching out to BuldContx. We'll get back to you to
        understand your project and discuss the next step.
      </p>
    </div>
  );
}
