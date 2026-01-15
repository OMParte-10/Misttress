import { ImageWithFallback } from './figma/ImageWithFallback';
// import { Star } from 'lucide-react';

export function Products() {
  const products = [
    {
      id: 1,
      name: "Golden Haze",
      price: "₹4,999",
      image: "https://images.unsplash.com/photo-1719175936556-dbd05e415913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlfGVufDF8fHx8MTc2NDAxNTEwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      name: "Blossom Rush",
      price: "₹3,999",
      image: "https://images.unsplash.com/photo-1613521140785-e85e427f8002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZnJhZ3JhbmNlJTIwcHJvZHVjdHxlbnwxfHx8fDE3NjQwNDkxMjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      name: "Berry Pop",
      price: "₹4,499",
      image: "https://images.unsplash.com/photo-1625173709697-7dc5e371349f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcGVyZnVtZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjQwNDkxMjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 4,
      name: "Coastal Calm",
      price: "₹5,499",
      image: "https://images.unsplash.com/photo-1759793500112-c588839cfc6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxwcmVtaXVtJTIwZnJhZ3JhbmNlJTIwYm90dGxlfGVufDF8fHx8MTc2NDAyNjQ0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    }
  ];

  return (
    <section id="shop" className="px-6 md:px-12 lg:px-16 py-24 bg-[var(--soft-beige-light)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p
            className="tracking-[0.2em] text-[var(--light-brown-dark)] mb-4 uppercase text-sm font-medium"
            style={{ fontSize: '1.5rem' }}
          >
            Discover Our Collection
          </p>
          <h2
            className="text-[var(--medium-brown)] text-4xl md:text-5xl"
            style={{
              fontFamily: 'var(--font-serif)',
              lineHeight: '1.2'
            }}
          >
            All Products
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-5px_rgba(139,115,85,0.15)] transition-all duration-500 hover:-translate-y-2 border border-[var(--warm-beige)]/30"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--soft-beige)]">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[var(--medium-brown)]/0 group-hover:bg-[var(--medium-brown)]/10 transition-colors duration-500" />
              </div>

              {/* Product Info */}
              <div className="px-6 py-6 text-center">
                <h3
                  className="text-[var(--dark-brown)] mb-2 text-xl"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {product.name}
                </h3>

                <p
                  className="text-[var(--light-brown-dark)] font-medium text-lg"
                >
                  {product.price}
                </p>

                <button className="mt-4 px-6 py-2 border border-[var(--medium-brown)]/20 rounded-full text-[var(--medium-brown)] text-xs uppercase tracking-widest transition-all duration-300 hover:bg-[var(--medium-brown)] hover:text-white hover:shadow-lg hover:-translate-y-0.5">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}