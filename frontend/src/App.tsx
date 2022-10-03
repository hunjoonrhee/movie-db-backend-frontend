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
import useMovies from "./hooks/useMovies";
import {HashRouter, Route, Routes} from "react-router-dom";
import MovieDetail from "./components/MovieDetail";

function App() {
  const {searchText, searchMovie, movies,
    addMovie, deleteMovie, editMovie, handleChange, handleSubmit, existMovies} = useMovies()

  return (
    <div className="App">
      <h1> Movies </h1>
      {
        existMovies ?
            <HashRouter>
              <Routes>
                <Route path={"/"} element={
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
                }/>
                <Route path={"/:id"} element={<MovieDetail movies={movies}/>}/>

              </Routes>
            </HashRouter>


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
