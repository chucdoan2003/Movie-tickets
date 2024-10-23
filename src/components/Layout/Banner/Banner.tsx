import { useState } from "react";
import banner1 from "../../../assets/images/banner/banner1.jpg"
import banner2 from "../../../assets/images/banner/banner2.jpg"
import { GrNext } from "react-icons/gr";;
import { GrPrevious } from "react-icons/gr";
const Banner = ()=>{
    const [banner, setBanner] = useState(banner1)
    return (
        <>
        <div className="relative">
            <img src={banner} alt="" />
        </div>
        <GrPrevious className="absolute top-56 left-1 text-white cursor-pointer" onClick={()=>setBanner(banner1)}/>
        <GrNext className="absolute top-56 right-1 text-white cursor-pointer" onClick={()=>setBanner(banner2)}/>

        </>
    )
}
export default Banner