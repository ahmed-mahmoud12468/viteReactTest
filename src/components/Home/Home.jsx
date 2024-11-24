import img1 from '../../imgs/avatar.webp'
export default function Home(){

    return(<>
    <div className="home bg-[#1abc9c] p-9 flex flex-col justify-center items-center gap-9">
        <div className="">
        <img  src= {img1} alt="" />
        </div>
        <div className="home-body flex flex-col justify-center items-center gap-5">
            <h2 className="text-center font-bold text-white text-4xl">START FRAMEWORK </h2>
        <div className="line flex items-center justify-center w-full">
            <div className="w-[100px] h-[2px] bg-white"></div>
            <i className="fa-solid fa-star text-white mx-4"></i>
            <div className="w-[100px] h-[2px] bg-white"></div>
        </div>
            <h3 className="text-center text-white">Graphic Artist - Web Designer - Illustrator</h3>
        </div>

    </div>
    </>
    )
}