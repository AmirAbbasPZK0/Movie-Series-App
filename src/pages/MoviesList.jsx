import { useEffect, useState } from "react";
import useAsync from "../hooks/useAsync";
import Item from "../components/Item/Item";
import Loading from "../components/Loading/Loading";

const MoviesList = () => {
    
    const [listChoose , setListChoose] = useState("top_rated")

    const {run , loading , data , error} = useAsync("GET",`movie/${listChoose}`)

    useEffect(()=>{
        run()
    },[listChoose])

    if(loading){
        return <div className="loading" style={{ backgroundColor : "#131313"}}><Loading/></div>
    }

    if(error){
        return <div>Error 404</div>
    }

    return (<>
        <div className="list">
            <div className="toggle">
                <button className={listChoose === "top_rated" ? "list_btn activeBtn" : "list_btn"} onClick={()=>{
                    setListChoose("top_rated")
                }}>Top Rated</button>
                <button className={listChoose === "popular" ? "list_btn activeBtn" : "list_btn"}  onClick={()=>{
                    setListChoose("popular")
                }}>Popular</button>
                <button className={listChoose === "upcoming" ? "list_btn activeBtn" : "list_btn"}  onClick={()=>{
                    setListChoose("upcoming")
                }}>Up Coming</button>
            </div>
            <div className="items">
                {data?.data?.results.map(item => (
                    <Item item={item} key={item.id}/>
                ))}
            </div>
        </div>
    </>);
}
 
export default MoviesList;