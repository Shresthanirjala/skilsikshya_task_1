"use client";
import React, { useState } from "react";

// Google Font Import for Outfit
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
  .font-outfit { font-family: 'Outfit' }
`;

const IconGroup = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="-mt-12 flex items-center justify-around w-full px-12">
      {[
        { src: "/React.png", alt: "React" },
        { src: "/like.png", alt: "Like" },
        { src: "/vue.png", alt: "Vue" },
        { src: "/pencil.png", alt: "Pencil" },
      ].map((icon) => (
        <img
          key={icon.src}
          src={icon.src}
          alt={icon.alt}
          className="h-[75px] w-[75px] object-contain drop-shadow-xl"
        />
      ))}
    </div>
  </div>
);

export default function InteractiveCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      id: 0,
      num: "23",
      title: "All Courses",
      sub: "courses you're powering through right now.",
    },
    {
      id: 1,
      num: "05",
      title: "Upcoming Courses",
      sub: "exciting new courses waiting to boost your skills.",
    },
    {
      id: 2,
      num: "10",
      title: "Ongoing Courses",
      sub: "currently happening—don't miss out on the action",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 font-outfit overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: fontStyles }} />
      <div className="w-full max-w-6xl mx-auto flex flex-col">
        {/* Main Header */}
        <div className="mb-14">
          <p className="text-gray-600 text-lg mb-1">
            Explore our classes and master trending skills!
          </p>
          <h1 className="text-[3rem] font-extrabold text-gray-900 tracking-tight flex items-center gap-3">
            Dive Into{" "}
            <span className="text-[#00b172]">What's Hot Right Now!</span>{" "}
            <span className="text-4xl">🔥</span>
          </h1>
        </div>

        {/* Cards Container */}
        <div className="flex items-end justify-between w-full h-[540px] gap-6">
          {cards.map((card, index) => {
            const isActive = activeIndex === index;
            const [firstWord, ...restWords] = card.title.split(" ");
            const secondLine = restWords.join(" ");
            const isAllCourses = card.id === 0;
            return (
              <div
                key={card.id}
                className={`group relative flex h-full transition-[width] duration-[900ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                  isActive ? "w-[60%]" : "w-[20%]"
                }`}
              >
                {/* Click indicator for inactive cards */}
                {!isActive && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 pointer-events-none flex flex-col items-center gap-1">
                    <span className="text-gray-700 text-base font-semibold tracking-wide whitespace-nowrap leading-none">
                      Click me
                    </span>
                    <img
                      src="/Group.png"
                      alt="Click"
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                )}

                <div
                  onClick={() => setActiveIndex(index)}
                  className={`relative w-full h-full rounded-[3.5rem] overflow-hidden cursor-pointer bg-[#fdf4f5] transition-transform duration-300 active:scale-95 shadow-lg ${
                    isActive
                      ? "shadow-[0_20px_50px_-15px_rgba(195,50,65,0.4)]"
                      : "hover:bg-[#faebec]"
                  }`}
                >
                  {/* Red Background Reveal */}
                  <div
                    className="absolute inset-0 bg-[#C33241] transition-all duration-[900ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] z-0"
                    style={{
                      clipPath: isActive
                        ? "circle(150% at 10% 90%)"
                        : "circle(0% at 10% 90%)",
                    }}
                  />

                  {/* INACTIVE STATE CONTENT (The Text for dim cards) */}
                  <div
                    className={`absolute inset-0 flex flex-col justify-between items-center py-14 transition-all duration-500 z-10 text-[#C33241] ${
                      isActive
                        ? "opacity-0 pointer-events-none scale-95"
                        : "opacity-100 delay-300"
                    }`}
                  >
                    {/* Vertical Text Area */}
                    <div className="flex-1 w-full relative">
                      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 w-[280px] flex flex-col items-start gap-1">
                        <h3 className="text-3xl font-Quicksand font-bold tracking-tight leading-none">
                          <span>{firstWord}</span>
                          <br />
                          <span>{secondLine}</span>
                        </h3>
                        <p className="text-sm font-Quicksand opacity-80 leading-snug">
                          {card.sub}
                        </p>
                      </div>
                    </div>
                    {/* Collapsed Bottom Number */}
                    <div className="text-[6.5rem] font-black flex items-start tracking-tighter leading-none">
                      {card.num}
                      <span className="text-4xl mt-1 leading-none">+</span>
                    </div>
                  </div>

                  {/* ACTIVE STATE CONTENT (Expanded) */}
                  <div
                    className={`absolute inset-0 p-12 flex flex-col justify-between transition-all duration-500 text-white z-20 ${
                      isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="flex justify-end w-full">
                      <span className="text-lg font-bold flex items-center gap-2 cursor-pointer hover:underline transition-all">
                        View all Courses
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </span>
                    </div>

                    <IconGroup />

                    <div className="flex items-end gap-8 relative">
                      <div className="text-[9.5rem] leading-[0.82] font-black tracking-tighter flex items-start shrink-0">
                        {card.num}
                        <span className="text-[4.25rem] leading-none mt-2 ml-1 font-bold">
                          +
                        </span>
                      </div>
                      <div className="pb-3 max-w-[330px]">
                        <h3
                          className={`font-bold leading-[0.85] tracking-tight ${
                            isAllCourses ? "text-[3.4rem]" : "text-[3.15rem]"
                          }`}
                        >
                          {isAllCourses ? (
                            card.title
                          ) : (
                            <>
                              <span>{firstWord}</span>
                              <br />
                              <span>{secondLine}</span>
                            </>
                          )}
                        </h3>
                        <p className="text-[1.1rem] font-Quicksand text-white/90 leading-snug mt-3">
                          {card.sub}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
