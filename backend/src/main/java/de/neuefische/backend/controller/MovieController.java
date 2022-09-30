package de.neuefische.backend.controller;

import de.neuefische.backend.model.Movie;
import de.neuefische.backend.model.MovieDTO;
import de.neuefische.backend.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
public class MovieController {

    private MovieService movieService;
    @Autowired
    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping
    public List<Movie> getAllMovies(){
        return movieService.getAllMovies();
    }

    @GetMapping("/{id}")
    public Movie getMovieById(@PathVariable String id){
        return movieService.getMovieById(id);
    }

    @PostMapping
    public Movie addMovie(@RequestBody MovieDTO newMovie){
        return movieService.addMovie(newMovie);
    }

    @DeleteMapping("{id}")
    public Movie deleteMovieById(@PathVariable String id){
        return movieService.deleteMovieById(id);
    }

}
