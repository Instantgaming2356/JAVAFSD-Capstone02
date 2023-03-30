import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_movie, sample_tags } from 'sample_data';
import { Movie } from '../Interfaces/Movie';
import { Tag } from '../Interfaces/Tag';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  getAll() : Observable<Movie[]>  {
    //return sample_movie;
    return this.httpClient.get<Movie[]>('http://localhost:8080/movie/getallmovies');
  }

  /*getMovieById(movieId : string): Movie  {
    return this.getAll().find(movie => movie.id == movieId) ?? new Movie();
  }

  getAllMovieBySearchTerm(searchTerm : String)  {
    return this.getAll().filter(movie => movie.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags(): Tag[]  {
    return sample_tags;
  }

  getAllMoviesByTag(tag: string) : Movie[]  {
    return tag == "All" ? this.getAll() : this.getAll().filter(movie => movie.tags?.includes(tag));
  }*/

  getAllMoviesBySearchTerm(searchTerm: string) {
    return this.httpClient.get<Movie[]>('http://localhost:8080/movie/getmoviebyname/' + searchTerm);
  }

  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllMoviesByTag(tag: string): Observable<Movie[]> {
    return tag == "All" ?
      this.getAll() :
      this.httpClient.get<Movie[]>('http://localhost:8080/movie/getmoviebytag/' + tag);
  }

  getMovieById(movieId: String):Observable<Movie>{
    return this.httpClient.get<Movie>('http://localhost:8080/movie/getmovie/' + movieId);
  }

}
