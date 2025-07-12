import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddItem() {
  const [form, setForm] = useState({
    title: '', description: '', category: '',
    type: '', size: '', condition: '', tags: '', image: ''
  });

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
    }
  };

  return (
    //   <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-3">
    //     <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
    //     <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange}></textarea>
    //     <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
    //     <input name="type" placeholder="Type" value={form.type} onChange={handleChange} />
    //     <input name="size" placeholder="Size" value={form.size} onChange={handleChange} />
    //     <input name="condition" placeholder="Condition" value={form.condition} onChange={handleChange} />
    //     <input name="tags" placeholder="Tags (comma separated)" value={form.tags} onChange={handleChange} />
    //     <input type="file" accept="image/*" onChange={handleImageUpload} />
    //     <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit Item</button>
    //   </form>

    <form onSubmit={handleSubmit} className="p-4 max-w-4xl mx-auto space-y-6">
      {/* Image Upload */}
      {/* <div>
        <label className="block text-sm mb-2">Upload Image</label>
        <div className="bg-[#f3f3ed] text-black rounded-xl p-4 flex items-center justify-center h-64 cursor-pointer hover:bg-[#e8e8e1] transition">
          <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full h-full opacity-0 absolute" />
          <span className="text-gray-500">Click to upload image</span>
        </div>
      </div> */}

      <div>
        <label className="block text-sm mb-2">Upload Image</label>
        <label className="bg-[#f3f3ed] text-black rounded-xl p-4 flex items-center justify-center h-64 cursor-pointer hover:bg-[#e8e8e1] transition relative">
          <span className="text-gray-500 pointer-events-none">Click to upload image</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </label>
      </div>

      {/* Title */}
      <div>
        <label className="block mb-1 text-sm">Title</label>
        <input
          name="title"
          placeholder="Enter title"
          value={form.title}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg text-black bg-[#fefae0]"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block mb-1 text-sm">Description</label>
        <textarea
          name="description"
          placeholder="Enter product description"
          value={form.description}
          onChange={handleChange}
          rows="5"
          className="w-full px-3 py-2 rounded-lg text-black bg-[#fefae0]"
        ></textarea>
      </div>

      {/* Dropdowns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Category */}
        <div>
          <label className="block mb-1 text-sm">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg text-black bg-[#e8f9fd]"
          >
            <option value="">Select category</option>
            <option>Topwear</option>
            <option>Bottomwear</option>
            <option>Footwear</option>
            <option>Accessories</option>
          </select>
        </div>

        {/* Type */}
        <div>
          <label className="block mb-1 text-sm">Type</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg text-black bg-[#ffd6a5]"
          >
            <option value="">Select type</option>
            <option>Swap</option>
            <option>Redeem</option>
          </select>
        </div>

        {/* Size */}
        <div>
          <label className="block mb-1 text-sm">Size</label>
          <select
            name="size"
            value={form.size}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg text-black bg-[#caffbf]"
          >
            <option value="">Select size</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>

        {/* Condition */}
        <div>
          <label className="block mb-1 text-sm">Condition</label>
          <select
            name="condition"
            value={form.condition}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg text-black bg-[#fefae0]"
          >
            <option value="">Select condition</option>
            <option>New</option>
            <option>Like New</option>
            <option>Used</option>
          </select>
        </div>

        {/* Tags */}
        <div>
          <label className="block mb-1 text-sm">Tags</label>
          <input
            name="tags"
            placeholder="e.g. vintage, eco-friendly"
            value={form.tags}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg text-black bg-[#e8e8e1]"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6 flex justify-end">
        <button type="submit" className="bg-[#06d6a0] text-black px-6 py-3 rounded-xl font-semibold hover:bg-[#05c194] transition">
          Submit Item
        </button>
      </div>
    </form>

  );
}

export default AddItem;
