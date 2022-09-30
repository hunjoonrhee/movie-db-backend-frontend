package de.neuefische.backend.service;

import de.neuefische.backend.model.Movie;
import de.neuefische.backend.model.MovieDTO;
import de.neuefische.backend.repo.MovieRepository;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@SpringBootTest
class MovieServiceTest {

    MovieRepository movieRepository = mock(MovieRepository.class);
    IdService idService = mock(IdService.class);
    MovieService movieService = new MovieService(movieRepository, idService);

    @Test
    void getAllMovies_ShouldReturn_AllMoviesInRepo(){
        // GIVEN
        Movie movie1 = new Movie("1", "harry potter", "harrypotter.com", "2002");
        Movie movie2 = new Movie("2", "harry potter2", "harrypotter2.com", "2003");
        when(movieService.getAllMovies()).thenReturn(List.of(movie1, movie2));

        // WHEN
        List<Movie> actual = movieService.getAllMovies();

        // THEN
        List<Movie> expected = List.of(movie1, movie2);
        assertEquals(expected, actual);
    }

    @Test
    void addMovie_ShouldReturn_addedMovie(){

        //GIVEN
        MovieDTO movie1 = new MovieDTO("harry potter", "harrypotter.com", "2002");
        Movie expected = new Movie("1", "harry potter", "harrypotter.com", "2002");
        when(idService.generateId()).thenReturn("1");
        when(movieRepository.addMovie(any())).thenReturn(
                Movie.builder()
                        .id("1")
                        .title(movie1.getTitle())
                        .url(movie1.getUrl())
                        .year(movie1.getYear())
                        .build()
        );


        // WHEN
        Movie actual = movieService.addMovie(movie1);

        // THEN
        assertEquals(expected, actual);
    }

    @Test
    void getMovieById_ShouldReturn_MovieByGivenId(){
        //GIVEN
        MovieDTO movie1 = new MovieDTO("harry potter", "harrypotter.com", "2002");
        Movie expectedMovie = new Movie("1", "harry potter", "harrypotter.com", "2002");
        when(idService.generateId()).thenReturn("1");
        when(movieService.getMovieById("1")).thenReturn(expectedMovie);
        when(movieRepository.addMovie(any())).thenReturn(
                Movie.builder()
                        .id("1")
                        .title(movie1.getTitle())
                        .url(movie1.getUrl())
                        .year(movie1.getYear())
                        .build()
        );

        // WHEN
        movieService.addMovie(movie1);
        Movie actual = movieService.getMovieById("1");

        //THEN

        assertEquals(expectedMovie, actual);
    }

    @Test
    void deleteMovieById_ShouldReturn_DeletedMovie(){
        //GIVEN
        MovieDTO movie1 = new MovieDTO("harry potter", "harrypotter.com", "2002");
        Movie expectedMovie = new Movie("1", "harry potter", "harrypotter.com", "2002");
        when(movieService.deleteMovieById("1")).thenReturn(expectedMovie);
        when(movieRepository.addMovie(any())).thenReturn(
                Movie.builder()
                        .id("1")
                        .title(movie1.getTitle())
                        .url(movie1.getUrl())
                        .year(movie1.getYear())
                        .build()
        );

        // WHEN
        Movie actual = movieService.deleteMovieById("1");

        //THEN
        assertEquals(expectedMovie, actual);
    }
}