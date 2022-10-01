import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MoviesOverview from "./components/MoviesOverview";
import AddMovie from "./components/AddMovie";
import axios from "axios";
import {Movie} from "./model/Movie";
import EditMovieModal from "./modals/EditMovieModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {

  const [movies, setMovies] = useState([]);
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
  }

  const deleteMovie = (id:String) =>{
    axios.delete("/api/movies/"+id)
        .then(getAllMovies)
  }

  const editMovie = (movie:Movie)=>{
    axios.put(`/api/movies/{movie.id}`, movie)
  }

  const existMovies: boolean = movies.length>0;
  return (
    <div className="App">
      <h1> Movies </h1>
      {
        existMovies ?
            <div>
              <MoviesOverview movies={movies} deleteMovie={deleteMovie} editMovie={editMovie}/>
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
