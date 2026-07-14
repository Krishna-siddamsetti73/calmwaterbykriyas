"use client";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
// import heroOcean from "/assets/hero-ocean.jpg";
import heroOcean from "@/app/assets/hero-ocean.jpg";
import silhouette from "@/app/assets/silhouette.jpg";
import stones from "@/app/assets/stones.jpg";

import ripples from "@/app/assets/ripples.jpg";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import nsn from "@/app/assets/brain-removebg-preview.png";
export function Home() {
  return (
    <>
      <Hero />
      <PhilosophyStrip />
      {/* <SplitSection /> */}
      <EmotionsGalaxy />
      <ServiceLayers />
      <MindscapeCanvas />
      <Testimonial />
      <BreathStats />
      <ProcessRibbon />
      <EditorialShowcase />
      <SupportSignals />
      <ClosingCTA />
    </>
  );
}
export function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden flex items-center justify-center">
      <Image
        src={heroOcean}
        alt="Calm ocean horizon"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover hero-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/20 to-background/75" />
      <div className="absolute inset-0 bg-window opacity-70" />
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="beam" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.7" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points="500,0 700,0 800,800 400,800" fill="url(#beam)" />
        <polygon
          points="560,0 640,0 680,800 520,800"
          fill="url(#beam)"
          opacity="0.7"
        />
      </svg>
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-pink-glow-soft blur-3xl animate-breathe opacity-50" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-mint-soft blur-3xl animate-breathe opacity-40"
        style={{ animationDelay: "2s" }}
      />
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div
          className="opacity-0 animate-fade-blur"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-8">
            A quiet place to begin
          </p>
        </div>
        <h1
          className="opacity-0 animate-fade-blur font-display text-6xl md:text-8xl tracking-tight text-balance"
          style={{ animationDelay: "1.2s" }}
        >
          Take a breath.
          <span className="block mt-2 text-foreground/70">
            You're safe here.
          </span>
        </h1>
        <p
          className="opacity-0 animate-fade-blur mt-8 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
          style={{ animationDelay: "2s" }}
        >
          You don't have to carry everything alone. We're here to listen,
          understand, and support you.
        </p>
        <div
          className="opacity-0 animate-fade-blur mt-12"
          style={{ animationDelay: "2.6s" }}
        >
          <Link
            href="/book"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-foreground text-background text-sm tracking-wide animate-glow-pulse hover:bg-foreground/90 transition-colors"
          >
            Start your journey
            <span className="inline-block w-6 h-px bg-background/70" />
          </Link>
        </div>
      </div>
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs text-muted-foreground tracking-[0.3em] uppercase opacity-0 animate-fade-blur"
        style={{ animationDelay: "3s" }}
      >
        scroll gently
        <div className="mt-3 mx-auto w-px h-10 bg-foreground/20" />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SPLIT SECTION
   ═══════════════════════════════════════════════════════════ */
export function SplitSection() {
  const lines = [
    "You are overwhelmed.",
    "You are tired.",
    "You need space.",
    "You are searching.",
    "You are healing.",
    "You are still here.",
  ];
  return (
    <section
      className="relative py-32 md:py-48 px-6 md:px-10 bg-cement/40"
      style={{ marginTop: "-15rem" }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
        <div className="md:sticky md:top-32 self-start reveal-blur">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            A reminder
          </p>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight leading-[1.05] text-balance">
            You are not
            <br />
            broken.
          </h2>
          <div className="mt-8 w-12 h-px bg-foreground/40" />
        </div>
        <div className="relative pl-8 md:pl-12 border-l border-border/60 space-y-20 md:space-y-28">
          {lines.map((line, i) => (
            <p
              key={i}
              data-delay={i * 80}
              className="reveal-blur font-display text-3xl md:text-5xl text-foreground/80 leading-tight text-balance"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

interface Emotion {
  name: string;
  desc: string;
  icon: string;
  subtitle: string;
  color: string;
  suggestions: string[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const emotions: Emotion[] = [
  {
    name: "Grief",
    icon: "🌧",
    subtitle: "Loss & mourning",
    color: "from-slate-400/20 to-blue-900/20",
    desc: "Grief is the price of love — a testament to every bond that mattered. Here, you don't have to rush through it. We walk alongside you at whatever pace feels true.",
    suggestions: [
      "Grief processing therapy",
      "Narrative therapy",
      "Somatic healing",
    ],
  },
  {
    name: "Anxiety",
    icon: "🌀",
    subtitle: "Worry & unease",
    color: "from-violet-400/20 to-indigo-900/20",
    desc: "Anxiety speaks loudly, but it doesn't always tell the truth. Together we learn to hear the signal beneath the noise — and find ground beneath your feet.",
    suggestions: ["CBT", "Mindfulness-based therapy", "Exposure therapy"],
  },
  {
    name: "Joy",
    icon: "✨",
    subtitle: "Lightness & delight",
    color: "from-amber-300/20 to-yellow-600/20",
    desc: "Joy deserves to be felt fully, not minimized or rushed past. We explore what genuinely lights you up and how to invite more of it into your everyday life.",
    suggestions: ["Positive psychology", "Strengths-based therapy", "ACT"],
  },
  {
    name: "Anger",
    icon: "🔥",
    subtitle: "Intensity & fire",
    color: "from-red-400/20 to-orange-900/20",
    desc: "Anger is information — it points to what matters and what has been crossed. We learn to listen to it without being consumed, channeling its energy wisely.",
    suggestions: ["Anger management", "DBT", "Parts-based therapy"],
  },
  {
    name: "Loneliness",
    icon: "🌙",
    subtitle: "Disconnection & longing",
    color: "from-sky-300/20 to-blue-900/20",
    desc: "Loneliness is one of the most universal human aches. In this space, you are heard — and we work together to build the connections your heart is reaching for.",
    suggestions: ["Interpersonal therapy", "Attachment work", "Group therapy"],
  },
  {
    name: "Hope",
    icon: "🌅",
    subtitle: "Possibility & renewal",
    color: "from-emerald-300/20 to-teal-800/20",
    desc: "Hope is a practice, not a feeling you wait for. We cultivate it together — through small acts of meaning, forward movement, and reclaiming your sense of future.",
    suggestions: ["Solution-focused therapy", "Narrative therapy", "ACT"],
  },
  {
    name: "Shame",
    icon: "🫧",
    subtitle: "Worthiness & self-image",
    color: "from-rose-400/20 to-pink-900/20",
    desc: "Shame thrives in secrecy. Bringing it into the light — carefully, gently — is where healing begins. You are more than the story shame tells about you.",
    suggestions: ["Shame resilience work", "IFS", "Compassion-focused therapy"],
  },
  {
    name: "Peace",
    icon: "🍃",
    subtitle: "Calm & stillness",
    color: "from-green-300/20 to-emerald-900/20",
    desc: "Peace is not the absence of difficulty — it's the ability to be still within it. We explore what peace means for you and how to return to it when life pulls you away.",
    suggestions: ["Mindfulness", "MBSR", "Somatic therapy"],
  },
];

// ─── Ambient Particles ─────────────────────────────────────────────────────────

function AmbientParticles() {
  const particles = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    angle: (i / 28) * 360,
    radius: 90 + Math.sin(i * 1.3) * 45,
    size: 1.5 + Math.random() * 2,
    duration: 18 + i * 0.7,
    delay: i * 0.22,
    opacity: 0.15 + Math.random() * 0.35,
  }));

  return (
    <div
      className="absolute inset-0 rounded-full pointer-events-none"
      aria-hidden
    >
      {particles.map((p) => {
        const rad = (p.angle * Math.PI) / 180;
        const x = Math.cos(rad) * p.radius;
        const y = Math.sin(rad) * p.radius;
        return (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              background: `rgba(127, 184, 200, ${p.opacity})`,
              boxShadow: `0 0 ${p.size * 3}px rgba(127, 184, 200, ${p.opacity * 0.8})`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.4, 1],
              opacity: [p.opacity, p.opacity * 0.4, p.opacity],
            }}
            transition={{
              rotate: {
                duration: p.duration,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: p.delay,
              },
              opacity: {
                duration: 2.5 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: p.delay,
              },
            }}
          />
        );
      })}
    </div>
  );
}

// ─── Brain Center ─────────────────────────────────────────────────────────────

function BrainCenter({ expanded }: { expanded: boolean }) {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      animate={{ scale: expanded ? 0.85 : 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      style={{ width: 260, height: 260 }}
    >
      {/* Orbit rings */}
      {[1, 0.6, 0.35].map((opacity, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border"
          style={{
            width: 260 + i * 60,
            height: 260 + i * 60,
            borderColor: `rgba(127, 184, 200, ${opacity * 0.12})`,
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 40 + i * 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Ambient particles */}
      <AmbientParticles />

      {/* Glow layers */}
      <div
        aria-hidden
        className="absolute rounded-full"
        style={{
          width: 320,
          height: 320,
          background:
            "radial-gradient(circle, rgba(127,184,200,0.22) 0%, transparent 70%)",
          filter: "blur(32px)",
        }}
      />
      <motion.div
        aria-hidden
        className="absolute rounded-full"
        style={{
          width: 200,
          height: 200,
          background:
            "radial-gradient(circle, rgba(168,216,234,0.18) 0%, transparent 65%)",
          filter: "blur(20px)",
        }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Brain image — replace src with your actual import */}
      <motion.div
        className="relative z-10"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ width: 400, height: 400, marginTop: 200 }}
      >
        {/* Replace this placeholder with: <Image src={brain} alt="A glowing translucent brain" width={200} height={200} className="object-contain" /> */}
        <div
          className="w-full h-full rounded-full flex items-center justify-center text-7xl"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, rgba(168,216,234,0.3), rgba(160, 197, 207, 0) 60%, transparent)",
            backdropFilter: "blur(2px)",
          }}
        >
          <Image
            src={nsn}
            alt="A glowing translucent brain"
            width={600}
            height={600}
            className="object-contain"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Emotion Card ─────────────────────────────────────────────────────────────

interface CardProps {
  emotion: Emotion;
  index: number;
  total: number;
  rotationAngle: number; // current carousel rotation offset in degrees
  isSelected: boolean;
  isPaused: boolean;
  onClick: () => void;
}

function EmotionCard({
  emotion,
  index,
  total,
  rotationAngle,
  isSelected,
  onClick,
}: CardProps) {
  const cardAngleDeg = (index / total) * 360 + rotationAngle;
  const cardAngleRad = (cardAngleDeg * Math.PI) / 180;

  const ORBIT_RADIUS_X = 310;
  const ORBIT_RADIUS_Z = 120;

  const x = Math.sin(cardAngleRad) * ORBIT_RADIUS_X;
  const z = Math.cos(cardAngleRad) * ORBIT_RADIUS_Z;

  // Depth calculations
  const normalizedZ = (z + ORBIT_RADIUS_Z) / (ORBIT_RADIUS_Z * 2); // 0..1
  const scale = isSelected ? 1.18 : 0.72 + normalizedZ * 0.28;
  const opacity = isSelected ? 1 : 0.45 + normalizedZ * 0.55;
  const blur = isSelected ? 0 : Math.max(0, (1 - normalizedZ) * 4);
  const zIndex = isSelected ? 50 : Math.round(normalizedZ * 40);
  const tiltY = isSelected ? 0 : -x * 0.04; // slight tilt toward center

  return (
    <motion.button
      onClick={onClick}
      className="absolute"
      style={{
        left: "50%",
        top: "50%",
        width: 160,
        height: 170,
        marginLeft: -80,
        marginTop: -123,
        zIndex,
        transformStyle: "preserve-3d",
      }}
      animate={{
        x,
        translateZ: z,
        scale,
        opacity,
        filter: `blur(${blur}px)`,
        rotateY: tiltY,
        y: isSelected ? -20 : 0,
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        !isSelected ? { scale: scale * 1.08, filter: "blur(0px)" } : {}
      }
      aria-label={`Explore ${emotion.name}`}
      aria-pressed={isSelected}
    >
      {/* Card glass body */}
      <div
        className={`relative w-full h-full rounded-[24px] overflow-hidden flex flex-col items-center justify-center gap-2 p-5 bg-gradient-to-br ${emotion.color} border border-white/10`}
        style={{
          background: `
            linear-gradient(135deg, rgba(255, 255, 255, 0.23) 0%, rgba(255,255,255,0.03) 100%)
          `,
          backdropFilter: "blur(24px) saturate(1.4)",
          WebkitBackdropFilter: "blur(24px) saturate(1.4)",
          boxShadow: isSelected
            ? "0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(127,184,200,0.35), inset 0 1px 0 rgba(255,255,255,0.15)"
            : "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.07), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        {/* Reflection highlight */}
        <div
          aria-hidden
          className="absolute top-0 left-0 right-0 h-1/2 rounded-t-[24px] pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.11) 0%, transparent 100%)",
          }}
        />

        {/* Selected ring */}
        {isSelected && (
          <motion.div
            className="absolute inset-0 rounded-[24px] pointer-events-none"
            style={{ boxShadow: "inset 0 0 0 1.5px rgba(127,184,200,0.6)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
        )}

        {/* Icon */}
        <motion.span
          className="text-4xl leading-none"
          animate={{ scale: isSelected ? 1.2 : 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {emotion.icon}
        </motion.span>

        {/* Name */}
        <p className="text-white/90 font-semibold text-[15px] tracking-tight leading-none">
          {emotion.name}
        </p>

        {/* Subtitle */}
        <p className="text-white/40 text-[11px] tracking-wide font-medium uppercase">
          {emotion.subtitle}
        </p>
      </div>
    </motion.button>
  );
}

// ─── Detail Panel ─────────────────────────────────────────────────────────────

function DetailPanel({
  emotion,
  onClose,
}: {
  emotion: Emotion;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="relative flex flex-col justify-center h-full px-10 py-12 overflow-y-auto"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Panel glass card */}
      <div
        className="relative rounded-[32px] p-10 flex flex-col gap-7"
        style={{
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.025) 100%)",
          backdropFilter: "blur(40px) saturate(1.6)",
          WebkitBackdropFilter: "blur(40px) saturate(1.6)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow:
            "0 40px 100px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.12)",
        }}
      >
        {/* Reflection */}
        <div
          aria-hidden
          className="absolute top-0 left-0 right-0 h-24 rounded-t-[32px] pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, transparent 100%)",
          }}
        />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-3"
        >
          <div className="flex items-center gap-3">
            <span className="text-5xl">{emotion.icon}</span>
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-sky-300/60 font-medium mb-1">
                Exploring
              </p>
              <h3
                className="text-4xl font-bold tracking-tight text-white"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {emotion.name}
              </h3>
            </div>
          </div>
          <p className="text-[12px] uppercase tracking-widest text-white/35 font-medium border-t border-white/8 pt-3">
            {emotion.subtitle}
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-white/65 leading-relaxed text-[15px]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {emotion.desc}
        </motion.p>

        {/* Suggestions */}
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] uppercase tracking-[0.24em] text-white/30 font-medium">
            Therapy approaches
          </p>
          <div className="flex flex-wrap gap-2">
            {emotion.suggestions.map((s, i) => (
              <motion.span
                key={s}
                className="px-4 py-1.5 rounded-full text-[12px] font-medium text-white/60"
                style={{
                  background: "rgba(127,184,200,0.1)",
                  border: "1px solid rgba(127,184,200,0.2)",
                }}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.07, duration: 0.4 }}
              >
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="flex gap-3 pt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#begin"
            className="flex-1 rounded-full py-3.5 text-[13px] font-semibold text-center transition-all duration-200"
            style={{
              background:
                "linear-gradient(135deg, rgba(127,184,200,0.9), rgba(93,152,166,0.9))",
              color: "#080C14",
              boxShadow: "0 8px 24px rgba(127,184,200,0.3)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 12px 32px rgba(127,184,200,0.5)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(127,184,200,0.3)")
            }
          >
            Speak with a therapist
          </a>
          <button
            onClick={onClose}
            aria-label="Close panel"
            className="px-5 py-3.5 rounded-full text-[13px] font-medium text-white/50 transition-all duration-200 hover:text-white/80"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            Close
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function EmotionsGalaxy() {
  const [selected, setSelected] = useState<Emotion | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [rotation, setRotation] = useState(0);
  const rafRef = useRef<number | undefined>(undefined);
  const lastTimeRef = useRef<number | undefined>(undefined);
  const pausedRef = useRef(false);

  // Smooth CSS-driven rotation via RAF
  useEffect(() => {
    const SPEED = 0.018; // degrees per ms

    const tick = (time: number) => {
      if (lastTimeRef.current !== undefined) {
        if (!pausedRef.current) {
          const delta = time - lastTimeRef.current;
          setRotation((r) => r + SPEED * delta);
        }
      }
      lastTimeRef.current = time;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    pausedRef.current = isPaused;
  }, [isPaused]);

  const handleCardClick = (emotion: Emotion) => {
    setSelected((prev) => (prev?.name === emotion.name ? null : emotion));
    setIsPaused(true);
  };

  const handleClose = () => {
    setSelected(null);
    setIsPaused(false);
  };

  const isExpanded = selected !== null;

  return (
    <section
      id="emotions"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: "#415989", minHeight: "80vh", marginTop: "-10rem" }}
    >
      {/* Background gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(127,184,200,0.08), transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(93,120,166,0.06), transparent 50%)",
        }}
      />

      {/* Section header */}
      <AnimatePresence>
        {!isExpanded && (
          <motion.div
            className="mx-auto mb-16 max-w-3xl px-6 text-center"
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginTop: "-7rem" }}
          >
            <p
              className="mb-4 text-[10px] uppercase tracking-[0.38em] font-semibold"
              style={{ color: "rgba(127,184,200,0.7)" }}
            >
              A galaxy of emotions
            </p>
            <h2
              className="text-balance text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Every feeling has a{" "}
              <span style={{ color: "rgba(127,184,200,0.85)" }}>
                place to land.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-white/40">
              Move close to what feels true today. Each world holds a way back
              to yourself.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main interactive area */}
      <motion.div
        className="relative mx-auto px-6 flex items-center"
        layout
        animate={{
          maxWidth: isExpanded ? "1200px" : "820px",
          flexDirection: "row",
          marginTop: isExpanded ? "0" : "-8rem",
        }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ minHeight: 580 }}
      >
        {/* LEFT: carousel */}
        <motion.div
          className="relative flex items-center justify-center flex-shrink-0"
          layout
          animate={{
            flex: isExpanded ? "0 0 60%" : "1 1 100%",
          }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ height: 580 }}
          onMouseEnter={() => !selected && setIsPaused(true)}
          onMouseLeave={() => !selected && setIsPaused(false)}
        >
          {/* 3D perspective wrapper */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{ perspective: "900px", perspectiveOrigin: "50% 50%" }}
          >
            <div
              className="relative flex items-center justify-center"
              style={{ width: 260, height: 260, transformStyle: "preserve-3d" }}
            >
              {/* Brain */}
              <BrainCenter expanded={isExpanded} />

              {/* Cards in orbit */}
              {emotions.map((emotion, i) => (
                <EmotionCard
                  key={emotion.name}
                  emotion={emotion}
                  index={i}
                  total={emotions.length}
                  rotationAngle={rotation}
                  isSelected={selected?.name === emotion.name}
                  isPaused={isPaused}
                  onClick={() => handleCardClick(emotion)}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT: detail panel */}
        <AnimatePresence>
          {isExpanded && selected && (
            <motion.div
              className="flex-shrink-0"
              style={{ flex: "0 0 40%", height: 580 }}
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <DetailPanel emotion={selected} onClose={handleClose} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Hint text */}
      <AnimatePresence>
        {!isExpanded && (
          <motion.p
            className="text-center text-[11px] uppercase tracking-[0.28em] mt-10"
            style={{ color: "rgba(255,255,255,0.2)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Tap an emotion to explore
          </motion.p>
        )}
      </AnimatePresence>

      {/* Global keyframes */}
      <style jsx>{`
        @keyframes drift {
          0%,
          100% {
            transform: rotate(0deg) scaleX(1);
          }
          50% {
            transform: rotate(180deg) scaleX(0.97);
          }
        }
      `}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   MINDSCAPE CANVAS
   ═══════════════════════════════════════════════════════════ */
export function MindscapeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);
  const NODES = [
    { label: "Anxiety", color: "#7C5CBF", r: 62, speed: 1.8, layer: 0 },
    { label: "Grief", color: "#C05478", r: 50, speed: 2.4, layer: 1 },
    { label: "Burnout", color: "#2E917A", r: 56, speed: 1.4, layer: 2 },
    { label: "Relationships", color: "#B8832E", r: 70, speed: 0.9, layer: 0 },
    { label: "Self-Esteem", color: "#3A72B8", r: 54, speed: 2.0, layer: 1 },
    { label: "Trauma", color: "#9D5490", r: 48, speed: 2.6, layer: 2 },
    { label: "Career", color: "#547B3E", r: 58, speed: 1.6, layer: 0 },
    { label: "Family", color: "#C05478", r: 44, speed: 3.0, layer: 1 },
    { label: "Sleep", color: "#2E917A", r: 46, speed: 2.2, layer: 2 },
    { label: "Loneliness", color: "#7C5CBF", r: 52, speed: 1.2, layer: 0 },
    { label: "Anger", color: "#C05478", r: 40, speed: 2.8, layer: 1 },
    { label: "Identity", color: "#3A72B8", r: 45, speed: 1.9, layer: 2 },
  ];
  useEffect(() => {
    if (typeof window === "undefined") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let W = 0,
      H = 0;
    interface NS {
      label: string;
      color: string;
      r: number;
      speed: number;
      layer: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      phase: number;
      zDepth: number;
    }
    let nodes: NS[] = [];
    const init = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
      nodes = NODES.map((n) => {
        const zDepth = 0.5 + n.layer * 0.25;
        return {
          ...n,
          x: n.r + 40 + Math.random() * (W - n.r * 2 - 80),
          y: n.r + 40 + Math.random() * (H - n.r * 2 - 80),
          vx: (Math.random() - 0.5) * n.speed,
          vy: (Math.random() - 0.5) * n.speed,
          phase: Math.random() * Math.PI * 2,
          zDepth,
        };
      });
    };
    init();
    window.addEventListener("resize", init);
    const onMove = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const src = "touches" in e ? e.touches[0] : e;
      mouse.current = { x: src.clientX - rect.left, y: src.clientY - rect.top };
    };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("touchmove", onMove as EventListener);
    let frame = 0;
    const hex = (v: number) =>
      Math.round(v * 255)
        .toString(16)
        .padStart(2, "0");
    const draw = () => {
      rafRef.current = requestAnimationFrame(draw);
      frame += 1;
      ctx.clearRect(0, 0, W, H);
      const sorted = [...nodes].sort((a, b) => a.zDepth - b.zDepth);
      for (let i = 0; i < sorted.length; i++)
        for (let j = i + 1; j < sorted.length; j++) {
          const a = sorted[i],
            b = sorted[j];
          if (Math.abs(a.layer - b.layer) > 1) continue;
          const dx = a.x - b.x,
            dy = a.y - b.y,
            d = Math.sqrt(dx * dx + dy * dy);
          if (d < 200) {
            const al = (1 - d / 200) * 0.22 * ((a.zDepth + b.zDepth) / 2);
            const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            grad.addColorStop(0, a.color + hex(al));
            grad.addColorStop(1, b.color + hex(al));
            ctx.beginPath();
            ctx.strokeStyle = grad;
            ctx.lineWidth = (1 - d / 200) * 2 * a.zDepth;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      sorted.forEach((n) => {
        n.x += n.vx * n.zDepth;
        n.y += n.vy * n.zDepth;
        if (n.x - n.r < 10) {
          n.x = n.r + 10;
          n.vx = Math.abs(n.vx);
        }
        if (n.x + n.r > W - 10) {
          n.x = W - n.r - 10;
          n.vx = -Math.abs(n.vx);
        }
        if (n.y - n.r < 10) {
          n.y = n.r + 10;
          n.vy = Math.abs(n.vy);
        }
        if (n.y + n.r > H - 10) {
          n.y = H - n.r - 10;
          n.vy = -Math.abs(n.vy);
        }
        const mdx = n.x - mouse.current.x,
          mdy = n.y - mouse.current.y,
          md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < 160 && md > 0) {
          const f = ((160 - md) / 160) * 0.7 * n.zDepth;
          n.x += (mdx / md) * f;
          n.y += (mdy / md) * f;
        }
        const r =
            n.r * (1 + Math.sin(frame * 0.018 + n.phase) * 0.06) * n.zDepth,
          alpha = 0.5 + n.zDepth * 0.5;
        const grd = ctx.createRadialGradient(
          n.x,
          n.y,
          r * 0.2,
          n.x,
          n.y,
          r * 2.5,
        );
        grd.addColorStop(0, n.color + hex(0.25 * alpha));
        grd.addColorStop(1, n.color + "00");
        ctx.beginPath();
        ctx.arc(n.x, n.y, r * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
        const cg = ctx.createRadialGradient(
          n.x - r * 0.3,
          n.y - r * 0.3,
          r * 0.05,
          n.x,
          n.y,
          r,
        );
        cg.addColorStop(0, n.color + hex(0.9 * alpha));
        cg.addColorStop(1, n.color + hex(0.5 * alpha));
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = cg;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.strokeStyle = n.color + hex(0.3 * alpha);
        ctx.lineWidth = 1.2;
        ctx.stroke();
        const fs = Math.max(9, r * (n.zDepth >= 0.75 ? 0.3 : 0.26));
        ctx.fillStyle = `rgba(255,255,255,${alpha * (n.zDepth >= 0.75 ? 0.9 : 0.45)})`;
        ctx.font = `500 ${fs}px 'DM Sans',sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(n.label, n.x, n.y);
      });
    };
    draw();
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", init);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("touchmove", onMove as EventListener);
    };
  }, []);
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg,transparent 0%,rgba(0,0,0,0.04) 50%,transparent 100%)",
        marginTop: "-10rem",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
          The emotional landscape
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="font-display text-4xl md:text-6xl tracking-tight text-balance max-w-xl">
            Every feeling has a name. And a path forward.
          </h2>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Move through the field — orbs repel from your cursor. Each one is a
            concern we support.
          </p>
        </div>
      </div>
      <div className="relative" style={{ height: "480px" }}>
        <canvas
          ref={canvasRef}
          className="w-full h-full cursor-none"
          aria-label="Interactive emotion landscape"
        />
      </div>
      <div className="max-w-6xl mx-auto px-6 md:px-10 mt-6 flex items-center justify-between">
        <p className="text-xs text-muted-foreground tracking-wide opacity-60">
          move · repel · explore
        </p>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm border-b border-foreground/25 pb-0.5 hover:border-foreground transition-colors"
        >
          See all support areas
          <span className="inline-block w-5 h-px bg-foreground/50" />
        </Link>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SERVICE LAYERS
   ═══════════════════════════════════════════════════════════ */
function ServiceLayers() {
  const layers = [
    {
      title: "Emotional wellbeing",
      body: "Soft teal supports steadiness and safety for anxiety, stress, overthinking, and low mood.",
      anim: "reveal-blur",
      tone: "tone-wellbeing",
    },
    {
      title: "Relationship & family",
      body: "Sea-glass tones support openness, empathy, and clearer communication between people.",
      anim: "reveal-left",
      tone: "tone-connection",
    },
    {
      title: "Career & growth",
      body: "Deeper ocean blues support focus, confidence, and forward movement when life feels stuck.",
      anim: "reveal-rise",
      tone: "tone-growth",
    },
  ];
  return (
    <section
      className="relative py-32 md:py-48 px-6 md:px-10"
      style={{ marginTop: "-10rem" }}
    >
      <div className="max-w-6xl mx-auto mb-24 reveal-blur">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Support tailored for you
        </p>
        <h2 className="font-display text-4xl md:text-6xl tracking-tight max-w-3xl text-balance">
          A different kind of care for each layer of life.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Each service is shaped with a specific emotional tone so the page
          feels calmer, safer, and more intuitive for the concern you are
          facing.
        </p>
      </div>
      <div className="max-w-6xl mx-auto space-y-24 md:space-y-40">
        {layers.map((l, i) => (
          <div
            key={i}
            className={`relative ${l.anim} ${l.tone} grid md:grid-cols-12 gap-8 items-center`}
            data-delay={i * 100}
          >
            <div className="absolute -inset-x-10 -inset-y-20 bg-tone-glow opacity-70 blur-2xl -z-10" />
            <div className="md:col-span-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              0{i + 1}
            </div>
            <h3 className="md:col-span-5 font-display text-4xl md:text-6xl tracking-tight text-tone">
              {l.title}
            </h3>
            <p className="md:col-span-5 text-lg text-muted-foreground leading-relaxed">
              {l.body}
            </p>
          </div>
        ))}
      </div>
      <div className="max-w-6xl mx-auto mt-24 reveal">
        <Link
          href="/services"
          className="inline-flex items-center gap-3 text-sm border-b border-foreground/30 pb-1 hover:border-foreground transition-colors"
        >
          See every kind of support
          <span className="inline-block w-6 h-px bg-foreground/60" />
        </Link>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   EDITORIAL SHOWCASE
   ═══════════════════════════════════════════════════════════ */
export function EditorialShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const rafRef = useRef<number>(0);
  const posRef = useRef<number>(0);
  const cards = [
    {
      cat: "Mental Health",
      headline: "When the mind won't quiet down.",
      sub: "Anxiety · Depression · Overthinking · Sleep",
      color: "#7C5CBF",
      img: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=800&auto=format&fit=crop&q=70",
      slug: "anxiety",
      num: "01",
    },
    {
      cat: "Relationships",
      headline: "The people we love — and lose.",
      sub: "Couples · Marriage · Breakup · Family",
      color: "#C05478",
      img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&auto=format&fit=crop&q=70",
      slug: "couple",
      num: "02",
    },
    {
      cat: "Career & Growth",
      headline: "Purpose is not a luxury.",
      sub: "Career · Motivation · Work-Life Balance",
      color: "#2E917A",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=70",
      slug: "career",
      num: "03",
    },
    {
      cat: "Grief & Trauma",
      headline: "Grief is love with nowhere to go.",
      sub: "Grief · Trauma · PTSD · Loss",
      color: "#3A72B8",
      img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&auto=format&fit=crop&q=70",
      slug: "grief",
      num: "04",
    },
    {
      cat: "Children & Family",
      headline: "Every family deserves steadier ground.",
      sub: "Parenting · Adolescent · Academic",
      color: "#B8832E",
      img: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&auto=format&fit=crop&q=70",
      slug: "parenting",
      num: "05",
    },
  ];
  const allCards = [...cards, ...cards, ...cards];
  const CARD_W = 420 + 24,
    loopAt = CARD_W * cards.length;
  useEffect(() => {
    if (typeof window === "undefined") return;
    const track = trackRef.current;
    if (!track) return;
    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);
      if (!isPaused) {
        posRef.current += 0.65;
        if (posRef.current >= loopAt) posRef.current -= loopAt;
        track.style.transform = `translateX(${-posRef.current}px)`;
      }
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPaused, loopAt]);
  return (
    <>
      <style>{`.esc-track{display:flex;gap:24px;padding:0 48px;will-change:transform;width:max-content}.esc-card{flex:0 0 420px;height:560px;border-radius:28px;overflow:hidden;position:relative;display:block;text-decoration:none;transition:transform .5s cubic-bezier(.16,1,.3,1)}.esc-card:hover{transform:translateY(-8px) scale(1.01)}.esc-card img{width:100%;height:100%;object-fit:cover;transition:transform .8s cubic-bezier(.16,1,.3,1)}.esc-card:hover img{transform:scale(1.06)}.esc-overlay{position:absolute;inset:0}.esc-body{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;padding:32px 28px}.esc-num{position:absolute;top:24px;right:24px;font-size:3.5rem;font-weight:300;font-family:'Cormorant Garamond',serif;opacity:.2;color:#fff;line-height:1}.esc-tag{display:inline-block;padding:5px 14px;border-radius:999px;font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;font-weight:600;margin-bottom:12px;background:rgba(255,255,255,.18);backdrop-filter:blur(8px);color:#fff;width:fit-content}.esc-headline{font-family:'Cormorant Garamond',serif;font-size:1.85rem;font-weight:400;line-height:1.2;color:#fff;margin-bottom:10px}.esc-sub{font-size:.7rem;letter-spacing:.06em;color:rgba(255,255,255,.6)}@media(max-width:768px){.esc-card{flex:0 0 300px;height:400px}}`}</style>
      <div className="py-32 md:py-40 overflow-hidden">
        <div className="px-8 md:px-16 mb-12">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
                Areas of support
              </p>
              <h2 className="font-display text-4xl md:text-6xl tracking-tight">
                Where would you like to begin?
              </h2>
            </div>
            <p className="hidden md:block text-sm text-muted-foreground max-w-[220px] text-right leading-relaxed mb-1">
              Hover a card to pause
            </p>
          </div>
        </div>
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="esc-track" ref={trackRef}>
            {allCards.map((card, idx) => (
              <Link
                key={`${card.slug}-${idx}`}
                href={`/services/${card.slug}`}
                className="esc-card"
              >
                <Image
                  src={card.img}
                  alt={card.cat}
                  loading="lazy"
                  width={600}
                  height={400}
                />
                <div
                  className="esc-overlay"
                  style={{
                    background: `linear-gradient(180deg,transparent 20%,${card.color}aa 70%,${card.color}ee 100%)`,
                  }}
                />
                <div className="esc-body">
                  <span className="esc-num">{card.num}</span>
                  <span className="esc-tag">{card.cat}</span>
                  <p className="esc-headline">{card.headline}</p>
                  <p className="esc-sub">{card.sub}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="px-8 md:px-16 mt-10 flex justify-end">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm border-b border-foreground/25 pb-0.5 hover:border-foreground transition-colors"
          >
            Browse all 40+ services
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   PHILOSOPHY STRIP
   ═══════════════════════════════════════════════════════════ */
export function PhilosophyStrip() {
  return (
    <section
      className="relative px-6 md:px-10 py-32 md:py-48 overflow-hidden"
      style={{ marginTop: "-10rem" }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 relative reveal-left">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-cement/60 shadow-soft">
            <Image
              src={stones}
              alt="Smooth stones balanced in still water"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-pink-glow-soft blur-2xl animate-breathe -z-10" />
        </div>
        <div className="md:col-span-7 reveal-blur" data-delay="200">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Why ocean, why slow
          </p>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight text-balance leading-[1.05]">
            The mind quiets where the water meets the sky.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
            Color psychology calls deep blues and seafoam tones the most
            calming. We borrow their rhythm — slow tides, soft horizons — and
            design every session, every page, around the same feeling.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              ["94%", "feel calmer after first session"],
              ["6mo", "average healing journey"],
              ["100%", "confidential, always"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl text-foreground">{n}</div>
                <div className="mt-1 text-xs text-muted-foreground leading-snug">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   TESTIMONIAL
   ═══════════════════════════════════════════════════════════ */
export function Testimonial() {
  return (
    <section className="relative py-40 md:py-56 px-6 overflow-hidden bg-cement/50">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={silhouette}
          alt="Soft silhouette looking out at calm water"
          width={1080}
          height={1600}
          loading="lazy"
          className="absolute left-1/2 top-1/2 w-[640px] max-w-none h-auto -translate-x-1/2 -translate-y-1/2 opacity-50 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background/80" />
      </div>
      <div className="relative max-w-4xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8 reveal">
          In their words
        </p>
        <blockquote className="reveal-blur font-display text-4xl md:text-6xl tracking-tight leading-tight text-balance">
          "I felt understood for the first time in a long time."
        </blockquote>
        <div className="mt-10 text-sm text-muted-foreground reveal">
          — Anonymous, after 6 sessions
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   BREATH STATS
   ═══════════════════════════════════════════════════════════ */
export function BreathStats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const stats = [
    { end: 40, suffix: "+", label: "Counselling services", color: "#7C5CBF" },
    {
      end: 94,
      suffix: "%",
      label: "Feel calmer after session one",
      color: "#C05478",
    },
    {
      end: 8,
      suffix: "yrs",
      label: "Of supporting people through hard times",
      color: "#2E917A",
    },
    { end: 100, suffix: "%", label: "Confidential, always", color: "#B8832E" },
  ];
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!visible) return;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / 1800);
      const ease = 1 - Math.pow(1 - p, 3);
      setCounts(stats.map((s) => Math.round(s.end * ease)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [visible]);
  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg,transparent 0%,rgba(0,0,0,0.025) 50%,transparent 100%)",
        zIndex: 2,
      }}
    >
      <style>{`@keyframes breath-ring{0%,100%{r:120;opacity:.18}50%{r:148;opacity:.08}}@keyframes breath-ring-2{0%,100%{r:90;opacity:.25}50%{r:110;opacity:.12}}@keyframes breath-ring-3{0%,100%{r:60;opacity:.35}50%{r:72;opacity:.18}}@keyframes breath-core{0%,100%{r:38}50%{r:46}}@keyframes stroke-draw{from{stroke-dashoffset:600}to{stroke-dashoffset:0}}.bs-ring-1{animation:breath-ring 6s ease-in-out infinite}.bs-ring-2{animation:breath-ring-2 6s ease-in-out infinite .8s}.bs-ring-3{animation:breath-ring-3 6s ease-in-out infinite 1.6s}.bs-core{animation:breath-core 6s ease-in-out infinite}.bs-stat{opacity:0;transform:translateY(16px);transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1)}.bs-stat.visible{opacity:1;transform:translateY(0)}.bs-arc{animation:stroke-draw 2s cubic-bezier(.16,1,.3,1) .4s both}`}</style>
      <div className="max-w-7xl mx-auto">
        <div className="reveal-blur mb-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            The numbers behind the stillness
          </p>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight text-balance">
            Results you can feel.{" "}
            <em className="not-italic text-foreground/50">
              Numbers you can trust.
            </em>
          </h2>
        </div>
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4 space-y-12">
            {stats.slice(0, 2).map((s, i) => (
              <div
                key={i}
                className={`bs-stat${visible ? " visible" : ""}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className="font-display text-6xl md:text-7xl tracking-tight"
                    style={{ color: s.color }}
                  >
                    {counts[i]}
                  </span>
                  <span
                    className="font-display text-3xl"
                    style={{ color: s.color }}
                  >
                    {s.suffix}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-snug max-w-[200px]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <div className="md:col-span-4 flex items-center justify-center">
            <svg
              width="320"
              height="320"
              viewBox="0 0 320 320"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="bs-grad-center" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#7C5CBF" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#C05478" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle
                className="bs-ring-1"
                cx="160"
                cy="160"
                r="120"
                fill="none"
                stroke="#7C5CBF"
                strokeWidth="1"
              />
              <circle
                className="bs-ring-2"
                cx="160"
                cy="160"
                r="90"
                fill="none"
                stroke="#C05478"
                strokeWidth="1"
              />
              <circle
                className="bs-ring-3"
                cx="160"
                cy="160"
                r="60"
                fill="none"
                stroke="#2E917A"
                strokeWidth="1"
              />
              <circle
                className="bs-core"
                cx="160"
                cy="160"
                r="38"
                fill="url(#bs-grad-center)"
              />
              {visible && (
                <circle
                  className="bs-arc"
                  cx="160"
                  cy="160"
                  r="95"
                  fill="none"
                  stroke="#7C5CBF"
                  strokeWidth="2"
                  strokeDasharray="600"
                  strokeDashoffset="600"
                  strokeLinecap="round"
                  transform="rotate(-90 160 160)"
                  opacity="0.5"
                />
              )}
              {Array.from({ length: 36 }).map((_, i) => {
                const angle = (i * 10 * Math.PI) / 180,
                  inner = 130,
                  outer = i % 3 === 0 ? 142 : 136;
                return (
                  <line
                    key={i}
                    x1={160 + inner * Math.cos(angle)}
                    y1={160 + inner * Math.sin(angle)}
                    x2={160 + outer * Math.cos(angle)}
                    y2={160 + outer * Math.sin(angle)}
                    stroke="#7C5CBF"
                    strokeWidth={i % 3 === 0 ? 1.5 : 0.8}
                    opacity={visible ? 0.4 : 0}
                    style={{
                      transition: `opacity .8s ease ${0.3 + i * 0.01}s`,
                    }}
                  />
                );
              })}
              <text
                x="160"
                y="156"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#7C5CBF"
                fontSize="11"
                fontFamily="DM Sans, sans-serif"
                letterSpacing="3"
                opacity="0.8"
              >
                BREATHE
              </text>
              <text
                x="160"
                y="172"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#7C5CBF"
                fontSize="9"
                fontFamily="DM Sans, sans-serif"
                letterSpacing="2"
                opacity="0.45"
              >
                YOU ARE SAFE
              </text>
            </svg>
          </div>
          <div className="md:col-span-4 space-y-12">
            {stats.slice(2).map((s, i) => (
              <div
                key={i}
                className={`bs-stat${visible ? " visible" : ""}`}
                style={{ transitionDelay: `${(i + 2) * 150}ms` }}
              >
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className="font-display text-6xl md:text-7xl tracking-tight"
                    style={{ color: s.color }}
                  >
                    {counts[i + 2]}
                  </span>
                  <span
                    className="font-display text-3xl"
                    style={{ color: s.color }}
                  >
                    {s.suffix}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-snug max-w-[200px]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`mt-24 text-center bs-stat${visible ? " visible" : ""}`}
          style={{ transitionDelay: "700ms" }}
        >
          <blockquote className="font-display text-2xl md:text-3xl text-foreground/40 tracking-tight max-w-2xl mx-auto">
            "The first step toward healing is knowing you don't have to figure
            it all out alone."
          </blockquote>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PROCESS RIBBON
   ═══════════════════════════════════════════════════════════ */
export function ProcessRibbon() {
  const steps = [
    ["01", "Reach out", "Whenever you're ready. No pressure, no commitment."],
    [
      "02",
      "First conversation",
      "A gentle 30-minute session to feel each other out.",
    ],
    ["03", "Your rhythm", "Weekly, fortnightly, or whatever your life allows."],
    ["04", "Walk forward", "Together — at your pace, in your direction."],
  ];
  return (
    <section
      className="relative px-6 md:px-10 py-32 md:py-48 overflow-hidden"
      style={{ marginTop: "-20rem", zIndex: 0 }}
    >
      <Image
        src={ripples}
        alt="Calm ocean ripples"
        width={1920}
        height={1080}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative max-w-7xl mx-auto">
        <div className="reveal-blur mb-20 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            How it begins
          </p>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight text-balance">
            Four small steps. None of them rushed.
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-10 relative">
          <div className="hidden md:block absolute top-3 left-[5%] right-[5%] h-px bg-foreground/20" />
          {steps.map(([n, t, b], i) => (
            <div key={n} className="reveal-blur relative" data-delay={i * 150}>
              <div className="w-2.5 h-2.5 rounded-full bg-foreground relative z-10" />
              <div className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {n}
              </div>
              <h3 className="mt-2 font-display text-2xl tracking-tight">{t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {b}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SUPPORT SIGNALS
   ═══════════════════════════════════════════════════════════ */
export function SupportSignals() {
  const points = [
    {
      title: "Confidential care",
      body: "Private, respectful conversations where you can speak freely without pressure.",
      tone: "tone-restore",
    },
    {
      title: "Evidence-informed support",
      body: "Practical guidance for anxiety, burnout, relationship stress, grief, and life transitions.",
      tone: "tone-growth",
    },
    {
      title: "Online, flexible sessions",
      body: "A calmer therapy rhythm that fits work, family life, and changing emotional energy.",
      tone: "tone-family",
    },
  ];
  return (
    <section className="px-6 md:px-10 py-32 md:py-40 bg-cement/35">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl reveal-blur">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Why people choose Stillness
          </p>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight text-balance">
            Calm design, clear support, and space to think again.
          </h2>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <article
              key={point.title}
              className={`reveal-blur ${point.tone} border border-border/60 bg-background/70 p-8`}
              data-delay={index * 120}
            >
              <div className="mb-6 h-24 bg-tone-glow opacity-70" />
              <h3 className="font-display text-2xl tracking-tight text-tone">
                {point.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {point.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   CLOSING CTA
   ═══════════════════════════════════════════════════════════ */
export function ClosingCTA() {
  return (
    <section className="relative py-40 md:py-56 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-window opacity-80" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-glow-soft blur-3xl animate-breathe" />
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="reveal-blur font-display text-5xl md:text-7xl tracking-tight text-balance">
          You don't have to carry this alone.
        </h2>
        <p
          className="reveal mt-6 text-lg text-muted-foreground"
          data-delay="200"
        >
          Take the first quiet step. We'll walk the rest at your pace.
        </p>
        <div className="reveal mt-12" data-delay="400">
          <Link
            href="/book"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background text-sm animate-glow-pulse"
          >
            Book a session
            <span className="inline-block w-6 h-px bg-background/70" />
          </Link>
        </div>
      </div>
    </section>
  );
}
export default function Page() {
  return <Home />;
}
