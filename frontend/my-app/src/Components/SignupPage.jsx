import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');  // Initialize as empty string
  const [password, setPassword] = useState('');  // Initialize as empty string
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  async function handleSignupSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/login");
      } else {
        setErrors(data.errors || [data.message]);
      }
    } catch (err) {
      setErrors(['An error occurred. Please try again.']);
    }
  }

  return (
    <div className="bg-[#233230] min-h-screen flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-2xl bg-[#fefae0] text-black rounded-2xl shadow-2xl p-8">
        {/* Logo and Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 text-[#2a9d8f] text-xl font-bold">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
            </svg>
            <span>ReWear</span>
          </div>
          <h1 className="text-2xl font-bold mt-4 text-[#233230]">Create your account</h1>
        </div>

        {/* Error Display */}
        {errors.length > 0 && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            <ul className="list-disc list-inside">
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Signup Form */}
        <form className="space-y-5" onSubmit={handleSignupSubmit}>
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              required
              placeholder="Enter your name"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm bg-white focus:ring-[#2a9d8f] focus:border-[#2a9d8f]"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              required
              placeholder="Enter your email address"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm bg-white focus:ring-[#2a9d8f] focus:border-[#2a9d8f]"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              required
              placeholder="Create a strong password"
              className="w-full px-4 py-2 border rounded-lg shadow-sm bg-white focus:ring-[#2a9d8f] focus:border-[#2a9d8f]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 px-4 py-2 bg-[#2a9d8f] text-white font-semibold rounded-lg hover:bg-[#248277] transition disabled:opacity-50"
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-6 text-sm text-gray-700">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-[#2a9d8f] hover:underline font-medium"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
