import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function LandingPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/featured', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error('Error fetching featured items:', err));
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } }
    ]
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-2">♻️ Welcome to ReWear</h1>
      <p className="mb-6 text-lg text-gray-700">Give your clothes a second life. Swap. Share. Sustain.</p>

      {/* Call to Action Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        <Link to="/dashboard" className="bg-yellow-500 text-white px-4 py-2 rounded">Start Swapping</Link>
        <Link to="/browse" className="bg-green-500 text-white px-4 py-2 rounded">Browse Items</Link>
        <Link to="/add/item" className="bg-blue-500 text-white px-4 py-2 rounded">List an Item</Link>
        <Link to="/dashboard" className="bg-purple-500 text-white px-4 py-2 rounded">Go to Dashboard</Link>
      </div>

      {/* Featured Carousel */}
      <h2 className="text-2xl font-semibold mb-4">Featured Items</h2>
      {/* <Slider {...sliderSettings}>
        {items.map(item => (
          <div key={item._id} className="px-2">
            <div className="border rounded shadow p-4">
              <img src={item.image} alt={item.title} className="h-40 w-full object-cover rounded mb-2" />
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.category} | {item.size}</p>
            </div>
          </div>
        ))}
        {/* {items.map((item) => (
          <Link key={item._id} to={`/item/${item._id}`}>
            <div className="card hover:shadow-lg transition">
              <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
              <h3 className="text-lg font-bold">{item.title}</h3>
            </div>
          </Link>
        ))} *

      </Slider>*/}

      <Slider {...sliderSettings}>
        {items.map(item => (
          <div key={item._id} className="px-2">
            <Link to={`/item/${item._id}`}>
              <div className="border rounded shadow p-4 hover:shadow-lg transition">
                <img src={item.image} alt={item.title} className="h-40 w-full object-cover rounded mb-2" />
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.category} | {item.size}</p>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default LandingPage;
