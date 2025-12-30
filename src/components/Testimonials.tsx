import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      review: "The Radiance Serum has completely transformed my skin! I've been using it for 3 weeks and my complexion has never looked better.",
      rating: 5
    },
    {
      id: 2,
      name: "Emily Chen",
      review: "Finally found a hydrating cream that works for my sensitive skin. Love that it's all natural ingredients!",
      rating: 5
    },
    {
      id: 3,
      name: "Jessica Martinez",
      review: "Worth every penny. My skin feels softer, looks brighter, and I love the minimal packaging.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="px-6 md:px-10 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-[var(--medium-brown)] mb-2 uppercase">Testimonials</p>
          <h2 className="text-[var(--dark-brown)]">
            Loved by Thousands
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-[var(--warm-beige)] backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-[var(--light-brown)]/20 hover:bg-[var(--warm-beige-light)] transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[var(--light-brown)] text-[var(--light-brown)]" />
                ))}
              </div>
              <p className="text-[var(--dark-brown)] mb-6 leading-relaxed">
                "{testimonial.review}"
              </p>
              <p className="text-[var(--medium-brown)]">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}