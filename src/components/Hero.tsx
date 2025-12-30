import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-10 pt-20 bg-gradient-to-br from-[var(--purple)] to-[var(--blue)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <p className="text-sm tracking-widest text-[var(--gold)] mb-4 uppercase">Natural Beauty</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Glow From Within
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-lg mx-auto lg:mx-0">
            Discover our range of clean, sustainable skincare products designed to enhance your natural radiance.
          </p>
          <button 
            onClick={() => scrollToSection('shop')}
            className="px-10 py-4 bg-[var(--gold)] text-white rounded-full hover:bg-[var(--magenta)] transition-all hover:scale-105 text-sm tracking-wide"
          >
            EXPLORE COLLECTION
          </button>
        </div>
        
        <div className="order-1 lg:order-2">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1626498068278-fb9d0bfb6686?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHByb2R1Y3QlMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc2MzYyOTk4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Skincare Product"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}