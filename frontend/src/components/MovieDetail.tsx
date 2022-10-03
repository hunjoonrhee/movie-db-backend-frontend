import {Link, useParams} from "react-router-dom";
import {Movie} from "../model/Movie";

type MovieDetailProps = {
    movies: Movie[];
}

export default function MovieDetail(props:MovieDetailProps){

    const params = useParams();
    const id = params.id;

    if(id===undefined){
        return <>Id is not defined!</>
    }
    const movie = props.movies.find(movie=>movie.id === id);

    if(movie=== undefined){
        return <>Movie was not found!</>
    }

    return(
        <div >
            <Link to={"/"}>❮ Back</Link>
            <p className={"name"}>{movie.title}</p>
            <iframe width="1280" height="640" src="https://www.youtube.com/embed/uUhB2C-DpOw"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </div>
    )
}
