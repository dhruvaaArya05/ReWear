import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState("user");
  const [isLoggedIn, setInLoggedIn] = useState(false);

  const navigate = useNavigate();

  async function handleLoginSubmit(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/auth/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.message === "Invalid User") {
      alert("Please signup first");
    } else if (data.message === "Invalid email or password") {
      alert("Please check your email or password");
    } else if (data.message === "Login successful") {
      setInLoggedIn(true);
      navigate("/landing-page");//changes naviagte to landing page after login
    }

  }

  return (

    <div className="min-h-screen bg-[#233230] flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-[#fefae0] text-black rounded-xl shadow-2xl p-8 animate-slideUp">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-[#2a9d8f]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor" />
                <rect x="14" y="3" width="7" height="7" rx="1" fill="currentColor" />
                <rect x="14" y="14" width="7" height="7" rx="1" fill="currentColor" />
                <rect x="3" y="14" width="7" height="7" rx="1" fill="currentColor" />
              </svg>
            </div>
            <span className="text-xl font-bold text-[#2a9d8f]">ReWear</span>
          </div>
          <h1 className="text-2xl font-extrabold text-[#233230] mb-1">Welcome back</h1>
          <p className="text-sm text-gray-600">Sign in to your account to continue</p>
        </div>

        {/* Login Form */}
        <form className="space-y-6" onSubmit={handleLoginSubmit}>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#333]">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#2a9d8f] bg-white"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#333]">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#2a9d8f] pr-10 bg-white"
                required
              />
              <button type="button" className="absolute right-2 top-2.5 text-gray-500 hover:text-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" strokeWidth="2" />
                  <circle cx="12" cy="12" r="3" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>

          {/* Sign in As */}
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Sign in as
            </label>
            <select
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm bg-white focus:ring-[#2a9d8f] focus:border-[#2a9d8f]"
            >
              <option value="" disabled>
                Select a role
              </option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#2a9d8f] hover:bg-[#21867d] text-white font-semibold py-2 rounded-md shadow transition-all"
          >
            Sign in
          </button>
        </form>

        {/* Sign up */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <button onClick={() => navigate("/signup")} className="text-[#2a9d8f] hover:underline font-medium">
            Sign up
          </button>
        </div>
      </div>
    </div>
    

  );
}

export default LoginPage;
