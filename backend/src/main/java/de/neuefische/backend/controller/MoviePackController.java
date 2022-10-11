package de.neuefische.backend.controller;

import de.neuefische.backend.model.MoviePack;
import de.neuefische.backend.model.MoviePackDTO;
import de.neuefische.backend.service.MoviePackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/moviepacks")
public class MoviePackController {

    private MoviePackService moviePackService;

    @Autowired
    public MoviePackController(MoviePackService moviePackService) {
        this.moviePackService = moviePackService;
    }

    @GetMapping
    public List<MoviePack> getAllPacks(){
        return moviePackService.getAllPacks();
    }

    @PostMapping
    public MoviePack addANewMoviePack(@RequestBody MoviePackDTO moviePack){
        return moviePackService.addANewMoviePack(moviePack);
    }

    @DeleteMapping("{id}")
    public void deleteAMoviePack(@PathVariable String id){
        moviePackService.deleteAMoviePack(id);
    }
}
