"use client";

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";

import Image from "next/image";
import junayedImage from "@/assets/junayed.jpg";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/junayedhasan302",
    icon: "https://api.iconify.design/mdi:github.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/junayet-hasan-jh/",
    icon: "https://api.iconify.design/mdi:linkedin.svg",
  },
  {
    name: "Twitter / X",
    url: "https://x.com/junayed_jh",
    icon: "https://api.iconify.design/ri:twitter-x-fill.svg",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/junayed.hasan.302/",
    icon: "https://api.iconify.design/mdi:facebook.svg",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/jhjunayed/",
    icon: "https://api.iconify.design/mdi:instagram.svg",
  },
  {
    name: "Quora",
    url: "https://bn.quora.com/profile/Junayed-Hasan-108",
    icon: "https://api.iconify.design/mdi:quora.svg",
  },
  {
    name: "Chess.com",
    url: "https://www.chess.com/member/jhjunayed",
    icon: "https://api.iconify.design/mdi:chess-king.svg",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/jhjunayed/",
    icon: "https://api.iconify.design/simple-icons:leetcode.svg",
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/mjunayed302",
    icon: "https://api.iconify.design/simple-icons:codeforces.svg",
  },
  {
    name: "Pexels",
    url: "https://www.pexels.com/@junayed-hasan-2156679708/",
    icon: "https://api.iconify.design/simple-icons:pexels.svg",
  },
];

const skills = [
  {
    name: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "React",
    url: "https://react.dev/",
  },
  {
    name: "Next.js",
    url: "https://nextjs.org/docs",
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/docs",
  },
  {
    name: "Git",
    url: "https://git-scm.com/doc",
  },
];

const projects = [
  {
    title: "JH DevStack",
    description:
      "Personal developer portfolio and web development showcase.",
    tech: ["React", "JavaScript", "CSS"],
    url: "https://jhdevstack.netlify.app/",
  },
  {
    title: "FitLog",
    description:
      "Workout management app for exploring exercises, saving workouts, and creating workout plans.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    url: "https://jhfitlog.vercel.app/",
  },
  {
    title: "BPL Players Market",
    description:
      "Cricket player selection app with player cards, coin management, and selection logic.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    url: "https://playermarket.netlify.app/",
  },
  {
    title: "Hello World",
    description:
      "A simple web project created while learning and practicing frontend development.",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://heyhelloworld.netlify.app/",
  },
  {
    title: "World Cup 2026",
    description:
      "A football World Cup 2026 themed web project with an interactive tournament experience.",
    tech: ["React", "JavaScript", "CSS"],
    url: "https://world-cup-2026-green-beta.vercel.app/",
  },
  {
    title: "Country Explorer",
    description:
      "Explore country information, flags, and visited countries using API data.",
    tech: ["React", "TypeScript", "API"],
    url: "https://heyhelloworld.netlify.app/",
  },
];

const buildingSpecs = [
  { left: "2%", width: 40, height: 120, windows: [12, 30, 55, 78] },
  { left: "9%", width: 26, height: 80, windows: [10, 40, 65] },
  { left: "16%", width: 34, height: 160, windows: [8, 25, 48, 70, 92] },
  { left: "24%", width: 22, height: 95, windows: [15, 45, 75] },
  { left: "70%", width: 30, height: 140, windows: [10, 35, 60, 85] },
  { left: "78%", width: 24, height: 90, windows: [12, 42, 68] },
  { left: "86%", width: 38, height: 175, windows: [8, 28, 50, 72, 95] },
  { left: "94%", width: 20, height: 70, windows: [20, 50] },
];

const lampPositions = [8, 22, 36, 50, 64, 78, 92];

const bolts = [
  { top: "10%", left: "18%", delay: "0s" },
  { top: "16%", left: "82%", delay: "3.2s" },
];

const cars = [
  {
    lane: 1,
    dir: "right",
    duration: 9,
    delay: 0,
    emoji: "🚗",
    color: "#00eaff",
  },
  {
    lane: 2,
    dir: "left",
    duration: 12,
    delay: 2,
    emoji: "🚙",
    color: "#ff2bd6",
  },
  {
    lane: 1,
    dir: "right",
    duration: 14,
    delay: 6,
    emoji: "🚕",
    color: "#00eaff",
  },
];

type Ripple = {
  id: number;
  x: number;
  y: number;
};

