import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginHandler } from "../redux/UserReducer";
import { useNavigate } from "react-router-dom";


const LogIn = () => {

    const {handleSubmit , formState , register} = useForm({
        defaultValues : async () => {
            return {
                username : "mor_2314",
                password : "83r5^_"
            }
        }
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {errors} = formState

    const fetchHandlerForLogin = (url , innerUserData) => {
        return new Promise(resolve=>{
            fetch(url , {
                method : "POST",
                body : JSON.stringify(innerUserData),
                headers : {
                    "Content-Type" : "application/json"
                }
            }).then(res => res.json())
            .then(data => {
                resolve(data)
            })
        })
    }

    const onSubmit = (e) => {
        fetchHandlerForLogin("https://fakestoreapi.com/auth/login" , e).then(res => {
            toast('Successfull', {
                position: "top-right",
                autoClose: 5000,
                type : "success",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            localStorage.setItem("auth_key" , res.token)
            dispatch(loginHandler(res.token))
            navigate("/")
        })
    }

    return (<>
        <div className="register">
            <div className="register_login">
                <div className="form-texts">
                        <h1>log in to our website</h1>
                        <h4>And use your account for extra services</h4>
                </div>
                <div className="login">
                    <form className="form" onSubmit={handleSubmit(onSubmit)} action="">
                        <p>User name:</p>
                        <label htmlFor="">
                            <input {...register("username" , {
                                required : {
                                    value : true,
                                    message : "User name is Required"
                                }
                            })} type="text" placeholder="User Name"/>
                            <p style={{color : "red"}}>{errors.username?.message}</p>
                        </label>
                        <label htmlFor="">
                            <p>Password:</p>
                            <input {...register("password" , {
                                required : {
                                    value : true,
                                    message : "Password is Required"
                                }
                            })} type="password" placeholder="Password"/>
                            <p style={{color : "red"}}>{errors.password?.message}</p>
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </>);
}
 
export default LogIn;