import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-6 md:px-10 py-16 bg-[var(--soft-beige-dark)] text-[var(--medium-brown)] border-t border-[var(--medium-brown)]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* MISTTRESS column */}
          <div className="col-span-1 md:col-span-1 pr-10">
            <div
              className="text-4xl md:text-5xl tracking-[0.18em] mb-6 font-serif"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              MISTTRESS
            </div>
            <p className="text-lg md:text-xl opacity-80 leading-relaxed font-light max-w-xs">
              Clean beauty for conscious living. Redefining luxury with nature's finest ingredients.
            </p>
          </div>

          {/* SHOP column */}
          <div className="col-span-1 md:col-span-1 pl-6">
            <h4 className="mb-6 text-lg md:text-xl tracking-[0.25em] text-[var(--dark-brown)] uppercase font-semibold">
              SHOP
            </h4>
            <ul className="space-y-4 text-lg md:text-xl font-light">
              <li>
                <a href="#" className="hover:text-[var(--dark-brown)] transition-colors relative group">
                  All Products
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--dark-brown)] group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--dark-brown)] transition-colors relative group">
                  Bestsellers
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--dark-brown)] group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--dark-brown)] transition-colors relative group">
                  Gift Sets
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--dark-brown)] group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* SUPPORT column */}
          <div>
            <h4 className="mb-6 text-lg md:text-xl tracking-[0.25em] text-[var(--dark-brown)] uppercase font-semibold">
              SUPPORT
            </h4>
            <ul className="space-y-4 text-lg md:text-xl font-light">
              <li><a href="#" className="hover:text-[var(--dark-brown)] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[var(--dark-brown)] transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-[var(--dark-brown)] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* FOLLOW US column */}
          <div>
            <h4 className="mb-6 text-lg md:text-xl tracking-[0.25em] text-[var(--dark-brown)] uppercase font-semibold">
              FOLLOW US
            </h4>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/misttress_/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--dark-brown)] transition-transform hover:-translate-y-1 duration-300"
              >
                <Instagram size={28} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.facebook.com/people/Hair-Mist-by-MistTress/61584355741905/?mibextid=wwXIfr&rdid=JXw7zm78eD9rAkaX&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DN1dmzrHx%2F%3Fmibextid%3DwwXIfr%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--dark-brown)] transition-transform hover:-translate-y-1 duration-300"
              >
                <Facebook size={28} strokeWidth={1.5} />
              </a>
              <a href="#" className="hover:text-[var(--dark-brown)] transition-transform hover:-translate-y-1 duration-300">
                <Twitter size={28} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--medium-brown)]/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-lg md:text-xl opacity-60 font-light tracking-wide">
          <p>© 2025 MISTTRESS. All rights reserved.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-[var(--dark-brown)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--dark-brown)] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