export default function ContactPage() {
  const cardRef = useRef<HTMLDivElement | null>(null);

  // FIX 1:
  // Explicitly tell TypeScript what each ref contains.
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  // FIX 2:
  // Explicit Ripple[] type prevents never[] inference.
  const [ripples, setRipples] = useState<Ripple[]>([]);

  // Cursor light trail
  useEffect(() => {
    const dots = trailRefs.current.filter(
      (dot): dot is HTMLDivElement => dot !== null
    );

    if (dots.length === 0) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    let mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const positions = dots.map(() => ({
      x: mouse.x,
      y: mouse.y,
    }));

    const handleMove = (e: globalThis.MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMove);

    let raf: number;

    const animate = () => {
      let target = mouse;

      positions.forEach((pos, i) => {
        pos.x += (target.x - pos.x) * 0.35;
        pos.y += (target.y - pos.y) * 0.35;

        dots[i].style.transform = `translate(${pos.x}px, ${pos.y}px)`;

        target = pos;
      });

      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // 3D card tilt
  const handleCardTilt = (e: MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    cardRef.current.style.setProperty("--rx", `${py * -2}deg`);
    cardRef.current.style.setProperty("--ry", `${px * 2}deg`);

    cardRef.current.style.setProperty(
      "--spot-x",
      `${e.clientX - rect.left}px`
    );

    cardRef.current.style.setProperty(
      "--spot-y",
      `${e.clientY - rect.top}px`
    );
  };

  const resetTilt = () => {
    if (!cardRef.current) return;

    cardRef.current.style.setProperty("--rx", "0deg");
    cardRef.current.style.setProperty("--ry", "0deg");
  };

  // Click ripple
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    const id = Date.now() + Math.random();

    setRipples((prev) => [
      ...prev,
      {
        id,
        x: e.clientX,
        y: e.clientY,
      },
    ]);

    setTimeout(() => {
      setRipples((prev) =>
        prev.filter((ripple) => ripple.id !== id)
      );
    }, 900);
  };

  return (
    <main
      onClick={handleClick}
      className="relative min-h-screen overflow-hidden bg-[#05010f] px-4 py-8 text-white sm:px-6 lg:py-12"
    >
      <style>{`
        @keyframes lightningFlash {
          0%, 91%, 100% { opacity: 0; }
          92% { opacity: 0.55; }
          92.6% { opacity: 0.05; }
          93.2% { opacity: 0.4; }
          94% { opacity: 0; }
        }

        @keyframes lightningFlash2 {
          0%, 96%, 100% { opacity: 0; }
          97% { opacity: 0.4; }
          97.5% { opacity: 0; }
          98% { opacity: 0.25; }
          98.4% { opacity: 0; }
        }

        @keyframes flicker {
          0%, 100% { opacity: 1; }
          46% { opacity: 1; }
          48% { opacity: 0.2; }
          50% { opacity: 1; }
          72% { opacity: 1; }
          74% { opacity: 0.3; }
          76% { opacity: 1; }
        }

        @keyframes gridMove {
          from {
            background-position: 0 0, 0 0;
          }
          to {
            background-position: 0 64px, 0 0;
          }
        }

        @keyframes boltFlicker {
          0%, 100% { opacity: 0; }
          2% { opacity: 1; }
          4% { opacity: 0; }
          6% { opacity: 0.8; }
          9% { opacity: 0; }
        }

        @keyframes carRight {
          from {
            transform: translateX(-10vw);
          }
          to {
            transform: translateX(110vw);
          }
        }

        @keyframes carLeft {
          from {
            transform: translateX(110vw) scaleX(-1);
          }
          to {
            transform: translateX(-10vw) scaleX(-1);
          }
        }

        @keyframes rippleExpand {
          from {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.7;
          }
          to {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
          }
        }

        @keyframes scanSweep {
          0% {
            top: -10%;
          }
          100% {
            top: 110%;
          }
        }

        .grid-floor {
          background-image:
            linear-gradient(
              rgba(255, 43, 214, 0.35) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(0, 234, 255, 0.25) 1px,
              transparent 1px
            );
          background-size: 64px 64px;
          animation: gridMove 2.4s linear infinite;
        }

        .flicker {
          animation: flicker 5s ease-in-out infinite;
        }

        .car-right {
          animation-name: carRight;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .car-left {
          animation-name: carLeft;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .bolt {
          animation: boltFlicker 7s ease-in-out infinite;
        }

        .lightning-a {
          animation: lightningFlash 11s linear infinite;
        }

        .lightning-b {
          animation: lightningFlash2 11s linear infinite;
        }

        .hud-scan {
          animation: scanSweep 2.6s linear infinite;
        }

        .glass-card {
          transform:
            perspective(1400px)
            rotateX(var(--rx, 0deg))
            rotateY(var(--ry, 0deg));
          transition: transform 150ms ease-out;
        }

        .glass-card::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(
            460px circle at var(--spot-x, 50%) var(--spot-y, 0%),
            rgba(0, 234, 255, 0.10),
            transparent 45%
          );
        }

        @media (prefers-reduced-motion: reduce) {
          .flicker,
          .car-right,
          .car-left,
          .bolt,
          .lightning-a,
          .lightning-b,
          .grid-floor,
          .hud-scan {
            animation: none !important;
          }

          .glass-card {
            transform: none !important;
          }
        }
      `}</style>

      {/* CURSOR LIGHT TRAIL */}
      {[...Array(7)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            trailRefs.current[i] = el;
          }}
          className="pointer-events-none fixed left-0 top-0 z-[60] rounded-full mix-blend-screen"
          style={{
            width: `${16 - i * 1.6}px`,
            height: `${16 - i * 1.6}px`,
            marginLeft: `-${(16 - i * 1.6) / 2}px`,
            marginTop: `-${(16 - i * 1.6) / 2}px`,
            background:
              i % 2 === 0
                ? "radial-gradient(circle, rgba(0,234,255,0.9), transparent 70%)"
                : "radial-gradient(circle, rgba(255,43,214,0.85), transparent 70%)",
            opacity: 1 - i * 0.12,
          }}
        />
      ))}

      {/* CLICK RIPPLES */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="pointer-events-none fixed z-[55] h-16 w-16 rounded-full border-2 border-[#00eaff]"
          style={{
            left: ripple.x,
            top: ripple.y,
            boxShadow: "0 0 20px 2px rgba(0,234,255,0.6)",
            animation: "rippleExpand 0.9s ease-out forwards",
          }}
        />
      ))}

      {/* CYBERPUNK CITYSCAPE BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* SKY GRADIENT */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#2a0a4a_0%,_#0c0420_45%,_#05010f_100%)]" />

        {/* LIGHTNING */}
        <div className="lightning-a absolute inset-0 bg-[#bfe9ff]" />
        <div className="lightning-b absolute inset-0 bg-[#ff2bd6]" />

        {/* AMBIENT NEON GLOWS */}
        <div className="absolute left-[8%] top-[6%] h-72 w-72 rounded-full bg-[#ff2bd6]/10 blur-3xl" />
        <div className="absolute bottom-[30%] right-[6%] h-96 w-96 rounded-full bg-[#00eaff]/10 blur-3xl" />

        {/* THUNDERBOLTS */}
        {bolts.map((bolt, i) => (
          <div
            key={i}
            className="bolt absolute text-4xl"
            style={{
              top: bolt.top,
              left: bolt.left,
              animationDelay: bolt.delay,
            }}
          >
            ⚡
          </div>
        ))}

        {/* SKYLINE */}
        <div className="absolute inset-x-0 bottom-[22%] h-[45%]">
          {buildingSpecs.map((building, i) => (
            <div
              key={i}
              className="absolute bottom-0 rounded-t-sm bg-[#0c0420]"
              style={{
                left: building.left,
                width: `${building.width}px`,
                height: `${building.height}px`,
                boxShadow: "0 0 30px rgba(0,0,0,0.6)",
              }}
            >
              {building.windows.map((windowPosition, j) => (
                <span
                  key={j}
                  className="flicker absolute h-[3px] w-[3px] rounded-sm"
                  style={{
                    left: "30%",
                    bottom: `${windowPosition}%`,
                    background:
                      j % 2 === 0 ? "#00eaff" : "#ff2bd6",
                    boxShadow: `0 0 4px ${
                      j % 2 === 0 ? "#00eaff" : "#ff2bd6"
                    }`,
                    animationDelay: `${i * 0.4 + j * 0.3}s`,
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* STREET LAMPS */}
        <div className="absolute inset-x-0 bottom-[21%] h-3">
          {lampPositions.map((position, i) => (
            <span
              key={i}
              className="flicker absolute h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#ffce54]"
              style={{
                left: `${position}%`,
                boxShadow:
                  "0 0 12px 4px rgba(255,206,84,0.65)",
                animationDelay: `${i * 0.6}s`,
              }}
            />
          ))}
        </div>

        {/* MOVING CARS */}
        <div className="absolute inset-x-0 bottom-[16%] h-10">
          {cars.map((car, i) => (
            <div
              key={i}
              className={`absolute text-2xl ${
                car.dir === "right"
                  ? "car-right"
                  : "car-left"
              }`}
              style={{
                top: car.lane === 1 ? "0%" : "55%",
                animationDuration: `${car.duration}s`,
                animationDelay: `${car.delay}s`,
                filter: `drop-shadow(0 0 6px ${car.color})`,
              }}
            >
              {car.emoji}
            </div>
          ))}
        </div>

        {/* SYNTHWAVE GRID */}
        <div
          className="grid-floor absolute inset-x-0 bottom-0 h-[22%]"
          style={{
            transform:
              "perspective(220px) rotateX(62deg)",
            transformOrigin: "bottom",
          }}
        />
      </div>

      {/* MAIN CARD */}
      <section
        ref={cardRef}
        onMouseMove={handleCardTilt}
        onMouseLeave={resetTilt}
        className="glass-card relative z-20 mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[#00eaff]/20 bg-white/[0.04] shadow-[0_0_60px_rgba(255,43,214,0.12)] backdrop-blur-xl"
      >
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#00eaff] to-transparent" />

        <div className="relative p-6 sm:p-8 lg:p-10">
          {/* HEADER */}
          <div className="flex flex-col items-center gap-5 text-center md:flex-row md:text-left">
            <div className="group relative">
              <div className="absolute -inset-2 rounded-full bg-[#00eaff]/20 blur-xl" />

              {/* HUD TARGETING FRAME */}
              <div className="pointer-events-none absolute -inset-2 rounded-full border border-[#00eaff]/0 transition group-hover:border-[#00eaff]/50" />

              <span className="pointer-events-none absolute -left-1 -top-1 h-3 w-3 border-l-2 border-t-2 border-[#00eaff]/0 transition group-hover:border-[#00eaff]" />

              <span className="pointer-events-none absolute -right-1 -top-1 h-3 w-3 border-r-2 border-t-2 border-[#00eaff]/0 transition group-hover:border-[#00eaff]" />

              <span className="pointer-events-none absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-[#00eaff]/0 transition group-hover:border-[#00eaff]" />

              <span className="pointer-events-none absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-[#00eaff]/0 transition group-hover:border-[#00eaff]" />

              <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-[#00eaff]/40 sm:h-36 sm:w-36">
                <Image
                  src={junayedImage}
                  alt="Junayed Hasan"
                  width={150}
                  height={150}
                  className="h-full w-full object-cover"
                />

                <span className="hud-scan pointer-events-none absolute inset-x-0 h-[2px] bg-[#00eaff]/80 opacity-0 shadow-[0_0_10px_2px_rgba(0,234,255,0.8)] group-hover:opacity-100" />
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-[#00eaff]">
                Hello, I&apos;m
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-white [text-shadow:0_0_18px_rgba(0,234,255,0.35)] sm:text-5xl">
                Junayed Hasan
              </h1>

              <p className="mt-2 text-lg text-gray-300">
                CSE Student &amp; Web Development Learner
              </p>

              <p className="mt-2 max-w-2xl text-sm leading-7 text-gray-400">
                Passionate about problem solving, web development,
                photography, chess, and mathematics.
              </p>
            </div>
          </div>

          <div className="my-8 h-px bg-white/10" />

          {/* CONTENT GRID */}
          <div className="grid gap-8 lg:grid-cols-[250px_1fr]">
            {/* SIDEBAR */}
            <aside>
              {/* SOCIAL LINKS */}
              <div>
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Connect
                </h2>

                <div className="space-y-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 transition duration-300 hover:-translate-y-1 hover:border-[#00eaff]/40 hover:bg-[#00eaff]/10 hover:shadow-[0_0_16px_rgba(0,234,255,0.25)]"
                    >
                      <img
                        src={social.icon}
                        alt=""
                        className="h-5 w-5 invert"
                      />

                      <span className="text-sm text-gray-300">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* TECH STACK */}
              <div className="mt-8">
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Tech Stack
                </h2>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <a
                      key={skill.name}
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Learn more about ${skill.name}`}
                      className="rounded-full border border-[#ff2bd6]/20 bg-[#ff2bd6]/[0.06] px-3 py-1.5 text-xs text-[#ff9de9] transition duration-300 hover:-translate-y-1 hover:border-[#ff2bd6]/70 hover:bg-[#ff2bd6]/15 hover:text-white hover:shadow-[0_0_16px_rgba(255,43,214,0.35)]"
                    >
                      {skill.name}
                    </a>
                  ))}
                </div>

                <p className="mt-2 text-xs text-gray-500">
                  Click any technology to open its documentation.
                </p>
              </div>
            </aside>

            {/* MAIN CONTENT */}
            <div className="space-y-9">
              {/* ABOUT */}
              <section>
                <p className="mb-1 text-sm font-medium uppercase tracking-[0.2em] text-[#00eaff]">
                  About Me
                </p>

                <h2 className="text-2xl font-bold">
                  A learner who loves to build.
                </h2>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-400">
                  I am currently studying Computer Science and
                  Engineering and focusing on improving my web
                  development skills. I enjoy learning by building
                  real projects and solving programming problems.
                </p>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-400">
                  My current focus is React and Next.js, while
                  continuously improving my JavaScript, TypeScript,
                  problem solving, and software development
                  fundamentals.
                </p>
              </section>

              {/* EDUCATION */}
              <section>
                <p className="mb-1 text-sm font-medium uppercase tracking-[0.2em] text-[#00eaff]">
                  Education
                </p>

                <h2 className="text-xl font-bold">
                  Bachelor of Science in CSE
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                  Bangladesh University of Business &amp; Technology
                  (BUBT)
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Department of Computer Science &amp; Engineering
                </p>
              </section>

              {/* PROJECTS */}
              <section>
                <div className="mb-5">
                  <p className="mb-1 text-sm font-medium uppercase tracking-[0.2em] text-[#00eaff]">
                    Projects
                  </p>

                  <div className="flex items-end justify-between gap-4">
                    <h2 className="text-2xl font-bold">
                      Things I&apos;ve built
                    </h2>

                    <span className="text-xs text-gray-500">
                      {projects.length} Projects
                    </span>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {projects.map((project) => (
                    <a
                      key={project.title}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#ff2bd6]/30 hover:bg-white/[0.06] hover:shadow-[0_0_18px_rgba(255,43,214,0.2)]"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-base font-semibold transition group-hover:text-[#ff9de9]">
                          {project.title}
                        </h3>

                        <span className="text-xs text-gray-500 transition group-hover:text-[#00eaff]">
                          ↗
                        </span>
                      </div>

                      <p className="mt-2 text-xs leading-5 text-gray-400">
                        {project.description}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-white/5 px-2 py-1 text-[10px] text-gray-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </a>
                  ))}
                </div>
              </section>

              {/* INTERESTS */}
              <section>
                <p className="mb-1 text-sm font-medium uppercase tracking-[0.2em] text-[#00eaff]">
                  Beyond Code
                </p>

                <h2 className="text-xl font-bold">
                  What I enjoy
                </h2>

                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center transition hover:border-[#00eaff]/30 hover:shadow-[0_0_14px_rgba(0,234,255,0.2)]">
                    <div className="text-2xl">📸</div>
                    <p className="mt-2 text-xs text-gray-300">
                      Street Photography
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center transition hover:border-[#00eaff]/30 hover:shadow-[0_0_14px_rgba(0,234,255,0.2)]">
                    <div className="text-2xl">♟️</div>
                    <p className="mt-2 text-xs text-gray-300">
                      Chess
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center transition hover:border-[#00eaff]/30 hover:shadow-[0_0_14px_rgba(0,234,255,0.2)]">
                    <div className="text-2xl">🧮</div>
                    <p className="mt-2 text-xs text-gray-300">
                      Mathematics
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center transition hover:border-[#00eaff]/30 hover:shadow-[0_0_14px_rgba(0,234,255,0.2)]">
                    <div className="text-2xl">💻</div>
                    <p className="mt-2 text-xs text-gray-300">
                      Web Development
                    </p>
                  </div>
                </div>
              </section>

              {/* CONTACT */}
              <section className="rounded-xl border border-[#00eaff]/20 bg-[#00eaff]/[0.04] p-5">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#00eaff]">
                  Let&apos;s Connect
                </p>

                <h2 className="mt-1 text-xl font-bold">
                  Have an idea or want to talk?
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400">
                  Feel free to reach out. I&apos;m always interested
                  in discussing technology, projects, photography,
                  or new ideas.
                </p>

                <a
                  href="mailto:junayedhasan302@gmail.com"
                  className="mt-4 inline-block text-sm font-medium text-[#7fe9ff] transition hover:text-white hover:underline"
                >
                  junayedhasan302@gmail.com
                </a>

                <div>
                  <a
                    href="mailto:junayedhasan302@gmail.com"
                    className="mt-3 inline-flex rounded-xl bg-[#00eaff] px-5 py-2.5 text-sm font-semibold text-[#05010f] transition hover:bg-[#7fe9ff] hover:shadow-[0_0_20px_rgba(0,234,255,0.5)]"
                  >
                    Send me an Email
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

