import {
  FiShield,
  FiSun,
  FiHeart,
  FiTruck,
} from "react-icons/fi";

const features = [
  {
    icon: FiShield,
    title: "Premium Quality",
    description: "Quality you can trust.",
  },
  {
    icon: FiSun,
    title: "Modern Design",
    description: "Elegant & timeless.",
  },
  {
    icon: FiHeart,
    title: "Custom Made",
    description: "Tailored to your needs.",
  },
  {
    icon: FiTruck,
    title: "Fast Delivery",
    description: "On time, every time.",
  },
];

export default function Features() {
  return (
    <section className="mt-2 w-full px-3 sm:px-5 lg:px-8">
      <div
        className="
          w-full
          overflow-hidden
          rounded-[20px]
          bg-gradient-to-br
          from-[#5a3a1b]
          via-[#21150d]
          to-[#050403]

          px-4
          py-5

          sm:rounded-[22px]
          sm:px-6
          sm:py-6

          lg:px-10
          lg:py-7
        "
      >
        <div
          className="
            grid
            grid-cols-2
            items-center
            justify-items-center
            gap-x-4
            gap-y-6

            sm:gap-x-8
            sm:gap-y-7

            lg:grid-cols-4
            lg:gap-10

            xl:gap-16
          "
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                  flex
                  w-full
                  max-w-[190px]
                  items-center
                  gap-2.5

                  sm:max-w-[220px]
                  sm:gap-3

                  lg:max-w-none
                  lg:gap-3.5
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    text-[#d8c2a5]

                    sm:h-10
                    sm:w-10

                    lg:h-12
                    lg:w-12
                  "
                >
                  <Icon
                    strokeWidth={1.4}
                    className="
                      h-6
                      w-6

                      sm:h-7
                      sm:w-7

                      lg:h-8
                      lg:w-8
                    "
                  />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <h3
                    className="
                      truncate
                      text-[10px]
                      font-semibold
                      leading-4
                      text-[#f3e9dc]

                      sm:text-[12px]

                      lg:text-[14px]
                    "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                      mt-0.5
                      truncate
                      text-[8px]
                      leading-3
                      text-[#b8a895]

                      sm:text-[10px]
                      sm:leading-4

                      lg:mt-1
                      lg:text-[12px]
                    "
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}