import { useState } from "react";
import img7 from "../../assets/images/footer/7.png"
import vemon from "../../assets/images/thubnail/1.jpg"
import { FaPlayCircle } from "react-icons/fa";
import { MdOutlineStars } from "react-icons/md"
import { MdOutlineStar } from "react-icons/md";
import ModalSeat from "../modal/ModalSeat";
const Detail = ()=>{
    const [isOpen, setIsOpen] = useState(false); // Quản lý trạng thái modal
    const openModal = () => setIsOpen(true); // Mở modal
    const closeModal = () => setIsOpen(false); // Đó
    return (
        <>
        {/* Thông tin film */}
        <div className="flex flex-row gap-4 flex-wrap md:px-40 max-md:px-5 bg-slate-700 text-white pt-4 max-md:justify-center pb-4">
            {/* imge */}
            <div className="" style={{width:320}}>
                <img src={img7} alt="" className="" style={{width:320}} />
            </div>
            {/* content */}
            <div className="flex-grow-1" style={{maxWidth: 800}}>
                <p className="bg-red-600 p-1 rounded w-fit">18+</p>
                <h1 className="md:text-4xl font-semibold max-md:text-2xl">Tee Yod: Quỷ Ăn Tạng Phần 2</h1>
                <div className="flex flex-row gap-4 mt-2 text-gray-500 text-xl font-medium">
                    <span>Ted yod 2</span>
                    <span>2024</span>
                    <span>111 minute</span>
                </div>
                <div className="flex flex-row gap-1 items-center ">
                    <span className="text-yellow-300"><MdOutlineStar/></span>
                    <span>9.5</span>
                </div>
                <div  >
                    <p className="text-gray-500 italic"> Tiếng rên rỉ điên cuồng trong đêm... Dựa trên câu chuyện có thật năm 1974</p>
                   
                </div>
                <div className="mt-3">
                    <p>Nội dung</p>
                    <span className="text-gray-500 italic">
                        Ba năm sau cái chết của Yam, Yak vẫn tiếp tục săn lùng linh hồn bí ẩn mặc áo choàng đen. Gặp một cô gái có triệu chứng giống Yam, Yak phát hiện ra người bảo vệ linh hồn, pháp sư ẩn dật Puang, sống trong một khu rừng đầy nguy hiểm. Giữa những phép thuật ma quỷ và những sinh vật nguy hiểm. Khi họ đuổi theo linh hồn mặc áo choàng đen, tiếng kêu đầy ám ảnh của Tee Yod sắp quay trở lại một lần nữa...
                    </span>
                </div>
                <div className="flex flex-row gap-4 mt-3">
                    <div className="flex flex-col">
                        <span className="text-gray-500">Ngày chiếu</span>
                        <span>18/10/2024</span>
                    </div>
                    <div  className="flex flex-col">
                        <span className="text-gray-500">Thể loại</span>
                        <span>Gay cấn, kinh dị</span>
                    </div>
                    <div  className="flex flex-col">
                        <span className="text-gray-500">Quốc gia</span>
                        <span>Thái Lan</span>
                    </div>
                </div>
                <div className="flex flex-row gap-4 mt-3 ">
                    <div className="flex flex-row items-center ga">
                        <span className="text-yellow-300"><MdOutlineStars/> </span>
                        <span> Đánh giá 9.5</span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <span className="text-red-600"><FaPlayCircle/></span>
                        <span>Trailer</span>
                    </div>
                </div>

            </div>
        </div>
        {/* Thông tin lịch chiếu */}
        <div className="py-6 md:px-40 max-md:px-5 flex flex-row gap-10 flex-wrap">
            {/* lich chieu */}
            <div className="flex-grow max-w-3xl">
                <h2 className="text-3xl font-medium mb-3">Lịch chiếu: Quỷ ăn tạng phần 2</h2>
                <div className="border-2 border-zinc-400">
                    {/* rạp chiếu */}
                    <div className="px-4  py-3 border-b-2 border-zinc-400">
                        <div className="border-b-2 border-zinc-300 w-fit text-xl font-medium">Rạp chiếu</div>
                        <div className="flex flex-row [&>*]:w-10 [&>*]:h-10 gap-3 mt-3 ">
                            <div className="border-2 rounded border-red-500">
                                <img src="https://homepage.momocdn.net/next-js/_next/static/public/cinema/dexuat-icon.svg" className="w-full" alt="" />
                            </div>
                            <div className="border-2 rounded  border-red-500">
                                <img src="https://homepage.momocdn.net/blogscontents/momo-upload-api-210604170617-637584231772974269.png" alt="" />
                            </div>
                            <div className="border-2 rounded  border-red-500">
                                <img src="https://homepage.momocdn.net/blogscontents/momo-upload-api-210604170617-637584231772974269.png" alt="" />
                            </div>
                            <div className="border-2 rounded  border-red-500">
                                <img src="https://homepage.momocdn.net/blogscontents/momo-upload-api-210604170617-637584231772974269.png" alt="" />
                            </div>
                            <div className="border-2 rounded  border-red-500">
                                <img src="https://homepage.momocdn.net/blogscontents/momo-upload-api-210604170617-637584231772974269.png" alt="" />
                            </div>
                            <div className="border-2 rounded  border-red-500">
                                <img src="https://homepage.momocdn.net/blogscontents/momo-upload-api-210604170617-637584231772974269.png" alt="" />
                            </div>
                        
                        
                        </div>

                    </div>
                    {/* ngày chiếu */}
                    <div className="px-3 py-3 border-b-2 border-zinc-400">
                        <div className="border-b-2 border-zinc-300 w-fit text-xl font-medium">Ngày chiếu</div>
                        <div className="flex flex-row gap-3 mt-3 ">
                            <div className="flex flex-col rounded-md border-2 border-red-400  ">
                                <p className="bg-gray-300 text-center rounded-sm">24</p>
                                <p className="px-2">Hôm nay</p>
                            </div>
                            <div className="flex flex-col ">
                                <p className="bg-gray-300 text-center rounded-sm">24</p>
                                <p className="px-2">Hôm nay</p>
                            </div>
                            <div className="flex flex-col ">
                                <p className="bg-gray-300 text-center rounded-sm">24</p>
                                <p className="px-2">Hôm nay</p>
                            </div>
                            <div className="flex flex-col ">
                                <p className="bg-gray-300 text-center rounded-sm">24</p>
                                <p className="px-2">Hôm nay</p>
                            </div>
                        </div>
                    </div>
                    {/* ca chiếu */}
                    <div className="px-3 py-3 border-b-2 border-zinc-400 ">
                        <div className="border-b-2 border-zinc-300 w-fit text-xl font-medium">Ca chiếu</div>
                        <div className="flex flex-row gap-3 mt-3  ">
                           <div className="px-2 py-1 border-2 rounded border-cyan-600">
                                7h - 9h
                           </div>
                           <div className="px-2 py-1 border-2 rounded">
                                9h - 11h
                           </div>
                           <div className="px-2 py-1 border-2 rounded">
                                13h - 15h
                           </div>
                           <div className="px-2 py-1 border-2 rounded">
                                18h - 20h
                           </div>
                           
                        </div>
                    </div>
                    
                   
                </div>
                <div className="mt-3 ">
                    <button className="px-2 py-1 bg-cyan-500 rounded" onClick={openModal}>Continue..</button>
                </div>

            </div>
            {/* Phim dang chieu */}
            <div className="w-96 ">
                <h2 className="text-3xl font-medium mb-3">Phim đang chiếu</h2>
                <div className="w-full flex flex-row gap-3 border-b-2 border-slate-500 py-3">
                    <div className="w-1/4">
                        <img src={vemon} alt=""  />
                    </div>
                    <div className="flex-grow">
                        <p className="bg-red-500 p-1 rounded w-fit text-white flex justify-center items-center">18+</p>
                        <a href=""><p className="text-xl font-semibold" >Vemon: kèo cuối</p></a>
                        <p className="italic text-slate-400">Khoa học, viễn tưởng, phiêu lưu</p>
                        <div className="flex flex-row gap-1 items-center">
                            <span className="text-yellow-300">
                                <MdOutlineStars/>
                            </span>
                             <span>9.5</span>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-row gap-3 border-b-2 border-slate-500 py-3">
                    <div className="w-1/4">
                        <img src={vemon} alt=""  />
                    </div>
                    <div className="flex-grow">
                        <p className="bg-red-500 p-1 rounded w-fit text-white flex justify-center items-center">18+</p>
                        <a href=""><p className="text-xl font-semibold" >Vemon: kèo cuối</p></a>
                        <p className="italic text-slate-400">Khoa học, viễn tưởng, phiêu lưu</p>
                        <div className="flex flex-row gap-1 items-center">
                            <span className="text-yellow-300">
                                <MdOutlineStars/>
                            </span>
                             <span>9.5</span>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-row gap-3 border-b-2 border-slate-500 py-3">
                    <div className="w-1/4">
                        <img src={vemon} alt=""  />
                    </div>
                    <div className="flex-grow">
                        <p className="bg-red-500 p-1 rounded w-fit text-white flex justify-center items-center">18+</p>
                        <a href=""><p className="text-xl font-semibold" >Vemon: kèo cuối</p></a>
                        <p className="italic text-slate-400">Khoa học, viễn tưởng, phiêu lưu</p>
                        <div className="flex flex-row gap-1 items-center">
                            <span className="text-yellow-300">
                                <MdOutlineStars/>
                            </span>
                             <span>9.5</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <ModalSeat
            isOpen={isOpen}
            onClose={closeModal}
            onOpen={openModal}
        />

        </>
    )
}
export default Detail