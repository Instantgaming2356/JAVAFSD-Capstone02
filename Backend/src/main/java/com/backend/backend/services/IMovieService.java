package com.backend.backend.services;

import java.util.List;

import com.backend.backend.exceptions.ResourceNotFound;
import com.backend.backend.models.Movie;



public interface IMovieService {
	
	public Movie insertMovieInDB(Movie movie);
    public List<Movie> getAllMovies();
    public void updateMovieInDB(Movie movie,String movieId) throws ResourceNotFound;
    public void deleteMovieInDB(String movieId);
    public Movie getMovieInDB(Long movieId) throws ResourceNotFound;

    // Customized Queries
    public List<Movie> findByMovieName(String movieName);
    public List<Movie> findByMovieTag(String tag);
    
}
