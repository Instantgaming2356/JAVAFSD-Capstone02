package com.backend.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.backend.exceptions.ResourceNotFound;
import com.backend.backend.models.Movie;
import com.backend.backend.repository.MovieRepository;



@Service
public class MovieServiceImpl implements IMovieService	{
	
	@Autowired
    private MovieRepository movieRepo;

	@Override
	public Movie insertMovieInDB(Movie movie) {
		return movieRepo.save(movie);
	}

	@Override
	public List<Movie> getAllMovies() {
		return movieRepo.findAll();
	}

	@Override
	public void updateMovieInDB(Movie movie, String movieId) throws ResourceNotFound {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteMovieInDB(String movieId) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Movie getMovieInDB(Long movieId) throws ResourceNotFound {
		 return movieRepo.findById(movieId).get();
	}

	@Override
	public List<Movie> findByMovieName(String movieName) {
		return movieRepo.findByMovieName(movieName);
	}

	@Override
	public List<Movie> findByMovieTag(String tag) {
		return movieRepo.findByMovieTag(tag); 
	}

}
