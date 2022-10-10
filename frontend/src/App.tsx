import './App.css';
import MoviesOverview from "./components/MoviesOverview";
import AddMovie from "./components/AddMovie";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Pagination} from "react-bootstrap";
import useMovies from "./hooks/useMovies";
import {HashRouter, Route, Routes} from "react-router-dom";
import MovieDetail from "./components/MovieDetail";
import {useState} from "react";
import Page from "./components/Page";

function App() {
  const {searchText, searchMovie, movies,
    addMovie, deleteMovie, editMovie, handleChange, handleSubmit, existMovies} = useMovies()

    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(4);

    const lastCardIndex = currentPage * cardsPerPage;
    const firstCardIndex = lastCardIndex - cardsPerPage;
    const currentCards = movies.slice(firstCardIndex, lastCardIndex)

  return (
      <div className="App">
        <header>
          <h1 className={"website-title"}> Movies </h1>
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
                        <MoviesOverview movies={currentCards } deleteMovie={deleteMovie} editMovie={editMovie} searchMovie={searchMovie}/>
                        <AddMovie addMovie={addMovie}/>
                      </div>
                    }/>
                    <Route path={"/:id"} element={<MovieDetail movies={movies}/>}/>

                  </Routes>
                    <Page totalCards={movies.length}
                          cardsPerPage={cardsPerPage}
                          setCurrentPage={setCurrentPage}
                          currentPage={currentPage}/>
                </HashRouter>


                :
                <div>
                  <p>There is no movie yet. Please add a movie.</p>
                  <AddMovie addMovie={addMovie}/>
                </div>



          }

        </header>
      </div>

  );
}

export default App;
