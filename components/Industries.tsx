import { Package, Factory, Pill, Cpu, ArrowRight, ArrowLeft } from 'lucide-react';

const industries = [
  {
    title: 'Retail & E-commerce',
    description: 'Streamline your fulfillment process, reduce delivery times, and improve customer satisfaction.',
    icon: Package,
    dark: false,
  },
  {
    title: 'Manufacturing',
    description: 'Optimize your supply chain, from raw materials to finished goods, with efficient transportation and services.',
    icon: Factory,
    dark: true,
  },
  {
    title: 'Healthcare & Pharmacy',
    description: 'Ensure the safe, timely delivery of temperature-sensitive products and critical shipments.',
    icon: Pill,
    dark: false,
  },
  {
    title: 'Technology & Electronics',
    description: 'Handle high-value, sensitive products with care, ensuring fast, secure delivery across global markets.',
    icon: Cpu,
    dark: false,
  },
];

export default function Industries() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="mb-16">
        <p className="text-xs font-bold tracking-widest uppercase mb-4">/INDUSTRIES WE SERVE</p>
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight max-w-xl leading-tight">
            Tailored Logistics<br />for Every Business
          </h2>
          <div className="max-w-sm">
            <p className="text-gray-600 mb-8 leading-relaxed">
              At /AXION, we understand that every industry has unique logistics challenges. That&apos;s why we offer customized solutions for a wide range of sectors.
            </p>
            <div className="flex items-center space-x-4">
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <ArrowLeft className="w-4 h-4 text-gray-500" />
              </button>
              <div className="h-[1px] w-16 bg-gray-300 relative">
                <div className="absolute top-0 left-0 h-full w-1/2 bg-black"></div>
              </div>
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((industry, index) => {
          const Icon = industry.icon;
          return (
            <div 
              key={index} 
              className={`p-8 rounded-3xl flex flex-col h-full min-h-[320px] ${
                industry.dark 
                  ? 'bg-[#333333] text-white' 
                  : 'bg-white text-black'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-auto ${
                industry.dark ? 'bg-white/10' : 'bg-gray-100'
              }`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-3">{industry.title}</h3>
                <p className={`text-sm leading-relaxed ${industry.dark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {industry.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
