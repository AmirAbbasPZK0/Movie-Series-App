import Item from "../components/Item/Item"
import useAsync from "../hooks/useAsync";
import { useState , useEffect} from "react";
import Loading from "../components/Loading/Loading";

const SeriesList = () => {

    const [listChoose , setListChoose] = useState("top_rated")

    const {run , loading , data , error} = useAsync("GET",`tv/${listChoose}`)

    useEffect(()=>{
        run()
    },[listChoose])

    if(loading){
        return <div className="loading" style={{ backgroundColor : "#131313"}}><Loading/></div>
    }

    if(error){
        return <div>Error 404</div>
    }

    console.log(data?.data?.results)

    return (<>
        <div className="list">
            <div className="toggle">
                <button className={listChoose === "top_rated" ? "list_btn activeBtn" : "list_btn"} onClick={()=>{
                    setListChoose("top_rated")
                }}>Top Rated</button>
                <button className={listChoose === "popular" ? "list_btn activeBtn" : "list_btn"}  onClick={()=>{
                    setListChoose("popular")
                }}>Popular</button>
                <button className={listChoose === "on_the_air" ? "list_btn activeBtn" : "list_btn"}  onClick={()=>{
                    setListChoose("on_the_air")
                }}>On the air</button>
                <button className={listChoose === "airing_today" ? "list_btn activeBtn" : "list_btn"}  onClick={()=>{
                    setListChoose("airing_today")
                }}>Airing Today</button>
            </div>
            <div className="items">
                {data?.data?.results.map(item => (
                    <Item key={item.id} item={item}/>
                ))}
            </div>
        </div>
    </>);
}
 
export default SeriesList;