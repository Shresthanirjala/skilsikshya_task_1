"use client";
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Page = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const cardsData = [
    {
      id: 1,
      title: "Start with Clarity",
      subtitle: "Step into a better learning path.",
      description:
        "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
      img: "/card1.png",
      bgColor: "var(--card-one)",
      align: "right",
      imgClasses:
        "absolute -left-6 md:-left-12 -bottom-10 md:-bottom-16 w-[55%] md:w-[50%] max-w-[350px]",
      hoverState: {
        clickable: false,
        slides: [
          {
            text: "Clarity unlocked—\nstickers, sips, and skills\nall in one go!",
            textClasses:
              "absolute right-8 top-16 text-2xl md:text-[28px] font-bold w-[45%] text-left leading-[1.2]",
            img: "/hover1.png",
            imgClasses:
              "absolute -left-4 -bottom-4 w-[75%] md:w-[70%] max-w-[420px] object-contain",
          },
        ],
      },
    },
    {
      id: 2,
      title: "Learn by Doing",
      subtitle: "Practical skills, real projects.",
      description:
        "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
      img: "/card2.png",
      bgColor: "var(--card-two)",
      align: "left",
      imgClasses:
        "absolute -right-4 md:-right-6 -top-20 md:top-10 w-[45%] md:w-[40%] max-w-[280px]",
      hoverState: {
        clickable: true,
        slides: [
          {
            text: "Focused faces—learning\nmode: ON!",
            textClasses:
              "absolute left-10 top-12 text-2xl md:text-[28px] font-bold w-[60%] leading-[1.2]",
            img: "/hover2.png",
            imgClasses:
              "absolute right-0 bottom-0 w-[85%] md:w-[75%] max-w-[500px] object-contain",
          },
          {
            text: "Laptops, lessons, and a whole lot of\ngrowth!",
            textClasses:
              "absolute top-10 left-1/2 -translate-x-1/2 text-2xl md:text-[28px] font-bold w-[80%] text-center leading-[1.2]",
            img: "/hover3.png",
            imgClasses:
              "absolute left-1/2 -translate-x-1/2 bottom-0 w-[95%] md:w-[85%] max-w-[550px] object-contain",
          },
        ],
      },
    },
    {
      id: 3,
      title: "Get Mentored & Supported",
      subtitle: "You're not learning alone.",
      description:
        "Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You’re never on your own.",
      img: "/card3.png",
      bgColor: "var(--card-three)",
      align: "right",
      imgClasses:
        "absolute -left-8 md:-left-16 -bottom-12 md:-bottom-20 w-[60%] md:w-[55%] max-w-[380px]",
    },
    {
      id: 4,
      title: "Achieve & Showcase",
      subtitle: "Build your portfolio, get job-ready.",
      description:
        "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
      img: "/card4.png",
      bgColor: "var(--card-four)",
      align: "left",
      imgClasses:
        "absolute -right-6 md:-right-12 -bottom-10 md:-bottom-16 w-[60%] md:w-[55%] max-w-[400px]",
    },
  ];

  const handleMouseLeave = (id) => {
    setHoveredId(null);
    if (id === 2) {
      setTimeout(() => setSlideIndex(0), 300);
    }
  };

  const nextSlide = (e, id) => {
    e.stopPropagation();
    if (id === 2) {
      setSlideIndex((prev) => (prev === 0 ? 1 : 0));
    }
  };

  const prevSlide = (e, id) => {
    e.stopPropagation();
    if (id === 2) {
      setSlideIndex((prev) => (prev === 1 ? 0 : 1));
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-background py-32 px-4 sm:px-8 overflow-x-hidden overflow-y-visible font-quicksand">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
        .font-outfit { font-family: 'Outfit' }


        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 4s ease-in-out 2s infinite;
        }
      `}</style>

      <div className="w-full max-w-[95rem] mx-auto flex flex-col gap-3 md:gap-4 md:px-8">
        <p className="text-sm md:text-base font-semibold text-gray-700 tracking-wide">
          Your SkillShikshya Journey
        </p>
        <h1 className="text-3xl md:text-[2.75rem] font-extrabold tracking-tight leading-snug">
          <span className="text-[#12b886]">Step</span>{" "}
          <span className="text-[#343a40]">In.</span>{" "}
          <span className="text-[#12b886]">Skill</span>{" "}
          <span className="text-[#343a40]">Up.</span>{" "}
          <span className="text-[#12b886]">Stand</span>{" "}
          <span className="text-[#343a40]">Out</span>{" "}
          <span className="align-middle">🚀</span>
        </h1>
      </div>

      <div className="w-full max-w-[95rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-24 lg:gap-y-28 mt-12 md:px-8">
        {cardsData.map((card) => (
          <div
            key={card.id}
            onMouseEnter={() => setHoveredId(card.id)}
            onMouseLeave={() => handleMouseLeave(card.id)}
            className="relative w-full min-h-[350px]"
          >
            <div
              className="absolute inset-0 rounded-[2.5rem] "
              style={{ backgroundColor: card.bgColor }}
            />

            <div
              className={`absolute inset-0 transition-all duration-500 ease-out ${
                hoveredId === card.id && card.hoverState
                  ? "opacity-0 -translate-x-12 pointer-events-none"
                  : "opacity-100 translate-x-0"
              }`}
            >
              <div className="absolute inset-0 p-8 md:p-12 text-white flex flex-col justify-center">
                <div
                  className={`relative z-10 w-[65%] sm:w-[60%] ${
                    card.align === "right"
                      ? "ml-auto text-right"
                      : "mr-auto text-left"
                  }`}
                >
                  <h2 className="text-[1.9rem] md:text-[2.1rem] font-extrabold tracking-tight mb-3">
                    {card.title}
                  </h2>
                  <h3 className="text-base md:text-lg font-semibold mb-4 opacity-95">
                    {card.subtitle}
                  </h3>
                  <p className="text-[0.9rem] md:text-[0.95rem] leading-relaxed opacity-90 font-medium">
                    {card.description}
                  </p>
                </div>
              </div>

              <div
                className={`absolute z-20 drop-shadow-2xl ${card.imgClasses} ${
                  card.id % 2 === 0 ? "animate-float-delayed" : "animate-float"
                }`}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-auto object-contain pointer-events-none "
                />
              </div>
            </div>

            {card.hoverState && (
              <div
                className={`absolute inset-0 rounded-[2.5rem] overflow-hidden transition-all duration-500 ease-out text-white ${
                  hoveredId === card.id
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-12 pointer-events-none"
                }`}
                style={{ backgroundColor: card.bgColor }}
              >
                {card.id === 1 && (
                  <>
                    <div className="absolute left-10 top-10 w-24 md:w-28 z-30">
                      <img
                        src="/wow.png"
                        alt="Wow sticker"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <div className="absolute right-10 bottom-10 w-24 md:w-28 z-30">
                      <img
                        src="/wow.png"
                        alt="Wow sticker"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </>
                )}

                <div className="absolute -left-px top-1/2 -translate-y-1/2 w-[70px] h-[200px] z-40  text-white dark:text-background pointer-events-none">
                  <svg
                    width="70"
                    height="200"
                    viewBox="0 0 70 200"
                    className="fill-current w-full h-full"
                  >
                    <path d="M 0 0 L 0 30 A 30 30 0 0 0 30 60 A 40 40 0 0 1 30 140 A 30 30 0 0 0 0 170 L 0 200 Z" />
                  </svg>
                </div>

                <div className="absolute -right-[1px] top-1/2 -translate-y-1/2 w-[70px] h-[200px] z-40 text-white dark:text-background pointer-events-none">
                  <svg
                    width="70"
                    height="200"
                    viewBox="0 0 70 200"
                    className="fill-current w-full h-full"
                  >
                    <path d="M 70 0 L 70 30 A 30 30 0 0 1 40 60 A 40 40 0 0 0 40 140 A 30 30 0 0 1 70 170 L 70 200 Z" />
                  </svg>
                </div>

                {card.hoverState.slides.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      card.id === 2 && slideIndex !== idx
                        ? "opacity-0 pointer-events-none"
                        : "opacity-100"
                    }`}
                  >
                    <p
                      className={`whitespace-pre-line z-20 ${slide.textClasses}`}
                    >
                      {slide.text}
                    </p>
                    <img
                      src={slide.img}
                      className={`z-10 ${slide.imgClasses}`}
                      alt="Hover view"
                    />
                  </div>
                ))}
              </div>
            )}

            {card.hoverState && hoveredId === card.id && (
              <div className="absolute inset-0 z-50 pointer-events-none">
                <button
                  onClick={(e) => prevSlide(e, card.id)}
                  className={`pointer-events-auto absolute -left-1 md:left-0 top-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.12)] flex items-center justify-center text-black hover:bg-gray-50 transition-colors ${
                    card.hoverState.clickable
                      ? "cursor-pointer active:scale-95"
                      : "cursor-default"
                  }`}
                >
                  <ArrowLeft className="w-6 h-6 stroke-[1.5]" />
                </button>
                <button
                  onClick={(e) => nextSlide(e, card.id)}
                  className={`pointer-events-auto absolute -right-1 md:right-0 top-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.12)] flex items-center justify-center text-black hover:bg-gray-50 transition-colors ${
                    card.hoverState.clickable
                      ? "cursor-pointer active:scale-95"
                      : "cursor-default"
                  }`}
                >
                  <ArrowRight className="w-6 h-6 stroke-[1.5]" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
