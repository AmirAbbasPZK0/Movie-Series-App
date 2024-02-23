import { useParams } from "react-router-dom";
import useAsync from "../hooks/useAsync";
import { useEffect } from "react";
import Loading from "../components/Loading/Loading";
import { IMAGE_KEY } from "../libs/contants";
import { addToFav } from "../redux/FavReducer";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";


const SeriesDetails = () => {

    const {tvId} = useParams()
    const dispatch = useDispatch()


    const {error , loading , data , run} = useAsync("GET","tv/"+tvId)

    useEffect(()=>{
        run()
    },[])

    if(loading){
        return <div className="loading" style={{ backgroundColor : "#131313"}}><Loading/></div>
    }
    if(error){
        return <div>Error 404</div>
    }

    return (<>
        <div className="details">
            <img src={IMAGE_KEY + data?.data?.backdrop_path} alt="" />
            <div className="innerDetails">
                <img src={IMAGE_KEY + data?.data?.poster_path} alt="" />
                <div className="texts">
                    <h4>{data?.data?.name}</h4>
                    <h2>{data?.data?.tagline}</h2>
                    <p>{data?.data?.overview}</p>
                    <ul className="genres">
                        {data?.data?.genres.map(item => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                    <p>Rating : {data?.data?.vote_average}</p>
                    <button onClick={()=>{
                        dispatch(addToFav(data?.data))
                        toast('Item Added ❤', {
                            position: "top-right",
                            autoClose: 5000,
                            type : "danger",
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    }}>Add to Favourites</button>
                </div>
            </div>
        </div>
    </>);
}
 
export default SeriesDetails;