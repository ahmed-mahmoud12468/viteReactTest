import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar(){
  return<>
  <nav className="bg-[#2c3e50] text-white p-[24px]">
  <div className="container flex flex-row justify-between items-center">
    <h2>
      <Link to="/" className="text-[31px] font-bold" >START FRAMEWORK</Link>
    </h2>
    <ul className="text-[16px] font-bold flex lg:flex-row justify-between items-center gap-5 sm:flex-col">
      <li>
        <NavLink to="/about" className="p-[8px]" >ABOUT</NavLink>
      </li>
      <li>
        <NavLink to="/portfolio" className="p-[8px]">PORTFOLIO</NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="p-[8px]">CONTACT</NavLink>
      </li>
    </ul>
  </div>
  </nav>
  
  </>
}



