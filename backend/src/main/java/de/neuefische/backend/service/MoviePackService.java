package de.neuefische.backend.service;

import de.neuefische.backend.model.Movie;
import de.neuefische.backend.model.MoviePack;
import de.neuefische.backend.model.MoviePackDTO;
import de.neuefische.backend.repo.MoviePackRepository;
import de.neuefische.backend.repo.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class MoviePackService {

    private MoviePackRepository moviePackRepository;
    private MovieRepository movieRepository;
    private IdService idService;

    @Autowired
    public MoviePackService(MoviePackRepository moviePackRepository,
    MovieRepository movieRepository,
    IdService idService) {
        this.moviePackRepository = moviePackRepository;
        this.movieRepository = movieRepository;
        this.idService=idService;

    }

    public List<MoviePack> getAllPacks() {
        return moviePackRepository.findAll();
    }

    public MoviePack addANewMoviePack(MoviePackDTO moviePack) {
        MoviePack newMoviePack = MoviePack.builder()
                .id(idService.generateId())
                .name(moviePack.getName())
                .movieCardsInAPack(defineAPack())
                .build();
        return moviePackRepository.save(newMoviePack);
    }

    public List<Movie> defineAPack() {
        List<Movie> allMovies = movieRepository.findAll();
        Random rand = new Random();

        // create a temporary list for storing
        // selected element
        List<Movie> newList = new ArrayList<>();
        for (int i = 0; i < 3; i++) {

            // take a random index between 0 to size
            // of given List
            int randomIndex = rand.nextInt(allMovies.size());

            // add element in temporary list
            newList.add(allMovies.get(randomIndex));
        }
        return newList;
    }

    public void deleteAMoviePack(String id) {
        moviePackRepository.deleteById(id);
    }
}
