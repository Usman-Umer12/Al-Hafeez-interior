import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiArrowUpRight,
} from "react-icons/fi";

import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-2 w-full">
      <div
        className="
          w-full
          overflow-hidden
          bg-gradient-to-br
          from-[#5a3a1b]
          via-[#21150d]
          to-[#050403]
          text-white
        "
      >
        {/* Main Footer */}
        <div
          className="
            grid
            grid-cols-1
            gap-10
            px-6
            py-10

            sm:px-10
            sm:py-12

            lg:grid-cols-[1.5fr_1fr_1fr]
            lg:gap-20
            lg:px-16
            lg:py-14

            xl:px-24
          "
        >
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="#home"
              className="
                inline-block
                text-[21px]
                font-semibold
                tracking-[3px]
                text-[#f5eadc]
                transition
                duration-300
                hover:text-white
              "
            >
              AL-HAFIZ
            </a>

            <p
              className="
                mt-4
                max-w-[310px]
                text-[13px]
                leading-6
                text-[#b9a897]
              "
            >
              Creating timeless interiors with premium materials
              and expert craftsmanship.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/share/1LBae9QTGF/"
                aria-label="Facebook"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#8a6b4c]
                  text-[#d7c4ae]
                  transition
                  duration-300
                  hover:border-[#d7c4ae]
                  hover:bg-[#d7c4ae]
                  hover:text-[#21150d]
                "
              >
                <FaFacebookF size={13} />
              </a>

              <a
                href="https://www.instagram.com/alhafizinteriorwood?igsh=MWI5OWFneHpheXQwZw=="
                aria-label="Instagram"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#8a6b4c]
                  text-[#d7c4ae]
                  transition
                  duration-300
                  hover:border-[#d7c4ae]
                  hover:bg-[#d7c4ae]
                  hover:text-[#21150d]
                "
              >
                <FaInstagram size={14} />
              </a>

             
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="
                text-[13px]
                font-semibold
                uppercase
                tracking-[1.5px]
                text-[#ead9c5]
              "
            >
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="/"
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-1
                    text-[13px]
                    text-[#b9a897]
                    transition
                    duration-300
                    hover:text-white
                  "
                >
                  Home
                  <FiArrowUpRight
                    size={12}
                    className="
                      opacity-0
                      transition
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      group-hover:opacity-100
                    "
                  />
                </a>
              </li>

              <li>
                <a
                  href="/products"
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-1
                    text-[13px]
                    text-[#b9a897]
                    transition
                    duration-300
                    hover:text-white
                  "
                >
                  Products
                  <FiArrowUpRight
                    size={12}
                    className="
                      opacity-0
                      transition
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      group-hover:opacity-100
                    "
                  />
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-1
                    text-[13px]
                    text-[#b9a897]
                    transition
                    duration-300
                    hover:text-white
                  "
                >
                  About Us
                  <FiArrowUpRight
                    size={12}
                    className="
                      opacity-0
                      transition
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      group-hover:opacity-100
                    "
                  />
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-1
                    text-[13px]
                    text-[#b9a897]
                    transition
                    duration-300
                    hover:text-white
                  "
                >
                  Contact
                  <FiArrowUpRight
                    size={12}
                    className="
                      opacity-0
                      transition
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      group-hover:opacity-100
                    "
                  />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h3
              className="
                text-[13px]
                font-semibold
                uppercase
                tracking-[1.5px]
                text-[#ead9c5]
              "
            >
              Contact Us
            </h3>

            <div className="mt-5 space-y-4">
              <a
                href="tel:+923001234567"
                className="
                  flex
                  items-center
                  gap-3
                  text-[13px]
                  text-[#b9a897]
                  transition
                  duration-300
                  hover:text-white
                "
              >
                <FiPhone
                  size={15}
                  className="shrink-0 text-[#d7c4ae]"
                />
                <span>+923167373603</span>
              </a>


              <div
                className="
                  flex
                  items-center
                  gap-3
                  text-[13px]
                  text-[#b9a897]
                "
              >
                <FiMapPin
                  size={15}
                  className="shrink-0 text-[#d7c4ae]"
                />
                <span>Lahore, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="
            mx-6
            border-t
            border-[#60462d]

            sm:mx-10

            lg:mx-16

            xl:mx-24
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-3
              py-5
              text-center

              sm:flex-row
              sm:text-left
            "
          >
            <p className="text-[11px] text-[#968270] sm:text-[12px]">
              © {currentYear} AL-HAFIZ. All Rights Reserved.
            </p>

           
          </div>
        </div>
      </div>
    </footer>
  );
}