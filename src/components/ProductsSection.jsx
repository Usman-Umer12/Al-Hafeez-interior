
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiMaximize2,
  FiX,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

// ============================================================
// IMAGE IMPORTS
// ============================================================

// Doors
import dor1 from "../assets/dor1.webp";
import dor2 from "../assets/dor2.webp";
import dor3 from "../assets/dor3.webp";
import dor4 from "../assets/dor4.webp";
import dor5 from "../assets/dor5.webp";
import dor6 from "../assets/dor6.webp";
import dor7 from "../assets/dor7.webp";
import dor8 from "../assets/dor8.webp";
import dor9 from "../assets/dor9.webp";
import dor10 from "../assets/dor10.webp";
import dor11 from "../assets/dor11.webp";
import dor12 from "../assets/dor12.png"
import dor13 from "../assets/dor13.png"
import dor14 from "../assets/dor14.png"
import dor15 from "../assets/dor15.png"
import dor16 from "../assets/dor16.png"
import dor17 from "../assets/dor17.png"
import dor18 from "../assets/dor18.png"
import dor19 from "../assets/dor19.png"
import dor20 from "../assets/dor20.png"

// Beds
import home7 from "../assets/home7.webp";
import bed2 from "../assets/bed2.webp";
import bed3 from "../assets/bed3.webp";
import bed4 from "../assets/bed4.webp";

// Cabinets
import cabort1 from "../assets/cabort1.webp";
import cabort2 from "../assets/cabort2.webp";
import cabort3 from "../assets/cabort3.webp";
import cabort4 from "../assets/cabort4.webp";
import cabort5 from "../assets/cabort5.webp";
import cabort6 from "../assets/cabort6.png";
import cabort7 from "../assets/cabort7.png";
import cabort8 from "../assets/cabort8.png";
import cabort9 from "../assets/cabort9.png";
import cabort10 from "../assets/cabort10.png";
import cabort11 from "../assets/cabort11.png";
import cabort12 from "../assets/cabort12.png";

// Dining
import table1 from "../assets/table1.webp";
import table2 from "../assets/table2.webp";
import table3 from "../assets/table3.webp";
import table4 from "../assets/table4.webp";

// Decorations
import decor1 from "../assets/decor1.webp";
import decor2 from "../assets/decor2.webp";
import decor3 from "../assets/decor3.webp";
import decor4 from "../assets/decor4.webp";
import decor5 from "../assets/decor5.webp";
import decor6 from "../assets/decor6.webp";

// Kitchen
import kitchen1 from "../assets/kitchen1.webp";
import kitchen2 from "../assets/kitchen2.webp";
import kitchen3 from "../assets/kitchen3.webp";
import kitchen4 from "../assets/kitchen4.webp";
import kitchen5 from "../assets/kitchen5.webp";
import kitchen6 from "../assets/kitchen6.png";
import kitchen7 from "../assets/kitchen7.png";
import kitchen8 from "../assets/kitchen8.png";
import kitchen9 from "../assets/kitchen9.png";
import kitchen10 from "../assets/kitchen10.png";
import kitchen11 from "../assets/kitchen11.png";
import kitchen12 from "../assets/kitchen12.png";
import kitchen13 from "../assets/kitchen13.png";

// TV Units
import Tv1 from "../assets/Tv1.webp";
import Tv2 from "../assets/Tv2.webp";
import Tv3 from "../assets/Tv3.webp";
import Tv4 from "../assets/Tv4.webp";

// ============================================================
// WHATSAPP NUMBER
// ============================================================

const WHATSAPP_NUMBER = "923167373603";

// ============================================================
// PRODUCTS
// ============================================================

