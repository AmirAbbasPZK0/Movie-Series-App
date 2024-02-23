import Item from "../components/Item/Item";
import FavReducer from "../redux/FavReducer";
import { useSelector } from "react-redux";


const Favourites = () => {

    const data = useSelector((state)=> state.fav.favourites)

    console.log(Object.values(data))

    return (<>
        <div className="favourites">
            {Object.values(data).length === 0 ? (
                <div style={{
                    display : "flex",
                    alignItems : "center",
                    justifyContent : "center",
                    height : "85vh"
                }}>
                    <h1 style={{color : "#fff"}}>It is Empty</h1>
                </div>
            ) : (
                <div>
                    <h2>Your Favourites</h2>
                    <div className="items">
                        {Object.values(data).map(item => (
                            <Item item={item} key={item.id}/>
                        ))}
                    </div>
                </div>
            )}
        </div>
    </>);
}
 
export default Favourites;