import HorizontalSlider from "./HorizatorSlide";
const Slider = ()=>{
    const arr=[1,2,3,4,5]
    return (
        <>
        
      <HorizontalSlider name="Chucdoan">
        {/* Các card con */}
        {arr.map((item, index) => (
          <div
            key={index}
            className="min-w-[300px] bg-white rounded-lg shadow-md p-4"
          >
            <h2 className="text-xl font-semibold">Card {item}</h2>
            <p className="mt-2 text-gray-600">Nội dung của card {item}.</p>
          </div>
        ))}
      </HorizontalSlider>
        </>
    )
}
export default Slider;