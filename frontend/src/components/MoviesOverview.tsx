import "./MoviesOverview.css"
import {Movie} from "../model/Movie";
import MovieCard from "./MovieCard";
type MoviesOverviewProps = {
    movies: Movie[];
    deleteMovie:(id:String)=>void
    editMovie:(movie:Movie)=>void
    searchMovie:string;
}

export default function MoviesOverview(props:MoviesOverviewProps){
    const searchedMovies = props.movies.filter(movie => movie.title.toLowerCase()
        .includes(props.searchMovie.toLowerCase()));

    const isMovieFound:boolean = searchedMovies.length>0
    return(
        <div className={"movie-overview"}>
            {
                isMovieFound ?
                    searchedMovies.map(
                        (movie) => {
                            return <MovieCard movie={movie} deleteMovie={props.deleteMovie}
                                              editMovie={props.editMovie}/>
                        })
                    : <h1>No Movies found!</h1>
            }
        </div>
    )
}