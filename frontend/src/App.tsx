import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MoviesOverview from "./components/MoviesOverview";
import AddMovie from "./components/AddMovie";
import axios from "axios";
import {Movie} from "./model/Movie";

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

  return (
    <div className="App">
      <h1> Movies </h1>

        <MoviesOverview movies = {movies}/>
        <AddMovie addMovie={addMovie}/>

    </div>
  );
}

export default App;
