import { FcPrevious } from "react-icons/fc";
const ModalSeat = ({isOpen, onClose  }:any) => {
    const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
  return (
      <>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center bg-black bg-opacity-25 z-50 px-48">
            {/* <div className="bg-white w-full rounded-md">
                <div className="flex items-center px-4 bg-cyan-500 overflow-hidden rounded-tr-md rounded-tl-md py-2 text-white text-xl font-semibold">
                    <div className="text-blue-600 text-2xl">
                        <FcPrevious onClick={onClose}/>
                    </div>
                    <h1 className="flex-grow text-center">Mua vé xem phim</h1>
                </div>
                <div className="bg-black bg-opacity-60 py-4 px-12">
                    <div className="flex flex-col items-center">
                        <div className="border-2 border-cyan-50 rounded-md w-52 "></div>
                        <h2 className="text-white text-lg">Màn hình</h2>
                    </div>
                    <div className="flex flex-col gap-2 items-center ">
                        <div className="flex flex-row gap-4">
                            {
                                arr.map((item, index) => (
                                    <div key={index} className="w-7 h-7 rounded bg-purple-500">
                                    </div>
                                ))
                            }
                        </div>
                        <div className="flex flex-row gap-4">
                            {
                                arr.map((item, index) => (
                                    <div key={index} className="w-7 h-7 rounded bg-slate-500">
                                    </div>
                                ))
                            }
                        </div>
                        <div className="flex flex-row gap-4">
                            {
                                arr.map((item, index) => (
                                    <div key={index} className="w-7 h-7 rounded bg-purple-500">
                                    </div>
                                ))
                            }
                        </div>
                        <div className="flex flex-row gap-4">
                            {
                                arr.map((item, index) => (
                                    <div key={index} className="w-7 h-7 rounded bg-purple-500">
                                    </div>
                                ))
                            }
                        </div>
                        <div className="flex flex-row gap-4">
                            {
                                arr.map((item, index) => (
                                    <div key={index} className="w-7 h-7 rounded bg-purple-500">
                                    </div>
                                ))
                            }
                        </div>
                        <div className="flex flex-row gap-4">
                            {
                                arr.map((item, index) => (
                                    <div key={index} className="w-7 h-7 rounded bg-purple-500">
                                    </div>
                                ))
                            }
                        </div>
                        <div className="flex flex-row gap-4">
                            {
                                arr.map((item, index) => (
                                    <div key={index} className="w-7 h-7 rounded bg-purple-500">
                                    </div>
                                ))
                            }
                        </div>
                        <div className="flex flex-row gap-4">
                            {
                                arr.map((item, index) => (
                                    <div key={index} className="w-7 h-7 rounded bg-purple-500">
                                    </div>
                                ))
                            }
                        </div>
                        <div className="flex flex-row gap-4">
                            {
                                arr.map((item, index) => (
                                    <div key={index} className="w-7 h-7 rounded bg-purple-500">
                                    </div>
                                ))
                            }
                        </div>
                        
                    </div>
                   

                </div>
                <div className="flex flex-row flex-wrap justify-center py-4 gap-3 bg-gray-700 text-white text-opacity-90">
                        <div className="flex flex-row gap-2">
                            <div className="w-7 h-7 bg-purple-500 rounded"></div>
                            <p>Ghế còn trống</p>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div className="w-7 h-7 bg-slate-500 rounded"></div>
                            <p>Ghế đã đặt</p>
                        </div>
                        <div className="flex flex-row gap-2" >
                            <div className="w-7 h-7 bg-red-500 rounded"></div>
                            <p>Ghế vip</p>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div className="w-7 h-7 bg-cyan-500 rounded"></div>
                            <p>Ghế bạn chọn</p>
                        </div>
                        
                </div>
                <div className="bg-white p-4">
                    <div className="border-b-2 border-slate-400 px-3">
                        <div className="text-xl font-semibold">Tee Yod: Quỷ Ăn Tạng Phần 2</div>
                        <div className="text-red-500">23:40 ~ 01:31 · Hôm nay, 24/10 · Phòng chiếu 7 · 2D Phụ đề</div>
                    </div>
                    <div className="border-b-2 border-slate-400 py-2 flex flex-row justify-between px-3">
                        <span>Chỗ ngồi</span>
                        <span>Ghế</span>
                    </div >
                    <div className="border-b-2 border-slate-400 py-2 flex justify-between px-3 items-center">
                        <div className="flex flex-col gap-2">
                            <span className="italic text-slate-500">Tạm tính</span>
                            <span>0 vnđ</span>
                        </div>
                        <div>
                            <button className=" py-1 px-3 rounded bg-red-500 text-lg text-white text-opacity-80">Mua vé</button>
                        </div>
                    </div>
                </div>
                
            </div> */}
        </div>
      )}
    </>
  );
};

export default ModalSeat;
