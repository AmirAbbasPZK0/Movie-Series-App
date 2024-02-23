import "./Item.css"
import { Link } from "react-router-dom";
import { IMAGE_KEY } from "../../libs/contants";
import { useSelector } from "react-redux";


const Item = ({item}) => {

    const isLogin = useSelector(state => state.user.isLogin)

    return (<>
        <Link to={isLogin ? item.title ? "/movie/"+item.id : "/series/"+item.id : "/login"} className="card">
            <img src={IMAGE_KEY + item.poster_path} className="card-img"/>
            <p className="heading">
                {item.title || item.name}
            </p>
            <p>
                Original Languege : {item.original_language}
            </p>
            <p>{item.vote_average === 0 ? "Comming Soon" : item.vote_average}
            </p>
        </Link>
    </>);
}
 
export default Item;