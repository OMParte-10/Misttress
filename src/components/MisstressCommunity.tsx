import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

export function MistressCommunity() {
  const [selectedStory, setSelectedStory] = useState<number | null>(null);

  const communityPosts = [
    {
      id: 1,
      mediaImage: "https://images.unsplash.com/photo-1740701554214-a53a137e2d3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBsaWZlc3R5bGUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQwNTAzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      productThumbnail: "https://images.unsplash.com/photo-1666266677210-2f746a114e84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwbWluaW1hbHxlbnwxfHx8fDE3NjQwMTAwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      productName: "Golden Haze",
      comment: "Absolutely love the scent!"
    },
    {
      id: 2,
      mediaImage: "https://images.unsplash.com/photo-1759793499819-bf60128a54b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBwZXJmdW1lfGVufDF8fHx8MTc2NDA1MDMwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      productThumbnail: "https://images.unsplash.com/photo-1666266677210-2f746a114e84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwbWluaW1hbHxlbnwxfHx8fDE3NjQwMTAwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      productName: "Blossom Rush",
      comment: "Perfect for every occasion"
    },
    {
      id: 3,
      mediaImage: "https://images.unsplash.com/photo-1709095458514-573bc6277d3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmcmFncmFuY2UlMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzY0MDUwMzAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      productThumbnail: "https://images.unsplash.com/photo-1666266677210-2f746a114e84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwbWluaW1hbHxlbnwxfHx8fDE3NjQwMTAwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      productName: "Berry Pop",
      comment: "My signature scent now"
    },
    {
      id: 4,
      mediaImage: "https://images.unsplash.com/photo-1690131081247-cc1415f5ccd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYmVhdXR5JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MDA4MjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      productThumbnail: "https://images.unsplash.com/photo-1666266677210-2f746a114e84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwbWluaW1hbHxlbnwxfHx8fDE3NjQwMTAwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      productName: "Coastal Calm",
      comment: "Fresh and elegant all day"
    },
    {
      id: 5,
      mediaImage: "https://images.unsplash.com/photo-1740701554214-a53a137e2d3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBsaWZlc3R5bGUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQwNTAzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      productThumbnail: "https://images.unsplash.com/photo-1666266677210-2f746a114e84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwbWluaW1hbHxlbnwxfHx8fDE3NjQwMTAwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      productName: "Golden Haze",
      comment: "Can't live without it!"
    }
  ];

  const openStory = (index: number) => {
    setSelectedStory(index);
  };

  const closeStory = () => {
    setSelectedStory(null);
  };

  const goToNext = () => {
    if (selectedStory !== null && selectedStory < communityPosts.length - 1) {
      setSelectedStory(selectedStory + 1);
    }
  };

  const goToPrevious = () => {
    if (selectedStory !== null && selectedStory > 0) {
      setSelectedStory(selectedStory - 1);
    }
  };

  return (
    <section className="py-24 bg-[var(--soft-beige-light)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-[var(--medium-brown)] mb-4"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(3rem, 5vw, 4.5rem)', // Responsive prominent size
              fontWeight: '500',
              lineHeight: '1.1'
            }}
          >
            Mistress Community
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-[var(--medium-brown)] text-lg md:text-xl font-serif italic leading-relaxed">
            A space for like-minded women who believe confidence doesn’t need to be complicated.
          </p>
        </div>

        {/* Container with elegant border */}
        <div className="border-[2px] border-[var(--light-brown)]/20 rounded-[3rem] p-8 md:p-12 relative overflow-hidden bg-[var(--soft-beige)]/30 backdrop-blur-sm">

          {/* Horizontally Scrollable Content Row */}
          <div className="relative">
            <div className="flex gap-10 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory px-4">
              {communityPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="flex-shrink-0 w-[280px] snap-center group cursor-pointer"
                  onClick={() => openStory(index)}
                >
                  {/* Vertical Media Card (9:16 ratio) */}
                  <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden shadow-lg mb-6 bg-[var(--soft-beige)] group-hover:shadow-[0_20px_50px_rgba(139,115,85,0.2)] transition-all duration-500 group-hover:-translate-y-2 border border-[var(--medium-brown)]/10">
                    <ImageWithFallback
                      src={post.mediaImage}
                      alt={`Community post featuring ${post.productName}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Product Info Below Card */}
                  <div className="px-4 text-center">
                    <div className="flex flex-col items-center gap-2 mb-3">
                      <p className="text-[var(--dark-brown)] font-medium text-lg" style={{ fontFamily: 'var(--font-serif)' }}>
                        {post.productName}
                      </p>
                    </div>

                    {/* Comment/Testimonial Element */}
                    <div className="inline-flex justify-center items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-[var(--medium-brown)]/10 hover:bg-white hover:shadow-sm transition-all cursor-pointer">
                      <MessageCircle size={14} className="text-[var(--light-brown-dark)]" />
                      <p className="text-[var(--medium-brown)] text-sm italic truncate max-w-[180px]">
                        "{post.comment}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Instagram Stories-Style Viewer Modal */}
      {selectedStory !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center overflow-hidden"
          onClick={closeStory}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white/90 hover:text-white z-50 bg-black/20 backdrop-blur-sm rounded-full p-2 transition-all hover:bg-black/40"
            onClick={closeStory}
          >
            <X size={32} />
          </button>

          {/* Previous Button */}
          {selectedStory > 0 && (
            <button
              className="absolute left-6 text-white/90 hover:text-white z-50 bg-black/20 backdrop-blur-sm rounded-full p-3 transition-all hover:bg-black/40 hidden md:block"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <ChevronLeft size={36} />
            </button>
          )}

          {/* Next Button */}
          {selectedStory < communityPosts.length - 1 && (
            <button
              className="absolute right-6 text-white/90 hover:text-white z-50 bg-black/20 backdrop-blur-sm rounded-full p-3 transition-all hover:bg-black/40 hidden md:block"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <ChevronRight size={36} />
            </button>
          )}

          {/* Viewer Container having Previews */}
          <div className="relative w-full h-full flex items-center justify-center pointer-events-none md:pointer-events-auto">

            {/* Previous Slide Preview (Blurry) */}
            {selectedStory > 0 && (
              <div
                className="absolute left-[5%] md:left-[15%] lg:left-[20%] w-[300px] h-[60vh] opacity-30 blur-sm scale-90 hidden md:block transition-all duration-500"
                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              >
                <ImageWithFallback
                  src={communityPosts[selectedStory - 1].mediaImage}
                  alt="Previous"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            )}

            {/* Current Story Content */}
            <div
              className="relative max-w-[500px] w-full mx-4 h-[80vh] md:h-[85vh] z-20 pointer-events-auto transition-all duration-500 ease-out transform"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl bg-black">
                <ImageWithFallback
                  src={communityPosts[selectedStory].mediaImage}
                  alt={`Story featuring ${communityPosts[selectedStory].productName}`}
                  className="w-full h-full object-cover"
                />

                {/* Story Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-20">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-14 h-14 rounded-xl overflow-hidden shadow-lg bg-white border border-white/20">
                      <ImageWithFallback
                        src={communityPosts[selectedStory].productThumbnail}
                        alt={communityPosts[selectedStory].productName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-lg font-medium tracking-wide">
                        {communityPosts[selectedStory].productName}
                      </p>
                      <div className="flex items-center gap-2 mt-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full self-start inline-flex">
                        <MessageCircle size={14} className="text-white/90" />
                        <p className="text-white/90 text-sm italic">
                          "{communityPosts[selectedStory].comment}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Indicators */}
                <div className="absolute top-4 left-4 right-4 flex gap-2 z-30">
                  {communityPosts.map((_, index) => (
                    <div
                      key={index}
                      className="flex-1 h-1 rounded-full bg-white/20 overflow-hidden"
                    >
                      <div
                        className={`h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300 ${index === selectedStory ? 'w-full' : index < selectedStory ? 'w-full' : 'w-0'
                          }`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Next Slide Preview (Blurry) */}
            {selectedStory < communityPosts.length - 1 && (
              <div
                className="absolute right-[5%] md:right-[15%] lg:right-[20%] w-[300px] h-[60vh] opacity-30 blur-sm scale-90 hidden md:block transition-all duration-500"
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
              >
                <ImageWithFallback
                  src={communityPosts[selectedStory + 1].mediaImage}
                  alt="Next"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            )}

          </div>
        </div>
      )}

      {/* Custom scrollbar styling */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}