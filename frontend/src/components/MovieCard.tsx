import {Movie} from "../model/Movie";
import "./MovieCard.css"

type MovieCardProps = {
    movie: Movie
    deleteMovie:(id:string)=>void
    editMovie:(id:string)=>void
}

export default function MovieCard(props:MovieCardProps){


    return(
        <div className={"movie-card"}>
            <button onClick={()=>props.deleteMovie(props.movie.id)}>X</button>
            <div>
                <img className={"movie-img"} src={props.movie.url} height="250px"/>
                <p className={"movie-title"}>{props.movie.title} ({props.movie.year})</p>
            </div>
            <form onSubmit={()=>props.editMovie(props.movie.id)}>
                <button className={"form-btn-submit"} type={"submit"}>Add</button>
            </form>

        </div>
    )
}