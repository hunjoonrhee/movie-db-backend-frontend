import {Movie} from "../model/Movie";
import "./MovieCard.css"
import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import EditMovieModal from "../modals/EditMovieModal";
import {Link} from "react-router-dom";
import ReactCardFlip from 'react-card-flip';

type MovieCardProps = {
    movie: Movie
    deleteMovie: (id: string) => void
    editMovie: (movie: Movie) => void
}

export default function MovieCard(props: MovieCardProps) {

    const [editModalOn, setEditModalOn] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);

    const onRotate = () => {
        setIsFlipped((flipped) => !flipped);
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection={"horizontal"}>
                <div className={"front"} onClick={onRotate}>
                    <>
                        <EditMovieModal show={editModalOn} onHide={() => setEditModalOn(false)} id={props.movie.id}
                                        editMovie={props.editMovie}/>
                    </>
                    <Button className={"btn-delete"} onClick={() => props.deleteMovie(props.movie.id)}>X</Button>
                    <div>
                        <Link to={"/" + props.movie.id}>
                            <img className={"movie-img"} src={props.movie.url} height="250px"
                                 alt={"movie-img"}/>
                        </Link>
                        <p className={"movie-title"}>{props.movie.title} ({props.movie.year})</p>
                    </div>
                    <form>
                        <Button className={"btn-edit"} onClick={() => setEditModalOn(true)}>Edit</Button>
                    </form>
                </div>
            <div className={"back"} onClick={onRotate}>
                <p> Das ist die Rückseite der Karte!!!</p>
            </div>
        </ReactCardFlip>

    )
}