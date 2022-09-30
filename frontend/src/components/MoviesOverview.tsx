
import "./MoviesOverview.css"
import {Movie} from "../model/Movie";
import MovieCard from "./MovieCard";
type MoviesOverviewProps = {
    movies: Movie[];
    deleteMovie:(id:String)=>void
    editMovie:(id:String)=>void
}

export default function MoviesOverview(props:MoviesOverviewProps){
    return(
        <div className={"movie-overview"}>
            {props.movies.map(
                (movie) => <MovieCard movie = {movie} deleteMovie={props.deleteMovie} editMovie={props.editMovie}/>
            )}
        </div>
    )
}