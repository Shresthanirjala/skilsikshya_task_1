"use client";
import React, { useState } from "react";

const IconGroup = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="relative w-64 h-32 -mt-12 ml-12">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-[#5db3ff] rounded-2xl rotate-[-8deg] flex items-center justify-center shadow-lg">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            transform="rotate(45 12 12)"
          ></ellipse>
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            transform="rotate(-45 12 12)"
          ></ellipse>
        </svg>
      </div>
      <div className="absolute left-16 bottom-[-10px] w-14 h-16 bg-[#4ade80] rounded-xl rotate-[6deg] flex items-center justify-center shadow-lg">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      </div>
      <div className="absolute left-32 top-[-10px] w-14 h-14 bg-[#fde047] rounded-xl rotate-[-12deg] flex items-center justify-center shadow-lg">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#166534"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22v-6"></path>
          <path d="M12 8a4 4 0 0 0-4-4H4v4a4 4 0 0 0 4 4h4"></path>
          <path d="M12 16a4 4 0 0 0 4-4h4v-4a4 4 0 0 0-4-4h-4"></path>
        </svg>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-[#60a5fa] rounded-xl rotate-[14deg] flex items-center justify-center shadow-lg">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21.17 10.07L13.93 2.83a2 2 0 0 0-2.83 0L3.03 10.9a2 2 0 0 0 0 2.83l7.24 7.24a2 2 0 0 0 2.83 0l8.07-8.07a2 2 0 0 0 0-2.83z"></path>
          <path d="M2 22h20"></path>
        </svg>
      </div>
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
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 font-sans overflow-hidden">
      <div className="w-full max-w-5xl mx-auto flex flex-col">
        <p className="text-center text-gray-400 font-semibold mb-16 text-[15px] tracking-wide">
          Note: Click the cards to view the animation
        </p>

        <div className="mb-14">
          <p className="text-gray-600 text-lg mb-2">
            Explore our classes and master trending skills!
          </p>
          <h1 className="text-[2.75rem] font-extrabold text-gray-900 tracking-tight flex items-center gap-3">
            Dive into{" "}
            <span className="text-[#c92a3b]">What's Hot Right Now!</span>{" "}
            <span className="text-4xl">🔥</span>
          </h1>
        </div>

        <div className="flex items-end justify-between w-full h-[460px] gap-4">
          {cards.map((card, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={card.id}
                className={`group relative flex h-full transition-[width] duration-[900ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                  isActive ? "w-[60%]" : "w-[18%]"
                }`}
              >
                {!isActive && (
                  <div className="absolute -top-[4.5rem] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce z-50 pointer-events-none flex flex-col items-center gap-1">
                    <span className="text-gray-500 text-sm font-bold tracking-wide whitespace-nowrap">
                      Click here!
                    </span>
                    <img
                      src="/Group.png"
                      alt="Click here"
                      className="h-6 w-auto object-contain"
                    />
                  </div>
                )}

                <div
                  onClick={() => setActiveIndex(index)}
                  className={`relative w-full h-full rounded-[2.5rem] overflow-hidden cursor-pointer bg-[#fdf4f5] transition-transform duration-300 active:scale-95 shadow-lg ${
                    isActive
                      ? "shadow-[0_20px_40px_-15px_rgba(201,42,59,0.5)]"
                      : "hover:bg-[#faebec]"
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-[#c92a3b] transition-all duration-[900ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] z-0"
                    style={{
                      clipPath: isActive
                        ? "circle(150% at 10% 90%)"
                        : "circle(0% at 10% 90%)",
                    }}
                  />

                  <div
                    className={`absolute inset-0 flex flex-col justify-between items-center py-10 transition-opacity duration-300 text-[#c92a3b] z-10 ${
                      isActive
                        ? "opacity-0 pointer-events-none"
                        : "opacity-100 delay-300"
                    }`}
                  >
                    <div className="flex-1 w-full relative">
                      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 w-[280px] flex flex-col items-start gap-1">
                        <h3 className="text-3xl font-black tracking-tight leading-none">
                          {card.title}
                        </h3>
                        <p className="text-sm font-semibold opacity-80 leading-snug">
                          {card.sub}
                        </p>
                      </div>
                    </div>
                    <div className="text-[3.5rem] font-black flex items-start tracking-tighter leading-none">
                      {card.num}
                      <span className="text-3xl mt-1 leading-none">+</span>
                    </div>
                  </div>

                  <div
                    className={`absolute top-0 left-0 w-[650px] h-full p-10 flex flex-col justify-between transition-opacity duration-500 text-white z-20 ${
                      isActive
                        ? "opacity-100 delay-[400ms]"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="flex justify-end relative w-full pr-[calc(650px-100%)]">
                      <span className="text-sm font-semibold flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                        View all Courses
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </span>
                    </div>

                    <IconGroup />

                    <div className="flex items-end gap-6 relative">
                      <div className="text-[8rem] leading-[0.75] font-black tracking-tighter flex items-start">
                        {card.num}
                        <span className="text-[3.5rem] leading-none mt-4">
                          +
                        </span>
                      </div>
                      <div className="pb-2 max-w-[220px]">
                        <h3 className="text-[2rem] font-bold mb-2 leading-none tracking-tight">
                          {card.title}
                        </h3>
                        <p className="text-[15px] font-medium text-white/90 leading-snug">
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
