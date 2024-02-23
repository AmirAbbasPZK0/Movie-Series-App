import { useState } from "react";
import axios from "axios";
import { API_KEY, MAIN_API } from "../libs/contants";


const useAsync = (method = "GET" , innerUrl , query = null) => {

    const [data , setData] = useState([])
    const [error , setError] = useState(false)
    const [loading , setLoading] = useState(true)


    const run = () => {
        if(query === null){
            return new Promise((res , rej)=>{
                axios({
                    method,
                    url : MAIN_API + innerUrl + "?api_key=" + API_KEY,
                }).then(resData => {
                    setData(resData)
                    setLoading(false)
                    res(resData)
                }).catch(() => {
                    setError(true)
                    setLoading(false)
                    rej("error")
                })
            })
        }else{
            return new Promise((res , rej)=>{
                axios({
                    method,
                    url : MAIN_API + innerUrl + "?api_key=" + API_KEY+ "&query=" + query,
                }).then(resData => {
                    setData(resData)
                    setLoading(false)
                    res(resData)
                }).catch(() => {
                    setError(true)
                    setLoading(false)
                    rej("error")
                })
            })
        }
    }

    return {data , error , loading , run}

}
 
export default useAsync;