import { useSearchParams } from "react-router-dom"

const useFilter = () => {
    
    const [search , setSearch] = useSearchParams()

    const parseUrl = (url) => {
        if(!url){
            return {}
        }

        return url?.slice(1)?.split("&")?.reduce((acc , curr)=>{
            const seperated = curr?.split("=")
            return {...acc , [seperated[0]] : seperated[1]?.split("+")}
        } , {})
    }

    const stringiFyUrl = (urlData) => {
        const data = Object.entries(urlData)
        return data.reduce((acc , curr , index)=>{
            const isEnd = index + 1 === data.length
            return acc + curr[0] + "=" + curr[1]?.join("+") + (isEnd ? "" : "&")
        },"?")
    }

    const onChangeFilter = (name , value) => {
        const url = window.location.search
        const parsedUrl = parseUrl(url || "")
        if(value !== ""){
            parsedUrl[name] = [value]
        }else{
            delete parsedUrl[name]
        }
        setSearch(stringiFyUrl(parsedUrl))
    }

    return {parseUrl , stringiFyUrl , onChangeFilter}

}
export default useFilter;