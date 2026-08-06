import { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import Home1 from "../assets/Home1.webp";
import Home2 from "../assets/Home2.webp";
import Home3 from "../assets/decor2.webp";
import Home4 from "../assets/kitchen1.webp";

/* ============================================================
   HERO SLIDES
============================================================ */

const slides = [
  {
    image: Home1,
    eyebrow: "CRAFTED FOR MODERN LIVING",
    title: "Elegant",
    highlight: "Living Spaces",
    description:
      "Transform your TV lounge into a refined living space with precision-crafted woodwork, timeless details and modern CNC design.",
    position: "center",
  },

  {
    image: Home2,
    eyebrow: "DESIGNED AROUND YOU",

    highlight: "Wardrobe Design",
    description:
      "Beautifully crafted wardrobes designed to bring together functionality, intelligent storage and elegant interior detailing.",
    position: "center",
  },

  {
    image: Home3,
    eyebrow: "DETAILS THAT INSPIRE",
    title: "Artful",
    highlight: "Storage",
    description:
      "Custom bookshelves and display spaces crafted to showcase your books, décor and memories with sophisticated design.",
    position: "center",
  },

  {
    image: Home4,
    eyebrow: "PRECISION MEETS FUNCTION",
    title: "Modern",
    highlight: "Kitchens",
    description:
      "Experience a kitchen designed with precision, premium craftsmanship and practical details made for everyday living.",
    position: "center",
  },
];

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
const [showWhatsapp, setShowWhatsapp] = useState(true);
  const timeoutRef = useRef(null);

  /* ============================================================
     AUTOMATIC SLIDER
  ============================================================ */

  useEffect(() => {
    const interval = setInterval(() => {
      setIsChanging(true);

      timeoutRef.current = setTimeout(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
        setIsChanging(false);
      }, 450);
    }, 3000);

    return () => {
      clearInterval(interval);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  

  useEffect(() => {
  const handleScroll = () => {
    setShowWhatsapp(window.scrollY < 80);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  /* ============================================================
     MANUAL SLIDE CHANGE
  ============================================================ */

  const changeSlide = (index) => {
    if (index === activeSlide) return;

    setIsChanging(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setActiveSlide(index);
      setIsChanging(false);
    }, 350);
  };

  const currentSlide = slides[activeSlide];

  return (
   <section
  id="home"
  className="
    relative
    isolate
    h-[500px]
    min-h-0
    w-full
    overflow-hidden
    bg-black
    text-white
    sm:h-[550px]
    lg:h-[calc(100dvh-88px)]
    lg:min-h-[600px]
  "
>
      {/* ========================================================
          BACKGROUND SLIDES
      ========================================================= */}

      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`
              absolute
              inset-0
              overflow-hidden
              transition-all
              duration-[1400ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                activeSlide === index
                  ? "scale-100 opacity-100"
                  : "scale-[1.07] opacity-0"
              }
            `}
          >
            <img
              src={slide.image}
              alt={slide.highlight}
              className={`
                h-full
                w-full
                object-cover
                ${slide.position === "center" ? "object-center" : ""}
              `}
            />
          </div>
        ))}
      </div>

      {/* ========================================================
          DARK CINEMATIC OVERLAY
      ========================================================= */}

      {/* Overall darkness */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Left readability */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/95
          via-black/70
          to-black/15
        "
      />

      {/* Bottom cinematic fade */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[42%]
          bg-gradient-to-t
          from-black/90
          via-black/40
          to-transparent
        "
      />

      {/* Top subtle fade */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-32
          bg-gradient-to-b
          from-black/45
          to-transparent
        "
      />

      {/* ========================================================
          HERO CONTENT
      ========================================================= */}

      <div
        className="
          relative
          z-10
          flex
          h-full
          items-start
          pt-[100px]
          sm:pt-[110px]
          md:items-center
          md:pt-0
          md:translate-y-7
          lg:translate-y-8
          xl:translate-y-10
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1500px]
            items-center
            px-5
            sm:px-8
            md:px-10
            lg:px-16
            xl:px-20
          "
        >
          <div
            className={`
              w-full
              max-w-[780px]
              pb-20
              sm:pb-16
              md:pb-12
              lg:pb-4
              transition-all
              duration-500
              ease-out
              ${
                isChanging
                  ? "translate-y-5 opacity-0"
                  : "translate-y-0 opacity-100"
              }
            `}
          >
            {/* ==================================================
                EYEBROW
            ================================================== */}

            <div
              className="
                mb-5
                flex
                items-center
                gap-3
                sm:mb-6
                sm:gap-4
              "
            >
              <span
                className="
                  h-px
                  w-7
                  shrink-0
                  bg-[#d4a762]
                  sm:w-11
                "
              />

              <p
                className="
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.28em]
                  text-[#d4a762]
                  sm:text-[10px]
                  sm:tracking-[0.4em]
                  md:text-[11px]
                "
              >
                {currentSlide.eyebrow}
              </p>
            </div>

            {/* ==================================================
                MAIN HEADING
            ================================================== */}

            <h1
              className="
                font-light
                leading-[0.9]
                tracking-[-0.045em]
              "
            >
              <span
                className="
                  block
                  text-[48px]
                  sm:text-[62px]
                  md:text-[78px]
                  lg:text-[96px]
                  xl:text-[108px]
                "
              >
                {currentSlide.title}
              </span>

              <span
                className="
                  mt-2
                  block
                  text-[44px]
                  font-medium
                  text-[#d4a762]
                  sm:mt-2
                  sm:text-[60px]
                  md:text-[76px]
                  lg:text-[94px]
                  xl:text-[106px]
                "
              >
                {currentSlide.highlight}
              </span>
            </h1>

            {/* ==================================================
                DESCRIPTION
            ================================================== */}

            <p
              className="
                mt-6
                max-w-[620px]
                text-[13px]
                font-light
                leading-6
                text-white/75
                sm:mt-7
                sm:text-[15px]
                sm:leading-7
                md:mt-8
                md:text-[17px]
                md:leading-8
              "
            >
              {currentSlide.description}
            </p>

            {/* ==================================================
                BUTTONS
            ================================================== */}

            <div
              className="
                mt-7
                flex
                flex-wrap
                items-center
                gap-3
                sm:mt-8
                sm:gap-4
              "
            >
              {/* Primary */}
              <a
                href="/Products"
                className="
                  group
                  flex
                  min-h-[46px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#d4a762]
                  px-5
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-[#17100A]
                  shadow-lg
                  shadow-black/20
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#e4ba7a]
                  hover:shadow-xl
                  sm:min-h-[52px]
                  sm:px-7
                  sm:text-[9px]
                  md:px-8
                  md:text-[10px]
                "
              >
                <span>Explore Products</span>

                <FiArrowRight
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>

              {/* Secondary */}
              <a
                href="/about"
                className="
                  flex
                  min-h-[46px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#d4a762]/60
                  bg-black/10
                  px-6
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.24em]
                  text-[#d4a762]
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#d4a762]
                  hover:bg-[#d4a762]/10
                  sm:min-h-[52px]
                  sm:px-8
                  sm:text-[9px]
                  md:text-[10px]
                "
              >
                About
              </a>
            </div>

            {/* ==================================================
                SMALL BRAND TEXT
            ================================================== */}

            <p
              className="
                mt-5
                text-[7px]
                uppercase
                tracking-[0.25em]
                text-white/40
                sm:mt-6
                sm:text-[9px]
                sm:tracking-[0.34em]
              "
            >
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================
          SLIDER NAVIGATION
      ========================================================= */}

      <div
        className="
          absolute
          bottom-6
          left-1/2
          z-20
          flex
          -translate-x-1/2
          items-center
          gap-1.5
          sm:bottom-7
          sm:gap-2
        "
      >
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => changeSlide(index)}
            aria-label={`Show ${slide.highlight}`}
            className="
              group
              flex
              h-5
              items-center
              justify-center
            "
          >
            <span
              className={`
                block
                h-[3px]
                rounded-full
                transition-all
                duration-500
                ${
                  activeSlide === index
                    ? "w-8 bg-[#d4a762] sm:w-10"
                    : "w-4 bg-white/30 group-hover:bg-white/60 sm:w-5"
                }
              `}
            />
          </button>
        ))}
      </div>

      {/* ========================================================
          SLIDE COUNTER
      ========================================================= */}

      <div
        className="
          absolute
          bottom-6
          right-5
          z-20
          hidden
          items-center
          gap-3
          sm:flex
          lg:bottom-33
          lg:right-10
          xl:right-16
        "
      >
        <span
          className="
            text-[9px]
            font-medium
            tracking-[0.3em]
            text-[#d4a762]
          "
        >
          0{activeSlide + 1}
        </span>

        <span className="h-px w-7 bg-white/25" />

        <span
          className="
            text-[9px]
            tracking-[0.3em]
            text-white/40
          "
        >
          0{slides.length}
        </span>
      </div>

      {/* ========================================================
          DESKTOP SIDE DETAIL
      ========================================================= */}

      <div
        className="
          absolute
          bottom-8
          left-5
          z-20
          hidden
          lg:block
          lg:left-10
          xl:left-16
        "
      >
      </div>

      
{/* ========================================================
    PROFESSIONAL WHATSAPP BUTTON
======================================================== */}
{/* ========================================================
    WHATSAPP - HOME HERO ONLY
======================================================== */}

<a
  href="https://wa.me/923054449894"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
  className={`
    absolute
    right-4
    bottom-5
    z-[50]

    sm:right-6
    sm:bottom-6

    md:right-8
    md:bottom-8

    lg:right-10
    lg:bottom-10

    flex
    h-12
    w-12

    sm:h-14
    sm:w-14

    lg:h-16
    lg:w-16

    items-center
    justify-center

    rounded-full
    bg-[#25D366]

    text-white

    shadow-[0_8px_25px_rgba(0,0,0,0.35)]

    transition-all
    duration-300

    hover:scale-110

    ${
      showWhatsapp
        ? "visible opacity-100"
        : "pointer-events-none invisible opacity-0"
    }
  `}
>
  {/* Pulse */}
  <span
    className="
      absolute
      inset-0
      rounded-full
      bg-[#25D366]
      opacity-30
      animate-ping
    "
  />

  {/* WhatsApp Icon */}
  <FaWhatsapp
    className="
      relative
      z-10
      text-[26px]
      sm:text-[30px]
      lg:text-[34px]
    "
  />
</a>
    </section>
  );
}

export default Home;