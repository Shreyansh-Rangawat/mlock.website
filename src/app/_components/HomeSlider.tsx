"use client";
import { useState } from "react";

const slides = [
  "/home-app-img1.jpeg",
  "/home-app-img2.jpeg",
  "/home-app-img3.jpeg",
  "/home-app-img4.jpeg",
  "/home-app-img5.jpeg",
];

export default function HomeSlider() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(slides.length - 1, i + 1));

  return (
    <div className="relative mx-auto w-[250px] select-none md:mr-10">
      {/* Phone frame */}
      <div
        className="relative h-[500px] w-[250px] rounded-3xl border-4 border-black bg-center bg-cover"
        style={{ backgroundImage: "url('/mlock.website/phone bg.png')" }}
      >
        {/* Slider viewport */}
        <div className="absolute left-[10px] top-[10px] h-[480px] w-[230px] overflow-hidden rounded-2xl border-4 border-black bg-gray-300">
          <div
            className="flex h-full w-[1150px] transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${index * 230}px)` }}
          >
            {slides.map((src) => (
              <div key={src} className="h-full w-[230px] shrink-0">
                <img src={src} alt="App screen" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-[-18px] top-[60%] z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#18ee18] text-white shadow hover:bg-[#16d716]"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-[-18px] top-[60%] z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#18ee18] text-white shadow hover:bg-[#16d716]"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="mt-2 flex justify-center gap-2 md:justify-end md:pr-6">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full ${i === index ? "bg-[#18ee18]" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
}
