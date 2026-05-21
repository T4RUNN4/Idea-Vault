"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const slides = [
  {
    image:
      "https://img-cdn.inc.com/image/upload/f_webp,c_fit,w_1920,q_auto/images/panoramic/getty_495193237_9707209704500150_99962.jpg",
    title: "Turn Ideas Into Startups",
    description:
      "Discover innovative ideas, connect with creators, and build the next big thing.",
    button: "Explore Ideas",
    href: "/ideas",
  },
  {
    image:
      "https://mentorloop.com/wp-content/uploads/2022/09/pexels-matheus-bertelli-3856026-scaled.jpg",
    title: "Innovation Starts Here",
    description:
      "Share your startup vision and get valuable feedback from the community.",
    button: "Submit Idea",
    href: "/add-ideas",
  },
  {
    image:
      "https://greenamerica.org/sites/default/files/styles/interior_landing_image_1375x505/public/2017-12/diverse%20friends%20smaller.jpg.webp?h=1ef4e43e&itok=f9smaq1-",
    title: "Build With The Community",
    description:
      "Collaborate with entrepreneurs, developers, and innovators worldwide.",
    button: "Join Community",
    href: "/register",
  },
];

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
      }),
    ],
  );

  return (
    <section className="relative">
      <div className="overflow-hidden rounded-b-3xl" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="relative min-w-full h-[75vh]">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/55" />

              <div className="absolute inset-0 flex items-center justify-center px-6">
                <div className="max-w-3xl text-center text-white">
                  <span className="inline-block px-4 py-1 rounded-full bg-lime-500/20 border border-lime-400 text-lime-300 text-sm mb-6">
                    Startup Innovation Platform
                  </span>

                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    {slide.title}
                  </h1>

                  <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed">
                    {slide.description}
                  </p>

                  <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
                    <a
                      className="btn bg-lime-500 hover:bg-lime-600 border-none text-white px-8"
                      href={slide.href}
                    >
                      {slide.button}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-base-100 to-transparent pointer-events-none" />
    </section>
  );
}
