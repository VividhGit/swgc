import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { MdOutlineManageAccounts } from "react-icons/md";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const showSideMenu = ()=>{
      setToggle(true);
  }
  const hideSideMenu = ()=>{
      setToggle(false);
  }
  const links = [
    {
        icon: <IoIosSearch/>,
        name: "Search"
    },
    {
        icon: <CiDiscount1/>,
        name: "Offers",
        sup: "New"
    },
    {
        icon: <IoHelpBuoyOutline/>,
        name: "Help"
    },
    {
        icon: <MdOutlineManageAccounts/>,
        name: "Sign In"
    },
    {
        icon: <CiShoppingCart/>,
        name: "Cart",
        sup: "0"
    }
  ]
  return (
    <>
        <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
            opacity: toggle ? 1 : 0,
            visibility: toggle ? "visible" : "hidden" 
        }}>
        <div onClick={(e)=>{
            e.stopPropagation();
        }} className='w-[500px] bg-white h-full absolute duration-[400ms]' style={{
                left: toggle ? "0%" : "-100%"
            }}></div>
        </div>
        <header className='p-[15px] shadow-xl text-[#686b78]'>
            <div className='max-w-[1200px] mx-auto  flex items center'>
                <div className='w-[100px]'>
                    <img src="images/logo.png" className='w-full' alt=''/>
                </div>
                <div className='text-lg flex items-center'> 
                    <span className=' mr-[10px] font-bold border-b-[3px] border-[orange]'>Ratanada </span> 
                    Jodhpur, Rajasthan, India <RxCaretDown  onClick={showSideMenu} fontSize={25} className='inline text-[#fc8019] cursor-pointer'/>
                </div>
                <nav className='text-lg flex list-none gap-10 ml-auto text-[18px] font-semibold'>
                    {
                        links.map(
                            (link, index) =>{
                                return <li key={index} className='flex hover:text-[#fc8019] items-center gap-2 cursor-pointer'> 
                                        {link.icon}
                                        {link.name}
                                        <sup>{link.sup}</sup>
                                    </li>
                    
                            }
                        )
                    }
                    
                </nav>
            </div>
        </header>
    </>
  )
}
