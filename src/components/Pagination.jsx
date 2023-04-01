import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination= () =>{

    const {page,handlePageChange,totalPages} = useContext(AppContext);

return(
    <div className="w-full border border-[var(--nav-br)] flex justify-center shadow-md rotate-180 fixed bottom-0 bg-[var(--bg-nav)]">
        
    <div className="flex justify-between w-11/12 max-w-[670px] rotate-180 py-3 ">
        <div  className="flex gap-3">
            {
                page >1 &&
                <button
                className="rounded-md bg-[#6674cc] text-white border border-gray-500 px-4 py-1 "  onClick={()=>handlePageChange(page-1)}>
                    Previous
                </button>
            }
            {
                page < totalPages &&
                <button  className="rounded-md  text-[var(--title)]  px-4 py-1 border border-gray-500   "  onClick={()=>handlePageChange(page+1)}>
                    Next
                </button>
            }
           
        </div>
        <div>
                
                <p className="text-[var(--heading)]">
                    Page {page} of {totalPages}
                </p>
                </div>
    </div>
    </div>
);
}

export default Pagination;