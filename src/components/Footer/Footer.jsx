export default function Footer(){
    return<>
    <div className="bg-[#2c3e50] text-white p-[40px]">
    <div className="container flex justify-around text-center">
        <div className="location w-[350px] p-[16px] mb-[8]">
            <h3 className="text-[26px] font-bold pt-[20px]">LOCATION</h3>
            <p className="mb-[16px]">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
        </div>
        <div className="web w-[350px] p-[16px] mb-[8]">
            <h3 className="text-[26px] font-bold pt-[20px]">AROUND THE WEB</h3>
            <div className="links flex justify-center">
            <i className="fa-brands fa-facebook icon"></i>
            <i className="fa-brands fa-twitter icon "></i>
            <i className="fa-brands fa-linkedin-in icon"></i>
            <i className="fa-solid fa-globe icon"></i>
            </div>
        </div>
        <div className="about w-[350px] p-[16px] mb-[8]">
            <h3 className="text-[26px] font-bold pt-[20px]">ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
    </div>


    </div>


    <div className="bg-black text-white p-[20px] text-center">
        <p>Copyright © Your Website 2021</p>
    </div>

    </>
}