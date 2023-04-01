import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css"
export default function App() {
  const {fetchBlogPost} = useContext(AppContext);

  useEffect(()=>{
    fetchBlogPost();
  },[]);
  return (
    <div className="w-full h-full flex flex-col gap-y-1  items-center justify-center bg-[var(--bg-blog)] overflow-y-hidden ">
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  );
}

