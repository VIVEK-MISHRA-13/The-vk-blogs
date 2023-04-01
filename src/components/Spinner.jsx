import "../spinner.css"



import React from "react";
const Spinner = () =>{
    return (
        <div className="w-screen h-screen left-0 flex  fixed flex-col justify-center items-center bg-[var(--body)] text-[var(--heading)]  ">
            <div className="spinner"></div>
            <h2 className="mt-2 font-bold">LOADING</h2>

         
        </div>
    );
}
export default Spinner; 
