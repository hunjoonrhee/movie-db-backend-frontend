package de.neuefische.backend.repo;

import de.neuefische.backend.model.Movie;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public interface MovieRepository extends MongoRepository<Movie, String> {
//    private Map<String, Movie> movies = new HashMap<>();
//
//    public List<Movie> getAllMovies(){
//        return new ArrayList<>(movies.values());
//    }
//
//    public Movie addMovie(Movie movie) {
//        movies.put(movie.getId(), movie);
//        return movie;
//    }
//
//    public Movie getMovieById(String id) {
//        return movies.get(id);
//    }
//
//    public Movie deleteMovieById(String id) {
//        Movie deletedMovie = movies.get(id);
//        movies.remove(id);
//        return deletedMovie;
//    }
//
//    public Movie updateMovie(Movie movie) {
//        movies.put(movie.getId(), movie);
//        return movie;
//    }
}
