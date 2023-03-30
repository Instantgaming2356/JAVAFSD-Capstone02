import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/Interfaces/Movie';
import { MoviesService } from 'src/app/Services/movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Movie[] = [];
  
  constructor(private movieService: MoviesService, activatedRoute: ActivatedRoute) {
    let moviesObservable: Observable<Movie[]>;
    activatedRoute.params.subscribe((params) => {
    if (params['searchTerm'])
      moviesObservable = this.movieService.getAllMoviesBySearchTerm(params['searchTerm']);
    else if(params['tag'])
      moviesObservable = movieService.getAllMoviesByTag(params['tag'])
    else
      moviesObservable = movieService.getAll();
      //moviesObservable = movieService.getAll();
      
      moviesObservable.subscribe((serverMovies) => {
        this.movies = serverMovies;
      })
      //console.log(this.movies);
    });
  }

  ngOnInit(): void {
  }

}
