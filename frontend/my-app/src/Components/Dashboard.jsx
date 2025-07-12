import { useState, useEffect } from "react";

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/my-items', { credentials: 'include' })
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error(err));

    fetch('http://localhost:3000/user-info', { credentials: 'include' }) // create this route
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Welcome, {user.name}</h2>
      <p>Points: {user.points}</p>

      <h3 className="mt-4 font-semibold">Your Uploaded Items:</h3>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            {item.title} - <span className="capitalize">{item.status}</span>
          </li>
        ))}
      </ul>

      {/* You can add swap history here later */}
    </div>
  );
};

export default Dashboard;