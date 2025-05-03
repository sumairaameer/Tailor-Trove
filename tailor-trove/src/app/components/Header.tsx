import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex gap-6">
        <Link href="/" className="hover:text-yellow-300">Home</Link>
        <Link href="/about" className="hover:text-yellow-300">About</Link>
        <Link href="/services" className="hover:text-yellow-300">Services</Link>
        <Link href="/contact" className="hover:text-yellow-300">Contact Us</Link>
        <Link href="/book-appointment" className="hover:text-yellow-300">Book Appointment</Link>
        

      </nav>
    </header>
  );
}
