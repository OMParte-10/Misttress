import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`absolute top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
  isHovered
    ? 'bg-black/20 backdrop-blur-xl border-b border-white/10'
    : 'bg-transparent'
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col items-center">
        {/* Centered Brand Title - Always Visible with Text Shadow for Readability */}
        <div 
          className="text-3xl md:text-4xl lg:text-5xl tracking-[0.25em] text-white font-serif"
          style={{ 
            fontFamily: 'Georgia, "Times New Roman", serif',
            textShadow: '0 2px 12px rgba(0, 0, 0, 0.5)'
          }}
        >
          MISTTRESS
        </div>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex gap-12 mt-6 transition-all duration-500 ease-out ${isHovered
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
        >
          {['Products', 'Community', 'About', 'Query'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-[white] text-xs tracking-[0.25em] uppercase hover:text-[white] transition-colors relative group font-medium"
            >
              {item}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[white] group-hover:w-full transition-all duration-500"></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden absolute right-6 top-8 transition-colors duration-300"
          style={{ color: isHovered || mobileMenuOpen ? 'white' : 'white' }}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/30 backdrop-blur-xl border-t border-white/10">
          <div className="px-6 py-8 flex flex-col gap-5 items-center">
            <button
              onClick={() => scrollToSection('shop')}
              className="text-white/95 text-sm tracking-[0.25em] uppercase font-light"
            >
              SHOP
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white/95 text-sm tracking-[0.25em] uppercase font-light"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-white/95 text-sm tracking-[0.25em] uppercase font-light"
            >
              REVIEWS
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-white/95 text-sm tracking-[0.25em] uppercase font-light"
            >
              FAQ
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}