import latest1 from "../../../assets/images/latestFilm/movie01.jpg"
import latest2 from "../../../assets/images/latestFilm/movie02.jpg"
import latest3 from "../../../assets/images/latestFilm/movie03.jpg"
import latest4 from "../../../assets/images/latestFilm/movie04.jpg"
import latest5 from "../../../assets/images/latestFilm/movie05.jpg"
import latest6 from "../../../assets/images/latestFilm/movie06.jpg"
const Film = ()=>{
    return (
        <>
        <div className="bg-gray-900 pt-4 px-3 pb-6">
            <div className="mb-3 pb-3 border-b-2 border-cyan-400 font-semibold">
                <h1 className="text-white text-4xl">Latest Movies</h1>
            </div>
            <div className="flex flex-row flex-wrap justify-around">
                <a href="" className="mt-3">
                    <div className="w-56 rounded-md">
                        <img src={latest1} alt="" className="w-full overflow-hidden object-cover rounded-md " />
                    </div>
                </a> 
                <a href="" className="mt-3">
                    <div className="w-56 rounded-md">
                        <img src={latest2} alt="" className="w-full overflow-hidden object-cover rounded-md " />
                    </div>
                </a>
                <a href="" className="mt-3">
                    <div className="w-56 rounded-md">
                        <img src={latest3} alt="" className="w-full overflow-hidden object-cover rounded-md " />
                    </div>
                </a>
                <a href="" className="mt-3">
                    <div className="w-56 rounded-md">
                        <img src={latest4} alt="" className="w-full overflow-hidden object-cover rounded-md " />
                    </div>
                </a>
                <a href="" className="mt-3">
                    <div className="w-56 rounded-md">
                        <img src={latest5} alt="" className="w-full overflow-hidden object-cover rounded-md " />
                    </div>
                </a>
                <a href="" className="mt-3">
                    <div className="w-56 rounded-md">
                        <img src={latest6} alt="" className="w-full overflow-hidden object-cover rounded-md " />
                    </div>
                </a>
                
                

            </div>

        </div>

        </>
    )
}
export default Film