import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import menImg from '../assets/men.jpeg';
import womenImg from '../assets/women.jpeg';  // Fix typo in path
import kidsImg from '../assets/kids.jpeg';    // Fix typo in path
import accessoriesImg from '../assets/accessories.jpeg';  // Fix typo in path

function LandingPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/featured', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-[#1f2f2f] text-white font-sans min-h-screen">
      {/* Navbar */}
      <header className="bg-[#223333] p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">ReWear</div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-[#00c896] transition">Home</Link>
            <Link to="/add/item" className="hover:text-[#00c896] transition">Add Items</Link>
            <Link to="/browse" className="hover:text-[#00c896] transition">Browse</Link>
            <Link to="/dashboard" className="hover:text-[#00c896] transition">Profile</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 bg-gradient-to-b from-[#223333] to-[#1f2f2f]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Join the Circular<br />Fashion Revolution
            </h1>
            <p className="text-gray-300 text-lg max-w-md">
              Trade fashion, not waste. ReWear lets you exchange pre-loved clothes and discover
              unique, sustainable styles near you.
            </p>
            <Link to="/browse"
              className="inline-block bg-[#00c896] text-[#1f2f2f] font-semibold px-8 py-4 rounded-lg hover:bg-[#00b184] transition-all transform hover:scale-105">
              Start Swapping
            </Link>
          </div>
          <div className="flex-1">
            <img src={womenImg} alt="Fashion Model"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300" />
          </div>
        </div>
      </section>

      {/* /* Categories Grid */}
      <section className="px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {[
            { name: "Men's Collection", link: '/category/men', img: menImg },
            { name: "Women's Collection", link: '/category/women', img: womenImg },
            { name: "Kid's Collection", link: '/category/kids', img: kidsImg },
            { name: "Accessories", link: '/category/accessories', img: accessoriesImg },
          ].map(cat => (
            <Link key={cat.name} to={cat.link}
              className="group overflow-hidden rounded-xl bg-[#fafae0] transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${cat.img})` }} />
              <div className="p-4 text-black">
                <h3 className="font-semibold text-lg mb-2">{cat.name}</h3>
                <span className="text-[#00c896] group-hover:text-[#00b184] font-semibold">
                  Shop Now →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* /* Featured Items Grid */}
      <section className="px-6 py-20 bg-[#1a2828]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Recommended For You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map(item => (
              <Link key={item._id} to={`/item/${item._id}`}
                className="bg-[#fafae0] text-black rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }} />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm mb-2">{item.category}</p>
                  <p className="text-sm text-gray-600">{item.size}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#182222] text-center py-6 text-gray-400">
        <div className="max-w-7xl mx-auto px-6">
          <p>© 2025 ReWear. Made with 🌿 for a better tomorrow.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;



// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// // import './carousel-fix.css';


// function LandingPage() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3000/featured', {
//       credentials: 'include',
//     })
//       .then(res => res.json())
//       .then(data => setItems(data))
//       .catch(err => console.error(err));
//   }, []);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 3 } },
//       { breakpoint: 768, settings: { slidesToShow: 1 } }
//     ]
//   };



//   return (
//     <div className="bg-[#1f2f2f] text-white font-sans min-h-screen">
//       {/* Navbar */}
//       <header className="bg-[#223333] p-4 flex justify-between items-center flex-wrap">
//         <div className="text-2xl font-bold">ReWear</div>
//         <nav className="hidden md:flex space-x-6 text-gray-300">
//           <Link to="/">Home</Link>
//           <Link to="/add/item">Add Items</Link>
//           <Link to="/browse">Browse</Link>
//           <Link to="/dashboard">Profile</Link>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <section className="px-6 py-16">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
//           <div className="flex-1">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">Join the Circular Fashion Revolution</h1>
//             <p className="text-gray-300 mb-6 max-w-md">
//               Trade fashion, not waste. ReWear lets you exchange pre-loved clothes and discover
//               unique, sustainable styles near you.
//             </p>
//             <Link to="/browse"
//               className="inline-block bg-[#00c896] text-[#1f2f2f] font-semibold px-6 py-3 rounded-lg hover:bg-[#00b184] transition">
//               Explore Swaps
//             </Link>
//           </div>
//           <div className="flex-1">
//             <img src="/women.jpeg" alt="Fashion Model" className="rounded-xl shadow-lg max-w-full" />
//           </div>
//         </div>
//       </section>

//       {/* Categories Section */}
//       <section className="px-6 py-16 text-center">
//         <h2 className="text-3xl font-bold mb-12">Shop by Category</h2>
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
//           {[
//             { name: "Men's Collection", link: '/category/men', img: '/men_cat.jpeg' },
//             { name: "Women's Collection", link: '/category/women', img: '/women.jpeg' },
//             { name: "Kid's Collection", link: '/category/kids', img: '/kids.jpeg' },
//             { name: "Accessories", link: '/category/accessories', img: '/access.jpeg' },
//           ].map(cat => (
//             <div key={cat.name} className="bg-[#fafae0] text-black rounded-xl overflow-hidden shadow-lg">
//               <div
//                 className="h-48 bg-cover bg-center"
//                 style={{ backgroundImage: `url(${cat.img})` }}
//               />
//               <div className="p-4">
//                 <h3 className="font-semibold text-lg mb-2">{cat.name}</h3>
//                 <button className="border-2 border-[#00c896] text-[#00c896] px-4 py-2 rounded font-semibold hover:bg-[#00c896] hover:text-[#1f2f2f] transition">
//                   <Link to={cat.link}>Shop Now</Link>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Featured Items Carousel */}
//       {/* <section className="px-6 py-16"> */}
//       <section className="px-6 py-16 max-w-7xl mx-auto">

//         <h2 className="text-3xl font-bold mb-8 text-center">Recommended For You</h2>
//         {/* <Slider {...sliderSettings}>
//           {items.map(item => (
//             <div key={item._id} className="px-2">
//               <Link to={`/item/${item._id}`}>
//                 <div className="bg-[#fafae0] text-black rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
//                   <div
//                     className="h-40 bg-cover bg-center"
//                     style={{ backgroundImage: `url(${item.image})` }}
//                   />
//                   <div className="p-4">
//                     <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
//                     <p className="text-sm mb-2">{item.category}</p>
//                     <p className="text-sm text-gray-600">{item.size}</p>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </Slider> */}
//         <Slider {...sliderSettings}>
//           {items.map(item => (
//             <div key={item._id} className="flex justify-center">
//               <Link to={`/item/${item._id}`} className="block w-[280px]">
//                 <div className="bg-[#fafae0] text-black rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
//                   <div
//                     className="h-48 bg-cover bg-center"
//                     style={{ backgroundImage: `url(${item.image})` }}
//                   />
//                   <div className="p-4">
//                     <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
//                     <p className="text-sm mb-2">{item.category}</p>
//                     <p className="text-sm text-gray-600">{item.size}</p>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </Slider>


//       </section>

//       {/* Footer */}
//       <footer className="bg-[#182222] text-center py-4 text-gray-400">
//         © 2025 ReWear. Made with 🌿 for a better tomorrow.
//       </footer>
//     </div>
//   );
// }

// export default LandingPage;




// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// function LandingPage() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3000/featured', {
//       credentials: 'include',
//     })
//       .then(res => res.json())
//       .then(data => setItems(data))
//       .catch(err => console.error('Error fetching featured items:', err));
//   }, []);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       { breakpoint: 768, settings: { slidesToShow: 1 } },
//       { breakpoint: 1024, settings: { slidesToShow: 2 } }
//     ]
//   };

//   return (
//     <div className="p-6 text-center">
//       <h1 className="text-4xl font-bold mb-2">♻️ Welcome to ReWear</h1>
//       <p className="mb-6 text-lg text-gray-700">Give your clothes a second life. Swap. Share. Sustain.</p>

//       {/* Call to Action Buttons */}
//       <div className="flex justify-center gap-4 mb-10">
//         <Link to="/dashboard" className="bg-yellow-500 text-white px-4 py-2 rounded">Start Swapping</Link>
//         <Link to="/browse" className="bg-green-500 text-white px-4 py-2 rounded">Browse Items</Link>
//         <Link to="/add/item" className="bg-blue-500 text-white px-4 py-2 rounded">List an Item</Link>
//         <Link to="/dashboard" className="bg-purple-500 text-white px-4 py-2 rounded">Go to Dashboard</Link>
//       </div>

//       {/* Featured Carousel */}
//       <h2 className="text-2xl font-semibold mb-4">Featured Items</h2>
//       {/* <Slider {...sliderSettings}>
//         {items.map(item => (
//           <div key={item._id} className="px-2">
//             <div className="border rounded shadow p-4">
//               <img src={item.image} alt={item.title} className="h-40 w-full object-cover rounded mb-2" />
//               <h3 className="text-lg font-bold">{item.title}</h3>
//               <p className="text-sm text-gray-600">{item.category} | {item.size}</p>
//             </div>
//           </div>
//         ))}
//         {/* {items.map((item) => (
//           <Link key={item._id} to={`/item/${item._id}`}>
//             <div className="card hover:shadow-lg transition">
//               <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
//               <h3 className="text-lg font-bold">{item.title}</h3>
//             </div>
//           </Link>
//         ))} *

//       </Slider>*/}

//       <Slider {...sliderSettings}>
//         {items.map(item => (
//           <div key={item._id} className="px-2">
//             <Link to={`/item/${item._id}`}>
//               <div className="border rounded shadow p-4 hover:shadow-lg transition">
//                 <img src={item.image} alt={item.title} className="h-40 w-full object-cover rounded mb-2" />
//                 <h3 className="text-lg font-bold">{item.title}</h3>
//                 <p className="text-sm text-gray-600">{item.category} | {item.size}</p>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default LandingPage;
