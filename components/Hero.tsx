import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] max-w-3xl">
          Let&apos;s Move Your<br />Business Forward
        </h1>
        <div className="max-w-sm flex flex-col items-start lg:items-end text-left lg:text-right">
          <p className="text-gray-600 mb-6 leading-relaxed">
            We provide reliable shipping wherever you need it. With us, you get precision, speed, and confidence at every step.
          </p>
          <button className="px-6 py-3 bg-[#111] text-white text-sm font-medium rounded-full hover:bg-black transition-colors">
            Learn More
          </button>
        </div>
      </div>

      <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden bg-gray-200">
        <Image
          src="https://picsum.photos/seed/shippingcontainers/1920/800"
          alt="Shipping Containers"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        {/* Simulated branding overlay since we can't easily generate the exact image text */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute bottom-1/4 right-1/4 text-white/80 font-bold text-6xl tracking-tighter mix-blend-overlay transform -rotate-12 scale-150 hidden md:block">
          /AXION
        </div>
      </div>
    </section>
  );
}
