import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Interfaces/Movie';
import { BookingService } from 'src/app/Services/booking.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  movie!: Movie;
  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.movie = this.bookingService.getMovie();
    console.log(this.movie);
  }

}
