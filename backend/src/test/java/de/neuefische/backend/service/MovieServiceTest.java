package de.neuefische.backend.service;

import de.neuefische.backend.model.Movie;
import de.neuefische.backend.repo.MovieRepository;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@SpringBootTest
class MovieServiceTest {

    MovieRepository movieRepository = mock(MovieRepository.class);
    IdService idService = mock(IdService.class);
    MovieService movieService = new MovieService(movieRepository);

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

}