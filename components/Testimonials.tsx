import Image from 'next/image';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "AXION has completely transformed our supply chain. Their real-time tracking and dedicated support team have saved us countless hours and reduced our shipping costs by 15%.",
    name: "Sarah Jenkins",
    company: "Global Retail Co.",
    image: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    quote: "The level of professionalism and reliability we've experienced with AXION is unmatched. They handle our sensitive medical equipment with the utmost care.",
    name: "Dr. Marcus Chen",
    company: "MedTech Solutions",
    image: "https://picsum.photos/seed/marcus/100/100"
  },
  {
    quote: "Scaling our e-commerce business was challenging until we partnered with AXION. Their warehousing and last-mile delivery services are seamless and highly efficient.",
    name: "Elena Rodriguez",
    company: "Artisan Goods",
    image: "https://picsum.photos/seed/elena/100/100"
  }
];

export default function Testimonials() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="mb-16">
        <p className="text-xs font-bold tracking-widest uppercase mb-4">/TESTIMONIALS</p>
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight max-w-xl leading-tight">
            Trusted by Industry<br />Leaders
          </h2>
          <p className="text-gray-600 max-w-sm leading-relaxed">
            Don&apos;t just take our word for it. Hear from the businesses that rely on AXION to keep their operations moving smoothly every single day.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-8 rounded-3xl flex flex-col h-full">
            <Quote className="w-8 h-8 text-gray-200 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-8 flex-grow text-sm sm:text-base">
              &quot;{testimonial.quote}&quot;
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                <p className="text-gray-500 text-xs">{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
