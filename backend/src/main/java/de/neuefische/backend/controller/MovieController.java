package de.neuefische.backend.controller;

import de.neuefische.backend.model.Movie;
import de.neuefische.backend.service.MovieService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/api/movies")
public class MovieController {

    private MovieService movieService;


    @GetMapping
    public List<Movie> getAllMovies(){
        return movieService.getAllMovies();
    }

}