const products = {
  Doors: [
    {
      image: dor1,
      name: "Modern Chevron Wood Door",
    },
    {
      image: dor2,
      name: "Contemporary Geometric Panel Door",
    },
    {
      image: dor3,
      name: "Luxury Double Carved Entry Door",
    },
    {
      image: dor4,
      name: "Classic Heritage Carved Door",
    },
    {
      image: dor5,
      name: "Elegant Glass Panel Wood Door",
    },
    {
      image: dor6,
      name: "Classic Decorative Double Door",
    },
    {
      image: dor7,
      name: "Luxury Fluted Wood Interior Door",
    },
    {
      image: dor8,
      name: "Traditional Arched Panel Door",
    },
    {
      image: dor9,
      name: "Premium Minimalist Wood Door",
    },
    {
      image: dor10,
      name: "Designer Walnut Panel Door",
    },
    {
      image: dor12,
      name: "Luxury Decorative Room Divider",
    },
      {
      image: dor13,
      name: "Luxury Door",
    },
      {
      image: dor14,
      name: "Luxury Door",
    },
      {
      image: dor15,
      name: "Luxury Door",
    },
      {
      image: dor16,
      name: "Luxury Door",
    },
      {
      image: dor17,
      name: "Luxury Door",
    },
      {
      image: dor18,
      name: "Luxury Door",
    },
      {
      image: dor19,
      name: "Luxury Luxury Door",
    },
      {
      image: dor20,
      name: "Luxury Door",
    },
      

  ],

  Beds: [
    {
      image: home7,
      name: "Royal Geometric Panel Bed",
    },
    {
      image: bed2,
      name: "Modern Slatted Panel Bed",
    },
    {
      image: bed3,
      name: "Luxury Chevron Storage Bed",
    },
    {
      image: bed4,
      name: "Minimalist Oak Platform Bed",
    },
  ],

  Cabinets: [
    {
      image: cabort1,
      name: "Premium Fluted Wood Wardrobe",
    },
    {
      image: cabort2,
      name: "Modern Glass Panel Wardrobe",
    },
    {
      image: cabort3,
      name: "Luxury Walk-In Wardrobe",
    },
    {
      image: cabort5,
      name: "Classic Glass Display Wardrobe",
    },
    {
      image: cabort6,
      name: "Luxury Cabort 6",
    },
    {
      image: cabort7,
      name: "Luxury Cabort 7",
    },
    {
      image: cabort8,
      name: "Luxury Cabort 8",
    },
    {
      image: cabort9,
      name: "Luxury Cabort 9",
    },
    {
      image: cabort10,
      name: "Luxury Cabort 10",
    },
    {
      image: cabort11,
      name: "Luxury Cabort 11",
    },
    {
      image: cabort12,
      name: "Luxury Cabort 12",
    },

  ],

  "Dining Tables": [
    {
      image: table1,
      name: "Modern Solid Wood Coffee Table",
    },
    {
      image: table2,
      name: "Live Edge Natural Wood Table",
    },
    {
      image: table3,
      name: "Contemporary Wooden Dining Set",
    },
    {
      image: table4,
      name: "Premium Solid Wood Dining Table",
    },
  ],

  Decorations: [
    {
      image: decor1,
      name: "Modern Decorative Room Divider",
    },
    {
      image: decor2,
      name: "Luxury Wooden Wall Shelf",
    },
    {
      image: decor3,
      name: "Modern Geometric Bookshelf",
    },
    {
      image: decor4,
      name: "Premium Carved Console Shelf",
    },
    {
      image: decor5,
      name: "Classic Designer Console Table",
    },
    {
      image: decor6,
      name: "Modern Wooden Console Table",
    },
  ],

  Kitchen: [
    {
      image: kitchen1,
      name: "Modern Glossy Modular Kitchen",
    },
    {
      image: kitchen2,
      name: "Premium Contemporary Modular Kitchen",
    },
    {
      image: kitchen3,
      name: "Luxury L-Shaped Modular Kitchen",
    },
    {
      image: kitchen4,
      name: "Classic Elegant Modular Kitchen",
    },
     {
      image: kitchen5,
      name: "Luxury Kitchen 5",
    },
     {
      image: kitchen6,
      name: "Luxury Kitchen 6",
    },
     {
      image: kitchen7,
      name: "Luxury Kitchen 7",
    },
     {
      image: kitchen8,
      name: "Luxury Kitchen 8",
    },
     {
      image: kitchen9,
      name: "Luxury Kitchen 9",
    },
     {
      image: kitchen10,
      name: "Luxury Kitchen 10",
    },
     {
      image: kitchen11,
      name: "Luxury Kitchen 11",
    },
     {
      image: kitchen12,
      name: "Luxury Kitchen 12",
    },
     {
      image: kitchen13,
      name: "Luxury Kitchen 13",
    },
  ],

  "TV Units": [
    {
      image: Tv1,
      name: "Modern Floating TV Media Wall",
    },
    {
      image: Tv2,
      name: "Luxury Marble TV Feature Wall",
    },
    {
      image: Tv3,
      name: "Minimal Arch TV Media Unit",
    },
    {
      image: Tv4,
      name: "Contemporary Designer TV Wall Unit",
    },
  ],
};

