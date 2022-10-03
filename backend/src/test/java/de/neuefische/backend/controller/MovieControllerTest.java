package de.neuefische.backend.controller;

import de.neuefische.backend.model.Movie;
import de.neuefische.backend.repo.MovieRepository;
import de.neuefische.backend.service.IdService;
import de.neuefische.backend.service.MovieService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class MovieControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private MovieService movieService;

    @MockBean
    private IdService idService;

    @Test
    void addMovie() throws Exception {
        // GIVEN
        when(idService.generateId()).thenReturn("1");

        String requestBody = """
                {
                "title": "harry potter",
                "url": "www.harrypotter.com",
                "videoUrl":"www.harrypotter.com",
                "year":"2009"
                }
        """;

        String expectedJSON = """
                {
                "id": "1",
                "title": "harry potter",
                "url": "www.harrypotter.com",
                "videoUrl":"www.harrypotter.com",
                "year":"2009"
                }
        """;

        //WHEN THEN

        mockMvc.perform(
                post("/api/movies")
                        .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJSON));


    }
    @Test
    void getAllMovie() throws Exception {
        // GIVEN
        movieRepository.addMovie(new Movie("1", "harry potter", "www.harrypotter.com", "www.harrypotter.com", "2009"));
        movieRepository.addMovie(new Movie("2", "harry potter2", "www.harrypotter2.com", "www.harrypotter2.com", "2007"));

        String expectedJSON = """
                [
                    {
                    "id": "1",
                    "title": "harry potter",
                    "url": "www.harrypotter.com",
                    "videoUrl":"www.harrypotter.com",
                    "year":"2009"
                    },
                    {
                    "id": "2",
                    "title": "harry potter2",
                    "url": "www.harrypotter2.com",
                    "videoUrl":"www.harrypotter2.com",
                    "year":"2007"
                    }
                ]
        """;

        //WHEN THEN

        mockMvc.perform(
                        get("/api/movies"))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJSON));


    }

    @Test
    void deleteMovie() throws Exception {
        // GIVEN
        Movie movie1 = new Movie("1", "harry potter", "www.harrypotter.com", "www.harrypotter.com", "2009");
        Movie movie2 = new Movie("2", "harry potter2", "www.harrypotter2.com", "www.harrypotter2.com", "2007");
        movieRepository.addMovie(movie1);
        movieRepository.addMovie(movie2);
        movieRepository.deleteMovieById("2");


        //WHEN

        mockMvc.perform(delete("/api/movies/2"));

        List<Movie> actual = movieRepository.getAllMovies();
        assertEquals(actual, List.of(movie1));


    }

    @Test
    void updateMovie() throws Exception {
        // GIVEN
        Movie movie1 = new Movie("1", "harry potter", "www.harrypotter.com","www.harrypotter.com", "2009");
        Movie movie2 = new Movie("2", "harry potter2", "www.harrypotter2.com","www.harrypotter2.com", "2007");
        movieRepository.addMovie(movie1);
        movieRepository.addMovie(movie2);

        String requestBody = """
                {
                "id":"1",
                "title": "harry potter2",
                "url": "www.harrypotter.com",
                "videoUrl":"www.harrypotter.com",
                "year":"2009"
                }
        """;

        String expectedJSON = """
                {
                "id": "1",
                "title": "harry potter2",
                "url": "www.harrypotter.com",
                "videoUrl":"www.harrypotter.com",
                "year":"2009"
                }
        """;


        //WHEN

        mockMvc.perform(put("/api/movies/1")
                        .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJSON));

        List<Movie> actual = movieRepository.getAllMovies();
        assertThat(actual, containsInAnyOrder(
                new Movie("1", "harry potter2", "www.harrypotter.com", "www.harrypotter.com", "2009"),
                new Movie("2", "harry potter2", "www.harrypotter2.com", "www.harrypotter2.com", "2007")));


    }
}