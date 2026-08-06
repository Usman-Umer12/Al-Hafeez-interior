import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import FounderImage from "../assets/founder.png";
import logo from "../assets/logo.png";

const About = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-[#21150d] text-white">
      <Navbar />

      {/* =========================================================
          ABOUT / FOUNDER SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#21150d] pt-24 sm:pt-28 lg:pt-24">
        
        {/* =====================================================
            MAIN BACKGROUND
        ===================================================== */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3b2514] via-[#21150d] to-[#100a06]" />

        {/* Left warm glow */}
        <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#b98545]/10 blur-[130px]" />

        {/* Right warm glow */}
        <div className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-[#8c5d2c]/10 blur-[150px]" />

        {/* =====================================================
            SUBTLE GRID
        ===================================================== */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        {/* =====================================================
            TOP RIGHT DECORATION
        ===================================================== */}
        <div className="absolute right-0 top-0 h-52 w-52 overflow-hidden opacity-40">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#b98a4e]/40" />

          <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-[#b98a4e]/25" />

          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-[#b98a4e]/20" />
        </div>

        {/* =====================================================
            MAIN CONTAINER
        ===================================================== */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-14 sm:py-16 lg:px-10 lg:py-20">
          
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

            {/* =================================================
                LEFT — FOUNDER CONTENT
            ================================================= */}
            <div className="order-2 lg:order-1">

              {/* Eyebrow */}
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#c69b5c]" />

                <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#c69b5c]">
                  About Our Founder
                </span>
              </div>

              {/* =================================================
                  FOUNDER NAME
              ================================================= */}
              <h1
                className="
                  max-w-lg
                  font-serif
                  text-[48px]
                  font-medium
                  leading-[0.9]
                  tracking-[-0.035em]
                  text-[#f5eee4]
                  sm:text-[56px]
                  lg:text-[60px]
                "
              >
                Muhammad
                <span className="block">
                  Usman
                </span>
              </h1>

              {/* =================================================
                  POSITION
              ================================================= */}
              <div className="mt-6">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#c69b5c] sm:text-[11px]">
                  Founder & CEO, Hanover & Tyke
                </p>
              </div>

              {/* =================================================
                  DESCRIPTION
              ================================================= */}
              <p className="mt-5 max-w-[470px] text-[11px] leading-[1.9] text-white/55 sm:text-[12px]">
                With a passion for refined interiors and timeless
                craftsmanship, Muhammad Usman founded Hanover & Tyke with a
                vision to transform everyday spaces into distinctive
                experiences. From elegant doors and bespoke cabinetry to
                sophisticated kitchens, bedrooms, dining spaces, TV units and
                decorative interiors, his focus remains on exceptional design,
                quality craftsmanship and customer satisfaction.
              </p>

              {/* =================================================
                  SIGNATURE
              ================================================= */}
              <div className="mt-7">
                <p className="font-serif text-[27px] italic text-[#c79b5b]">
                  Muhammad Usman
                </p>

                <div className="mt-2 h-px w-20 bg-gradient-to-r from-[#c69b5c] to-transparent" />

                <p className="mt-3 text-[10px] text-white/50">
                  Founder & CEO, Hanover & Tyke
                </p>
              </div>

              {/* =================================================
                  BRAND MARK
              ================================================= */}
              <div className="mt-7 flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c69b5c]/30 bg-[#c69b5c]/5 p-1.5">
                  <img
                    src={logo}
                    alt="Hanover & Tyke"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                    The Vision
                  </p>

                  <p className="mt-0.5 text-[10px] text-white/55">
                    Crafted with purpose
                  </p>
                </div>

              </div>
            </div>

            {/* =================================================
                RIGHT — FOUNDER IMAGE
            ================================================= */}
            <div className="order-1 flex justify-center lg:order-2 lg:justify-end">

              <div className="relative w-full max-w-[430px]">

                {/* =================================================
                    IMAGE GLOW
                ================================================= */}
                <div className="absolute inset-10 rounded-full bg-[#b98545]/10 blur-[90px]" />

                {/* =================================================
                    OUTER GOLD FRAME
                ================================================= */}
                <div
                  className="
                    absolute
                    -bottom-3
                    -left-3
                    h-full
                    w-full
                    rounded-[20px]
                    border
                    border-[#b98a4e]/60
                  "
                />

                {/* =================================================
                    BOTTOM GOLD DETAIL
                ================================================= */}
                <div
                  className="
                    absolute
                    -bottom-7
                    left-7
                    h-8
                    w-36
                    rounded-bl-[20px]
                    border-b
                    border-l
                    border-[#b98a4e]/70
                  "
                />

                {/* =================================================
                    IMAGE CONTAINER
                ================================================= */}
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[19px]
                    border
                    border-[#d0aa72]/70
                    bg-[#2a1a0e]
                    p-[2px]
                    shadow-[0_25px_80px_rgba(0,0,0,0.45)]
                  "
                >

                  <div className="relative aspect-[4/4.7] overflow-hidden rounded-[16px]">

                    <img
                      src={FounderImage}
                      alt="Muhammad Usman - Founder of Hanover & Tyke"
                      className="
                        h-full
                        w-full
                        object-cover
                        object-center
                        transition-transform
                        duration-700
                        hover:scale-[1.025]
                      "
                    />

                    {/* Image dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120a05]/40 via-transparent to-transparent" />

                    {/* Top right corner */}
                    <div
                      className="
                        absolute
                        right-3
                        top-3
                        h-14
                        w-14
                        rounded-tr-xl
                        border-r
                        border-t
                        border-[#d0aa72]/50
                      "
                    />

                    {/* Bottom left corner */}
                    <div
                      className="
                        absolute
                        bottom-3
                        left-3
                        h-14
                        w-14
                        rounded-bl-xl
                        border-b
                        border-l
                        border-[#d0aa72]/50
                      "
                    />

                  </div>
                </div>

                {/* =================================================
                    FLOATING FOUNDER LABEL
                ================================================= */}
                <div className="absolute -right-4 top-7 hidden items-center gap-2 lg:flex">

                  <span className="text-[8px] uppercase tracking-[0.3em] text-[#c69b5c]/70">
                    Founder
                  </span>

                  <span className="h-px w-8 bg-[#c69b5c]/40" />

                </div>

                {/* =================================================
                    NUMBER BADGE
                ================================================= */}
                <div
                  className="
                    absolute
                    -bottom-6
                    -right-5
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#c69b5c]/30
                    bg-[#21150d]/90
                    backdrop-blur-md
                  "
                >
                  <div className="text-center">

                    <p className="text-sm font-medium text-[#c69b5c]">
                      01
                    </p>

                    <div className="mx-auto mt-1 h-px w-4 bg-[#c69b5c]/40" />

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM DECORATION
        ===================================================== */}
        <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 lg:flex">

          <span className="text-[8px] uppercase tracking-[0.35em] text-white/25">
            Our Story
          </span>

          <span className="h-px w-10 bg-[#c69b5c]/30" />

        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <Footer />
    </div>
  );
};

export default About;