// ============================================================
// CATEGORIES
// ============================================================

const categories = [
  "Doors",
  "Beds",
  "Cabinets",
  "Dining Tables",
  "Decorations",
  "Kitchen",
  "TV Units",
];

// ============================================================
// PRODUCTS SECTION
// ============================================================

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] =
    useState("Doors");

  const [selectedImage, setSelectedImage] =
    useState(null);

  // ========================================================
  // CURRENT PRODUCTS
  // ========================================================

  const currentProducts =
    products[activeCategory] || [];

  // ========================================================
  // WHATSAPP URL
  // ========================================================

  const getWhatsAppUrl = (productName) => {
    const whatsappMessage = encodeURIComponent(
      `Hello, I am interested in the "${productName}". Please share more details, price and availability.`
    );

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
  };

  return (
    <>
      {/* =================================================
                PRODUCTS SECTION
            ================================================= */}

      <section
        className="
                    bg-[#f8f4ef]
                    px-5
                    py-14
                    sm:px-8
                    lg:px-12
                    lg:py-20
                "
      >
        <div className="mx-auto max-w-[1500px]">

          {/* =================================================
                        HEADER
                    ================================================= */}

          <div
            className="
                            mb-5
                            flex
                            items-center
                            justify-between
                            gap-5
                            sm:mb-6
                        "
          >
            <div>
              <p
                className="
                                    mb-2
                                    text-[9px]
                                    font-medium
                                    uppercase
                                    tracking-[0.3em]
                                    text-[#a0805c]
                                "
              >
                Our Collection
              </p>

              <h2
                className="
                                    shrink-0
                                    text-[30px]
                                    font-medium
                                    tracking-[-1.5px]
                                    text-[#171513]
                                    sm:text-[36px]
                                    md:text-[42px]
                                "
              >
                Our Products
              </h2>
            </div>

            {/* Desktop View All */}

            <Link
              to="/products"
              className="
                                group
                                hidden
                                shrink-0
                                items-center
                                gap-2
                                text-[13px]
                                font-medium
                                text-[#24201c]
                                sm:flex
                                md:text-[14px]
                            "
            >
              <span className="relative">
                View All Products

                <span
                  className="
                                        absolute
                                        -bottom-1
                                        left-0
                                        h-[1px]
                                        w-0
                                        bg-[#24201c]
                                        transition-all
                                        duration-300
                                        group-hover:w-full
                                    "
                />
              </span>

              <FiArrowRight
                className="
                                    text-[18px]
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                "
              />
            </Link>
          </div>

          {/* =================================================
                        CATEGORY FILTER
                    ================================================= */}

          <div
            className="
                            mb-5
                            flex
                            w-full
                            items-center
                            gap-2
                            overflow-x-auto
                            pb-2
                            scrollbar-hide
                            sm:gap-3
                            md:mb-6
                        "
          >
            {categories.map((category) => {
              const active =
                activeCategory ===
                category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setActiveCategory(
                      category
                    )
                  }
                  className={`
                                        shrink-0
                                        whitespace-nowrap
                                        rounded-full
                                        px-5
                                        py-2
                                        text-[12px]
                                        font-medium
                                        transition-all
                                        duration-300
                                        sm:px-6
                                        sm:py-2.5
                                        sm:text-[13px]

                                        ${active
                      ? "bg-[#171513] text-white shadow-md"
                      : "bg-transparent text-[#292522] hover:bg-[#e9e1d7]"
                    }
                                    `}
                >
                  {category}
                </button>
              );
            })}

            {/* Mobile View All */}

            <Link
              to="/products"
              className="
                                ml-auto
                                flex
                                shrink-0
                                items-center
                                gap-1.5
                                whitespace-nowrap
                                text-[12px]
                                font-medium
                                text-[#292522]
                                sm:hidden
                            "
            >
              View All Products

              <FiArrowRight />
            </Link>
          </div>

          {/* =================================================
                        PRODUCTS GRID
                    ================================================= */}

          <div
            className="
                            grid
                            grid-cols-2
                            gap-3
                            sm:grid-cols-2
                            sm:gap-5
                            lg:grid-cols-3
                            xl:grid-cols-4
                        "
          >
            {currentProducts.map(
              (product, index) => (
                <article
                  key={`${activeCategory}-${index}`}
                  className="
                                        group
                                        overflow-hidden
                                        rounded-[17px]
                                        border
                                        border-[#e7dfd5]
                                        bg-[#f4eee7]
                                        transition-all
                                        duration-500
                                        hover:-translate-y-1
                                        hover:shadow-[0_15px_35px_rgba(50,40,30,0.10)]
                                        sm:rounded-[20px]
                                    "
                >
                  {/* =================================================
                                        IMAGE
                                    ================================================= */}

                  <div
                    className="
                                            relative
                                            aspect-[1/1]
                                            overflow-hidden
                                            bg-[#eee8df]
                                            sm:aspect-[1.05/1]
                                        "
                  >
                    <img
                      src={
                        product.image
                      }
                      alt={`${product.name} - premium furniture`}
                      title={
                        product.name
                      }
                      width="800"
                      height="800"
                      loading={
                        index < 2
                          ? "eager"
                          : "lazy"
                      }
                      decoding="async"
                      fetchPriority={
                        index < 2
                          ? "high"
                          : "low"
                      }
                      className="
                                                block
                                                h-full
                                                w-full
                                                object-contain
                                                p-4
                                                transition-transform
                                                duration-700
                                                ease-out
                                                group-hover:scale-[1.06]
                                                sm:p-5
                                            "
                    />

                    {/* Image Overlay */}

                    <div
                      className="
                                                pointer-events-none
                                                absolute
                                                inset-0
                                                bg-gradient-to-t
                                                from-black/10
                                                via-transparent
                                                to-transparent
                                                opacity-0
                                                transition-opacity
                                                duration-500
                                                group-hover:opacity-100
                                            "
                    />

                    {/* Full Image Button */}

                    <button
                      type="button"
                      onClick={() =>
                        setSelectedImage(
                          product.image
                        )
                      }
                      aria-label={`View ${product.name} full image`}
                      className="
    absolute
    right-3
    top-3
    flex
    h-8
    w-8
    items-center
    justify-center
    rounded-full
    bg-white/85
    text-[#4c4742]
    backdrop-blur-sm
    transition-all
    duration-300
    hover:scale-110
    hover:bg-[#171513]
    hover:text-white
    sm:right-4
    sm:top-4
    sm:h-9
    sm:w-9
"
                    >
                      <FiMaximize2
                        className="
                                                    text-[15px]
                                                    sm:text-[16px]
                                                "
                      />
                    </button>
                  </div>

                  {/* =================================================
                                        PRODUCT INFO
                                    ================================================= */}

                  <div
                    className="
                                            flex
                                            items-center
                                            justify-between
                                            gap-2
                                            bg-[#faf7f2]
                                            px-3
                                            py-3
                                            sm:px-4
                                            sm:py-4
                                        "
                  >
                    <div className="min-w-0">
                      <h3
                        className="
                                                    truncate
                                                    text-[12px]
                                                    font-bold
                                                    text-[#171513]
                                                    sm:text-[14px]
                                                "
                      >
                        {
                          product.name
                        }
                      </h3>

                      <p
                        className="
                                                    mt-1
                                                    text-[9px]
                                                    uppercase
                                                    tracking-[0.15em]
                                                    text-[#9a8064]
                                                "
                      >
                        Inquire Now
                      </p>
                    </div>

                    {/* WhatsApp */}

                    <a
                      href={getWhatsAppUrl(
                        product.name
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Contact about ${product.name}`}
                      className="
                                                flex
                                                h-8
                                                w-8
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                border-[#d9d1c8]
                                                bg-white
                                                text-[#171513]
                                                transition-all
                                                duration-300
                                                hover:scale-110
                                                hover:border-[#171513]
                                                hover:bg-[#171513]
                                                hover:text-white
                                                sm:h-9
                                                sm:w-9
                                            "
                    >
                      <FaWhatsapp
                        className="
                                                    text-[16px]
                                                    sm:text-[17px]
                                                "
                      />
                    </a>
                  </div>
                </article>
              )
            )}
          </div>

          {/* =================================================
                        NO PRODUCTS
                    ================================================= */}

          {currentProducts.length ===
            0 && (
              <div className="py-20 text-center">
                <p className="text-[#77706a]">
                  No products available
                  in this category.
                </p>
              </div>
            )}

          {/* =================================================
                        MOBILE VIEW ALL
                    ================================================= */}

          <div
            className="
                            mt-8
                            flex
                            justify-center
                            sm:hidden
                        "
          >
            <Link
              to="/products"
              className="
                                group
                                flex
                                items-center
                                gap-2
                                border-b
                                border-[#292522]
                                pb-1
                                text-[13px]
                                font-medium
                                text-[#292522]
                            "
            >
              View All Products

              <FiArrowRight
                className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                "
              />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
                FULL IMAGE MODAL
            ===================================================== */}

      {selectedImage && (
        <div
          className="
                        fixed
                        inset-0
                        z-[100]
                        flex
                        items-center
                        justify-center
                        bg-black/90
                        p-5
                        backdrop-blur-sm
                    "
          onClick={() =>
            setSelectedImage(
              null
            )
          }
        >
          {/* Close */}

          <button
            type="button"
            onClick={() =>
              setSelectedImage(
                null
              )
            }
            aria-label="Close product image"
            className="
                            absolute
                            right-4
                            top-4
                            z-10
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                            text-[#171513]
                            shadow-lg
                            transition-all
                            duration-300
                            hover:rotate-90
                            hover:bg-[#171513]
                            hover:text-white
                            sm:right-6
                            sm:top-6
                            sm:h-11
                            sm:w-11
                        "
          >
            <FiX className="text-[21px]" />
          </button>

          {/* Full Image */}

          <div
            className="
                            relative
                            flex
                            max-h-[90vh]
                            max-w-[95vw]
                            items-center
                            justify-center
                            sm:max-w-[90vw]
                        "
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <img
              src={selectedImage}
              alt="Full size product preview"
              width="1400"
              height="1400"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="
                                max-h-[88vh]
                                max-w-full
                                rounded-xl
                                object-contain
                                shadow-2xl
                            "
            />
          </div>
        </div>
      )}
    </>
  );
}
