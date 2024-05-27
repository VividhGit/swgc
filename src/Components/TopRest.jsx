import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import Card from './Card';

export default function TopRest() {
  const [data,setData] = useState([]);
  const fetchTopRestaurant = async ()=>{
      const response = await fetch("http://localhost:5000/top-restaurant-chains");
      const apiData = response.json();
      setData(apiData);
  }
  useEffect(
    () => { 
      fetchTopRestaurant();
    }, []
  )
  return (
      <div className='max-w-[1200px] mx-auto'>
        <div className='flex items-center my-3 justify-between'>
            <div className='text-2xl text-[25px] font-bold text-[#02060ceb]'>Top restaurant chains in Jodhpur</div>
            <div className='flex'>
                <div  className='cursor-pointer flex justify-center items-center text-lg w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'><FaArrowLeftLong/></div>
                <div  className='cursor-pointer flex justify-center items-center text-lg w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'><FaArrowRightLong/></div>
            </div>
        </div>
        <div className='flex gap-8 overflow-hidden'>
          {
            data.map(
              (d, i) => {
                  return <Card {...d} key={i}/>
              }
            )
          }
          

        </div>
    </div>
    
  )
}
