import { useEffect , useState } from 'react';
import useAsync from '../../hooks/useAsync'
import { SEARCH_QUERY } from '../../libs/contants';
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from 'react-router-dom';
import "./Search.css"
import { debounce } from 'lodash';
import useFilter from '../../hooks/useFilter';


const Search = () => {

    const {onChangeFilter} = useFilter()

    const [search , setSearch] = useState("")

    const debounceController = debounce(()=>{
        run()
    },400)

    const {run , data} = useAsync("GET" , SEARCH_QUERY , search)

    useEffect(()=>{
        debounceController()
    },[search])


    const searchHandler = (e) => {
        setSearch(e.target.value.toLowerCase())
        onChangeFilter("search",e.target.value)
    }

    return (<>
        <div className='search'>
            <div className='search_area'>
                <div className="searchBox">
                    <input onChange={(e)=>{
                        searchHandler(e)
                    }} className="searchInput" type="text" name="" placeholder="Search Movie , Series"/>
                    <button className="searchButton" href="#"><BiSearchAlt2/></button>
                </div>
            </div>
            <div className='results_area'>
                {data?.data?.results?.map(item => (
                    <Link className='results' to={item.title ? "/movie/"+item.id : "/series/"+item.id} key={item.id}>
                        <h4>{item.title || item.name} - {item.release_date || item.first_air_date}</h4>
                    </Link>
                ))}
            </div>
        </div>
    </>);
}
 
export default Search;