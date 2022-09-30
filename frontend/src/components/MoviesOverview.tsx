
import "./MoviesOverview.css"
import {Movie} from "../model/Movie";
import MovieCard from "./MovieCard";
type MoviesOverviewProps = {
    movies: Movie[];
}

export default function MoviesOverview(props:MoviesOverviewProps){
    return(
        <div className={"movie-overview"}>
            {props.movies.map(
                (movie) => <MovieCard movie = {movie}/>
            )}
        </div>
    )
}