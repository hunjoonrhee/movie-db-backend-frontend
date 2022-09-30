package de.neuefische.backend.service;

import de.neuefische.backend.model.Movie;
import de.neuefische.backend.model.MovieDTO;
import de.neuefische.backend.repo.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    private MovieRepository movieRepository;
    private IdService idService;
    @Autowired
    public MovieService(MovieRepository movieRepository, IdService idService) {
        this.movieRepository = movieRepository;
        this.idService=idService;
    }

    public List<Movie> getAllMovies() {
        return movieRepository.getAllMovies();
    }

    public Movie addMovie(MovieDTO movie) {
        Movie newMovie = Movie.builder()
                .id(idService.generateId())
                .title(movie.getTitle())
                .url(movie.getUrl())
                .year(movie.getYear())
                .build();
        return movieRepository.addMovie(newMovie);
    }
}
