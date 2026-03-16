"use client";
import React, { useState } from "react";

const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
  .font-outfit { font-family: 'Outfit' }
`;

const IconGroup = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    {/* Scaled icons for mobile using scale-75 md:scale-100 */}
    <div className="-mt-12 flex items-center justify-around w-full px-6 md:px-12 scale-75 md:scale-100">
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
          className="h-[50px] w-[50px] md:h-[75px] md:w-[75px] object-contain drop-shadow-xl"
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
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8 md:p-8 font-outfit overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: fontStyles }} />
      <div className="w-full max-w-6xl mx-auto flex flex-col">
        <div className="mb-8 md:mb-14">
          <p className="text-gray-600 text-sm md:text-lg mb-1">
            Explore our classes and master trending skills!
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-[3rem] font-extrabold text-gray-900 tracking-tight flex flex-wrap items-center gap-2 sm:gap-3">
            Dive Into{" "}
            <span className="text-[#00b172]">What's Hot Right Now!</span>{" "}
            <span className="text-xl md:text-4xl">🔥</span>
          </h1>
        </div>

        {/* Changed h-auto to a fixed height on md: to allow the horizontal expansion effect */}
        <div className="flex flex-col md:flex-row items-stretch md:items-end justify-center md:justify-between w-full gap-4 md:gap-6 md:h-[540px]">
          {cards.map((card, index) => {
            const isActive = activeIndex === index;
            const [firstWord, ...restWords] = card.title.split(" ");
            const secondLine = restWords.join(" ");
            const isAllCourses = card.id === 0;

            return (
              <div
                key={card.id}
                className={`group relative flex transition-all duration-[900ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] 
                  ${
                    isActive
                      ? "w-full md:w-[60%] h-[380px] md:h-full"
                      : "w-full md:w-[20%] h-[100px] md:h-full"
                  }`}
              >
                {/* Desktop-only Tooltip */}
                {!isActive && (
                  <div className="hidden md:flex absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 pointer-events-none flex-col items-center gap-1">
                    <span className="text-gray-700 text-xl font-semibold tracking-wide whitespace-nowrap leading-none">
                      Click me
                    </span>
                    <img
                      src="/Group.png"
                      alt="Click"
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                )}

                <div
                  onClick={() => setActiveIndex(index)}
                  className={`relative w-full h-full rounded-[2rem] md:rounded-[3.5rem] overflow-hidden cursor-pointer bg-[#fdf4f5] transition-transform duration-300 active:scale-95 shadow-lg ${
                    isActive
                      ? "shadow-[0_20px_50px_-15px_rgba(195,50,65,0.4)]"
                      : "hover:bg-[#faebec]"
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-[#C33241] transition-all duration-[900ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] z-0"
                    style={{
                      clipPath: isActive
                        ? "circle(150% at 10% 90%)"
                        : "circle(0% at 10% 90%)",
                    }}
                  />

                  {/* INACTIVE STATE CONTENT */}
                  <div
                    className={`absolute inset-0 flex flex-row md:flex-col justify-between items-center px-8 md:py-14 transition-all duration-500 z-10 text-[#C33241] ${
                      isActive
                        ? "opacity-0 pointer-events-none scale-95"
                        : "opacity-100 delay-300"
                    }`}
                  >
                    {/* Title section: Rotated on desktop, horizontal on mobile */}
                    <div className="flex-1 flex items-center md:items-start md:relative w-full">
                      <div className="md:absolute md:top-[45%] md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:-rotate-90 md:w-[280px] flex flex-col items-start gap-1">
                        <h3 className="text-lg md:text-3xl font-Quicksand font-bold tracking-tight leading-tight md:leading-none">
                          <span className="md:block">{firstWord} </span>
                          <span className="md:block">{secondLine}</span>
                        </h3>
                        <p className="hidden md:block text-sm font-Quicksand opacity-80 leading-snug">
                          {card.sub}
                        </p>
                      </div>
                    </div>

                    <div className="text-4xl md:text-[6.5rem] font-black flex items-start tracking-tighter leading-none shrink-0">
                      {card.num}
                      <span className="text-xl md:text-4xl mt-1 leading-none">
                        +
                      </span>
                    </div>
                  </div>

                  {/* ACTIVE STATE CONTENT */}
                  <div
                    className={`absolute inset-0 p-6 md:p-12 flex flex-col justify-between transition-all duration-500 text-white z-20 ${
                      isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="flex justify-end w-full">
                      <span className="text-sm md:text-lg font-bold flex items-center gap-2 cursor-pointer hover:underline transition-all">
                        View all Courses
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5"
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

                    <div className="flex flex-col md:flex-row items-start md:items-end gap-2 md:gap-8 relative">
                      <div className="text-[4rem] sm:text-[6rem] md:text-[9.5rem] leading-[0.82] font-black tracking-tighter flex items-start shrink-0">
                        {card.num}
                        <span className="text-[1.5rem] md:text-[4.25rem] leading-none mt-2 ml-1 font-bold">
                          +
                        </span>
                      </div>
                      <div className="pb-0 md:pb-3 max-w-[330px]">
                        <h3
                          className={`font-bold leading-[0.9] md:leading-[0.85] tracking-tight ${
                            isAllCourses
                              ? "text-[1.8rem] md:text-[3.4rem]"
                              : "text-[1.6rem] md:text-[3.15rem]"
                          }`}
                        >
                          {isAllCourses ? (
                            card.title
                          ) : (
                            <>
                              <span className="block md:inline">
                                {firstWord}
                              </span>
                              <span className="block">{secondLine}</span>
                            </>
                          )}
                        </h3>
                        <p className="text-xs md:text-[1.1rem] font-Quicksand text-white/90 leading-snug mt-2 md:mt-3">
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
