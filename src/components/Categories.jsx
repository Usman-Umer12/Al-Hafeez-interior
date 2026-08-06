import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

import Door from "../assets/dor1.webp";
import Bed from "../assets/bed2.webp";
import Cabinet from "../assets/cabort1.webp";
import Decor from "../assets/decor1.webp";
import Kitchen from "../assets/kitchen1.webp";
import Table from "../assets/table1.webp";
import Tv from "../assets/Tv1.webp";

export default function Categories() {
  // ============================================================
  // CATEGORIES DATA
  // ============================================================

  const categories = [
    {
      name: "Doors",
      slug: "doors",
      items: "11 Items",
      image: Door,
    },
    {
      name: "Beds",
      slug: "beds",
      items: "04 Items",
      image: Bed,
    },
    {
      name: "Cabinets",
      slug: "cabinets",
      items: "04 Items",
      image: Cabinet,
    },
    {
      name: "Decorations",
      slug: "decorations",
      items: "06 Items",
      image: Decor,
    },
    {
      name: "Kitchen",
      slug: "kitchen",
      items: "04 Items",
      image: Kitchen,
    },
    {
      name: "Dining Tables",
      slug: "dining",
      items: "04 Items",
      image: Table,
    },
    {
      name: "TV Units",
      slug: "tv-units",
      items: "04 Items",
      image: Tv,
    },
  ];

  return (
    <section className="bg-[#f8f4ef] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1500px]">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          className="
            mb-8
            flex
            items-end
            justify-between
            gap-4
            sm:mb-10
            md:mb-12
          "
        >
          {/* Heading */}

          <div>
            <p
              className="
                mb-2
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-[#9b8060]
              "
            >
              Explore Our Collection
            </p>

            <h2
              className="
                text-[30px]
                font-medium
                leading-tight
                tracking-[-1.5px]
                text-[#171513]
                sm:text-[38px]
                md:text-[44px]
                lg:text-[48px]
              "
            >
              Shop By Category
            </h2>
          </div>

          {/* Desktop View All */}

          <Link
            to="/products"
            className="
              group
              hidden
              items-center
              gap-2
              text-[14px]
              font-medium
              text-[#292522]
              transition-all
              duration-300
              sm:flex
              md:text-[15px]
            "
          >
            <span className="relative">
              View All Categories

              <span
                className="
                  absolute
                  -bottom-1
                  left-0
                  h-[1px]
                  w-0
                  bg-[#292522]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </span>

            <FiArrowUpRight
              className="
                text-[20px]
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </Link>
        </div>

        {/* =====================================================
            CATEGORIES
        ===================================================== */}

        <div
          className="
            flex
            w-full
            gap-4
            overflow-x-auto
            pb-4
            scrollbar-hide

            sm:gap-5
            md:gap-6

            xl:grid
            xl:grid-cols-7
            xl:gap-6
            xl:overflow-visible
          "
        >
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              to={`/products#${category.slug}`}
              className="
                group
                block
                shrink-0
                snap-start
                text-center

                w-[120px]
                sm:w-[140px]
                md:w-[160px]

                xl:w-auto
              "
            >
              {/* =================================================
                  IMAGE
              ================================================= */}

              <div
                className="
                  relative
                  flex
                  h-[120px]
                  w-[120px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[17px]
                  bg-[#eee8df]

                  transition-all
                  duration-500

                  group-hover:-translate-y-1
                  group-hover:bg-[#e8dfd3]
                  group-hover:shadow-[0_15px_35px_rgba(50,40,30,0.10)]

                  sm:h-[140px]
                  sm:w-[140px]

                  md:h-[160px]
                  md:w-[160px]

                  xl:h-auto
                  xl:w-full
                  xl:aspect-square
                  xl:rounded-[22px]
                "
              >
                {/* =================================================
                    PRODUCT IMAGE
                ================================================= */}

                <img
                  src={category.image}
                  alt={`${category.name} furniture collection`}
                  width="500"
                  height="500"

                  /*
                   * First images load immediately.
                   * Remaining images can lazy load.
                   */
                  loading={index < 2 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}

                  decoding="async"

                  className="
                    block
                    h-full
                    w-full
                    object-contain
                    p-2.5

                    transition-transform
                    duration-700
                    ease-out

                    group-hover:scale-105

                    sm:p-3
                    md:p-4
                    lg:p-5
                    xl:p-6
                  "
                />

                {/* =================================================
                    DARK OVERLAY
                ================================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-black/5
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* =================================================
                    HOVER ARROW
                ================================================= */}

                <div
                  className="
                    absolute
                    right-2
                    top-2

                    flex
                    h-7
                    w-7
                    items-center
                    justify-center

                    rounded-full
                    bg-[#171513]
                    text-white

                    scale-75
                    opacity-0

                    transition-all
                    duration-300

                    group-hover:scale-100
                    group-hover:opacity-100

                    sm:right-3
                    sm:top-3
                    sm:h-8
                    sm:w-8

                    xl:right-4
                    xl:top-4
                    xl:h-9
                    xl:w-9
                  "
                >
                  <FiArrowUpRight
                    className="
                      text-[14px]
                      xl:text-[17px]
                    "
                  />
                </div>
              </div>

              {/* =================================================
                  CATEGORY NAME
              ================================================= */}

              <h3
                className="
                  mt-3
                  text-[13px]
                  font-medium
                  leading-tight
                  text-[#171513]

                  transition-colors
                  duration-300

                  group-hover:text-[#8c6b48]

                  sm:text-[15px]
                  lg:text-[16px]
                  xl:text-[19px]
                "
              >
                {category.name}
              </h3>

              {/* =================================================
                  ITEMS
              ================================================= */}

              <p
                className="
                  mt-1
                  text-[11px]
                  text-[#77706a]

                  sm:text-[12px]
                  xl:text-[14px]
                "
              >
                {category.items}
              </p>
            </Link>
          ))}
        </div>

        {/* =====================================================
            MOBILE VIEW ALL
        ===================================================== */}

        <div className="mt-8 flex justify-center sm:hidden">
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
            View All Categories

            <FiArrowUpRight
              className="
                text-[18px]
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
