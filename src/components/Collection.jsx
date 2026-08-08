import { FiArrowUpRight } from "react-icons/fi";

import Door from "../assets/dor1.webp";
import Kitchen from "../assets/kitchen2.webp";
import Bed from "../assets/bed2.webp";

export default function Collections() {
    // ============================================================
    // COLLECTIONS DATA
    // ============================================================

    const collections = [
        {
            id: "01",
            title: "Doors",
            description:
                "Elegant wooden doors designed to elevate your space with timeless character.",
            image: Door,
            link: "/products",
            alt: "Luxury wooden doors collection",
        },
        {
            id: "02",
            title: "Kitchens",
            description:
                "Modern kitchens crafted for style, functionality and everyday living.",
            image: Kitchen,
            link: "/products",
            alt: "Modern luxury kitchen collection",
        },
        {
            id: "03",
            title: "Bedrooms",
            description:
                "Beautiful bedroom interiors designed for comfort, warmth and elegance.",
            image: Bed,
            link: "/products",
            alt: "Modern bedroom furniture collection",
        },
    ];

    return (
        <section
            className="
                bg-[#21150d]
                px-5
                py-16
                sm:px-8
                sm:py-20
                lg:px-12
                lg:py-24
            "
        >
            <div className="mx-auto max-w-[1500px]">

                {/* =================================================
                    HEADER
                ================================================= */}

                <div
                    className="
                        mb-8
                        flex
                        items-end
                        justify-between
                        gap-5
                        sm:mb-10
                        lg:mb-12
                    "
                >
                    <div>
                        <p
                            className="
                                mb-2
                                text-[10px]
                                uppercase
                                tracking-[0.3em]
                                text-[#d4a762]
                                sm:text-[11px]
                            "
                        >
                            Explore Our Collection
                        </p>

                        <h2
                            className="
                                text-3xl
                                font-medium
                                tracking-tight
                                text-[#f5eee7]
                                sm:text-4xl
                                lg:text-5xl
                            "
                        >
                            Designed for Your Space
                        </h2>
                    </div>

                    {/* Desktop View All */}

                    <a
                        href="/products"
                        className="
                            group
                            hidden
                            items-center
                            gap-2
                            text-[13px]
                            font-medium
                            text-white/80
                            transition-colors
                            duration-300
                            hover:text-white
                            sm:flex
                        "
                    >
                        <span className="relative">
                            View All Products

                            <span
                                className="
                                    absolute
                                    -bottom-1
                                    left-0
                                    h-px
                                    w-0
                                    bg-white
                                    transition-all
                                    duration-300
                                    group-hover:w-full
                                "
                            />
                        </span>

                        <FiArrowUpRight
                            className="
                                text-[18px]
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                                group-hover:-translate-y-1
                            "
                        />
                    </a>
                </div>

                {/* =================================================
                    COLLECTION CARDS
                ================================================= */}

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-5
                        sm:grid-cols-2
                        lg:grid-cols-3
                        lg:gap-6
                    "
                >
                    {collections.map((item) => (
                        <a
                            key={item.id}
                            href={item.link}
                            className="
                                group
                                relative
                                block
                                h-[330px]
                                overflow-hidden
                                rounded-[22px]
                                border
                                border-white/10
                                bg-[#3a281e]
                                shadow-[0_15px_40px_rgba(0,0,0,0.18)]
                                transition-all
                                duration-500
                                hover:-translate-y-1
                                hover:shadow-[0_20px_50px_rgba(0,0,0,0.30)]
                                sm:h-[350px]
                                lg:h-[380px]
                            "
                        >
                            {/* =================================================
                                IMAGE
                            ================================================= */}

                            <img
                                src={item.image}
                                alt={item.alt}
                                width="800"
                                height="800"
                                loading="eager"
                                fetchPriority="high"
                                decoding="async"
                                className="
                                    absolute
                                    inset-0
                                    h-full
                                    w-full
                                    object-cover
                                    transition-transform
                                    duration-700
                                    ease-out
                                    group-hover:scale-[1.04]
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
                                    bg-gradient-to-t
                                    from-[#160d09]/90
                                    via-[#24150f]/45
                                    to-[#2b1d16]/10
                                    transition-all
                                    duration-500
                                    group-hover:from-[#120905]/95
                                    group-hover:via-[#24150f]/55
                                "
                            />

                            {/* =================================================
                                NUMBER
                            ================================================= */}

                            <div
                                className="
                                    absolute
                                    left-5
                                    top-5
                                    flex
                                    h-9
                                    w-9
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-white/40
                                    bg-black/20
                                    text-[11px]
                                    font-medium
                                    tracking-wider
                                    text-white
                                    backdrop-blur-md
                                    transition-all
                                    duration-300
                                    group-hover:border-[#d6b18a]
                                    group-hover:bg-[#8b5e3c]/30
                                    sm:left-6
                                    sm:top-6
                                "
                            >
                                {item.id}
                            </div>

                            {/* =================================================
                                CONTENT
                            ================================================= */}

                            <div
                                className="
                                    absolute
                                    inset-x-0
                                    bottom-0
                                    flex
                                    items-end
                                    justify-between
                                    gap-4
                                    p-5
                                    sm:p-6
                                "
                            >
                                <div className="max-w-[78%]">
                                    <h3
                                        className="
                                            text-[25px]
                                            font-medium
                                            leading-tight
                                            tracking-[-0.02em]
                                            text-white
                                            sm:text-[28px]
                                        "
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-2
                                            max-w-[290px]
                                            text-[13px]
                                            leading-5
                                            text-white/75
                                            sm:text-[14px]
                                        "
                                    >
                                        {item.description}
                                    </p>
                                </div>

                                {/* Arrow */}

                                <div
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-white/40
                                        bg-black/20
                                        text-white
                                        backdrop-blur-md
                                        transition-all
                                        duration-300
                                        group-hover:translate-x-1
                                        group-hover:border-white
                                        group-hover:bg-white
                                        group-hover:text-[#2b1d16]
                                    "
                                >
                                    <FiArrowUpRight size={20} />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* =================================================
                    MOBILE VIEW ALL
                ================================================= */}

                <div className="mt-8 flex justify-center sm:hidden">
                    <a
                        href="/products"
                        className="
                            group
                            flex
                            items-center
                            gap-2
                            border-b
                            border-white/50
                            pb-1
                            text-[13px]
                            font-medium
                            text-white/85
                        "
                    >
                        View All Products

                        <FiArrowUpRight
                            className="
                                text-[18px]
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                                group-hover:-translate-y-1
                            "
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
