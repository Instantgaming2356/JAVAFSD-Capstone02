package com.backend.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.backend.backend.models.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

	// select * from movie where name = ?;
	public List<Movie> findByMovieName(String movieName);
	
	// Complex Queries.
    @Query("from Movie where tags=:tag")
    public List<Movie> findByMovieTag(@Param("tag") String tag);
	
}
