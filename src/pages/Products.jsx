
import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiMaximize2, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ============================================================
// IMAGES
// ============================================================

// Beds
import home7 from "../assets/home7.webp";
import bed2 from "../assets/bed2.webp";
import bed3 from "../assets/bed3.webp";
import bed4 from "../assets/bed4.webp";

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

// Cabinets
import cabort1 from "../assets/cabort1.webp";
import cabort2 from "../assets/cabort2.webp";
import cabort3 from "../assets/cabort3.webp";
import cabort4 from "../assets/cabort4.webp";

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

// TV Units
import Tv1 from "../assets/Tv1.webp";
import Tv2 from "../assets/Tv2.webp";
import Tv3 from "../assets/Tv3.webp";
import Tv4 from "../assets/Tv4.webp";

// ============================================================
// WHATSAPP
// ============================================================

const WHATSAPP_NUMBER = "923054449894";

// ============================================================
// PRODUCTS DATA
// ============================================================

const productCategories = [
    {
        id: "beds",
        number: "01",
        title: "Beds",
        subtitle: "Comfort Meets Craftsmanship",
        description:
            "Discover beautifully crafted wooden beds designed to bring comfort, character and timeless elegance to your bedroom.",
        products: [
            {
                image: home7,
                name: "Royal Geometric Panel Bed",
                alt: "Royal geometric panel wooden bed",
            },
            {
                image: bed2,
                name: "Modern Slatted Panel Bed",
                alt: "Modern slatted wooden panel bed",
            },
            {
                image: bed3,
                name: "Luxury Chevron Storage Bed",
                alt: "Luxury chevron wooden storage bed",
            },
            {
                image: bed4,
                name: "Minimalist Oak Platform Bed",
                alt: "Minimalist oak wooden platform bed",
            },
        ],
    },

    {
        id: "doors",
        number: "02",
        title: "Doors",
        subtitle: "The First Impression",
        description:
            "Premium wooden doors crafted with precision, combining strong character, refined details and modern design.",
        products: [
            {
                image: dor1,
                name: "Modern Chevron Wood Door",
                alt: "Modern chevron wooden interior door",
            },
            {
                image: dor2,
                name: "Contemporary Geometric Panel Door",
                alt: "Contemporary geometric wooden panel door",
            },
            {
                image: dor3,
                name: "Luxury Double Carved Entry Door",
                alt: "Luxury double carved wooden entry door",
            },
            {
                image: dor4,
                name: "Classic Heritage Carved Door",
                alt: "Classic heritage carved wooden door",
            },
            {
                image: dor5,
                name: "Elegant Glass Panel Wood Door",
                alt: "Elegant glass panel wooden door",
            },
            {
                image: dor6,
                name: "Classic Decorative Double Door",
                alt: "Classic decorative double wooden door",
            },
            {
                image: dor7,
                name: "Luxury Fluted Wood Interior Door",
                alt: "Luxury fluted wooden interior door",
            },
            {
                image: dor8,
                name: "Traditional Arched Panel Door",
                alt: "Traditional arched wooden panel door",
            },
            {
                image: dor9,
                name: "Premium Minimalist Wood Door",
                alt: "Premium minimalist wooden door",
            },
            {
                image: dor10,
                name: "Designer Walnut Panel Door",
                alt: "Designer walnut wooden panel door",
            },
            {
                image: dor11,
                name: "Luxury Decorative Room Divider",
                alt: "Luxury decorative wooden room divider",
            },
        ],
    },

    {
        id: "cabinets",
        number: "03",
        title: "Cabinets",
        subtitle: "Designed For Living",
        description:
            "Elegant storage solutions combining functionality, durability and sophisticated woodwork for modern interiors.",
        products: [
            {
                image: cabort1,
                name: "Premium Fluted Wood Wardrobe",
                alt: "Premium fluted wooden wardrobe cabinet",
            },
            {
                image: cabort2,
                name: "Modern Glass Panel Wardrobe",
                alt: "Modern glass panel wooden wardrobe",
            },
            {
                image: cabort3,
                name: "Luxury Walk-In Wardrobe",
                alt: "Luxury walk-in wooden wardrobe",
            },
            {
                image: cabort4,
                name: "Classic Glass Display Wardrobe",
                alt: "Classic glass display wooden wardrobe",
            },
        ],
    },

    {
        id: "dining",
        number: "04",
        title: "Dining Tables",
        subtitle: "Gather Around Great Design",
        description:
            "Statement dining pieces crafted to create warm, elegant spaces where people come together.",
        products: [
            {
                image: table1,
                name: "Modern Solid Wood Coffee Table",
                alt: "Modern solid wood coffee table",
            },
            {
                image: table2,
                name: "Live Edge Natural Wood Table",
                alt: "Live edge natural wood dining table",
            },
            {
                image: table3,
                name: "Contemporary Wooden Dining Set",
                alt: "Contemporary wooden dining table set",
            },
            {
                image: table4,
                name: "Premium Solid Wood Dining Table",
                alt: "Premium solid wood dining table",
            },
        ],
    },

    {
        id: "decorations",
        number: "05",
        title: "Decorations",
        subtitle: "Details That Define A Space",
        description:
            "Curated decorative pieces that add personality, warmth and a refined finishing touch to your interiors.",
        products: [
            {
                image: decor1,
                name: "Modern Decorative Room Divider",
                alt: "Modern decorative wooden room divider",
            },
            {
                image: decor2,
                name: "Luxury Wooden Wall Shelf",
                alt: "Luxury wooden wall shelf",
            },
            {
                image: decor3,
                name: "Modern Geometric Bookshelf",
                alt: "Modern geometric wooden bookshelf",
            },
            {
                image: decor4,
                name: "Premium Carved Console Shelf",
                alt: "Premium carved wooden console shelf",
            },
            {
                image: decor5,
                name: "Classic Designer Console Table",
                alt: "Classic designer wooden console table",
            },
            {
                image: decor6,
                name: "Modern Wooden Console Table",
                alt: "Modern wooden console table",
            },
        ],
    },

    {
        id: "kitchen",
        number: "06",
        title: "Kitchen",
        subtitle: "Where Design Meets Function",
        description:
            "Beautifully designed kitchen solutions built around functionality, premium materials and everyday living.",
        products: [
            {
                image: kitchen1,
                name: "Modern Glossy Modular Kitchen",
                alt: "Modern glossy modular kitchen design",
            },
            {
                image: kitchen2,
                name: "Premium Contemporary Modular Kitchen",
                alt: "Premium contemporary modular kitchen",
            },
            {
                image: kitchen3,
                name: "Luxury L-Shaped Modular Kitchen",
                alt: "Luxury L-shaped modular kitchen design",
            },
            {
                image: kitchen4,
                name: "Classic Elegant Modular Kitchen",
                alt: "Classic elegant modular kitchen design",
            },
        ],
    },

    {
        id: "tv-units",
        number: "07",
        title: "TV Units",
        subtitle: "Entertainment, Elevated",
        description:
            "Modern TV units designed to organize your space while adding a sophisticated architectural element.",
        products: [
            {
                image: Tv1,
                name: "Modern Floating TV Media Wall",
                alt: "Modern floating wooden TV media wall",
            },
            {
                image: Tv2,
                name: "Luxury Marble TV Feature Wall",
                alt: "Luxury marble TV feature wall with wooden unit",
            },
            {
                image: Tv3,
                name: "Minimal Arch TV Media Unit",
                alt: "Minimal arch wooden TV media unit",
            },
            {
                image: Tv4,
                name: "Contemporary Designer TV Wall Unit",
                alt: "Contemporary designer wooden TV wall unit",
            },
        ],
    },
];

