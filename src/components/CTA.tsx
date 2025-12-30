export function CTA() {
  return (
    <section id="buy" className="px-6 md:px-10 py-24 bg-[var(--soft-beige-light)]">
      <div className="relative max-w-5xl mx-auto text-center px-6 py-20 rounded-[3rem] overflow-hidden">
        {/* Background with luxury gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--medium-brown)] to-[var(--dark-brown)] opacity-90" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />

        <div className="relative z-10">
          <h2
            className="text-[var(--soft-beige)] mb-6 text-4xl md:text-5xl lg:text-6xl"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Ready to Transform Your Skin?
          </h2>
          <p className="text-[var(--soft-beige)]/90 mb-10 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Join thousands of happy customers and discover the luxury of nature's finest ingredients.
          </p>
          <button
            className="px-12 py-5 bg-[var(--soft-beige)] text-[var(--medium-brown)] rounded-full hover:bg-white transition-all hover:scale-105 text-sm tracking-[0.2em] font-medium shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] uppercase"
          >
            Shop Collection
          </button>
        </div>
      </div>
    </section>
  );
}