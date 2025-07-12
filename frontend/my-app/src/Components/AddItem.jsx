import { useState } from 'react';

function AddItem() {
  const [form, setForm] = useState({
    title: '', description: '', category: '',
    type: '', size: '', condition: '', tags: '', image: ''
  });

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
    const tagsArray = form.tags.split(',').map(tag => tag.trim());

    const payload = {
      ...form,
      tags: tagsArray,
    };

    try {
      const res = await fetch('http://localhost:3000/add/item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (res.ok) {
        alert('Item added successfully!');
        setForm({
          title: '', description: '', category: '',
          type: '', size: '', condition: '', tags: '', image: ''
        });
      } else {
        alert(data.message || 'Something went wrong');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to upload item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-3">
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange}></textarea>
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
      <input name="type" placeholder="Type" value={form.type} onChange={handleChange} />
      <input name="size" placeholder="Size" value={form.size} onChange={handleChange} />
      <input name="condition" placeholder="Condition" value={form.condition} onChange={handleChange} />
      <input name="tags" placeholder="Tags (comma separated)" value={form.tags} onChange={handleChange} />
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit Item</button>
    </form>
  );
}

export default AddItem;
