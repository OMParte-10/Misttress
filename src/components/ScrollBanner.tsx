export function ScrollBanner() {
  const messages = [
    "REMOVES DRYNESS",
    "★",
    "INSTANT CONDITIONING",
    "★",
    "REMOVES FRIZZ & FLYAWAYS",
    "★",
    "LIGHTWEIGHT PERFUME",
    "★",
    "ALCOHOL-FREE",
    "★",
    "SHOP NOW"
  ];

  return (
    <div className="bg-[#E6D4B8] text-[#8B7355] py-2 overflow-hidden border-b border-[#D3B283]">
      <div className="scroll-content flex gap-12 animate-scroll whitespace-nowrap">
        {/* Duplicate content for seamless loop */}
        {[...messages, ...messages, ...messages].map((message, index) => (
          <span key={index} className="text-sm tracking-wider">
            {message}
          </span>
        ))}
      </div>
    </div>
  );
}