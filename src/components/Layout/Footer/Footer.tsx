import logo from "../../../assets/images/logo.png"
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import f1 from "../../../assets/images/footer/1.png"
import f2 from "../../../assets/images/footer/2.png"
import f3 from "../../../assets/images/footer/3.png"
import f4 from "../../../assets/images/footer/4.png"
import f5 from "../../../assets/images/footer/5.png"
import f6 from "../../../assets/images/footer/6.png"

const Footer = ()=>{
    return (
        <>
        <footer className="flex flex-row flex-wrap gap-3 px-9 bg-gray-900 text-white border-t-2 border-cyan-400 pt-6">
            <div className="w-96">
                <div>
                    <img src={logo} alt="" />
                </div>
                <p className="mt-3">Eiusmod tempor incididunt ut la abore et minim ven exerc itation ulla mco lboris naliquip comm.</p>
                <div className="flex flex-row gap-3 mt-3">
                    <FaFacebook className="text-blue-600 text-2xl"/>
                    <FaTwitter className="text-cyan-600 text-2xl"/>
                    <FaInstagramSquare className="text-orange-600 text-2xl"/>
                    <FaLinkedin className="text-blue-800 text-2xl"/>
                </div>

            </div>
            <div className="flex-grow pl-10">
                <div className="flex flex-row flex-wrap gap-3">
                    <span>Home</span>
                    <span>About US</span>
                    <span>Series</span>
                    <span>Contact Us</span>
                    <span>Tv Series</span>
                    <span>Tech</span>
                    <span>Movie</span>
                    <span>Video</span>
                    <span>Live</span>
                    <span>Tv Series</span>
                </div>
                <div className="flex flex-row flex-wrap">
                    <img src={f1} alt="" className="w-32" />
                    <img src={f2} alt="" className="w-32" />
                    <img src={f3} alt="" className="w-32" />
                    <img src={f4} alt="" className="w-32" />
                    <img src={f5} alt="" className="w-32"/>
                    <img src={f6} alt="" className="w-32"/>

                </div>

            </div>
        </footer>
        </>
    )
}
export default Footer