import React, { useContext } from "react";
import Spinner from "./Spinner";
import { AppContext } from "../context/AppContext";
// import "../App.js";

const Blogs= () =>{

    //consume
    const {posts,loading} = useContext(AppContext);

return(
    <div className="w-full h-full bg-[var(--blog)] flex justify-center">
        
    <div className="w-11/12  max-w-[670px] py-8 flex flex-col  gap-y-7 mt-[66px] mb-[70px] bg-[var(--bg-blog)] ">
        {
            loading ? 
            (<Spinner/>) :
            (
                posts.length===0 ?
                (<div>
                
                    <p>No Post Found</p>
                </div>):
                (posts.map((post)=>(

                    <div key={post.id}>
                        <p className="font-bold text-lg text-[var(--title)]">{post.title}</p>
                        <p className="text-sm mt-[4px] text-[var(--text)]">
                            By <span className="italic text-[var(--text)">{post.author}</span> on <span className="underline font-bold text-[var(--text)]">{post.category}</span>
                        </p>
                        <p className="text-sm mt-[4px] text-[var(--text)]">Posted on {post.date}</p>
                        <p className="text-md mt-[14px] text-[var(--text)]">{post.content}</p>
                        <div className="flex gap-x-3">
                            {post.tags.map((tag,index)=>{
                                return <span key={index} className="text-[var(--heading)] underline font-bold text-xs mt-[5px] ">{`#${tag}`}</span>
                            })}
                        </div>
                    </div>
                )))
            )
        }
        
    </div>
    </div>
);
}

export default Blogs;