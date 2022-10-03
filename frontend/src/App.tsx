import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MoviesOverview from "./components/MoviesOverview";
import AddMovie from "./components/AddMovie";
import axios from "axios";
import {Movie} from "./model/Movie";
import EditMovieModal from "./modals/EditMovieModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import MovieSearch from "./components/MovieSearch";
import {Form} from "react-bootstrap";

function App() {

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
  return (
    <div className="App">
      <h1> Movies </h1>
      {
        existMovies ?
            <div>
              <div className={"search-card"}>
                <Form.Control size="sm" type="text" name={"title"} placeholder="Title" value={searchText} onChange={handleChange}/>
                <form onSubmit={handleSubmit}>
                  <input className={"search-btn"} type={"submit"} value={"Search"}/>
                </form>
              </div>
              <MoviesOverview movies={movies} deleteMovie={deleteMovie} editMovie={editMovie} searchMovie={searchMovie}/>
              <AddMovie addMovie={addMovie}/>
            </div>
        :
        <div>
          <p>There is no movie yet. Please add a movie.</p>
          <AddMovie addMovie={addMovie}/>
        </div>

      }
    </div>
  );
}

export default App;
