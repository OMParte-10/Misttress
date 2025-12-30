import { Navbar } from "./components/Navbar";

import { HeroSlideshow } from "./components/HeroSlideshow";
import { Products } from "./components/Products";
import { TrialPack } from "./components/TrialPack";
import { MistressCommunity } from "./components/MisstressCommunity";
import { VideoHero } from "./components/VideoHero";
import { About } from "./components/About";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { ScrollBanner } from "./components/ScrollBanner";

export default function App() {
  return (
    <div className="min-h-screen">
      {/* ===== TOP BANNER ===== */}
      <ScrollBanner />

      {/* ===== HERO SECTION ===== */}
      <section id="hero" className="relative">
        <Navbar />
        <HeroSlideshow />
      </section>

      {/* ===== FEATURED PRODUCTS SECTION ===== */}
      <section id="shop">
        <Products />
      </section>

      {/* ===== BRAND CONTENT SECTION ===== */}
      <section id="trial-pack">
        <TrialPack />
      </section>

      {/* ===== COMMUNITY SECTION ===== */}
      <section id="community">
        <MistressCommunity />
      </section>

      {/* ===== FEATURED CONTENT SECTION ===== */}
      <section id="video-hero">
        <VideoHero />
      </section>

      {/* ===== BRAND STORY SECTION ===== */}
      <section id="about">
        <About />
      </section>

      {/* ===== CONVERSION SECTION ===== */}
      <section id="buy">
        <CTA />
      </section>

      {/* ===== FOOTER SECTION ===== */}
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}