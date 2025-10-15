"use client";
import stats from "@/data/statsNumberTicker";
import { useEffect, useRef, useState } from "react";

// Sample data - replace with your actual import

export default function NumberTickerSection() {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    // Easing function untuk animasi yang lebih smooth
    const easeOutQuart = (x: number): number => {
      return 1 - Math.pow(1 - x, 4);
    };

    const intervals = stats.map((stat, i) => {
      const duration = 2000 + i * 200; // Variasi durasi untuk efek cascade
      const startTime = Date.now() + i * 100; // Delay untuk setiap number
      let animationFrame: number;

      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;

        if (elapsed < 0) {
          animationFrame = requestAnimationFrame(animate);
          return;
        }

        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuart(progress);
        const current = stat.target * easedProgress;

        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[i] = Math.floor(current);
          return newCounts;
        });

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    });

    return () => intervals.forEach((cleanup) => cleanup());
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="bg-zinc-900 py-20 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 text-center gap-10 lg:gap-16 px-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`flex flex-col items-center transition-all duration-700 ${
              hasAnimated
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{
              transitionDelay: `${i * 100}ms`,
            }}
          >
            <h2 className="text-6xl lg:text-7xl font-extrabold text-zinc-100 mb-2 relative inline-flex items-start">
              <span className="tabular-nums">{counts[i].toLocaleString()}</span>
              <span className="text-2xl font-semibold align-super ml-1 translate-y-[-0.2em] text-red-300">
                +
              </span>
            </h2>
            <p className="text-zinc-600 text-base lg:text-lg font-medium mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
