import { useState } from "react";
import { FaEye } from "react-icons/fa";

const AuthToggle = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-gray-500 to-slate-700">
      <div className="bg-white py-6 px-5 rounded-md min-w-[300px] md:min-w-[440px] relative overflow-hidden">
        {/* Tabs: Login / Register */}
        <div className="flex gap-3 justify-center mb-6">
          <span
            className={`text-3xl font-bold pb-1 cursor-pointer transition-all ${
              isLogin ? "border-b-2 border-cyan-500" : "text-slate-400"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </span>
          |
          <span
            className={`text-3xl font-bold pb-1 cursor-pointer transition-all ${
              !isLogin ? "border-b-2 border-cyan-500" : "text-slate-400"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </span>
        </div>

        {/* Forms Container */}
        <div className="relative w-full h-[300px]">
          {/* Login Form */}
          <form
            className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out transform ${
              isLogin ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
          >
            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="username" className="block text-lg font-semibold">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full px-3 py-2 border-2 border-gray-500 rounded-md outline-blue-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-lg font-semibold">
                  Password
                </label>
                <div className="flex items-center px-3 py-2 border-2 border-gray-500 rounded-md focus-within:border-blue-400">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="flex-1 outline-none"
                  />
                  <FaEye className="cursor-pointer" />
                </div>
              </div>
              <button className="w-full py-2 bg-green-500 text-xl font-semibold text-white rounded-md">
                Login
              </button>
            </div>
          </form>

          {/* Register Form */}
          <form
            className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out transform ${
              isLogin ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
            }`}
          >
            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="username" className="block text-lg font-semibold">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full px-3 py-2 border-2 border-gray-500 rounded-md outline-blue-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border-2 border-gray-500 rounded-md outline-blue-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-lg font-semibold">
                  Password
                </label>
                <div className="flex items-center px-3 py-2 border-2 border-gray-500 rounded-md focus-within:border-blue-400">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="flex-1 outline-none"
                  />
                  <FaEye className="cursor-pointer" />
                </div>
              </div>
              <button className="w-full py-2 bg-blue-500 text-xl font-semibold text-white rounded-md">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthToggle;
