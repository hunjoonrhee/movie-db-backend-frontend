import {Movie} from "../model/Movie";
import "./MovieCard.css"
import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import EditMovieModal from "../modals/EditMovieModal";
import {Link} from "react-router-dom";

type MovieCardProps = {
    movie: Movie
    deleteMovie:(id:string)=>void
    editMovie:(movie:Movie)=>void
}

export default function MovieCard(props:MovieCardProps){

    const [editModalOn, setEditModalOn] = useState(false);

    return(
        <div className={"movie-card"}>
            <>
                <EditMovieModal show={editModalOn} onHide={()=>setEditModalOn(false)} id={props.movie.id} editMovie={props.editMovie}/>
            </>
            <Button className={"btn-delete"} onClick={()=>props.deleteMovie(props.movie.id)}>X</Button>
            <div>
                <Link to={"/"+ props.movie.id}>
                    <img className={"movie-img"} src={props.movie.url} height="250px" alt={"movie-img"}/>
                </Link>
                <p className={"movie-title"}>{props.movie.title} ({props.movie.year})</p>
            </div>
            <form>
                <Button className={"btn-edit"} onClick={()=>setEditModalOn(true)}>Edit</Button>
            </form>

        </div>
    )
}