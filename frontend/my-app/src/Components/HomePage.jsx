import accImg from '../assets/accessories.jpeg';
import kidsImg from '../assets/kids.jpeg';
import womenImg from '../assets/women.jpeg';
import menImg from '../assets/men.jpeg';

function HomePage() {
  return (
    <div className="bg-[#1f2f2f] text-white">

      {/* Navbar */}
      <header className="bg-[#223333] px-6 py-4 flex items-center justify-between border-b border-[#333]">
        <div className="text-2xl font-bold text-white">ReWear</div>
        <div className="flex gap-4 items-center">
          <a href="/login" className="inline-block bg-[#fafae0] text-black font-semibold px-6 py-3 rounded-md hover:bg-[#00b586] transition">Log-in</a>
          <a href="/signup" className="inline-block bg-[#00c896] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#00b586] transition">Sign-Up</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Swap. Style. Sustain.</h1>
          <p className="text-lg text-gray-300 mb-6">Exchange clothes you no longer wear for styles you'll love. Join the circular fashion movement with ReWear.</p>
          <div>
            <a href="/login" className="inline-block bg-[#00c896] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#00b586] transition">Start Swapping</a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-[#1f2f2f] px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">Shop by Category</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">

          {/* Card 1 */}
          <div className="bg-[#fafae0] text-black rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition">
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${menImg})` }}></div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">Men's Collection</h3>
              <p className="text-sm text-gray-700 mb-4">Sophisticated styles for the modern gentleman</p>
              <button className="px-4 py-2 border-2 border-[#00c896] text-[#00c896] rounded-md font-semibold hover:bg-[#00c896] hover:text-[#1f2f2f] transition">Shop Now</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#fafae0] text-black rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition">
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${womenImg})` }}></div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">Women's Collection</h3>
              <p className="text-sm text-gray-700 mb-4">Elegant & Unique pieces for every occasion</p>
              <button className="px-4 py-2 border-2 border-[#00c896] text-[#00c896] rounded-md font-semibold hover:bg-[#00c896] hover:text-[#1f2f2f] transition">Shop Now</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#fafae0] text-black rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition">
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${kidsImg})` }}></div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">Kid's Collection</h3>
              <p className="text-sm text-gray-700 mb-4">Stylish and comfortable options for little ones</p>
              <button className="px-4 py-2 border-2 border-[#00c896] text-[#00c896] rounded-md font-semibold hover:bg-[#00c896] hover:text-[#1f2f2f] transition">Shop Now</button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#fafae0] text-black rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition">
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${accImg})` }}></div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">Accessories</h3>
              <p className="text-sm text-gray-700 mb-4">Complete your look with premium accessories</p>
              <button className="px-4 py-2 border-2 border-[#00c896] text-[#00c896] rounded-md font-semibold hover:bg-[#00c896] hover:text-[#1f2f2f] transition">Shop Now</button>
            </div>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#263c3c] px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why ReWear?</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          <div className="bg-[#1a2929] text-white p-6 rounded-xl w-80 text-center shadow-lg">
            <h3 className="text-xl font-bold text-[#ffd6a5] mb-2">Sustainable</h3>
            <p>Reduce textile waste and make fashion eco-friendly.</p>
          </div>
          <div className="bg-[#1a2929] text-white p-6 rounded-xl w-80 text-center shadow-lg">
            <h3 className="text-xl font-bold text-[#ffd6a5] mb-2">Point-Based Swaps</h3>
            <p>List items to earn points and redeem for new finds.</p>
          </div>
          <div className="bg-[#1a2929] text-white p-6 rounded-xl w-80 text-center shadow-lg">
            <h3 className="text-xl font-bold text-[#ffd6a5] mb-2">Community Driven</h3>
            <p>Support a circular fashion ecosystem built by users like you.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#182222] py-4 text-center text-sm text-gray-400">
        © 2025 ReWear. Made with 🌿 for a better tomorrow.
      </footer>
    </div>
  );
}

export default HomePage;