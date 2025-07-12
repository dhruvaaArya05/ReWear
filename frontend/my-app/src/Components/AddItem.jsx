import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddItem() {
  const [form, setForm] = useState({
    title: '', description: '', category: '',
    type: '', size: '', condition: '', tags: '', image: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm(prev => ({ ...prev, image: reader.result }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!form.image) {
        alert('Please upload an image');
        return;
      }

      const tagsArray = form.tags.split(',').map(tag => tag.trim()).filter(Boolean);
      const payload = { ...form, tags: tagsArray };

      const res = await fetch('http://localhost:3000/add/item', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to add item');

      alert('Item added successfully!');
      navigate('/dashboard');
    } catch (err) {
      alert(err.message || 'Failed to add item');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#233230] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-[#fefae0] rounded-xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center text-[#233230] mb-8">Add New Item</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                required
                value={form.title}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-[#2a9d8f] focus:outline-none focus:ring-1 focus:ring-[#2a9d8f]"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                id="description"
                required
                rows="3"
                value={form.description}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-[#2a9d8f] focus:outline-none focus:ring-1 focus:ring-[#2a9d8f]"
              />
            </div>

            {/* Category and Type */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  name="category"
                  id="category"
                  required
                  value={form.category}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-[#2a9d8f] focus:outline-none focus:ring-1 focus:ring-[#2a9d8f]"
                >
                  <option value="">Select Category</option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Kids">Kids</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
                <input
                  type="text"
                  name="type"
                  id="type"
                  required
                  value={form.type}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-[#2a9d8f] focus:outline-none focus:ring-1 focus:ring-[#2a9d8f]"
                />
              </div>
            </div>

            {/* Size and Condition */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="size" className="block text-sm font-medium text-gray-700">Size</label>
                <select
                  name="size"
                  id="size"
                  required
                  value={form.size}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-[#2a9d8f] focus:outline-none focus:ring-1 focus:ring-[#2a9d8f]"
                >
                  <option value="">Select Size</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>
              <div>
                <label htmlFor="condition" className="block text-sm font-medium text-gray-700">Condition</label>
                <select
                  name="condition"
                  id="condition"
                  required
                  value={form.condition}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-[#2a9d8f] focus:outline-none focus:ring-1 focus:ring-[#2a9d8f]"
                >
                  <option value="">Select Condition</option>
                  <option value="New">New</option>
                  <option value="Like New">Like New</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                </select>
              </div>
            </div>

            {/* Tags */}
            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags</label>
              <input
                type="text"
                name="tags"
                id="tags"
                value={form.tags}
                onChange={handleChange}
                placeholder="Enter tags separated by commas"
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-[#2a9d8f] focus:outline-none focus:ring-1 focus:ring-[#2a9d8f]"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">Item Image</label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageUpload}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#2a9d8f] file:text-white hover:file:bg-[#248277]"
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2a9d8f] hover:bg-[#248277] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2a9d8f] disabled:opacity-50"
            >
              {loading ? 'Adding Item...' : 'Add Item'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItem;
