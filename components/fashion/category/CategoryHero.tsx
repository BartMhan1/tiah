"use client";

import { useEffect, useState } from "react";

type CategoryHeroProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  images: string[];
  interval?: number;
};

export default function CategoryHero({
  title,
  eyebrow = "TIAH FASHION",
  description,
  images,
  interval = 3000,
}: CategoryHeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [images.length, interval]);

  const goToSlide = (index: number) => setActiveIndex(index);
  const goPrevious = () => setActiveIndex((current) => (current - 1 + images.length) % images.length);
  const goNext = () => setActiveIndex((current) => (current + 1) % images.length);

  return (
    <section className="category-hero category-hero--compact" aria-label={`${title} collection`}>
      <div className="category-hero__slides category-hero__slides--compact">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt=""
            className={`category-hero__image category-hero__image--compact${index === activeIndex ? " is-active" : ""}`}
            aria-hidden={index !== activeIndex}
          />
        ))}
        <div className="category-hero__shade" />
      </div>

      <div className="category-hero__content">
        <p className="category-hero__eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {description && <p className="category-hero__description">{description}</p>}
      </div>

      {images.length > 1 && (
        <>
          <button className="category-hero__arrow category-hero__arrow--left" type="button" onClick={goPrevious} aria-label="Previous image">‹</button>
          <button className="category-hero__arrow category-hero__arrow--right" type="button" onClick={goNext} aria-label="Next image">›</button>
          <div className="category-hero__dots" aria-label="Choose hero image">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                className={index === activeIndex ? "is-active" : ""}
                onClick={() => goToSlide(index)}
                aria-label={`Show image ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>
        </>
      )}

      <style jsx>{`
        .category-hero--compact {
          height: clamp(260px, 35vh, 360px);
          min-height: 0;
        }

        .category-hero__slides--compact {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .category-hero__image--compact {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        @media (max-width: 760px) {
          .category-hero--compact {
            height: clamp(230px, 32vh, 300px);
          }
        }
      `}</style>
    </section>
  );
}
