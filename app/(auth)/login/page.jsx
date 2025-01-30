"use client"
import AuthService from '@/services/AuthService';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Login = () => {
  const router = useRouter()
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setLogin({ ...login, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!login.email || !login.password) {
      setError('Please fill in all fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(login.email)) {
      setError('Please enter a valid email.');
      return;
    }

    // Clear error
    setError('');

    // Simulate API call or handle authentication
    await AuthService.login(login).then((response) => {
      const data = response.data;
      localStorage.setItem("uid", data.user.uid);
      localStorage.setItem("token", data.token);
      router.push("/")
    }).catch((error)=>{
      alert("Login Failed...")
    })
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-700">
          Login
        </h2>

        {/* Display Error Message */}
        {error && (
          <div className="mb-4 text-sm absolute right-0 top-0 w-full text-red-600 bg-red-100 p-2 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={login.email}
              onChange={handleChange}
              className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={login.password}
              onChange={handleChange}
              className="w-full px-4 py-2 tracking-wider text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>
        </form>

        {/* Extra Links */}
        <div className="mt-4 text-center">
          <p onClick={() => router.push("/fwd")} className="text-sm text-blue-500 hover:underline cursor-pointer">
            Forgot your password?
          </p>
        </div>
        <div className="mt-2 text-center">
          <p onClick={() => router.push("/signup")} className="text-sm text-blue-500 hover:underline cursor-pointer">
            Don't have an account? Sign up
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;