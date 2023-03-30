import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from '../Interfaces/Movie';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private movie: Movie = new Movie();
  private movieSubject: BehaviorSubject<Movie> = new BehaviorSubject(this.movie);

  constructor() { }

  bookMovie(movie: Movie) {
    this.movie = movie;
    this.movieSubject.next(this.movie);
  }

  getMovieObservable(): Observable<Movie> {
    return this.movieSubject.asObservable();
  }

  getMovie(): Movie {
    return this.movieSubject.value;
  }

}
