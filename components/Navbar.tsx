import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          /AXION
        </Link>
      </div>
      
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
        <Link href="#" className="hover:text-gray-600 transition-colors">About us</Link>
        <Link href="#" className="hover:text-gray-600 transition-colors">Services</Link>
        <Link href="#" className="hover:text-gray-600 transition-colors">Our Approach</Link>
        <Link href="#" className="hover:text-gray-600 transition-colors">Technology</Link>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <Link 
          href="#" 
          className="px-5 py-2.5 bg-[#111] text-white text-sm font-medium rounded-full hover:bg-black transition-colors"
        >
          Contact Us
        </Link>
        <Link 
          href="#" 
          className="px-5 py-2.5 bg-transparent border border-[#111] text-[#111] text-sm font-medium rounded-full hover:bg-gray-50 transition-colors"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
}
