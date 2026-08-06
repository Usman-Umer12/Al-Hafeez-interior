import { useState } from "react";
import {
  FiUser,
  FiPhone,
  FiMail,
  FiMessageSquare,
  FiArrowUpRight,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // ============================================================
  // HANDLE INPUT
  // ============================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ============================================================
  // WHATSAPP SUBMIT
  // ============================================================

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const whatsappNumber = "923054449894";

    const whatsappMessage = `
Hello, I would like to discuss a project.

━━━━━━━━━━━━━━━━━━━━
CUSTOMER DETAILS
━━━━━━━━━━━━━━━━━━━━

Name:
${formData.name}

Phone:
${formData.phone}

Email:
${formData.email}

Service:
${formData.service || "Not specified"}

━━━━━━━━━━━━━━━━━━━━
PROJECT MESSAGE
━━━━━━━━━━━━━━━━━━━━

${formData.message}

━━━━━━━━━━━━━━━━━━━━

Thank you.
I am looking forward to hearing from you.
`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    setTimeout(() => {
      setIsSubmitting(false);
    }, 800);
  };

 return (
  <>
    <Navbar />

    <main className=" min-h-screen
 bg-gradient-to-br from-[#5a3a1b] via-[#21150d] to-[#050403] 
 pt-[76px] lg:pt-[88px]">

      {/* =====================================================
          CONTACT HERO / BACKGROUND
      ===================================================== */}

      <section className="relative overflow-hidden px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

        {/* Background Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -left-40
            top-20
            h-[450px]
            w-[450px]
            rounded-full
           
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            bottom-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#5a3a1b]/10
            blur-[140px]
          "
        />

        <div className="relative z-10 mx-auto max-w-[1500px]">

          {/* =================================================
              PAGE HEADER
          ================================================= */}

          <div className="mb-10 text-center sm:mb-14">

            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#9b8060]" />

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.4em]
                  text-[#8c6b48]
                "
              >
                Get In Touch
              </p>

              <span className="h-px w-8 bg-[#9b8060]" />
            </div>

            <h1
              className="
                text-4xl
                font-medium
                tracking-[-1.5px]
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              Let's Talk About
              <span className="block font-light text-white">
                Your Project
              </span>
            </h1>

            <p
              className="
                mx-auto
                mt-5
                max-w-xl
                text-sm
                leading-7
                text-[#77706a]
                sm:text-base
              "
            >
              Whether you need custom furniture, premium doors,
              kitchen woodwork or a complete interior solution,
              we'd love to hear from you.
            </p>

          </div>


          {/* =====================================================
              MAIN CONTACT CARD
          ===================================================== */}

          <div
            className="
              grid
              overflow-hidden
              rounded-[28px]
              border
              border-[#ded4c8]
              bg-white
              shadow-[0_30px_100px_rgba(40,30,20,0.12)]
              lg:grid-cols-[0.85fr_1.15fr]
            "
          >

            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <div
              className="
                relative
                overflow-hidden
                bg-gradient-to-br
                from-[#5a3a1b]
                via-[#21150d]
                to-[#050403]
                px-7
                py-12
                text-white
                sm:px-10
                lg:px-12
                lg:py-16
              "
            >

              {/* Decorative Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-72
                  w-72
                  rounded-full
                  bg-[#c18b52]/20
                  blur-[100px]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-24
                  -left-24
                  h-72
                  w-72
                  rounded-full
                  bg-[#8b5e35]/20
                  blur-[100px]
                "
              />

              <div className="relative z-10">

                {/* Label */}

                <div className="mb-7 flex items-center gap-3">

                  <span className="h-px w-8 bg-[#d4a762]" />

                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.35em]
                      text-[#d4a762]
                    "
                  >
                    Let's Talk
                  </p>

                </div>


                {/* Heading */}

                <h2
                  className="
                    max-w-md
                    text-4xl
                    font-medium
                    leading-[1.05]
                    tracking-[-1.5px]
                    sm:text-5xl
                  "
                >
                  Let's Create

                  <span className="block font-light text-[#d4a762]">
                    Something Beautiful.
                  </span>
                </h2>


                {/* Description */}

                <p
                  className="
                    mt-6
                    max-w-md
                    text-sm
                    leading-7
                    text-white/55
                  "
                >
                  Have a custom furniture idea, interior project
                  or woodwork requirement? Tell us about it and
                  our team will get back to you.
                </p>


                {/* WhatsApp */}

                <a
                  href="https://wa.me/923001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-10
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/15
                    bg-white/5
                    px-5
                    py-3
                    text-sm
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#d4a762]/50
                    hover:bg-[#d4a762]
                    hover:text-[#171513]
                  "
                >
                  <FaWhatsapp className="text-[19px]" />

                  <span>Chat on WhatsApp</span>

                  <FiArrowUpRight className="text-[16px]" />
                </a>

              </div>
            </div>


            {/* =================================================
                RIGHT SIDE FORM
            ================================================= */}

            <div
              className="
                 bg-gradient-to-br
  from-[#f8f4ef]
  via-[#eee7df]
  to-[#e5d9cc]
                px-6
                py-10
                sm:px-10
                lg:px-14
                lg:py-16
              "
            >

              <div className="mb-8">

                <p
                  className="
                    mb-2
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-[#9b8060]
                  "
                >
                  Send An Inquiry
                </p>

                <h3
                  className="
                    text-2xl
                    font-medium
                    tracking-[-0.5px]
                    text-[#171513]
                    sm:text-3xl
                  "
                >
                  Tell Us About Your Project
                </h3>

                <p className="mt-2 text-sm text-[#77706a]">
                  Fill in the details below and continue on WhatsApp.
                </p>

              </div>


              {/* FORM */}

              <form onSubmit={handleSubmit} className="space-y-5 ">

                {/* NAME + PHONE */}

                <div className="grid gap-5  sm:grid-cols-2">

                  {/* NAME */}

                  <div>

                    <label
                      htmlFor="name"
                      className="
                        mb-2
                        block
                        text-[11px]
                        font-medium
                        uppercase
                        tracking-[0.15em]
                        text-[#5e554e]
                      "
                    >
                      Your Name
                    </label>

                    <div className="relative">

                      <FiUser
                        className="
                          pointer-events-none
                          absolute
                          left-4
                          top-1/2
                          -translate-y-1/2
                          text-[#9b8060]
                        "
                      />

                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="
                          h-12
                          w-full
                          rounded-xl
                          border
                          border-[#ded5ca]
                          bg-[#faf8f5]
                          pl-11
                          pr-4
                          text-sm
                          text-[#171513]
                          outline-none
                          transition-all
                          duration-300
                          placeholder:text-[#aaa19a]
                          focus:border-[#9b8060]
                          focus:bg-white
                          focus:ring-4
                          focus:ring-[#9b8060]/10
                        "
                      />

                    </div>

                  </div>


                  {/* PHONE */}

                  <div>

                    <label
                      htmlFor="phone"
                      className="
                        mb-2
                        block
                        text-[11px]
                        font-medium
                        uppercase
                        tracking-[0.15em]
                        text-[#5e554e]
                      "
                    >
                      Phone Number
                    </label>

                    <div className="relative">

                      <FiPhone
                        className="
                          pointer-events-none
                          absolute
                          left-4
                          top-1/2
                          -translate-y-1/2
                          text-[#9b8060]
                        "
                      />

                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="03XX XXXXXXX"
                        required
                        className="
                          h-12
                          w-full
                          rounded-xl
                          border
                          border-[#ded5ca]
                          bg-[#faf8f5]
                          pl-11
                          pr-4
                          text-sm
                          text-[#171513]
                          outline-none
                          transition-all
                          duration-300
                          placeholder:text-[#aaa19a]
                          focus:border-[#9b8060]
                          focus:bg-white
                          focus:ring-4
                          focus:ring-[#9b8060]/10
                        "
                      />

                    </div>

                  </div>

                </div>


                {/* EMAIL */}

                <div>

                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      text-[11px]
                      font-medium
                      uppercase
                      tracking-[0.15em]
                      text-[#5e554e]
                    "
                  >
                    Email Address
                  </label>

                  <div className="relative">

                    <FiMail
                      className="
                        pointer-events-none
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-[#9b8060]
                      "
                    />

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="
                        h-12
                        w-full
                        rounded-xl
                        border
                        border-[#ded5ca]
                        bg-[#faf8f5]
                        pl-11
                        pr-4
                        text-sm
                        text-[#171513]
                        outline-none
                        transition-all
                        duration-300
                        placeholder:text-[#aaa19a]
                        focus:border-[#9b8060]
                        focus:bg-white
                        focus:ring-4
                        focus:ring-[#9b8060]/10
                      "
                    />

                  </div>

                </div>


                {/* SERVICE */}

                <div>

                  <label
                    htmlFor="service"
                    className="
                      mb-2
                      block
                      text-[11px]
                      font-medium
                      uppercase
                      tracking-[0.15em]
                      text-[#5e554e]
                    "
                  >
                    Interested In
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-[#ded5ca]
                      bg-[#faf8f5]
                      px-4
                      text-sm
                      text-[#171513]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#9b8060]
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#9b8060]/10
                    "
                  >
                    <option value="">Select a service</option>
                    <option value="Custom Furniture">Custom Furniture</option>
                    <option value="Doors">Doors</option>
                    <option value="Beds">Beds</option>
                    <option value="Cabinets">Cabinets</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Dining Tables">Dining Tables</option>
                    <option value="TV Units">TV Units</option>
                    <option value="Interior Woodwork">Interior Woodwork</option>
                    <option value="Other">Other</option>
                  </select>

                </div>


                {/* MESSAGE */}

                <div>

                  <label
                    htmlFor="message"
                    className="
                      mb-2
                      block
                      text-[11px]
                      font-medium
                      uppercase
                      tracking-[0.15em]
                      text-[#5e554e]
                    "
                  >
                    Project Details
                  </label>

                  <div className="relative">

                    <FiMessageSquare
                      className="
                        pointer-events-none
                        absolute
                        left-4
                        top-4
                        text-[#9b8060]
                      "
                    />

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows="5"
                      required
                      className="
                        w-full
                        resize-none
                        rounded-xl
                        border
                        border-[#ded5ca]
                        bg-[#faf8f5]
                        px-4
                        py-3.5
                        pl-11
                        text-sm
                        leading-6
                        text-[#171513]
                        outline-none
                        transition-all
                        duration-300
                        placeholder:text-[#aaa19a]
                        focus:border-[#9b8060]
                        focus:bg-white
                        focus:ring-4
                        focus:ring-[#9b8060]/10
                      "
                    />

                  </div>

                </div>


                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    group
                    flex
                    h-[52px]
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-[#171513]
                    px-6
                    py-3.5
                    text-[12px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#5a3a1b]
                    hover:shadow-[0_15px_30px_rgba(50,35,20,0.15)]
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                  "
                >
                  <FaWhatsapp className="text-[19px]" />

                  {isSubmitting
                    ? "Opening WhatsApp..."
                    : "Send Inquiry on WhatsApp"}

                  {!isSubmitting && (
                    <FiArrowUpRight
                      className="
                        text-[17px]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />
                  )}

                </button>


                {/* PRIVACY */}

                <p className="text-center text-[10px] leading-5 text-[#9b938c]">
                  Your information will be used only to respond to your inquiry.
                </p>

              </form>

            </div>

          </div>

        </div>

      </section>

    </main>

    <Footer />
  </>
);
}
    
