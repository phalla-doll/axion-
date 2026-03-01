import Image from 'next/image';

const services = [
  {
    title: 'International Shipping',
    description: 'We manage global shipping from origin to destination, providing both air and sea freight options to suit your timeline and budget.',
    image: 'https://picsum.photos/seed/cargoship/800/600',
    colSpan: 'md:col-span-3',
  },
  {
    title: 'Warehousing & Distribution',
    description: 'Our strategically located warehouses ensure fast, secure storage and distribution of your products. With flexible storage options.',
    image: 'https://picsum.photos/seed/warehouse/800/600',
    colSpan: 'md:col-span-3',
  },
  {
    title: 'Last-Mile Delivery',
    description: 'Our reliable last-mile delivery service ensures that your products reach the final destination efficiently, providing tracking and re...',
    image: 'https://picsum.photos/seed/deliverytrucks/600/600',
    colSpan: 'md:col-span-2',
  },
  {
    title: 'Supply Chain Optimization',
    description: 'Our expert team analyzes and improves your supply chain, reducing costs, mini...',
    image: 'https://picsum.photos/seed/logistics/600/600',
    colSpan: 'md:col-span-2',
  },
  {
    title: 'Customs Clearance',
    description: 'We navigate the complexities of customs regulations, ensuring your shipments cl...',
    image: 'https://picsum.photos/seed/paperwork/600/600',
    colSpan: 'md:col-span-2',
  },
];

export default function Services() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          Logistics Solutions
        </h2>
        <div className="flex flex-col items-start md:items-end">
          <p className="text-gray-600 mb-4 text-sm max-w-xs text-left md:text-right">
            diverse needs of businesses.
          </p>
          <button className="px-6 py-2.5 bg-[#111] text-white text-sm font-medium rounded-full hover:bg-black transition-colors">
            See All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`relative rounded-2xl overflow-hidden group h-[300px] sm:h-[350px] md:h-[400px] ${service.colSpan}`}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <h3 className="text-white text-xl font-medium mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm line-clamp-2 md:line-clamp-3 max-w-md">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
