// import React from 'react';

// export default function Page() {
//   return (
//     <div style={{ fontFamily: 'Arial, sans-serif', display: 'flex', minHeight: '100vh' }}>
//       {/* Sidebar */}
//       <aside style={{ width: '25%', padding: '20px', backgroundColor: '#f9f9f9', borderRight: '1px solid #ddd' }}>
//         <h3 style={{ fontSize: '1.75rem', color: '#333', marginBottom: '20px' }}>Categories</h3>
//         <ul style={{ listStyleType: 'none', padding: 0, fontSize: '1.1rem', color: '#555' }}>
//           <li style={{ marginBottom: '15px' }}>Men's Wear</li>
//           <li style={{ marginBottom: '15px' }}>Women's Wear</li>
//           <li style={{ marginBottom: '15px' }}>Kids' Wear</li>
//           <li style={{ marginBottom: '15px' }}>Accessories</li>
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main style={{ flex: 1, padding: '40px 30px', backgroundColor: '#fafafa' }}>
//         {/* Header */}
//         <header style={{ marginBottom: '60px', textAlign: 'center' }}>
//           <h1 style={{ fontSize: '3rem', color: '#222', marginBottom: '20px' }}>Welcome to Tailor Trove</h1>
//           <p style={{ fontSize: '1.3rem', color: '#777', lineHeight: '1.6' }}>
//             Your one-stop destination for custom tailoring and bespoke fashion.
//           </p>
//         </header>

//         {/* Top Trending Section */}
//         <section style={{ marginBottom: '60px' }}>
//           <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '20px' }}>Top Trending</h2>
//           <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
//             <div style={{ width: '30%' }}>
//               <img src="trending1.jpg" alt="Trending 1" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
//               <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '1rem', color: '#555' }}>Trending Outfit 1</p>
//             </div>
//             <div style={{ width: '30%' }}>
//               <img src="trending2.jpg" alt="Trending 2" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
//               <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '1rem', color: '#555' }}>Trending Outfit 2</p>
//             </div>
//             <div style={{ width: '30%' }}>
//               <img src="trending3.jpg" alt="Trending 3" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
//               <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '1rem', color: '#555' }}>Trending Outfit 3</p>
//             </div>
//           </div>
//         </section>

//         {/* Best Collections Section */}
//         <section style={{ marginBottom: '60px' }}>
//           <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '20px' }}>Best Collections</h2>
//           <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
//             <div style={{ width: '30%' }}>
//               <img src="collection1.jpg" alt="Collection 1" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
//               <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '1rem', color: '#555' }}>Collection 1</p>
//             </div>
//             <div style={{ width: '30%' }}>
//               <img src="collection2.jpg" alt="Collection 2" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
//               <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '1rem', color: '#555' }}>Collection 2</p>
//             </div>
//             <div style={{ width: '30%' }}>
//               <img src="collection3.jpg" alt="Collection 3" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
//               <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '1rem', color: '#555' }}>Collection 3</p>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

'use client';

export default function WelcomeSection() {
  return (
    <section className="bg-yellow-50 py-20 text-center">
      <h1 className="text-5xl font-extrabold text-yellow-700 mb-4 drop-shadow-md">
        Welcome to <span className="text-gray-800">Tailor Trove</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
        Elevating your wardrobe with custom-fitted elegance — designed just for you, stitched with perfection.
      </p>
    </section>
  );
}

