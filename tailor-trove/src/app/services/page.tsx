'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This will be triggered only on the client-side
  }, []);

  const services = [
    { title: "Shalwar Kameez Stitching", image: "/images/shalwar.jpg" },
    { title: "Maxi Dress Stitching", image: "/images/maxi dress.jpeg" },
    { title: "Lehenga Choli Stitching", image: "/images/choli kurti.jpg" },
    { title: "Kurtis Stitching", image: "/images/kurtis.jpg" },
    { title: "Gharara and Sharara Stitching", image: "/images/sharara.jpg" },
    { title: "Bridal Dress Stitching", image: "/images/bridal dress.jpg" },
    { title: "Saree Blouse Stitching", image: "/images/saree.jpg" },
    { title: "Frock Stitching", image: "/images/frock.jpg" },
    { title: "Skirt and Top Stitching", image: "/images/skirt and top.jpg" },
    { title: "Patiala Suit Stitching", image: "/images/patila suit.jpg" },
    { title: "Anghrakha Style Stitching", image: "/images/anghkraka.jpg" },
    { title: "Gown Stitching", image: "/images/gown.jpg" },
  ];

  if (!isClient) return null; // Don't render anything on the server side

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
