import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import axios from "axios";
import {Movie} from "../model/Movie";

export default function useMovies(){
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [searchMovie, setSearchMovie] = useState("");
    useEffect(()=>{
        getAllMovies()
    }, [])

    const getAllMovies = () =>{
        axios.get("/api/movies")
            .then((response)=> {return response.data})
            .then((movies)=>setMovies(movies))
            .catch((error)=>console.error(error));
    }


    const addMovie=(newMovie:Movie)=> {
        axios.post("/api/movies", newMovie)
            .then(getAllMovies)
            .catch((error)=>console.error(error));
        console.log(newMovie +"ist hinzugefügt!!!")
    }

    const deleteMovie = (id:String) =>{
        axios.delete("/api/movies/"+id)
            .then(getAllMovies)
    }

    const editMovie = (movie:Movie)=>{
        axios.put("/api/movies/"+movie.id, movie)
            .then(getAllMovies)

    }
    const handleChange=(event:ChangeEvent<HTMLInputElement>)=> {
        setSearchText(event.target.value);
    }

    const handleSubmit=(event:FormEvent<HTMLFormElement>)=> {
        event.preventDefault()
        setSearchMovie(searchText);
    }

    const existMovies: boolean = movies.length>0;

    return {searchText, searchMovie, movies, addMovie, deleteMovie, editMovie, handleChange, handleSubmit, existMovies}
}