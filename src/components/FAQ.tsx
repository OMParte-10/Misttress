import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      id: 1,
      question: "Are your products suitable for sensitive skin?",
      answer: "Yes! All our products are dermatologist-tested and formulated with gentle, natural ingredients that are safe for sensitive skin. We recommend doing a patch test before full application."
    },
    {
      id: 2,
      question: "How long does shipping take?",
      answer: "We offer free shipping on orders over $50. Standard shipping takes 3-5 business days, and express shipping takes 1-2 business days."
    },
    {
      id: 3,
      question: "What is your return policy?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with your purchase, you can return it for a full refund within 30 days of delivery."
    },
    {
      id: 4,
      question: "Are your products vegan and cruelty-free?",
      answer: "Absolutely! All our products are 100% vegan and cruelty-free. We never test on animals and only use plant-based ingredients."
    }
  ];

  return (
    <section id="faq" className="px-6 md:px-10 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-[var(--gold)] mb-2 uppercase">FAQ</p>
          <h2 className="text-white">
            Common Questions
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id}
              className="bg-white/95 rounded-xl overflow-hidden shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-white transition-colors"
              >
                <span className="text-[var(--royal-indigo)] pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-[var(--gold)] flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}