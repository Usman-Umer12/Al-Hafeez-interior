
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ==========================================
  // NAVIGATION LINKS
  // ==========================================

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Products",
      href: "/products",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  // ==========================================
  // SCROLL EFFECT
  // ==========================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ==========================================
  // ESCAPE KEY
  // ==========================================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // ==========================================
  // BODY SCROLL LOCK
  // ==========================================

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ==========================================
  // CLOSE MOBILE MENU
  // ==========================================

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header
        className={`
          fixed
          left-0
          top-0
          z-[100]
          w-full
          transition-all
          duration-500
          ${
            scrolled
              ? "bg-[#120D09]/95 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl"
              : "bg-transparent"
          }
        `}
      >
        <nav
          className="
            mx-auto
            flex
            h-[76px]
            w-full
            max-w-[1500px]
            items-center
            justify-between
            px-5
            sm:px-8
            lg:h-[88px]
            lg:px-12
            xl:px-16
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}

          <Link
            to="/"
            onClick={handleNavClick}
            className="
              group
              flex
              items-center
              gap-3
              outline-none
            "
          >
            {/* Brand Name */}

            <div className="flex flex-col">
              <span
                className="
                  text-[17px]
                  font-semibold
                  leading-none
                  tracking-[0.24em]
                  text-white
                  transition-all
                  duration-300
                  group-hover:text-[#d4a762]
                  sm:text-[19px]
                "
              >
                AL-HAFIZ
              </span>
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <div
            className="
              hidden
              items-center
              gap-1
              lg:flex
            "
          >
            {navLinks.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  group
                  relative
                  px-5
                  py-3
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  transition-all
                  duration-300
                  xl:px-6
                  ${
                    index === 0
                      ? "text-[#d4a762]"
                      : "text-white/75 hover:text-white"
                  }
                `}
              >
                {item.name}

                {/* Bottom Line */}

                <span
                  className={`
                    absolute
                    bottom-1
                    left-1/2
                    h-[1px]
                    -translate-x-1/2
                    bg-[#d4a762]
                    transition-all
                    duration-300
                    ${
                      index === 0
                        ? "w-6"
                        : "w-0 group-hover:w-6"
                    }
                  `}
                />
              </Link>
            ))}
          </div>

          {/* =================================================
              DESKTOP WHATSAPP
          ================================================== */}

          <div className="hidden lg:flex">
            <a
              href="https://wa.me/923167373603"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
              className="
                group
                flex
                items-center
                gap-3
                rounded-full
                border
                border-[#d4a762]/50
                bg-[#d4a762]
                px-5
                py-3
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#1c1209]
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#e2ba7c]
                hover:shadow-xl
                xl:px-6
              "
            >
              <FaWhatsapp
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:rotate-6
                  group-hover:scale-110
                "
              />

              <span>WhatsApp</span>
            </a>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={
              open
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={open}
            className="
              relative
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-black/30
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-[#d4a762]/60
              hover:bg-[#d4a762]
              hover:text-[#1c1209]
              lg:hidden
            "
          >
            {open ? (
              <HiOutlineX size={23} />
            ) : (
              <HiOutlineMenuAlt3 size={23} />
            )}
          </button>
        </nav>

        {/* ===================================================
            MOBILE MENU
        ==================================================== */}

        <div
          className={`
            overflow-hidden
            transition-all
            duration-500
            ease-in-out
            lg:hidden
            ${
              open
                ? "max-h-[600px] opacity-100"
                : "pointer-events-none max-h-0 opacity-0"
            }
          `}
        >
          <div className="px-4 pb-5 sm:px-8">
            <div
              className="
                mx-auto
                max-w-[1500px]
                overflow-hidden
                rounded-[24px]
                border
                border-white/10
                bg-[#15100C]/95
                p-3
                shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                backdrop-blur-2xl
              "
            >
              {/* =================================================
                  MOBILE LINKS
              ================================================== */}

              <div className="space-y-1">
                {navLinks.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={handleNavClick}
                    className={`
                      group
                      flex
                      items-center
                      justify-between
                      rounded-[17px]
                      px-5
                      py-4
                      transition-all
                      duration-300
                      ${
                        index === 0
                          ? "bg-[#d4a762] text-[#1c1209]"
                          : "text-white/80 hover:bg-white/5 hover:text-[#d4a762]"
                      }
                    `}
                  >
                    <div className="flex items-center gap-4">
                      {/* Number */}

                      <span
                        className={`
                          text-[9px]
                          font-medium
                          tracking-[0.2em]
                          ${
                            index === 0
                              ? "text-[#1c1209]/50"
                              : "text-white/30"
                          }
                        `}
                      >
                        0{index + 1}
                      </span>

                      {/* Name */}

                      <span
                        className="
                          text-[12px]
                          font-medium
                          uppercase
                          tracking-[0.25em]
                        "
                      >
                        {item.name}
                      </span>
                    </div>

                    {/* Arrow */}

                    <span
                      className={`
                        text-lg
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        ${
                          index === 0
                            ? "text-[#1c1209]/60"
                            : "text-[#d4a762]"
                        }
                      `}
                    >
                      →
                    </span>
                  </Link>
                ))}
              </div>

              {/* Divider */}

              <div className="my-3 h-px bg-white/10" />

              {/* =================================================
                  MOBILE WHATSAPP
              ================================================== */}

              <a
                href="https://wa.me/923054449894"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-[17px]
                  bg-[#d4a762]
                  py-4
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#1c1209]
                  transition-all
                  duration-300
                  hover:bg-[#e2ba7c]
                "
              >
                <FaWhatsapp
                  size={19}
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <span>Chat on WhatsApp</span>
              </a>

              {/* =================================================
                  MOBILE BOTTOM TEXT
              ================================================== */}

              <div className="px-2 pb-1 pt-4 text-center">
                <p
                  className="
                    text-[7px]
                    uppercase
                    tracking-[0.35em]
                    text-white/30
                  "
                >
                  Custom Woodwork • CNC Precision • Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}