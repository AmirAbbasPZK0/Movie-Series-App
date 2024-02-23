import { useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginHandler } from "./redux/UserReducer";


const App = () => {

    const auth = localStorage.getItem("auth_key")

    const dispatch = useDispatch()

    if(auth){
        toast('Welcome Back', {
            position: "top-right",
            autoClose: 4000,
            type : "info",
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        dispatch(loginHandler(auth))
    }

    return (<>
        <ToastContainer/>
        <Header/>
        <Outlet/>
    </>);
}
 
export default App;