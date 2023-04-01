import React, { useContext } from "react";
import {FiSun,FiMoon} from "react-icons/fi";
import { AppContext } from "../context/AppContext";
// import "../App.css";

const Header = () =>{

    const {click,isClickedHandler} = useContext(AppContext);

 
   

return(
    <div className="border border-[var(--nav-br)] fixed shadow-md  w-full py-4 bg-[var(--bg-nav)] top-0 text-[var(--heading)]">
        <header className="text-center flex justify-center gap-8 items-center">
        <h1 className="text-3xl font-bold ">THE <span className="text-[var(--s-heading)]">VK BLOGS</span> </h1>
        <button className="text-[var(--img-col)]" onClick={()=>{isClickedHandler()}} >{click?(<FiMoon size={40}/>):(<FiSun size={40}/>)}</button>
        </header>
  
    </div>
);

}

export default Header;