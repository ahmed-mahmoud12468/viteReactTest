import { useState } from 'react';
import home from '../../imgs/poert1.png'
import cake from '../../imgs/port2.png'
import home2 from '../../imgs/port3.png'
import map from './../../../node_modules/lodash-es/map';


export default function Portfolio(){
    let [openmodal, setOpenModal]= useState("")
    return(
        <>
    <div className="container p-4">
    <h2 className="text-center font-bold text-back text-4xl">PORTFOLIO COMPONENT</h2>
        <div className="line flex items-center justify-center w-full">
        <div className="w-[100px] h-[2px] bg-black"></div>
        <i className="fa-solid fa-star text-black mx-4"></i>
        <div className="w-[100px] h-[2px] bg-black"></div>
        </div>
    </div>

<div className="hidden one" id="one">
<div className=" layer w-[100]  flex justify-center items-center bg-gray-200 bg-transparent">
        <div className="layer w-[550px]">
        <img src={home} className="rounded-[10px] w-[100%]" alt="" />
        </div>
        </div>
</div>
    <div className="container cursor-pointer m-[20px]  grid lg:grid-cols-3 grid-rows-2 sm:grid-cols-2 gap-5">
        <div className="relative" >
            <img src={home} className="rounded-[10px]" alt="" />
            <div className="plus absolute w-full h-full inset-0 
            bg-[#1abc9cd1] flex items-center justify-center text-white opacity-0
            hover:opacity-100 transition-all duration-500 rounded-[10px]"
            id="one"
            >
                <i className="fa-solid fa-plus text-6xl "></i>
            </div>
        </div>
        
        <div className="relative">
            <img src={cake} className="rounded-[10px]" alt="" />
            <div className="plus absolute w-full h-full inset-0 
            bg-[#1abc9cd1] flex items-center justify-center text-white opacity-0
            hover:opacity-100 transition-all duration-500 rounded-[10px]">
                <i className="fa-solid fa-plus text-6xl "></i>
            </div>
        </div>
        <div className="relative">
            <img src={home2} className="rounded-[10px]" alt="" />
            <div className="plus absolute w-full h-full inset-0 
            bg-[#1abc9cd1] flex items-center justify-center text-white opacity-0
            hover:opacity-100 transition-all duration-500 rounded-[10px]">
                <i className="fa-solid fa-plus text-6xl "></i>
            </div>
        </div>
        <div className="relative">
            <img src={home} className="rounded-[10px]" alt="" />
            <div className="plus absolute w-full h-full inset-0 
            bg-[#1abc9cd1] flex items-center justify-center text-white opacity-0
            hover:opacity-100 transition-all duration-500 rounded-[10px]">
                <i className="fa-solid fa-plus text-6xl "></i>
            </div>
        </div>
        <div className="relative">
            <img src={cake} className="rounded-[10px]" alt="" />
            <div className="plus absolute w-full h-full inset-0 
            bg-[#1abc9cd1] flex items-center justify-center text-white opacity-0
            hover:opacity-100 transition-all duration-500 rounded-[10px]">
                <i className="fa-solid fa-plus text-6xl "></i>
            </div>
        </div>
        <div className="relative">
            <img src={home2} className="rounded-[10px]" alt="" />
            <div
            onClick={()=> setOpenModal(true)}
            className="plus absolute w-full h-full inset-0 
            bg-[#1abc9cd1] flex items-center justify-center text-white opacity-0
            hover:opacity-100 transition-all duration-500 rounded-[10px]">
                <i className="fa-solid fa-plus text-6xl "></i>
            </div>
        </div>
        {/* {img.map((ele)=>{
            return (
                <Modal show={OpenModal} onClose={()=> setOpenModal(false)}>
                    <img src="" alt="" />
                </Modal>
            )
        })} */}
    </div>
    </>
    )
}