package de.neuefische.backend.service;

import de.neuefische.backend.model.Movie;
import de.neuefische.backend.model.MovieDTO;
import de.neuefische.backend.repo.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

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
        return movieRepository.findAll();
    }

    public Movie addMovie(MovieDTO movie) {
        Movie newMovie = Movie.builder()
                .id(idService.generateId())
                .title(movie.getTitle())
                .url(movie.getUrl())
                .videoUrl(movie.getVideoUrl())
                .year(movie.getYear())
                .build();
        return movieRepository.save(newMovie);
    }

    public Movie getMovieById(String id) {

//        Optional<Movie> foundedMovie = movieRepository.findById(id);
//        if(foundedMovie.isPresent()){
//            return foundedMovie.get();
//        }else{
//            throw new NoSuchElementException("No Movie with id "+ id);
//        }
        return movieRepository.findById(id)
                .orElseThrow(()->new NoSuchElementException("No Movie with id: "+ id));
    }

    public void deleteMovieById(String id) {
        movieRepository.deleteById(id);
    }

    public Movie updateMovie(Movie movie) {
        return movieRepository.save(movie);
    }
}
