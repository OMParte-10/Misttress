import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Slide {
  id: number;
  image: string;
  headline: string;
  subheadline: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1739950839930-ef45c078f316?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWF1dHklMjBza2luY2FyZXxlbnwxfHx8fDE3NjQwNDc3NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    headline: "Radiant Beauty Starts Here",
    subheadline: "Discover our luxurious collection",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1687200505768-54daa6da4aef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY29zbWV0aWNzJTIwcHJvZHVjdHxlbnwxfHx8fDE3NjQwNDc3NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    headline: "Elevate Your Skincare Routine",
    subheadline: "Premium products for glowing skin",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1740138160889-29d711607d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYmVhdXR5JTIwYnJhbmR8ZW58MXx8fHwxNzY0MDQ3NzUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    headline: "Natural Beauty, Timeless Elegance",
    subheadline: "Crafted with care, loved by all",
  },
];

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // Slower, more premium timing

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };



  return (
    <div className="relative w-full h-screen overflow-hidden bg-[var(--soft-beige)]">
      {/* Slides with Crossfade Effect */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          {/* Full-screen Edge-to-Edge Image */}
          <div className="absolute inset-0">
            <ImageWithFallback
              src={slide.image}
              alt={slide.headline}
              className="w-full h-full object-cover"
            />
            {/* Warm Gradient Overlay for Luxury Feel */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 mix-blend-multiply" />
            <div className="absolute inset-0 bg-[var(--medium-brown)]/10 mix-blend-overlay" />
          </div>

          {/* Minimal Hero Text with Strong Typography */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-8 z-20 pt-20">
            <div className="max-w-4xl">
              <p className="text-sm md:text-base lg:text-lg tracking-[0.3em] uppercase text-white/90 mb-6 font-light drop-shadow-md">
                {slide.subheadline}
              </p>
              <h1
                className="text-4xl md:text-6xl lg:text-7xl text-white mb-10 tracking-wide leading-tight drop-shadow-lg"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {slide.headline}
              </h1>
              <button
                className="group relative px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/50 text-white rounded-full overflow-hidden transition-all duration-500 hover:bg-white/20 hover:scale-105 hover:border-white"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.125rem',
                  letterSpacing: '0.05em'
                }}
              >
                <span className="relative z-10 font-medium">Shop Now</span>
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Elegant Slideshow Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 rounded-full ${currentSlide === index
                ? "w-12 h-1 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                : "w-2 h-1 bg-white/40 hover:bg-white/70"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}