export function VideoHero() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden bg-[var(--soft-beige)]">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        style={{ pointerEvents: 'none' }}
      >
        <source src="https://videos.pexels.com/video-files/7297870/7297870-hd_1920_1080_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Warm Overlay to match theme */}
      <div className="absolute inset-0 bg-[var(--medium-brown)]/10 mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--soft-beige)] via-transparent to-transparent pointer-events-none opacity-80" />

      {/* Decorative Text Overlay */}
      <div className="absolute bottom-10 left-6 md:left-12 z-10 pointer-events-none">
        <p className="text-[var(--dark-brown)] tracking-[0.3em] uppercase text-sm mb-2 font-medium">The Art of Beauty</p>
        <h2 className="text-[var(--dark-brown)] text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-serif)' }}>
          Pure Elegance
        </h2>
      </div>
    </section>
  );
}