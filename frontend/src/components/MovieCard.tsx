import {Movie} from "../model/Movie";
import "./MovieCard.css"
import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import EditMovieModal from "../modals/EditMovieModal";

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
                <img className={"movie-img"} src={props.movie.url} height="250px"/>
                <p className={"movie-title"}>{props.movie.title} ({props.movie.year})</p>
            </div>
            <form>
                <Button className={"btn-edit"} onClick={()=>setEditModalOn(true)}>Edit</Button>
            </form>

        </div>
    )
}