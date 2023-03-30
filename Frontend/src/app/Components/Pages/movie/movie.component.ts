import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/Interfaces/Movie';
import { BookingService } from 'src/app/Services/booking.service';
import { MoviesService } from 'src/app/Services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie!: Movie;

  constructor(activatedRoute: ActivatedRoute, movieService: MoviesService, private bookingService: BookingService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        //this.movie = movieService.getMovieById(params['id']);
        movieService.getMovieById(params['id']).subscribe(serverMovie => {
          this.movie = serverMovie;
        });
      }
    })
  }

  ngOnInit(): void {
  }

  payment() {
    //console.log(this.movie);
    this.bookingService.bookMovie(this.movie);
    this.router.navigateByUrl('/payment');
  }

}
