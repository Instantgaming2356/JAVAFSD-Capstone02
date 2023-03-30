package com.backend.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.backend.exceptions.ResourceNotFound;
import com.backend.backend.models.Movie;
import com.backend.backend.services.IMovieService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/movie")
public class MovieController {
	
	@Autowired
    private IMovieService movieService;
	
	@PostMapping("/insertmovie")
    public Movie insertMovie(@RequestBody Movie newMovie)	{
        return movieService.insertMovieInDB(newMovie);
    }

    @GetMapping("/getallmovies")
    public List<Movie> getAllMovies(){
        return movieService.getAllMovies();
    }

    @GetMapping("/getmovie/{movieid}")
    public Movie getProduct(@PathVariable("movieid") Long movieId) throws ResourceNotFound {
        return movieService.getMovieInDB(movieId);
    }
    
    @GetMapping("/getmoviebyname/{moviename}")
	public List<Movie> findByMovieName(@PathVariable("moviename") String movieName) {
		return movieService.findByMovieName(movieName);
	}
    
    @GetMapping("/getmoviebytag/{tag}")
	public List<Movie> findByMovieTag(@PathVariable("tag") String movieTag) {
		return movieService.findByMovieTag(movieTag);
	}
    
}
