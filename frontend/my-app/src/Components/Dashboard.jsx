import { useState, useEffect } from "react";

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [itemsRes, userRes] = await Promise.all([
          fetch('http://localhost:3000/my-items', { credentials: 'include' }),
          fetch('http://localhost:3000/user-info', { credentials: 'include' })
        ]);

        if (!itemsRes.ok || !userRes.ok) throw new Error('Failed to fetch data');

        const items = await itemsRes.json();
        const user = await userRes.json();

        setItems(items);
        setUser(user);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#233230] text-white font-sans min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-[#2C3E3C]">
        <h1 className="text-xl font-bold">ReWear</h1>
        <span className="text-sm bg-[#06d6a0] text-black px-3 py-1 rounded-full font-medium">User Dashboard</span>
      </header>

      {/* Profile & Overview */}
      <section className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Info */}
        <div className="flex flex-col items-center bg-[#2C3E3C] p-6 rounded-xl shadow-md md:col-span-1">
          <img src="https://via.placeholder.com/100" alt="Profile" className="rounded-full w-24 h-24 mb-4 border-4 border-[#06d6a0]" />
          <h2 className="text-lg font-semibold mb-1 text-[#fefae0]">{user.name || 'User'}</h2>
          <p className="text-sm text-gray-300 mb-2">Member since Jan 2024</p>
          <div className="bg-[#06d6a0] text-black px-4 py-2 rounded-lg font-bold">Points: {user.points || 0}</div>
        </div>

        {/* Stats Overview */}
        <div className="bg-[#2C3E3C] p-6 rounded-xl shadow-md md:col-span-2 flex flex-col gap-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-[#3a4e4b] p-3 rounded-lg text-center">
              <p className="text-sm text-gray-300">Total Listings</p>
              <h3 className="text-xl font-bold text-[#ffd166]">{items.length}</h3>
            </div>
            <div className="bg-[#3a4e4b] p-3 rounded-lg text-center">
              <p className="text-sm text-gray-300">Completed Swaps</p>
              <h3 className="text-xl font-bold text-[#90e0ef]">0</h3>
            </div>
            <div className="bg-[#3a4e4b] p-3 rounded-lg text-center">
              <p className="text-sm text-gray-300">Ongoing Swaps</p>
              <h3 className="text-xl font-bold text-[#caffbf]">0</h3>
            </div>
            <div className="bg-[#3a4e4b] p-3 rounded-lg text-center">
              <p className="text-sm text-gray-300">Wishlist</p>
              <h3 className="text-xl font-bold text-[#ffadad]">0</h3>
            </div>
          </div>
          <div className="bg-[#3a4e4b] p-4 rounded-lg text-sm text-gray-300">
            “Welcome back, {user.name || 'User'}! Don’t forget to check your swap requests and new arrivals.”
          </div>
        </div>
      </section>

      {/* My Listings */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <h3 className="text-xl font-semibold mb-4 text-[#fefae0]">My Listings</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {items.map(item => (
            <div key={item._id} className="bg-[#2C3E3C] rounded-lg p-2 shadow-md">
              <img src={item.image || "https://via.placeholder.com/150"} alt="Item" className="rounded-md mb-2 object-cover w-full h-40 bg-[#fefae0]" />
              <p className="text-sm text-center">{item.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;





// import { useState, useEffect } from "react";

// const Dashboard = () => {
//   const [items, setItems] = useState([]);
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     fetch('http://localhost:3000/my-items', { credentials: 'include' })
//       .then(res => res.json())
//       .then(data => setItems(data))
//       .catch(err => console.error(err));

//     fetch('http://localhost:3000/user-info', { credentials: 'include' }) // create this route
//       .then(res => res.json())
//       .then(data => setUser(data));
//   }, []);

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-2">Welcome, {user.name}</h2>
//       <p>Points: {user.points}</p>

//       <h3 className="mt-4 font-semibold">Your Uploaded Items:</h3>
//       <ul>
//         {items.map(item => (
//           <li key={item._id}>
//             {item.title} - <span className="capitalize">{item.status}</span>
//           </li>
//         ))}
//       </ul>

//       {/* You can add swap history here later */}
//     </div>
//   );
// };

// export default Dashboard;