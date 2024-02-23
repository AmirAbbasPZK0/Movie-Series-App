import ReactDOM from 'react-dom/client'
import App from './App'
import "./index.css"
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import LogIn from './pages/LogIn'
import Home from './pages/Home'
import MoviesList from './pages/MoviesList'
import SeriesList from './pages/SeriesList'
import MovieDetails from './pages/MovieDetails'
import SeriesDetails from './pages/SeriesDetails'
import Search from './components/Search/Search'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Favourites from './pages/Favourites'


const router = createBrowserRouter([
    {
        element : <App/>,
        path : "/",
        children : [
            {
                element : <Home/>,
                path : "/"
            },
            {
                element : <LogIn/>,
                path : "/login"
            },
            {
                element : <MoviesList/>,
                path : "/movielist"
            },
            {
                element : <SeriesList/>,
                path : "/serieslist"
            },
            {
                element : <Favourites/>,
                path : "/favourites"
            },
            {
                element : <MovieDetails/>,
                path : "/movie/:movieId"
            },
            {
                element : <SeriesDetails/>,
                path : "/series/:tvId"
            },
            {
                element : <Search/>,
                path : "/s"
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<>
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
</>)