import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const features = [
  {
    title: 'Real-Time Tracking',
    description: 'Stay up-to-date with your shipments from pick-up to delivery.',
  },
  {
    title: 'Data Analytics',
    description: 'Gain insights into your supply chain, identify bottlenecks, and make data-driven decisions.',
  },
  {
    title: 'Automated Updates',
    description: 'Receive timely notifications about your shipments, including expected delivery times and delays.',
  },
  {
    title: 'Secure Portal',
    description: 'Access your account anytime with our secure online portal for booking, managing, and tracking shipments.',
  },
];

export default function Technology() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="mb-16">
        <p className="text-xs font-bold tracking-widest uppercase mb-4">/TECHNOLOGY</p>
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight max-w-xl leading-tight">
            Innovation that Moves<br />Your Business
          </h2>
          <p className="text-gray-600 max-w-xs leading-relaxed">
            We leverage the latest technology to improve the way we manage your shipments.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden">
          <Image
            src="https://picsum.photos/seed/containerdoors/800/1000"
            alt="Container Doors"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {feature.description}
              </p>
              <button className="flex items-center text-sm font-medium group w-fit">
                Learn More
                <div className="ml-2 w-6 h-6 rounded-full bg-[#111] flex items-center justify-center group-hover:bg-black transition-colors">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
