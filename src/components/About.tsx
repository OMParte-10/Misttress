import { Leaf, Sparkles, Heart } from "lucide-react";

export function About() {
  const values = [
    {
      id: 1,
      icon: Leaf,
      title: "100% Natural",
      description: "Pure ingredients from nature, carefully selected for your skin"
    },
    {
      id: 2,
      icon: Sparkles,
      title: "Clinically Tested",
      description: "Dermatologist-approved formulas that deliver real results"
    },
    {
      id: 3,
      icon: Heart,
      title: "Cruelty Free",
      description: "We love animals. Never tested on our furry friends"
    }
  ];

  return (
    <section id="about" className="px-6 md:px-10 py-24 bg-[var(--soft-beige)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] text-[var(--light-brown-dark)] mb-4 uppercase">Why Choose Us</p>
          <h2 className="text-[var(--medium-brown)] mb-8 text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-serif)' }}>
            Clean Beauty, Real Results
          </h2>
          <p className="text-[var(--dark-brown)]/80 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            We believe that beauty should be clean, sustainable, and effective. Our products are crafted with the highest quality natural ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.id}
                className="text-center p-10 bg-white/50 backdrop-blur-sm rounded-[2rem] border border-[var(--medium-brown)]/10 hover:border-[var(--medium-brown)]/30 hover:shadow-[0_20px_40px_-10px_rgba(139,115,85,0.1)] transition-all duration-500 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[var(--soft-beige-dark)]/30 rounded-full mb-8 text-[var(--medium-brown)]">
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-[var(--dark-brown)] mb-4 text-xl" style={{ fontFamily: 'var(--font-serif)' }}>
                  {value.title}
                </h3>
                <p className="text-[var(--light-brown-dark)] text-base leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}