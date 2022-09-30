package de.neuefische.backend.repo;

import de.neuefische.backend.model.Movie;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class MovieRepository {
    private Map<String, Movie> movies = new HashMap<>();

    public List<Movie> getAllMovies(){
        return new ArrayList<>(movies.values());
    }

    public Movie addMovie(Movie movie) {
        movies.put(movie.getId(), movie);
        return movie;
    }
}
