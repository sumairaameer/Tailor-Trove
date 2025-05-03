'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const services = [
    { title: "Shalwar Kameez Stitching", image: "/images/shlwar kameez.jpeg" },
    { title: "Maxi Dress Stitching", image: "/images/maxi dress.jpeg" },
    { title: "Lehenga Choli Stitching", image: "/images/red-bridal.jpg" },
    { title: "Kurtis Stitching", image: "/images/evening-wear.jpg" },
    { title: "Gharara and Sharara Stitching", image: "/images/casual-wear.jpg" },
    { title: "Bridal Dress Stitching", image: "/images/sportswear.jpg" },
    { title: "Saree Blouse Stitching", image: "/images/formal-wear.jpg" },
    { title: "Frock Stitching", image: "/images/festive-collection.jpg" },
    { title: "Skirt and Top Stitching", image: "/images/abaya-stitching.jpg" },
    { title: "Patiala Suit Stitching", image: "/images/partywear-stitching.jpg" },
    { title: "Anghrakha Style Stitching", image: "/images/formal-suit.jpg" },
    { title: "Gown Stitching", image: "/images/double-suit.jpg" },
    { title: "Abaya Stitching", image: "/images/abaya-stitching.jpg" },
    { title: "Party Wear Stitching", image: "/images/partywear-stitching.jpg" },
    { title: "Formal Suit Stitching", image: "/images/formal-suit.jpg" },
    { title: "Double Suit Stitching", image: "/images/double-suit.jpg" },
  ];

  return (
    <div className="bg-black min-h-screen text-white py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">
        Check Out Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white text-black rounded-2xl overflow-hidden shadow-xl w-full"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative w-full h-80">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center p-4 font-semibold">
              {service.title}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
