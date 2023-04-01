import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";
 
// const back = document.querySelector("light-theme");

 export const AppContext = createContext();


 function AppContextProvider({children}) {

    const [loading, setloading] = useState(false);
    const [posts,setPosts] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(null);
    const [click,isClicked] = useState(true);
     const [theme,setTheme] = useState("light-theme");
    
     
    useEffect(()=>{
        document.body.className=theme;
        
    },[theme]);

    

    

    function isClickedHandler() {
     
        click?(isClicked(false)):(isClicked(true))

    
        if (theme==="light-theme"){
            setTheme("dark-theme");
        }
        else{
           setTheme("light-theme");
        }
        
   
    }



    // data filling pending

    async function fetchBlogPost(page = 1){
        setloading(true);
        let url = `${baseUrl}?page=${page}`;
        try{
            const result = await fetch(url);

            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch(error){
            console.log("Error in fetching data");
                setPage(1);
                setPosts([]);
            setTotalPages(null);
        }
        setloading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogPost(page);

    }
    const value = {
        posts,
        setPosts,
        loading,
        setloading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPost,
        handlePageChange,
        click,
        isClicked,
        isClickedHandler,
        
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
 }

 export default AppContextProvider;