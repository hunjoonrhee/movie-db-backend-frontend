package de.neuefische.backend.service;

import de.neuefische.backend.model.Movie;
import de.neuefische.backend.repo.MovieRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    private MovieRepository movieRepository;
    public List<Movie> getAllMovies() {
        return movieRepository.getAllMovies();
    }
}
