import { useState } from "react";
import "./Header.css"
import {FaTimes , FaBars} from 'react-icons/fa'
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import {useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";


const Header = () => {

    const [click , setClick] = useState(false)

    const navigate = useNavigate()

    const isLogin = useSelector(state => state.user.isLogin)

    const clickHandler = () => {
        setClick(item => !item)
    }

    return (<>
        <nav className="navbar">
            <div className="navbar__container">
                <Link className="navbar__logo">Top Land</Link>
                <span onClick={clickHandler} className="mobile-btn">{click ? <FaTimes/> : <FaBars/>}</span>
                <ul className={click ? "navbar__menu active" : "navbar__menu"}>
                    <li className="navbar__item">
                        <Link to={"/s"}><button className="navbar__btn"><BiSearchAlt2 className="search_btn"/></button></Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to={"/movielist"}>Movie</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to={"/serieslist"}>TV</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to={"/favourites"}>Favourites</Link>
                    </li>
                    <li className="navbar__item">
                        {isLogin ? (
                            <button onClick={()=>{
                                localStorage.removeItem("auth_key")
                                navigate("/")
                                window.location.reload()
                            }} className="navbar__btn">Log out</button>
                        ) : (
                            <Link to={"/login"}><button className="navbar__btn">Log in</button></Link>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    </>);
}
 
export default Header;