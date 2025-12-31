import { Droplets, Zap, Wind, Feather, ShieldCheck } from "lucide-react";

export function About() {
  const values = [
    {
      id: 1,
      icon: Droplets,
      title: "Removes Dryness",
    },
    {
      id: 2,
      icon: Zap,
      title: "Instant Conditioning",
    },
    {
      id: 3,
      icon: Wind,
      title: "Removes Frizz & Flyaways",
    },
    {
      id: 4,
      icon: Feather,
      title: "Lightweight Perfume",
    },
    {
      id: 5,
      icon: ShieldCheck,
      title: "Alcohol-Free",
    }
  ];

  return (
    <section id="about" className="px-6 md:px-10 py-24 bg-[var(--soft-beige)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 px-4">
          <p className="text-xl tracking-[0.3em] text-[var(--medium-brown)] font-medium mb-6 uppercase">
            About Us
          </p>
          <h2 className="text-[var(--dark-brown)] mb-8 text-4xl md:text-5xl lg:text-6xl font-medium leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
            Behind the Mist
          </h2>
          <p className="text-[var(--dark-brown)] max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed font-normal opacity-90">
            Mist Tress was born from a simple realisation: being a woman today isn’t easy. We’re expected to juggle everything life throws at us while looking put-together, with shiny, smooth hair even when life is anything but. Lot of problem in hand but I started with one that was at the top of head (literally). After Day 1 of hair wash, the shine and freshness disappear long before our schedules do. I wanted something easy, clean, and instant to make everyday hair feel effortless, and to build a community where women feel seen, supported, and a little more powerful in their own way.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.id}
                className="w-full md:w-[calc(33.333%-2rem)] lg:w-[calc(20%-2rem)] min-w-[200px] text-center p-8 bg-white/50 backdrop-blur-sm rounded-[2rem] border border-[var(--medium-brown)]/10 hover:border-[var(--medium-brown)]/30 hover:shadow-[0_20px_40px_-10px_rgba(139,115,85,0.1)] transition-all duration-500 hover:-translate-y-1 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--soft-beige-dark)]/30 rounded-full mb-6 text-[var(--medium-brown)] group-hover:bg-[var(--medium-brown)] group-hover:text-white transition-colors duration-500">
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-[var(--dark-brown)] text-lg font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
                  {value.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}