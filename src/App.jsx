import { imgURL } from "./assets/constants/index"
import { RiArrowRightWideFill } from "react-icons/ri";
import { RiArrowLeftWideFill } from "react-icons/ri";
import { useState } from "react";
import { RxDot } from "react-icons/rx";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? imgURL.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex); 
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === imgURL.length - 1 ;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[770px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div style={{ backgroundImage: `url(${imgURL[currentIndex].imgURL})`}} className="w-full h-full rounded-2xl bg-center duration-500">
      {/* left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white crusor-pointer">
      <RiArrowLeftWideFill size={30} onClick={prevSlide}/>
      </div>
      
      {/* right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white crusor-pointer">
      <RiArrowRightWideFill size={30} onClick={nextSlide}/>
      </div>
        
      </div>
      <div className="flex py-2 justify-center">
          {imgURL.map((slide, slideIndex) => (
            <div className="text-2xl cursor-pointer" key={slide.imgURL} onClick={() => goToSlide(slideIndex)}>
              <RxDot />
            </div>
          ))}
        
        </div>
    </div>
  )
}