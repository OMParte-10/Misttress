import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-6 md:px-10 py-16 bg-[var(--soft-beige-dark)] text-[var(--medium-brown)] border-t border-[var(--medium-brown)]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl tracking-[0.2em] mb-6 font-serif" style={{ fontFamily: 'var(--font-serif)' }}>MISTTRESS</div>
            <p className="text-sm opacity-80 leading-relaxed font-light">
              Clean beauty for conscious living. Redefining luxury with nature's finest ingredients.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-xs tracking-[0.25em] text-[var(--dark-brown)] uppercase font-semibold">SHOP</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-[var(--dark-brown)] transition-colors relative group">
                All Products
                <span className="absolute -bottom-1 left-0 w-0 h-[0.5px] bg-[var(--dark-brown)] group-hover:w-full transition-all duration-300"></span>
              </a></li>
              <li><a href="#" className="hover:text-[var(--dark-brown)] transition-colors relative group">
                Bestsellers
                <span className="absolute -bottom-1 left-0 w-0 h-[0.5px] bg-[var(--dark-brown)] group-hover:w-full transition-all duration-300"></span>
              </a></li>
              <li><a href="#" className="hover:text-[var(--dark-brown)] transition-colors relative group">
                Gift Sets
                <span className="absolute -bottom-1 left-0 w-0 h-[0.5px] bg-[var(--dark-brown)] group-hover:w-full transition-all duration-300"></span>
              </a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs tracking-[0.25em] text-[var(--dark-brown)] uppercase font-semibold">SUPPORT</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-[var(--dark-brown)] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[var(--dark-brown)] transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-[var(--dark-brown)] transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs tracking-[0.25em] text-[var(--dark-brown)] uppercase font-semibold">FOLLOW US</h4>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[var(--dark-brown)] transition-transform hover:-translate-y-1 duration-300">
                <Instagram size={22} strokeWidth={1.5} />
              </a>
              <a href="#" className="hover:text-[var(--dark-brown)] transition-transform hover:-translate-y-1 duration-300">
                <Facebook size={22} strokeWidth={1.5} />
              </a>
              <a href="#" className="hover:text-[var(--dark-brown)] transition-transform hover:-translate-y-1 duration-300">
                <Twitter size={22} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--medium-brown)]/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs opacity-60 font-light tracking-wide">
          <p>© 2025 MISTTRESS. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[var(--dark-brown)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--dark-brown)] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}