import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  async function handleSignupSubmit(e) {
    console.log(name, email, password);
    e.preventDefault();
    const response = await fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    console.log('user created', data);

    if (data.message === "User Created") {
      navigate("/login");
    } else if (data.errors) {
      console.log("errors", data.errors);
      setErrors(data.errors);
    }
  }

  return (
    // <div className="bg-gradient-to-tr from-indigo-500 to-purple-600 min-h-screen flex items-center justify-center p-4">
    //   <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
    //     {/* <!-- Logo and Header --> */}
    //     <div className="text-center mb-6">
    //       <div className="flex items-center justify-center gap-2 text-indigo-600 text-xl font-bold">
    //         <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    //           <rect x="3" y="3" width="7" height="7" rx="1" />
    //           <rect x="14" y="3" width="7" height="7" rx="1" />
    //           <rect x="14" y="14" width="7" height="7" rx="1" />
    //           <rect x="3" y="14" width="7" height="7" rx="1" />
    //         </svg>
    //         <span>SpendLens</span>
    //       </div>
    //       <h1 className="text-2xl font-bold mt-4">Create your account</h1>
    //       <p className="text-gray-600">Start managing your finances with confidence</p>
    //     </div>

    //     {/* <!-- Signup Form --> */}
    //     <form className="space-y-5" onSubmit={handleSignupSubmit}>
    //       <div className="flex gap-4">
    //         <div className="w-full">
    //           <label for="name" className="block text-sm font-medium text-gray-700">Name</label>
    //           <input type="text" value={name} onChange={(e) => {
    //             setName(e.target.value);
    //           }} id="name" name="name" required placeholder="Enter your name"
    //             className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
    //         </div>
    //         {/* <div className="w-1/2">
    //           <label for="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
    //           <input type="text" id="lastName" name="lastName" required placeholder="Enter your last name"
    //             className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
    //         </div> */}
    //       </div>

    //       <div>
    //         <label for="email" className="block text-sm font-medium text-gray-700">Email address</label>
    //         <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} id="email" name="email" required placeholder="Enter your email address"
    //           className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
    //       </div>

    //       <div>
    //         <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
    //         <div className="relative mt-1">
    //           <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} id="password" name="password" required placeholder="Create a strong password"
    //             className="w-full px-4 py-2 border rounded-lg shadow-sm pr-10 focus:ring-indigo-500 focus:border-indigo-500" />
    //           <button type="button" id="passwordToggle" className="absolute inset-y-0 right-3 flex items-center">
    //             <svg className="w-5 h-5 text-gray-500 eye-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //               <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeWidth="2" />
    //               <circle cx="12" cy="12" r="3" strokeWidth="2" />
    //             </svg>
    //           </button>
    //         </div>

    //         <div id="passwordStrength" className="mt-2">
    //           <div className="h-2 w-full bg-gray-200 rounded">
    //             <div id="strengthFill" className="h-2 bg-red-500 rounded transition-all duration-300 w-0"></div>
    //           </div>
    //           <span id="strengthText" className="text-sm mt-1 inline-block text-red-500">Password strength</span>
    //         </div>
    //       </div>

    //       <div>
    //         <label for="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
    //         <div className="relative mt-1">
    //           <input type="password" id="confirmPassword" name="confirmPassword" required
    //             placeholder="Confirm your password"
    //             className="w-full px-4 py-2 border rounded-lg shadow-sm pr-10 focus:ring-indigo-500 focus:border-indigo-500" />
    //           <button type="button" id="confirmPasswordToggle" className="absolute inset-y-0 right-3 flex items-center">
    //             <svg className="w-5 h-5 text-gray-500 eye-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //               <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeWidth="2" />
    //               <circle cx="12" cy="12" r="3" strokeWidth="2" />
    //             </svg>
    //           </button>
    //         </div>
    //       </div>

    //       <div className="flex items-start gap-2">
    //         <input id="terms" name="terms" type="checkbox" required className="mt-1" />
    //         <label for="terms" className="text-sm text-gray-700">
    //           I agree to the <a href="#" className="text-indigo-600 hover:underline">Terms of Service</a> and
    //           <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>
    //         </label>
    //       </div>

    //       <div className="flex items-start gap-2">
    //         <input id="newsletter" name="newsletter" type="checkbox" className="mt-1" />
    //         <label for="newsletter" className="text-sm text-gray-700">
    //           Send me product updates and financial tips
    //         </label>
    //       </div>

    //       <button type="submit"
    //         className="w-full flex justify-center items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
    //         id="signupButton">
    //         <span className="button-text">Create Account</span>
    //         <div className="hidden button-loader" id="buttonLoader">
    //           <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
    //         </div>
    //       </button>
    //     </form>

    //     {/* <!-- Login Link --> */}
    //     <div className="text-center mt-6 text-sm text-gray-700">
    //       Already have an account?
    //       <a onClick={() => navigate("/login")} className="text-indigo-600 hover:underline login-button-link">Log in</a>
    //     </div>
    //   </div>
    // </div>

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
          {/* <!-- <p className="text-gray-600">Start managing your finances with confidence</p> --> */}
        </div>

        {/* Signup Form */}
        <form className="space-y-5" onSubmit={handleSignupSubmit}>
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" name="name" required placeholder="Enter your name"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm bg-white focus:ring-[#2a9d8f] focus:border-[#2a9d8f]" />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" required placeholder="Enter your email address"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm bg-white focus:ring-[#2a9d8f] focus:border-[#2a9d8f]" />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative mt-1">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" required placeholder="Create a strong password"
                className="w-full px-4 py-2 border rounded-lg shadow-sm pr-10 bg-white focus:ring-[#2a9d8f] focus:border-[#2a9d8f]" />
              <button type="button" id="passwordToggle" className="absolute inset-y-0 right-3 flex items-center">
                <svg className="w-5 h-5 text-gray-500 eye-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeWidth="2" />
                  <circle cx="12" cy="12" r="3" strokeWidth="2" />
                </svg>
              </button>
            </div>

            {/* Optional strength meter (unchanged logic) */}
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <div className="relative mt-1">
              <input type="password" id="confirmPassword" name="confirmPassword" required placeholder="Confirm your password"
                className="w-full px-4 py-2 border rounded-lg shadow-sm pr-10 bg-white focus:ring-[#2a9d8f] focus:border-[#2a9d8f]" />
              <button type="button" id="confirmPasswordToggle" className="absolute inset-y-0 right-3 flex items-center">
                <svg className="w-5 h-5 text-gray-500 eye-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeWidth="2" />
                  <circle cx="12" cy="12" r="3" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>

          {/* <!-- {/* Terms and Opt-In */}
          {/* <div className="flex items-start gap-2">
            <input id="terms" name="terms" type="checkbox" required className="mt-1" />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I agree to the <a href="#" className="text-[#2a9d8f] hover:underline">Terms of Service</a> and
              <a href="#" className="text-[#2a9d8f] hover:underline">Privacy Policy</a>
            </label>
          </div>

          <div className="flex items-start gap-2">
            <input id="newsletter" name="newsletter" type="checkbox" className="mt-1" />
            <label htmlFor="newsletter" className="text-sm text-gray-700">
              Send me product updates and financial tips
            </label>
          </div> */}
          {/* <!-- */}

          {/* Submit Button */}
          <button type="submit"
            className="w-full flex justify-center items-center gap-2 px-4 py-2 bg-[#2a9d8f] text-white font-semibold rounded-lg hover:bg-[#248277] transition disabled:opacity-50"
            id="signupButton">
            <span className="button-text">Create Account</span>
            <div className="hidden button-loader" id="buttonLoader">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-6 text-sm text-gray-700">
          Already have an account?{" "}
          <a onClick={() => navigate("/login")} className="text-[#2a9d8f] hover:underline font-medium login-button-link">Log in</a>
        </div>
      </div>
    </div>

  )
}

export default SignupPage;