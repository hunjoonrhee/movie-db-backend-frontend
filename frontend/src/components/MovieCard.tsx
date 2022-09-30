import {Movie} from "../model/Movie";
import "./MovieCard.css"

type MovieCardProps = {
    movie: Movie
}

export default function MovieCard(props:MovieCardProps){
    return(
        <div className={"movie-card"}>
            <div>
                <img className={"movie-img"} src={props.movie.url} height="250px"/>
                <p>{props.movie.title} ({props.movie.year})</p>
            </div>

        </div>
    )
}