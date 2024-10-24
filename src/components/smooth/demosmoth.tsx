const Demo =()=>{
    return (
    <>
        <div className="w-96 h-96 bg-gray-200 p-4 flex items-center justify-center">
  <div className="w-72 h-72 bg-blue-300 overflow-auto">
    <div className="w-[400px] h-[400px] bg-red-400">
      Nội dung rất lớn nằm trong phần tử con. <br />
      Cuộn lên, xuống, trái và phải để xem hết nội dung này.
    </div>
  </div>
</div>

    </>
    )
}
export default Demo;