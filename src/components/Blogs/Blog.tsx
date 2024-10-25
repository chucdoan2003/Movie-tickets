import blog1 from "../../assets/images/blog1.jpg"
import post1 from "../../assets/images/post1.jpg"
import postview1 from "../../assets/images/postview1.jpg"
import { FaEye } from "react-icons/fa6";
const Blog = ()=>{
    return (
        <>
            <div className="max-lg:px-4 lg:px-56 max-md:px-4">
                <div className="py-4">
                    <h1 className="text-2xl font-semibold">Blog phim ảnh</h1>
                    <p className=" text-gray-500">Cập nhật các Blog về phim ảnh hay nhất trên thị trường với đầy đủ thể loại, quốc gia. Giải mã những nội dung phim gây tò mò và hấp dẫn.</p>
                </div>
                <div className="flex flex-row flex-wrap gap-8 pb-4 border-b-2 border-slate-400 ">
                    <div className="flex-1 min-w-72">
                        <div className="w-full min-w-44 h-44  min-h-24">
                            <img src={blog1} alt="" className="object-cover w-full h-full rounded-md" />
                        </div>
                        <h1 className="text-xl font-semibold line-clamp-2 cursor-pointer ">
                            25 phim hay chiếu rạp 2022 đáng kỳ vọng nhất năm
                        </h1>
                        <div className="flex flex-row items-center gap-1 text-slate-500">
                          <FaEye/>  
                          <span>5k view</span>
                        </div>
                        <p className="line-clamp-2">
                        Siêu ứng dụng MoMo xin phép liệt kê hàng loạt phim chiếu rạp hay 2022 đáng kỳ vọng nhất với mọi thể loại
                        </p>
                    </div>
                    <div className="flex-1 min-w-72">
                        <div className="w-full min-w-44 h-44  min-h-24">
                            <img src={blog1} alt="" className="object-cover w-full h-full rounded-md" />
                        </div>
                        <h1 className="text-xl font-semibold line-clamp-2 cursor-pointer ">
                            25 phim hay chiếu rạp 2022 đáng kỳ vọng nhất năm
                        </h1>
                        <div className="flex flex-row items-center gap-1 text-slate-500">
                          <FaEye/>  
                          <span>5k view</span>
                        </div>
                        <p className="line-clamp-2">
                        Siêu ứng dụng MoMo xin phép liệt kê hàng loạt phim chiếu rạp hay 2022 đáng kỳ vọng nhất với mọi thể loại
                        </p>
                    </div>
                    <div className="flex-1 min-w-72">
                        <div className="w-full min-w-44 h-44  min-h-24">
                            <img src={blog1} alt="" className="object-cover w-full h-full rounded-md" />
                        </div>
                        <h1 className="text-xl font-semibold line-clamp-2 cursor-pointer ">
                            25 phim hay chiếu rạp 2022 đáng kỳ vọng nhất năm
                        </h1>
                        <div className="flex flex-row items-center gap-1 text-slate-500">
                          <FaEye/>  
                          <span>5k view</span>
                        </div>
                        <p className="line-clamp-2">
                        Siêu ứng dụng MoMo xin phép liệt kê hàng loạt phim chiếu rạp hay 2022 đáng kỳ vọng nhất với mọi thể loại
                        </p>
                    </div>
                    
                    
                   
                    
            
                   
                   
                </div>
                {/* bài viết mới nhất */} 
                <div className="flex md:flex-row max-md:flex-col md:flex-wrap">
                    <div className="flex-1 basis-[66.66%] pr-5">
                        <h1 className="text-xl font-semibold mt-2">Bài viết mới nhất</h1>
                        <div className="flex md:flex-row max-md:flex-row-reverse max-md:items-center max-md:justify-between py-4 gap-4 border-b-2 border-slate-400 w-full">
                            <div className="max-md:w-44 min-w-28 flex-1 max-md:h-20 md:basis-52 h-28 relative shrink-0">
                                <img src={post1} alt="" className="w-full h-full absolute inset-0 object-cover rounded-md" />
                            </div>
                            <div className="">
                                <h2 className="text-xl font-semibold max-md:line-clamp-2 cursor-pointer">Top 11 phim có doanh thu cao nhất mọi thời đại</h2>
                                <div className="flex flex-row items-center gap-1 text-slate-500">
                                <FaEye/>  
                                <span>5k view</span>
                                </div>
                                <p className="line-clamp-2 max-md:hidden">
                                Cùng khám phá xem 11 bộ phim nào có doanh thu cao nhất mọi thời đại nhé, sẽ có cả những cái tên vừa quen nhưng cũng có cả vừa lạ đó!
                                </p>

                            </div>
                        </div>
                        <div className="flex md:flex-row max-md:flex-row-reverse max-md:items-center max-md:justify-between py-4 gap-4 border-b-2 border-slate-400 w-full">
                            <div className="max-md:w-44 min-w-28 flex-1 max-md:h-20 md:basis-52 h-28 relative shrink-0">
                                <img src={post1} alt="" className="w-full h-full absolute inset-0 object-cover rounded-md" />
                            </div>
                            <div className="">
                                <h2 className="text-xl font-semibold max-md:line-clamp-2 cursor-pointer">Top 11 phim có doanh thu cao nhất mọi thời đại</h2>
                                <div className="flex flex-row items-center gap-1 text-slate-500">
                                <FaEye/>  
                                <span>5k view</span>
                                </div>
                                <p className="line-clamp-2 max-md:hidden">
                                Cùng khám phá xem 11 bộ phim nào có doanh thu cao nhất mọi thời đại nhé, sẽ có cả những cái tên vừa quen nhưng cũng có cả vừa lạ đó!
                                </p>

                            </div>
                        </div>
                        <div className="flex md:flex-row max-md:flex-row-reverse max-md:items-center max-md:justify-between py-4 gap-4 border-b-2 border-slate-400 w-full">
                            <div className="max-md:w-44 min-w-28 flex-1 max-md:h-20 md:basis-52 h-28 relative shrink-0">
                                <img src={post1} alt="" className="w-full h-full absolute inset-0 object-cover rounded-md" />
                            </div>
                            <div className="">
                                <h2 className="text-xl font-semibold max-md:line-clamp-2 cursor-pointer">Top 11 phim có doanh thu cao nhất mọi thời đại</h2>
                                <div className="flex flex-row items-center gap-1 text-slate-500">
                                <FaEye/>  
                                <span>5k view</span>
                                </div>
                                <p className="line-clamp-2 max-md:hidden">
                                Cùng khám phá xem 11 bộ phim nào có doanh thu cao nhất mọi thời đại nhé, sẽ có cả những cái tên vừa quen nhưng cũng có cả vừa lạ đó!
                                </p>

                            </div>
                        </div>
                        <div className="flex md:flex-row max-md:flex-row-reverse max-md:items-center max-md:justify-between py-4 gap-4 border-b-2 border-slate-400 w-full">
                            <div className="max-md:w-44 min-w-28 flex-1 max-md:h-20 md:basis-52 h-28 relative shrink-0">
                                <img src={post1} alt="" className="w-full h-full absolute inset-0 object-cover rounded-md" />
                            </div>
                            <div className="">
                                <h2 className="text-xl font-semibold max-md:line-clamp-2 cursor-pointer">Top 11 phim có doanh thu cao nhất mọi thời đại</h2>
                                <div className="flex flex-row items-center gap-1 text-slate-500">
                                <FaEye/>  
                                <span>5k view</span>
                                </div>
                                <p className="line-clamp-2 max-md:hidden">
                                Cùng khám phá xem 11 bộ phim nào có doanh thu cao nhất mọi thời đại nhé, sẽ có cả những cái tên vừa quen nhưng cũng có cả vừa lạ đó!
                                </p>

                            </div>
                        </div>
                        <div className="flex md:flex-row max-md:flex-row-reverse max-md:items-center max-md:justify-between py-4 gap-4 border-b-2 border-slate-400 w-full">
                            <div className="max-md:w-44 min-w-28 flex-1 max-md:h-20 md:basis-52 h-28 relative shrink-0">
                                <img src={post1} alt="" className="w-full h-full absolute inset-0 object-cover rounded-md" />
                            </div>
                            <div className="">
                                <h2 className="text-xl font-semibold max-md:line-clamp-2 cursor-pointer">Top 11 phim có doanh thu cao nhất mọi thời đại</h2>
                                <div className="flex flex-row items-center gap-1 text-slate-500">
                                <FaEye/>  
                                <span>5k view</span>
                                </div>
                                <p className="line-clamp-2 max-md:hidden">
                                Cùng khám phá xem 11 bộ phim nào có doanh thu cao nhất mọi thời đại nhé, sẽ có cả những cái tên vừa quen nhưng cũng có cả vừa lạ đó!
                                </p>

                            </div>
                        </div>
                        <div className="flex md:flex-row max-md:flex-row-reverse max-md:items-center max-md:justify-between py-4 gap-4 border-b-2 border-slate-400 w-full">
                            <div className="max-md:w-44 min-w-28 flex-1 max-md:h-20 md:basis-52 h-28 relative shrink-0">
                                <img src={post1} alt="" className="w-full h-full absolute inset-0 object-cover rounded-md" />
                            </div>
                            <div className="">
                                <h2 className="text-xl font-semibold max-md:line-clamp-2 cursor-pointer">Top 11 phim có doanh thu cao nhất mọi thời đại</h2>
                                <div className="flex flex-row items-center gap-1 text-slate-500">
                                <FaEye/>  
                                <span>5k view</span>
                                </div>
                                <p className="line-clamp-2 max-md:hidden">
                                Cùng khám phá xem 11 bộ phim nào có doanh thu cao nhất mọi thời đại nhé, sẽ có cả những cái tên vừa quen nhưng cũng có cả vừa lạ đó!
                                </p>

                            </div>
                        </div>
                        
                        
                        


                    </div>
                    {/* Bài viết xem nhiều nhất */}
                    <div className="flex-1 basis-[33.33%] max-md:bg-blue-400 max-md:mt-3 max-md:px-2 max-md:rounded-md min-w-72">
                        <h1 className="text-xl font-semibold mt-2">Bài viết xem nhiều nhất</h1>
                        <div className="flex flex-row py-4 gap-3 border-b-2 border-slate-500 items-center">
                            <div className=" flex-1 max-w-52 shrink-0 w-36 h-24">
                                <img src={postview1} alt="" className="w-full h-full object-cover rounded-md" />
                            </div>
                            <p className="flex-1 text-lg font-medium line-clamp-2 cursor-pointer max-md:text-white">Phim hay 2020 chiếu rạp gây ấn tượng</p>

                        </div>
                        <div className="flex flex-row py-4 gap-3 border-b-2 border-slate-500 items-center">
                            <div className=" flex-1 max-w-52 shrink-0 w-36 h-24">
                                <img src={postview1} alt="" className="w-full h-full object-cover rounded-md" />
                            </div>
                            <p className="flex-1 text-lg font-medium line-clamp-2 cursor-pointer max-md:text-white">Phim hay 2020 chiếu rạp gây ấn tượng</p>

                        </div>
                        <div className="flex flex-row py-4 gap-3 border-b-2 border-slate-500 items-center">
                            <div className=" flex-1 max-w-52 shrink-0 w-36 h-24">
                                <img src={postview1} alt="" className="w-full h-full object-cover rounded-md" />
                            </div>
                            <p className="flex-1 text-lg font-medium line-clamp-2 cursor-pointer max-md:text-white">Phim hay 2020 chiếu rạp gây ấn tượng</p>

                        </div>
                        <div className="flex flex-row py-4 gap-3 border-b-2 border-slate-500 items-center">
                            <div className=" flex-1 max-w-52 shrink-0 w-36 h-24">
                                <img src={postview1} alt="" className="w-full h-full object-cover rounded-md" />
                            </div>
                            <p className="flex-1 text-lg font-medium line-clamp-2 cursor-pointer max-md:text-white">Phim hay 2020 chiếu rạp gây ấn tượng</p>

                        </div>
                        <div className="flex flex-row py-4 gap-3 border-b-2 border-slate-500 items-center">
                            <div className=" flex-1 max-w-52 shrink-0 w-36 h-24">
                                <img src={postview1} alt="" className="w-full h-full object-cover rounded-md" />
                            </div>
                            <p className="flex-1 text-lg font-medium line-clamp-2 cursor-pointer max-md:text-white">Phim hay 2020 chiếu rạp gây ấn tượng</p>

                        </div>
                        

                    </div>
                </div>
               

            </div>
        </>
    )


}
export default Blog;