import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ItemDetail() {
  const { id } = useParams(); // get :id from the URL
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3000/${id}`, {
      credentials: 'include'
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch item');
        return res.json();
      })
      .then(data => {
        setItem(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="p-4">Loading item...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;
  if (!item) return <p className="p-4">Item not found.</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded shadow mb-4" />

      <h2 className="text-3xl font-bold mb-2">{item.title}</h2>
      <p className="text-gray-700 mb-4">{item.description}</p>

      <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
        <p><strong>Category:</strong> {item.category}</p>
        <p><strong>Size:</strong> {item.size}</p>
        <p><strong>Condition:</strong> {item.condition}</p>
        <p><strong>Status:</strong> {item.status}</p>
        <p><strong>Uploaded By:</strong> {item.userId?.email || 'Unknown'}</p>
      </div>

      {item.status === 'approved' ? (
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mt-2">
          Request Swap
        </button>
      ) : (
        <p className="text-red-500 mt-2">This item is not available for swap.</p>
      )}
    </div>
  );
}

export default ItemDetail;
