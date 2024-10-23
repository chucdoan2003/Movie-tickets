import { IoSearchCircleOutline } from "react-icons/io5"
import { MdOutlineCircleNotifications } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import logo from "../../../assets/images/logo.png"
import { useState } from "react";
const Header =()=>{
    const [showSearch,  setShowSearch]=useState(false)
    const [showMenu,  setShowMenu] = useState(false)

    return (
    <>
    <header className="bg-gray-900 text-white flex flex-row items-center justify-between h-16 relative" >
        {/* menu left */}
        <div className="flex flex-row items-center gap-3 ml-3 flex-1 text-center ">
            
            <div className="max-md:flex-1 max-md:flex max-md:justify-center">
                <img src={logo} alt="" />
            </div>
            <div>
                <div className="mr-4 md:hidden">
                    <FaBars className="" onClick={()=>setShowMenu(!showMenu)}/>

                </div>
                <nav className={showMenu ? "":"hidden lg:hidden"}>
                    <ul className="fixed z-10 px-3 pb-2 top-16 bg-slate-900 right-0 list-none flex flex-col gap-3 [&>*]:cursor-pointer [&>*:hover]:text-green-300 max-[1037px]:hidden [&>*]:border-b-2">
                        <li>Home</li>
                        <li>Series</li>
                        <li>Movies</li>
                        <li>Page</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                    </ul>
                </nav>

            </div>

            

            <nav className="max-lg:hidden ">
                <ul className=" list-none flex flex-row gap-3 [&>*]:cursor-pointer [&>*:hover]:text-green-300 max-[1037px]:hidden">
                    <li>Home</li>
                    <li>Series</li>
                    <li>Movies</li>
                    <li>Page</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
            </nav>

        </div>
        {/* menu right */}
        <div className="max-md:hidden flex flex-row text-xl items-center gap-3">
            {/* search */}
            <div className={showSearch ? "": "hidden"} >
                <input type="text" className="px-4 py-1 rounded-2xl outline-cyan-400 outline-2 text-gray-950" />

            </div>
            <div className="text-4xl flex items-center">
                <IoSearchCircleOutline className={!showSearch ? "":"hidden"} onClick={()=>setShowSearch(!showSearch)}/> 
                <IoCloseCircleOutline className={!showSearch ? "hidden":""} onClick={()=>setShowSearch(!showSearch)}/>
            </div>
            <div>
                |
            </div>
            <div className="text-3xl flex items-center">
            <MdOutlineCircleNotifications/>
            </div>
            <div className="flex flex-row gap-3 mr-3 items-center">
                <button className="px-2 py-1 bg-cyan-500 rounded-md">Login</button>
                <button className="px-2 py-1 bg-red-500 rounded-md">Logout</button>
            </div>

        </div>

    </header>
    
    </>)
}
export default Header