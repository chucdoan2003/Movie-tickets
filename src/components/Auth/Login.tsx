import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
const Login = ()=>{
    const [isLogin, setIsLogin] = useState(true)
    return (
        <>
        <div className="fixed inset-0 h-auto flex items-center justify-center bg-gradient-to-r from-gray-500 to-slate-700 ">
            <div className="bg-white py-4 px-3 rounded-md min-w-[300px] md:min-w-[440px] overflow-hidden">
                <div className="flex flex-row gap-3  justify-center">
                    <span className={`text-3xl font-bold  ${isLogin ? 'border-b-2 border-cyan-500': 'text-slate-400'}  pb-1 cursor-pointer`}
                    onClick={()=>setIsLogin(true)}>
                        Login
                    </span>
                            |
                    <span className={`text-3xl font-bold  ${!isLogin ? 'border-b-2 border-cyan-500': 'text-slate-400'}  pb-1 cursor-pointer`}
                    onClick={()=>setIsLogin(false)}
                    >Register</span>
                </div>
                <div className="relative h-[360px] w-full">
                    <form className={`absolute top-0 left-0 w-full transform transition-all duration-500 ease-in-out 
                            ${isLogin? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                        <div className="flex flex-col gap-1 mt-2">
                            <label htmlFor="username" className="text-lg font-semibold">Username</label>
                            <input type="text" id="username" name="username" className="px-2 py-1 border-2 border-gray-500 rounded-md outline-blue-400" required />
                        </div>
                        <div className="flex flex-col gap-1 mt-2">
                            <label htmlFor="password" className="text-lg font-semibold">Password</label>
                            <div className="flex flex-row justify-between px-2 py-1 border-2 border-gray-500 rounded-md  items-center focus-within:border-blue-400  focus-within:outline-blue-400" >
                                <input type="password" id="password" name="password" className="flex-1 outline-none" />
                                <span><FaEye className="cursor-pointer"/></span>
                            </div>
                        </div>
                        <div className="text-blue-400 mt-2">
                            <a href="">Forgot password ?</a>
                        </div>
                        <button className="w-full text-center bg-green-500 py-2 text-xl font-semibold text-white text-opacity-90 rounded-md mt-2">Login</button>
                    </form> 
                    <form className={`absolute top-0 left-0 w-full transform transition-all duration-500 ease-in-out 
                            ${!isLogin? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                        
                        <div className="flex flex-col gap-1 mt-2">
                            <label htmlFor="username" className="text-lg font-semibold">Username</label>
                            <input type="text" id="username" name="username" className="px-2 py-1 border-2 border-gray-500 rounded-md outline-blue-400" required />
                        </div>
                        <div className="flex flex-col gap-1 mt-2">
                            <label htmlFor="email" className="text-lg font-semibold">Email</label>
                            <input type="text" id="email" name="email" className="px-2 py-1 border-2 border-gray-500 rounded-md outline-blue-400" required />
                        </div>
                        <div className="flex flex-col gap-1 mt-2">
                            <label htmlFor="password" className="text-lg font-semibold">Password</label>
                            <div className="flex flex-row justify-between px-2 py-1 border-2 border-gray-500 rounded-md  items-center focus-within:border-blue-400  focus-within:outline-blue-400" >
                                <input type="password" id="password" name="password" className="flex-1 outline-none" />
                                <span><FaEye className="cursor-pointer"/></span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 mt-2">
                            <label htmlFor="confirmation_passsword" className="text-lg font-semibold">Confirmation_passsword</label>
                            <div className="flex flex-row justify-between px-2 py-1 border-2 border-gray-500 rounded-md  items-center focus-within:border-blue-400  focus-within:outline-blue-400" >
                                <input type="confirmation_passsword" id="confirmation_passsword" name="confirmation_passsword" className="flex-1 outline-none" />
                                <span><FaEye className="cursor-pointer"/></span>
                            </div>
                        </div>
                        
                        <button className="w-full text-center bg-blue-500 py-2 text-xl font-semibold text-white text-opacity-90 rounded-md mt-2">Register</button>
                    </form>
                </div>
               

                {/* form login */}
               
                {/* Form register */}
                
            </div>
        </div>
        </>
    )
}

export default Login;