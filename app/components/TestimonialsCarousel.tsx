"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { assetPath } from "../lib/asset-path";

type Testimonial = {
  name: string;
  course: string;
  image: string;
  quote: string;
};

type TestimonialsCarouselProps = {
  testimonials: Testimonial[];
};

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setCurrent((index + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const card = trackRef.current?.children[current] as HTMLElement | undefined;
    if (!card || !trackRef.current) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    trackRef.current.scrollTo({
      behavior: reducedMotion ? "auto" : "smooth",
      left: card.offsetLeft,
    });
  }, [current]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (paused || reducedMotion.matches) return;

    const timer = window.setInterval(() => {
      setCurrent((value) => (value + 1) % testimonials.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [paused, testimonials.length]);

  return (
    <div
      className="testimonials-carousel"
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        className="testimonials-viewport"
        ref={trackRef}
        role="region"
        aria-label="Depoimentos de estudantes do ITA"
      >
        {testimonials.map((testimonial, index) => (
          <article className="testimonial-card" key={testimonial.name}>
            <div className="testimonial-media">
              <img
                src={assetPath(testimonial.image)}
                alt={`Retrato de ${testimonial.name}, estudante do ITA`}
                loading="lazy"
              />
            </div>
            <div className="testimonial-copy">
              <span className="testimonial-number">{String(index + 1).padStart(2, "0")}</span>
              <blockquote tabIndex={0}>{testimonial.quote}</blockquote>
              <footer>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.course}</span>
                </div>
                <p><span>Indicaria o ITA</span><strong>10/10</strong></p>
              </footer>
            </div>
          </article>
        ))}
      </div>

      <div className="testimonials-controls">
        <p aria-live="polite">
          <strong>{String(current + 1).padStart(2, "0")}</strong>
          <span>/ {String(testimonials.length).padStart(2, "0")}</span>
        </p>
        <div>
          <button type="button" onClick={() => goTo(current - 1)} aria-label="Depoimento anterior">←</button>
          <button type="button" onClick={() => goTo(current + 1)} aria-label="Próximo depoimento">→</button>
        </div>
      </div>
    </div>
  );
}