// ============================================================
// PRODUCT CARD
// ============================================================

function ProductCard({ product, onImageClick, priority = false }) {
    const whatsappMessage = encodeURIComponent(
        `Hello, I am interested in the "${product.name}". Please share more details, price and availability.`
    );

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

    return (
        <article className="group overflow-hidden rounded-2xl border border-[#e5ddd4] bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
            {/* IMAGE */}

            <div className="relative aspect-[4/5] overflow-hidden bg-[#eee7df]">
                <img
                    src={product.image}
                    alt={product.alt}
                    title={product.name}
                    width="800"
                    height="1000"
                    loading={priority ? "eager" : "lazy"}
                    fetchPriority={priority ? "high" : "auto"}
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* Image Overlay */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/20
                        via-transparent
                        to-transparent
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                    "
                />

                {/* View Image */}

                <button
                    type="button"
                    onClick={() => onImageClick(product)}
                    aria-label={`View ${product.name} image`}
                    className="
                        absolute
                        right-4
                        top-4
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-white/90
                        text-[#302820]
                        opacity-0
                        shadow-lg
                        backdrop-blur-md
                        transition-all
                        duration-300
                        group-hover:opacity-100
                        hover:scale-110
                        hover:bg-[#17120e]
                        hover:text-white
                    "
                >
                    <FiMaximize2 className="text-[17px]" />
                </button>
            </div>

            {/* INFO */}

            <div
                className="
                    flex
                    items-center
                    justify-between
                    gap-3
                    bg-[#fbf8f4]
                    px-4
                    py-4
                "
            >
                <div className="min-w-0">
                    <h3
                        className="
                            truncate
                            text-[13px]
                            font-semibold
                            text-[#171513]
                            sm:text-[14px]
                        "
                    >
                        {product.name}
                    </h3>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#9a8064]">
                        Premium Woodwork
                    </p>
                </div>

                {/* WhatsApp */}

                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Contact us about ${product.name} on WhatsApp`}
                    className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#ddd3c8]
                        bg-white
                        text-[#29231e]
                        transition-all
                        duration-300
                        hover:scale-110
                        hover:border-[#171513]
                        hover:bg-[#171513]
                        hover:text-white
                    "
                >
                    <FaWhatsapp className="text-[17px]" />
                </a>
            </div>
        </article>
    );
}

// ============================================================
// PRODUCTS PAGE
// ============================================================

export default function Products() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeCategory, setActiveCategory] = useState("all");

    const heroRef = useRef(null);
    const animationFrameRef = useRef(null);

    const customProjectMessage = encodeURIComponent(
        "Hello, I would like to discuss a custom furniture project."
    );

    const customProjectUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${customProjectMessage}`;

    // ========================================================
    // PAGE SEO
    // ========================================================

    useEffect(() => {
        document.title =
            "Furniture Collection | Premium Wooden Beds, Doors & Interiors";

        const description =
            "Explore premium wooden furniture including beds, doors, wardrobes, dining tables, kitchens, decorations and modern TV units. Discover handcrafted designs and custom woodwork.";

        let metaDescription = document.querySelector(
            'meta[name="description"]'
        );

        if (!metaDescription) {
            metaDescription = document.createElement("meta");
            metaDescription.setAttribute("name", "description");
            document.head.appendChild(metaDescription);
        }

        metaDescription.setAttribute("content", description);

        // Open Graph

        const setMeta = (property, content) => {
            let element = document.querySelector(
                `meta[property="${property}"]`
            );

            if (!element) {
                element = document.createElement("meta");
                element.setAttribute("property", property);
                document.head.appendChild(element);
            }

            element.setAttribute("content", content);
        };

        setMeta(
            "og:title",
            "Premium Furniture Collection | Handcrafted Woodwork"
        );

        setMeta(
            "og:description",
            "Explore handcrafted beds, wooden doors, wardrobes, dining tables, kitchens, decorations and modern TV units."
        );

        setMeta("og:type", "website");

        // Twitter

        const setTwitterMeta = (name, content) => {
            let element = document.querySelector(
                `meta[name="${name}"]`
            );

            if (!element) {
                element = document.createElement("meta");
                element.setAttribute("name", name);
                document.head.appendChild(element);
            }

            element.setAttribute("content", content);
        };

        setTwitterMeta(
            "twitter:title",
            "Premium Furniture Collection"
        );

        setTwitterMeta(
            "twitter:description",
            "Explore premium handcrafted furniture and custom woodwork."
        );

        setTwitterMeta("twitter:card", "summary_large_image");

        return () => {
            document.title = "Furniture Collection";
        };
    }, []);

    // ========================================================
    // HERO SCROLL ANIMATION
    // ========================================================

    useEffect(() => {
        const handleScroll = () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }

            animationFrameRef.current = requestAnimationFrame(() => {
                if (!heroRef.current) return;

                const scrollY = window.scrollY;

                const heroTitle =
                    heroRef.current.querySelector(
                        ".products-hero-title"
                    );

                const heroText =
                    heroRef.current.querySelector(
                        ".products-hero-text"
                    );

                const heroGlow =
                    heroRef.current.querySelector(
                        ".products-hero-glow"
                    );

                if (heroTitle) {
                    heroTitle.style.transform = `translateY(${scrollY * 0.15}px)`;

                    heroTitle.style.opacity = Math.max(
                        0,
                        1 - scrollY / 450
                    );
                }

                if (heroText) {
                    heroText.style.transform = `translateY(${scrollY * 0.08}px)`;

                    heroText.style.opacity = Math.max(
                        0,
                        1 - scrollY / 350
                    );
                }

                if (heroGlow) {
                    heroGlow.style.transform = `translate(-50%, -50%) scale(${
                        1 + scrollY * 0.0004
                    })`;
                }
            });
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);

            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    // ========================================================
    // ESC CLOSE MODAL
    // ========================================================

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setSelectedImage(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    // ========================================================
    // BODY LOCK WHEN MODAL OPEN
    // ========================================================

    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedImage]);

    const visibleCategories =
        activeCategory === "all"
            ? productCategories
            : productCategories.filter(
                  (category) => category.id === activeCategory
              );

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-[#f8f4ef]">
                {/* =====================================================
                    HERO
                ===================================================== */}

        <div className="absolute right-0 top-0 h-52 w-52 overflow-hidden opacity-40">
          <div className="absolute right-[-90px] top-[-90px] h-64 w-64 rounded-full border border-[#b98a4e]/40" />

          <div className="absolute right-[-65px] top-[-65px] h-52 w-52 rounded-full border border-[#b98a4e]/20" />

          <div className="absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full border border-[#b98a4e]/20" />
        </div>

                <section
                    ref={heroRef}
                    aria-labelledby="products-heading"
                    className="
                        relative
                        flex
                        min-h-[72vh]
                        items-center
                        justify-center
                        overflow-hidden
                        bg-gradient-to-br
                        from-[#5a3a1b]
                        via-[#21150d]
                        to-[#050403]
                        px-5
                        pt-[76px]
                        text-center
                        lg:pt-[88px]
                    "
                >
                    {/* Glow */}

                    <div
                        className="
                            products-hero-glow
                            pointer-events-none
                            absolute
                            left-1/2
                            top-1/2
                            h-[500px]
                            w-[500px]
                            -translate-x-1/2
                            -translate-y-1/2
                            rounded-full
                            bg-[#b17b43]/20
                            blur-[120px]
                        "
                    />

                    {/* Decorative Line */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            left-0
                            top-1/2
                            h-px
                            w-full
                            bg-gradient-to-r
                            from-transparent
                            via-[#d4a762]/30
                            to-transparent
                        "
                    />

                    <div className="relative z-10 max-w-5xl">
                        {/* Small Label */}
                        

                        <div className="mb-7 mt-15 flex items-center justify-center gap-4">
                            <span className="h-px w-10 bg-[#d4a762]/60" />

                            <p className="text-[10px] uppercase tracking-[0.4em] text-[#d4a762] sm:text-[11px]">
                                Premium Furniture Collection
                            </p>

                            <span className="h-px w-10 bg-[#d4a762]/60" />
                        </div>

                        {/* Main SEO Heading */}

                        <h1
                            id="products-heading"
                            className="
                                products-hero-title
                                text-5xl
                                font-medium
                                uppercase
                                leading-[0.95]
                                tracking-[-0.04em]
                                text-white
                                transition-transform
                                duration-100
                                sm:text-6xl
                                md:text-7xl
                                lg:text-[100px]
                            "
                        >
                            All
                            <span className="block font-light text-[#d4a762]">
                                Products
                            </span>
                        </h1>

                        {/* Description */}

                        <p
                            className="
                                products-hero-text
                                mx-auto
                                mt-8
                                max-w-2xl
                                text-sm
                                leading-7
                                text-white/55
                                transition-transform
                                duration-100
                                sm:text-base
                            "
                        >
                            Explore our premium collection of handcrafted
                            wooden furniture, modern beds, elegant doors,
                            wardrobes, dining tables, kitchens, decorations
                            and contemporary TV units.
                        </p>

                        {/* Scroll Indicator */}

                        <div className="mt-12 flex flex-col items-center gap-3">
                            <span className="text-[9px] uppercase tracking-[0.35em] text-white/35">
                                Scroll to explore
                            </span>

                            <div className="h-12 w-px overflow-hidden bg-white/10">
                                <div className="h-5 w-full animate-bounce bg-[#d4a762]" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    CATEGORY NAVIGATION
                ===================================================== */}

                <nav
                    aria-label="Product categories"
                    className="
                        sticky
                        top-0
                        z-30
                        border-b
                        border-[#e3dbd1]
                        bg-[#f8f4ef]/95
                        backdrop-blur-xl
                    "
                >
                    <div className="mx-auto max-w-[1500px] px-5 py-4 sm:px-8 lg:px-12">
                        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
                            <button
                                type="button"
                                onClick={() =>
                                    setActiveCategory("all")
                                }
                                aria-pressed={
                                    activeCategory === "all"
                                }
                                className={`
                                    shrink-0
                                    rounded-full
                                    px-5
                                    py-2.5
                                    text-[11px]
                                    font-medium
                                    uppercase
                                    tracking-[0.12em]
                                    transition-all
                                    duration-300
                                    ${
                                        activeCategory === "all"
                                            ? "bg-[#171513] text-white"
                                            : "text-[#5f574f] hover:bg-[#ebe4dc]"
                                    }
                                `}
                            >
                                All
                            </button>

                            {productCategories.map((category) => (
                                <button
                                    key={category.id}
                                    type="button"
                                    onClick={() =>
                                        setActiveCategory(category.id)
                                    }
                                    aria-pressed={
                                        activeCategory === category.id
                                    }
                                    className={`
                                        shrink-0
                                        rounded-full
                                        px-5
                                        py-2.5
                                        text-[11px]
                                        font-medium
                                        uppercase
                                        tracking-[0.12em]
                                        transition-all
                                        duration-300
                                        ${
                                            activeCategory ===
                                            category.id
                                                ? "bg-[#171513] text-white"
                                                : "text-[#5f574f] hover:bg-[#ebe4dc]"
                                        }
                                    `}
                                >
                                    {category.title}
                                </button>
                            ))}
                        </div>
                    </div>
                </nav>

                {/* =====================================================
                    PRODUCTS
                ===================================================== */}

                <section
                    aria-label="Furniture products"
                    className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
                >
                    <div className="mx-auto max-w-[1500px]">
                        {visibleCategories.map(
                            (category, categoryIndex) => (
                                <CategorySection
                                    key={category.id}
                                    category={category}
                                    categoryIndex={categoryIndex}
                                    onImageClick={setSelectedImage}
                                />
                            )
                        )}
                    </div>
                </section>

                {/* =====================================================
                    CTA
                ===================================================== */}

                <section
                    aria-labelledby="custom-project-heading"
                    className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28"
                >
                    <div
                        className="
                            relative
                            mx-auto
                            max-w-[1500px]
                            overflow-hidden
                            rounded-[28px]
                            bg-gradient-to-br
                            from-[#5a3a1b]
                            via-[#21150d]
                            to-[#050403]
                            px-6
                            py-16
                            text-center
                            sm:px-10
                            lg:py-20
                        "
                    >
                        <div
                            className="
                                pointer-events-none
                                absolute
                                left-1/2
                                top-1/2
                                h-80
                                w-80
                                -translate-x-1/2
                                -translate-y-1/2
                                rounded-full
                                bg-[#c3945d]/10
                                blur-[100px]
                            "
                        />

                        <div className="relative z-10">
                            <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#d4a762]">
                                Custom Woodwork
                            </p>

                            <h2
                                id="custom-project-heading"
                                className="text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl"
                            >
                                Have Something
                                <span className="block text-[#d4a762]">
                                    Special In Mind?
                                </span>
                            </h2>

                            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/45">
                                Tell us about your idea and let our craftsmen
                                turn your vision into a beautifully finished
                                piece.
                            </p>

                            <a
                                href={customProjectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Discuss your custom furniture project on WhatsApp"
                                className="
                                    mt-8
                                    inline-flex
                                    items-center
                                    gap-3
                                    rounded-full
                                    bg-white
                                    px-6
                                    py-3.5
                                    text-[12px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.12em]
                                    text-[#171513]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:bg-[#d4a762]
                                "
                            >
                                Discuss Your Project
                                <FiArrowUpRight className="text-[16px]" />
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* =======================================================
                IMAGE MODAL
            ======================================================= */}

            {selectedImage && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${selectedImage.name} preview`}
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
                    onClick={() => setSelectedImage(null)}
                >
                    {/* Close */}

                   <button
    type="button"
    onClick={() => onImageClick(product)}
    aria-label={`View ${product.name} image`}
    className="
        absolute
        right-4
        top-4
        z-20
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        bg-white/90
        text-[#302820]
        shadow-lg
        backdrop-blur-md
        transition-all
        duration-300
        hover:scale-110
        hover:bg-[#17120e]
        hover:text-white
    "
>
    <FiMaximize2 className="text-[17px]" />
</button>
                    {/* Image */}

                    <div
                        className="relative max-h-[90vh] max-w-[95vw]"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <img
                            src={selectedImage.image}
                            alt={selectedImage.alt}
                            title={selectedImage.name}
                            width="1200"
                            height="1500"
                            decoding="async"
                            className="
                                max-h-[88vh]
                                max-w-full
                                rounded-2xl
                                object-contain
                                shadow-2xl
                            "
                        />

                        <div className="mt-3 text-center">
                            <p className="text-sm font-medium text-white">
                                {selectedImage.name}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}

// ============================================================
// CATEGORY SECTION
// ============================================================

function CategorySection({
    category,
    categoryIndex,
    onImageClick,
}) {
    return (
        <section
            aria-labelledby={`${category.id}-heading`}
            className="mb-20 last:mb-0 lg:mb-28"
        >
            {/* CATEGORY HEADER */}

            <div
                className="
                    mb-8
                    flex
                    flex-col
                    gap-6
                    border-b
                    border-[#ded5ca]
                    pb-7
                    md:flex-row
                    md:items-end
                    md:justify-between
                "
            >
                {/* Left */}

                <div className="flex gap-5">
                    {/* Number */}

                    <div
                        className="
                            hidden
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#d7c9ba]
                            text-[11px]
                            font-medium
                            text-[#8b7157]
                            sm:flex
                        "
                    >
                        {category.number}
                    </div>

                    <div>
                        <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-[#a0805c]">
                            {category.subtitle}
                        </p>

                        <h2
                            id={`${category.id}-heading`}
                            className="
                                text-3xl
                                font-medium
                                tracking-[-0.04em]
                                text-[#171513]
                                sm:text-4xl
                                lg:text-5xl
                            "
                        >
                            {category.title}

                            <span className="ml-2 font-light text-[#b39572]">
                                Collection
                            </span>
                        </h2>
                    </div>
                </div>

                {/* Description */}

                <div className="max-w-md">
                    <p className="text-sm leading-6 text-[#777069]">
                        {category.description}
                    </p>

                    <div className="mt-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#9a8064]">
                        <span>
                            {String(
                                category.products.length
                            ).padStart(2, "0")}{" "}
                            Pieces
                        </span>

                        <span className="h-px w-8 bg-[#c9b9a7]" />

                        <span>Explore Collection</span>
                    </div>
                </div>
            </div>

            {/* PRODUCTS GRID */}

            <div
                className="
                    grid
                    grid-cols-2
                    gap-3
                    sm:gap-5
                    lg:grid-cols-3
                    xl:grid-cols-4
                "
            >
                {category.products.map((product, index) => (
                    <div
                        key={`${category.id}-${index}`}
                        className="animate-[fadeUp_0.7s_ease-out_both]"
                        style={{
                            animationDelay: `${index * 80}ms`,
                        }}
                    >
                        <ProductCard
                            product={product}
                            onImageClick={onImageClick}
                            priority={
                                categoryIndex === 0 && index < 2
                            }
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}