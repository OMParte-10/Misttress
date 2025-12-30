import { ImageWithFallback } from './figma/ImageWithFallback';

export function TrialPack() {
  const fragrances = [
    "Velvet Noir - Sophisticated & Mysterious",
    "Rose Mystique - Floral & Romantic",
    "Amber Essence - Warm & Luxurious",
    "Crystal Bloom - Fresh & Elegant"
  ];

  return (
    <section
      className="py-24 bg-[var(--soft-beige)]"
      style={{
        background: 'linear-gradient(135deg, var(--soft-beige) 0%, var(--soft-beige-dark) 50%, var(--soft-beige) 100%)',
      }}
    >
      <div className="max-w-full mx-auto px-4">
        {/* Section Heading - Centered */}
        <div className="text-center mb-16 px-6 md:px-12 lg:px-16">
          <h2
            className="text-[var(--medium-brown)] text-4xl md:text-6xl"
            style={{
              fontFamily: 'var(--font-serif)',
              lineHeight: '1.2'
            }}
          >
            Trial Pack or Pack of Four
          </h2>
        </div>

        {/* Content Container - 60-70% Left Image, 30-40% Right Text */}
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* Left: Product Image - 60-70% Width, Edge-to-Edge */}
          <div className="w-full lg:w-[65%] relative overflow-hidden bg-[var(--soft-beige-light)] rounded-r-[3rem] lg:rounded-r-[5rem]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1761865544944-2c8da85c869e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwZ2lmdCUyMHNldCUyMGx1eHVyeXxlbnwxfHx8fDE3NjQwNDkzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Trial Pack or Pack of Four"
              className="w-full h-full object-cover min-h-[500px] lg:min-h-[600px] transform hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--medium-brown)]/10 to-transparent mix-blend-multiply" />
          </div>

          {/* Right: Stacked Headings + Button - 30-40% Width */}
          <div className="w-full lg:w-[35%] flex flex-col justify-center space-y-8 px-8 md:px-12 lg:px-16 py-12 lg:py-16">
            {/* Four Stacked Descriptions */}
            <div className="space-y-6">
              {fragrances.map((fragrance, index) => (
                <div
                  key={index}
                  className="border-l-2 border-[var(--medium-brown)]/20 pl-6 py-2 hover:border-[var(--medium-brown)] transition-all duration-300 group cursor-pointer"
                >
                  <p
                    className="text-[var(--dark-brown)] group-hover:text-[var(--medium-brown-dark)] transition-colors text-lg"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {fragrance}
                  </p>
                </div>
              ))}
            </div>

            {/* Shop Now Button */}
            <button
              className="self-start mt-4 px-10 py-4 bg-[var(--medium-brown)] text-white rounded-full hover:bg-[var(--dark-brown)] transition-all duration-300 shadow-xl hover:shadow-[0_20px_40px_-5px_rgba(139,115,85,0.4)] transform hover:scale-105 tracking-widest text-sm uppercase"
            >
              Shop Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}