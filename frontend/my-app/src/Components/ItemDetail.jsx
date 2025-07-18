import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3000/item/${id}`, {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
        setItem(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="p-4">Loading item...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;
  if (!item) return <p className="p-4">Item not found.</p>;

  return (
    <div className="bg-[#233230] text-white font-sans min-h-screen">
      <section className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div className="flex justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="rounded-2xl shadow-lg bg-[#f3f3ed] w-full max-w-xs sm:max-w-sm md:w-80 object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-3xl font-semibold mb-1 text-[#fefae0]">{item.title}</h2>
            <p className="text-sm text-gray-300 mb-2">{item.description}</p>
            <div className="flex gap-2 flex-wrap">
              {Array.isArray(item.tags)
                ? item.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-[#bde0fe] text-black px-2 py-1 rounded-full">
                    {tag.trim()}
                  </span>
                ))
                : typeof item.tags === 'string'
                  ? item.tags.split(',').map((tag, i) => (
                    <span key={i} className="text-xs bg-[#bde0fe] text-black px-2 py-1 rounded-full">
                      {tag.trim()}
                    </span>
                  ))
                  : null}
            </div>
          </div>

          <div className="bg-[#2C3E3C] p-4 rounded-xl flex items-center gap-4">
            {item.userId?.avatarUrl ? (
              <img
                src={item.userId.avatarUrl}
                alt="Uploader"
                className="rounded-full w-12 h-12"
              />
            ) : (
              <img
                src="https://ui-avatars.com/api/?name=User"
                alt="Uploader"
                className="rounded-full w-12 h-12"
              />
            )}
            <div>
              <p className="font-medium">
                Uploaded by:{' '}
                <span className="text-[#90e0ef]">{item.userId?.email || 'Unknown'}</span>
              </p>
              <p className="text-sm text-gray-400">Member since Jan 2024</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>Size:</strong> {item.size}</p>
            <p><strong>Condition:</strong> {item.condition}</p>
            <p><strong>Status:</strong> {item.status}</p>
          </div>

          <div>
            {item.status === 'approved' ? (
              <>
                <p className="text-green-400 font-semibold">✅ In Stock</p>
                <p className="text-sm text-gray-400">Est. Delivery: 3–5 working days</p>
              </>
            ) : (
              <p className="text-red-500 mt-2">This item is not available for swap.</p>
            )}
          </div>

          {item.status === 'approved' && (
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#06d6a0] text-black px-6 py-2 rounded-xl font-semibold hover:bg-[#05c194] transition">
                Swap Request
              </button>
              <button className="bg-[#ffd166] text-black px-6 py-2 rounded-xl font-semibold hover:bg-[#fcbf49] transition">
                Redeem via Points
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#f9f9f9] text-black p-10 mt-10 rounded-t-3xl shadow-inner">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">User Reviews</h3>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="text-sm text-gray-800">
                <strong>Priya M.</strong> — “Absolutely loved it! The quality exceeded expectations.”
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="text-sm text-gray-800">
                <strong>Jordan S.</strong> — “Lightweight and comfy, perfect for summer.”
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ItemDetail;
