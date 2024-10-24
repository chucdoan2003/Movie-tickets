import Detail from "../Detail/Detail"
import Slider from "../Slider/Slider"
import Banner from "./Banner/Banner"
import Film from "./FilmThumNail/FIlm"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"

const Layout = ()=>{
    return (
        <>
            <Header/>
            {/* <Banner/>
            <Film/>
            <Film/>
            <Film/>
            <Film/>
            <Slider/> */}
            <Detail/>
            <Footer/>
        </>
    )
}
export default Layout