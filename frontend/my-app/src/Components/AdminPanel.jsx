import { useEffect, useState } from 'react';

function AdminPanel() {
  const [pendingItems, setPendingItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/pending', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => setPendingItems(data));
  }, []);

  const updateStatus = async (id, status) => {
    const res = await fetch(`http://localhost:3000/${id}/status`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ status }),
    });

    const updatedItem = await res.json();
    setPendingItems(prev => prev.filter(item => item._id !== updatedItem._id));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Pending Items</h2>
      {pendingItems.length === 0 ? <p>No pending items</p> :
        pendingItems.map(item => (
          <div key={item._id} className="border p-4 mb-4">
            <img src={item.image} className="h-32 mb-2" alt={item.title} />
            <h3 className="font-semibold">{item.title}</h3>
            <p>{item.description}</p>
            <p><b>Category:</b> {item.category}</p>
            <p><b>Uploader:</b> {item.uploader?.email || 'Unknown'}</p>
            <div className="flex gap-2 mt-2">
              <button onClick={() => updateStatus(item._id, 'approved')} className="bg-green-500 text-white px-3 py-1 rounded">Approve</button>
              <button onClick={() => updateStatus(item._id, 'rejected')} className="bg-red-500 text-white px-3 py-1 rounded">Reject</button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default AdminPanel;
