import { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";

const phrases = [
  "Our build.",
  "Our promise.",
  "Our craft.",
  "Our legacy.",
];

export default function TypewriterHeading() {
  const headingRef = useRef(null);
  const firstLineRef = useRef(null);
  const secondLineRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    const firstLine = firstLineRef.current;
    const secondLine = secondLineRef.current;
    const cursor = cursorRef.current;

    if (!heading || !firstLine || !secondLine || !cursor) {
      return;
    }

    // ----------------------------------------------------
    // Prevent timers from continuing after component unmount
    // ----------------------------------------------------

    let cancelled = false;
    const timers = [];

    const wait = (callback, delay) => {
      const timer = setTimeout(() => {
        if (!cancelled) {
          callback();
        }
      }, delay);

      timers.push(timer);

      return timer;
    };

    // ----------------------------------------------------
    // Initial state
    // ----------------------------------------------------

    firstLine.textContent = "";
    secondLine.textContent = "";

    gsap.set(heading, {
      opacity: 1,
      y: 0,
    });

    gsap.set(cursor, {
      opacity: 0,
    });

    // ----------------------------------------------------
    // Cursor blink
    // ----------------------------------------------------

    const startBlink = () => {
      if (cancelled) return;

      gsap.killTweensOf(cursor);

      gsap.set(cursor, {
        opacity: 1,
      });

      gsap.to(cursor, {
        opacity: 0,
        duration: 0.45,
        repeat: -1,
        yoyo: true,
        ease: "steps(1)",
      });
    };

    const stopBlink = () => {
      gsap.killTweensOf(cursor);

      gsap.set(cursor, {
        opacity: 0,
      });
    };

    // ----------------------------------------------------
    // TYPE CHARACTER BY CHARACTER
    // ----------------------------------------------------

    const typeText = (element, text, speed, onComplete) => {
      let index = 0;

      element.textContent = "";

      startBlink();

      const typeCharacter = () => {
        if (cancelled) return;

        if (index < text.length) {
          index += 1;

          // This is the important part.
          // The actual text gets shorter/longer.
          // So the cursor physically follows it.

          element.textContent = text.substring(0, index);

          wait(typeCharacter, speed);
        } else {
          if (onComplete) {
            onComplete();
          }
        }
      };

      typeCharacter();
    };

    // ----------------------------------------------------
    // BACKSPACE CHARACTER BY CHARACTER
    // ----------------------------------------------------

    const deleteText = (element, speed, onComplete) => {
      let text = element.textContent;

      startBlink();

      const deleteCharacter = () => {
        if (cancelled) return;

        if (text.length > 0) {
          text = text.substring(0, text.length - 1);

          element.textContent = text;

          wait(deleteCharacter, speed);
        } else {
          stopBlink();

          if (onComplete) {
            onComplete();
          }
        }
      };

      deleteCharacter();
    };

    // ----------------------------------------------------
    // PHRASE LOOP
    // ----------------------------------------------------

    let phraseIndex = 0;

    const typeNextPhrase = () => {
      if (cancelled) return;

      const phrase = phrases[phraseIndex];
      typeText(
        secondLine,
        phrase,
        75,
        () => {

          wait(() => {

            deleteText(
              secondLine,
              55,
              () => {

                phraseIndex =
                  (phraseIndex + 1) % phrases.length;

                wait(typeNextPhrase, 350);
              }
            );
          }, 1500);
        }
      );
    };

    // ----------------------------------------------------
    // FIRST LINE
    // ----------------------------------------------------

    typeText(
      firstLine,
      "Your vision.",
      80,
      () => {
      
        wait(() => {
          typeNextPhrase();
        }, 400);
      }
    );

    // ----------------------------------------------------
    // CLEANUP
    // ----------------------------------------------------

    return () => {
      cancelled = true;

      timers.forEach((timer) => {
        clearTimeout(timer);
      });

      gsap.killTweensOf(cursor);
    };
  }, []);

  return (
    <h1
      ref={headingRef}
      className="
        font-[Space_Grotesk]
        text-5xl
        font-semibold
        leading-[0.9]
        tracking-[-0.055em]
        text-white
        sm:text-7xl
        lg:text-[6.5rem]
      "
    >
      {/* ================================================
          FIRST LINE
      ================================================= */}

      <span
        ref={firstLineRef}
        className="block"
      />

      {/* ================================================
          SECOND LINE
      ================================================= */}

      <span className="block text-[#43a58b]">
        <span ref={secondLineRef} />

        {/* ================================================
            TYPEWRITER CURSOR
        ================================================= */}

        <span
          ref={cursorRef}
          className="
            ml-2
            inline-block
            h-[0.72em]
            w-0.75
            translate-y-[0.04em]
            bg-[#43a58b]
            align-middle
          "
        />
      </span>
    </h1>
  );
}