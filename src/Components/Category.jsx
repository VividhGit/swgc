import React, { useEffect, useState } from 'react'
import { FaArrowRightLong, FaArrowLeftLong} from "react-icons/fa6";

export default function Category() {
  const [slide, setSlide] = useState(0);
  const [categories, setCategory]  =  useState([]);
  const fetchCategory = async ()=>{
    const response = await fetch("http://localhost:5000/categories");
    const data = await response.json();
    setCategory(data);
  }
  useEffect(
    () =>{
      fetchCategory();
    },[]
  )
  const nextSlide = ()=>{
      if(categories.length - 8 == slide) return false
      setSlide(slide +3);
  }
  const prevSlide = ()=>{
    if(slide == 0) return false
    setSlide(slide -3);
}

  return (
    <div className='max-w-[1200px] mx-auto'>
        <div className='flex items-center my-3 justify-between'>
            <div className='text-2xl text-[25px] font-bold text-[#02060ceb]'>What's on your mind?</div>
            <div className='flex'>
                <div onClick={prevSlide} className='cursor-pointer flex justify-center items-center text-lg w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'><FaArrowLeftLong/></div>
                <div onClick={nextSlide} className='cursor-pointer flex justify-center items-center text-lg w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'><FaArrowRightLong/></div>
            </div>
        </div>
        <div className='flex  overflow-hidden'>
          {
            categories.map(
              (cat,index) =>{
                  return(
                    <div style={{
                      
                      transitionDuration:`500ms`,
                        transform: `translateX(-${ slide * 100}%)`
                    }} key={index} className='w-[170px] shrink-0'>
                      <img src={"http://localhost:5000/images/" + cat.image} alt="" />
                    </div>
                  )
              }
            )
          }
        </div>
        <hr className='my-6 border-[1px]'/>
    </div>
  )
}
