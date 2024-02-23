
import { useEffect } from 'react';
import useAsync from '../hooks/useAsync'
import { IMAGE_KEY } from '../libs/contants';
import Loading from '../components/Loading/Loading';

const Home = () => {

    const {error , loading , data , run} = useAsync("GET" , "movie/top_rated");

    useEffect(()=>{
        run()
    },[])

    if(loading){
        return <div className='loading' style={{ backgroundColor : "#131313"}}><Loading/></div>
    }

    if(error){
        return <div>error</div>
    }

    const randomNumber = Math.floor(Math.random() * 9);

    console.log(randomNumber)
    
    return(<>
        <div className='main'>
            <div style={{backgroundImage : `url("${IMAGE_KEY + data?.data?.results?.[randomNumber]?.backdrop_path}")`}} className='home'>
                <div>
                    <h1>Welcome</h1>
                    <p>in this website you can find any movie and series that you want!</p>
                </div>
            </div>
        </div>
    </>)
}
 
export default Home;